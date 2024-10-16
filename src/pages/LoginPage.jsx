import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className='h-screen flex justify-center items-center relative'>
      <img src="/login.png" alt=""
        className='absolute inset-0 w-full h-full object-cover z-0' />
      <div className='w-1/4 h-full flex flex-col justify-center'>
        <div className='border border-white rounded-lg p-4 h-4/6 relative z-10 bg-white bg-opacity-95 shadow-black shadow-lg'>
          <h1 className='text-center relative font-bold  text-3xl'>
            WELCOME
          </h1>
          <p className='text-center font-semibold text-xl mb-4'>
            Virtual Campus
          </p>
          <form action=""
            className='p-3'>
            <label htmlFor="">
              <p className='mb-1 ml-2'>
                User
              </p>
              <input type="text"
                className='border border-black w-full p-1 pl-2 rounded-md' />
            </label>
            <label htmlFor="">
              <p className='mt-4 mb-1 ml-2'>
                Password
              </p>
              <input type="text"
                className='border border-black w-full p-1 pl-2 rounded-md' />
            </label>
            <div className='flex justify-center items-center p-6'>
              <Link
                to={'/home'}
                className='w-full flex justify-center items-center'>
                <button className='bg-green-500 w-3/6 h-10 rounded-md text-white'>
                  Login
                </button>
              </Link>
            </div>
          </form>
          <div className='flex flex-col justify-center items-center w-full h-1/6'>
            <p className='border-t border-black w-11/12'>
            </p>
            <p className='text-center text-xs mt-4 cursor-pointer'>
              I forgot my password
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
