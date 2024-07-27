import type { RegisterOptions } from 'react-hook-form'

type Rules = { [key in 'email' | 'password']?: RegisterOptions }

export const rules: Rules = {
  email: {
    required: {
      value: true,
      message: 'Bạn chưa nhập email'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email sai định dạng'
    },
    minLength: {
      value: 5,
      message: 'Email phải có độ dài từ 5 đến 160 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Email phải có độ dài từ 5 đến 160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Bạn chưa nhập mật khẩu'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu phải có từ 6 đến 100 ký tự'
    },
    maxLength: {
      value: 100,
      message: 'Mật khẩu phải có từ 6 đến 100 ký tự'
    }
  }
}
