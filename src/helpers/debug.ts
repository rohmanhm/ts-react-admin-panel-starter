import * as DebugFn from 'debug'
import { IS_DEV } from './env'

DebugFn.enable('APP:*')

if (!IS_DEV) {
  DebugFn.disable()
}

export const Debug = (title: string) => {
  return DebugFn(`APP:${title}`)
}
