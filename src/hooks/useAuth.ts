import axios, { AxiosResponse } from 'axios'
import qs from 'qs'
import store from 'store'

import { useAppDispatch } from '.'
import { useRouter } from './useRouter'
import { resetAuth, setAccessToken, setUser } from 'src/app/auth'

export const useAuth = () => {
  const dispatch = useAppDispatch()

  const { history, location } = useRouter()

  const requestLogIn = () => {
    const { pathname } = location
    store.set('tmrHouse.redirectUrl', pathname)

    window.Kakao.Auth.authorize({
      redirectUri: process.env.REACT_APP_KAKAO_OAUTH_REDIRECT_URI,
      scope: 'profile_nickname,	profile_image,account_email',
    })
  }

  const postLogIn = (
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
        console.log(err) // TODO: Handle Error Alert
      })
  }

  const requestLogOut = () => {
    window.Kakao.Auth.logout(() => {
      dispatch(resetAuth())
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
            email: response.kakao_account.email,
            username: kakaoProfile.nickname,
            profileImageUrl: kakaoProfile.profile_image_url,
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
    requestLogIn,
    requestLogOut,
    postLogIn,
    getMe,
  } as const
}
