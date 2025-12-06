// 인증 관련 API
import { fetchText, post, setAccessToken, removeAccessToken } from './client'


export interface RegisterRequest {
  email: string;
  password: string;
  nickname: string;
  gender: string;
  address: string;
  height: number;
  position: string;
  subPosition?: string;
  playStyle?: string;
  skillLevel?: string;
  statusMsg?: string;
}


export interface SignupResponse {
  id: number;
  email: string;
  nickname: string;
  gender: string;
  address: string;
  height: number;
  position: string;
  subPosition?: string;
  playStyle?: string;
  skillLevel?: string;
  cardSkin?: string;
  statusMsg?: string;
  createdAt: string;
}

export const authService = {
  // 이메일 인증코드 요청
  requestEmailVerification: async (email: string): Promise<string> => {
    return fetchText('/email/verify/request', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
  },

  // 이메일 인증코드 확인
  confirmEmailVerification: async (
    email: string,
    code: string
  ): Promise<string> => {
    return fetchText('/email/verify/confirm', {
      method: 'POST',
      body: JSON.stringify({ email, code }),
    })
  },


  // 회원가입 (실제 사용))
  signup: async (data: RegisterRequest): Promise<SignupResponse> => {
    return post<SignupResponse>('/api/auth/signup', data)
  },

  // 로그아웃
  logout: (): void => {
    removeAccessToken()
    // localStorage의 다른 데이터도 필요시 정리
  },
}
