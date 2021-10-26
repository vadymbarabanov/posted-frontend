import { VALID_EMAIL, VALID_USERNAME } from './patterns'

type MinMaxMessageCallback = (len: number) => string

class Validation {
  required = {
    value: true,
    message: 'This field is required',
  } as const

  pattern = {
    email: {
      value: VALID_EMAIL,
      message: 'Email is invalid',
    },
    username: {
      value: VALID_USERNAME,
      message: 'Only latin characters, numbers and underscores are allowed',
    },
  } as const

  minLength(
    len: number,
    messageCallback: MinMaxMessageCallback = this.defaultMinMessage
  ) {
    return {
      value: len,
      message: messageCallback(len),
    }
  }

  maxLength(
    len: number,
    messageCallback: MinMaxMessageCallback = this.defaultMaxMessage
  ) {
    return {
      value: len,
      message: messageCallback(len),
    }
  }

  private defaultMaxMessage(len: number) {
    return `This field shouldn't be more than ${len} characters`
  }

  private defaultMinMessage(len: number) {
    return `This field should be at least ${len} characters`
  }
}

export default new Validation()
