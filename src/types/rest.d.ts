declare interface KakaoOAuthTokenRequest {
  grant_type: 'authorization_code'
  client_id: string
  redirect_uri: string
  code: string
  client_secret: string
}

declare interface KakaoOAuthTokenResponse {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in: number
  scope: string
  refresh_token_expires_in: number
}

declare interface KakaoUserResponse {
  connected_at: string
  id: number
  kakao_account: KakaoAccount
}

declare interface KakaoAccount {
  email: string
  email_needs_agreement: boolean
  has_email: boolean
  is_email_valid: boolean
  is_email_verified: boolean
  profile: KakaoProfile
  profile_image_needs_agreement: boolean
  profile_nickname_needs_agreement: boolean
}

declare interface KakaoProfile {
  nickname: string
  thumbnail_image_url: string
  profile_image_url: string
  is_default_image: false
}
