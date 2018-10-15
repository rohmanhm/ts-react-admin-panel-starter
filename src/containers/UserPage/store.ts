import { observable, action } from 'mobx'
// Store
import { GlobalStore } from '~/stores/global'
// Types
import { IUserModel } from '~/types/user'
import { Optional } from '~/types'

export class UserStore extends GlobalStore {
  @observable
  public data: Optional<IUserModel>

  // region data
  @action
  public setData (data: Optional<IUserModel>) {
    this.data = {
      ...this.data,
      ...data
    }
  }
  // endregion
}
