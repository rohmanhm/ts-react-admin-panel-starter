import AuthStore from './auth'
import AppStore from './app'

export interface IRootStore {
  AuthStore?: typeof AuthStore
  AppStore?: typeof AppStore
}

export type TRootStoreKeys = keyof IRootStore

export default {
  AuthStore,
  AppStore
}
