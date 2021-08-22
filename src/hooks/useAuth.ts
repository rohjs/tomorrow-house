import axios, { AxiosResponse } from 'axios'
import qs from 'qs'
import store from 'store'

import { useAppDispatch } from '.'
import { useRouter } from './useRouter'
import { setAccessToken, setUser } from 'src/app/auth'

export const useAuth = () => {
  const dispatch = useAppDispatch()

  const { history, location } = useRouter()

  const requestLogin = () => {
    const { pathname } = location
    store.set('tmrHouse.redirectUrl', pathname)

    window.Kakao.Auth.authorize({
      redirectUri: process.env.REACT_APP_KAKAO_OAUTH_REDIRECT_URI,
      scope: 'profile_nickname,	profile_image,account_email',
    })
  }

  const postLogin = (
    code: string,
    onSuccess?: () => void,
    onFail?: () => void
  ) => {
    const url = `${process.env.REACT_APP_KAKAO_AUTH_HOSTNAME}/oauth/token`
    const data: KakaoOAuthTokenRequest = {
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_KAKAO_REST_API_KEY as string,
      redirect_uri: process.env.REACT_APP_KAKAO_OAUTH_REDIRECT_URI as string,
      code,
      client_secret: process.env.REACT_APP_KAKAO_CLIENT_SECRET as string,
    }
    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    }

    axios
      .post(url, qs.stringify(data), config)
      .then((res: AxiosResponse<KakaoOAuthTokenResponse>) => {
        if (!res?.data) return
        const { access_token: token } = res.data
        dispatch(setAccessToken(token))
        window.Kakao.Auth.setAccessToken(token)
        getMe(onSuccess, onFail)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getMe = (onSuccess?: () => void, onFail?: () => void) => {
    window.Kakao.API.request({
      url: '/v2/user/me',
      success: function (response: KakaoUserResponse) {
        const kakaoProfile = response.kakao_account.profile
        dispatch(
          setUser({
            id: response.id,
            username: kakaoProfile.nickname,
            userImage: kakaoProfile.profile_image_url,
          })
        )
        if (onSuccess) onSuccess()
      },
      fail: function (error: any) {
        history.push('/')
        if (onFail) onFail()
      },
    })
  }

  return {
    requestLogin,
    postLogin,
    getMe,
  } as const
}
