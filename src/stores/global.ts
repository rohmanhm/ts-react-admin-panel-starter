import { observable, action } from 'mobx'

export class GlobalStore {
  @observable
  public isFetching = false

  // region isFetching actions
  @action
  public startFetching () {
    this.isFetching = true
  }

  @action
  public stopFetching () {
    this.isFetching = false
  }
  // endregion
}

export default new GlobalStore()
