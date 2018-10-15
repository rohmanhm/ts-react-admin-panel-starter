import { Document, PaginateResult } from 'mongoose'
import { IStatusConstantID } from './index'
import { IUserModel } from './user'

export interface IECash {
  invoice: string
  amount: number
  netAmount: number
  description: string
  generatedDate: string
  expiredDate: string
  statusConstantId: IStatusConstantID
  generatedBy: IUserModel
  paidDate: string
}

export interface IECashModel extends IECash, Document {}

export interface IECashModelPaginate extends PaginateResult<IECashModel> {}
