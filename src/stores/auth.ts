import { observable, action, reaction, computed } from 'mobx'
// Stores
import { GlobalStore } from './global'
// Actions
import * as AuthActions from '~/actions/auth'
// Helpers
import {
  saveAuthentication,
  readAuthentication,
  removeAuthentication
} from '../helpers/auth'
// Types
import { IUserModel } from '~/types/user'

export class AuthStore extends GlobalStore {
  @observable
  public user: IUserModel

  @observable
  public token = readAuthentication()

  constructor () {
    super()

    reaction(
      () => this.token,
      token => {
        if (token) {
          saveAuthentication(token)
        } else {
          removeAuthentication()
        }
      }
    )
  }

  // region user
  @action
  public login (email: string, password: string) {
    return new Promise((resolve, reject) => {
      AuthActions.login(email, password)
        .then(result => {
          saveAuthentication(result.data.Authorization)

          resolve(result)
        })
        .catch(reject)
    })
  }

  @action
  public setUser (user: IUserModel) {
    this.user = user
  }

  @computed
  public get profile () {
    return new Promise((resolve, reject) => {
      if (!this.token) reject(new Error('Not Authenticated'))

      AuthActions.getProfile(this.token)
        .then(resolve)
        .catch(reject)
    })
  }

  // endregion user
}

export default new AuthStore()
