import { AxiosError } from 'axios'
// Stores
import Store from './store'
// Services
import { API, IResponse } from '~/services/ExecAxios'
// Helpers
import { readAuthentication } from '~/helpers'
// Types
import { IUserModel } from '~/types/user'

// region get all members
export interface IProfileDataResponse extends IUserModel {}
export interface IProfileErrorsResponse {}
export type TProfileResponse = IResponse<
  IProfileDataResponse,
  IProfileErrorsResponse
>
export async function getMembers (): Promise<TProfileResponse> {
  try {
    const token = readAuthentication()
    const config = { headers: { Authorization: token } }

    Store.startFetching()
    const result = await API.get<IResponse<IProfileDataResponse>>(
      '/member/wow',
      config
    )

    if (result.data && result.data.status) {
      Store.stopFetching()

      Store.setData(result.data.data)

      return result.data
    }
  } catch (err) {
    const error = err as AxiosError
    if (error.response) {
      throw error.response.data
    }

    throw error
  } finally {
    Store.stopFetching()
  }
}
// endregion
