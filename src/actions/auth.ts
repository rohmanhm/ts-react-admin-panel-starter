import { AxiosError } from 'axios'
// Services
import { API, IResponse } from '~/services/ExecAxios'
// Stores
import AuthStore from '~/stores/auth'
// Types
import { IUserModel } from '~/types/user'

// region login stuff
interface ILoginDataResponse {
  Authorization: string
}
interface ILoginErrorsResponse {
  email?: string[]
  password?: string[]
}
export type TLoginResponse = IResponse<
  ILoginDataResponse,
  ILoginErrorsResponse
>
export async function login (
  email: string,
  password: string
): Promise<TLoginResponse> {
  try {
    const data = {
      email,
      password
    }

    AuthStore.startFetching()
    const result = await API.post<IResponse<ILoginDataResponse>>(
      '/login',
      data
    )

    if (result.data && result.data.status) {
      return result.data
    }
  } catch (err) {
    const error = err as AxiosError
    if (error.response) {
      throw error.response.data
    }

    throw error
  } finally {
    AuthStore.stopFetching()
  }
}
// endregion

// region get profile
export interface IProfileDataResponse extends IUserModel {}
export interface IProfileErrorsResponse {}
export type TProfileResponse = IResponse<
  IProfileDataResponse,
  IProfileErrorsResponse
>
export async function getProfile (
  userToken?: string
): Promise<TProfileResponse> {
  try {
    const token = userToken || AuthStore.token
    const config = { headers: { Authorization: token } }

    AuthStore.startFetching()
    const result = await API.get<IResponse<IProfileDataResponse>>(
      '/member/profile',
      config
    )

    if (result.data && result.data.status) {
      AuthStore.setUser(result.data.data)

      return result.data
    }
  } catch (err) {
    const error = err as AxiosError
    if (error.response) {
      throw error.response.data
    }

    throw error
  } finally {
    AuthStore.stopFetching()
  }
}
// endregion
