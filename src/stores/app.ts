import { observable } from 'mobx'

export class AppStore {
  @observable
  public appName = process.env.REACT_APP_NAME
}

export default new AppStore()
