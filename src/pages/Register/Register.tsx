import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { rules } from 'src/utils/rule'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    console.log('data: ', data)
  })

  return (
    <div className='bg-shopee_orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form onSubmit={onSubmit} className='p-10 rounded bg-white shadow-sm' noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm'
                  placeholder='Email'
                  {...register('email', rules.email)}
                ></input>
                <div className='mt-2 text-red-600 min-h-[1.25rem] text-sm'>{errors.email?.message}</div>
                <div className='mt-3'>
                  <input
                    type='password'
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm'
                    placeholder='Password'
                    {...register('password')}
                  ></input>
                </div>
                <div className='mt-2 text-red-600 min-h-[1.25rem] text-sm'></div>
                <div className='mt-3'>
                  <input
                    type='confirm-password'
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm'
                    placeholder='Confirm Password'
                    {...register('confirm_password')}
                  ></input>
                </div>
                <div className='mt-2 text-red-600 min-h-[1.25rem] text-sm'></div>
                <div className='mt-3'>
                  <button 
                    onSubmit={onSubmit}
                    className='w-full text-center py-4 px-2 bg-red-500 text-white text-sm hover:bg-red-600'>
                    ĐĂNG KÝ
                  </button>
                </div>
                <div className='mt-4 text-center text-gray-400'>
                  {' '}
                  Bạn đã có tài khoản?
                  <Link to='/register'>
                    <span className='text-shopee_orange'> Đăng nhập</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
