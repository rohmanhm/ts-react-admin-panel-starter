function formatMessages (messages: string[] | string) {
  if (typeof messages === 'object') {
    return messages.reduce((prevMsg, currMsg) => {
      return `${prevMsg} & ${currMsg}`
    })
  }

  return messages
}

export function createAttrsErrors (message: string[] | string) {
  if (message) {
    return {
      validateStatus: 'error',
      help: formatMessages(message),
      hasFeedback: true
    }
  }

  return {}
}

export function createAttrsSuccess (isSuccess: boolean) {
  if (isSuccess) {
    return {
      validateStatus: 'success',
      hasFeedback: true
    }
  }

  return {}
}

export function createAttrsValidating (isProcessing: boolean, help = '') {
  if (isProcessing) {
    return {
      validateStatus: 'validating',
      hasFeedback: true,
      help
    }
  }

  return {}
}
