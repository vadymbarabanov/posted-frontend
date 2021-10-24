type MinMaxMessageCallback = (len: number) => string

class Validation {
  RULE = {
    REQUIRED: {
      value: true,
      message: 'This field is required',
    },
  } as const

  FOR = {
    PASSWORD: {
      required: this.RULE.REQUIRED,
      minLength: this.minLength(5),
    },
  }

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
