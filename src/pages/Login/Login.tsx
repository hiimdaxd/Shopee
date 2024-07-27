import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-shopee_orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm'>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm'
                  placeholder='Email'
                ></input>
                <div className='mt-2 text-red-600 min-h-[1rem] text-sm'></div>
                <div className='mt-3'>
                  <input
                    type='password'
                    name='password'
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm'
                    placeholder='Password'
                  ></input>
                </div>
                <div className='mt-2 text-red-600 min-h-[1rem] text-sm'></div>
                <div className='mt-3'>
                  <button
                    type='submit'
                    className='w-full text-center py-4 px-2 bg-red-500 text-white text-sm hover:bg-red-600'
                  >
                    ĐĂNG NHẬP
                  </button>
                </div>
                <div className='mt-4 text-center text-gray-400'>
                  {' '}
                  Bạn mới biết đến Shopee?
                  <Link to='/register'>
                    <span className='text-shopee_orange'> Đăng ký</span>
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
