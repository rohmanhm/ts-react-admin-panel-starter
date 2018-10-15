import Axios from 'axios'

export interface IResponse<TData, TErrors = object> {
  status: boolean
  message: string
  errors?: TErrors
  data: TData
}

export const API = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
})
