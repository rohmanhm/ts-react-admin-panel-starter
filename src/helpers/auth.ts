/**
 * This helpers contains all authentication stores
 */

import * as Cookie from 'js-cookie'

const KEY = 'token'

export const saveAuthentication = (token: string) => {
  Cookie.set(KEY, token)
}

export const readAuthentication = () => {
  return Cookie.get(KEY)
}

export const removeAuthentication = () => {
  return Cookie.remove(KEY)
}
