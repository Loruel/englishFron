import React, { useState } from 'react'
import { englishFunction } from '../context/Context'

export default function LoginPage() {
  const { loginMutation } = englishFunction()
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = async e => {
    e.preventDefault()
    setErrorMessage('')
    const data = {
      registration_number: e.target.username.value,
      password: e.target.password.value
    }
    loginMutation.mutate(data, {
      onError: (error) => {
        setErrorMessage(error.response?.data?.message || 'User or password not found')
      }
    })
  }

  return (
    <div className='h-screen flex justify-center items-center relative'>
      <img src="/login2.png" alt=""
        className='absolute inset-0 w-full h-full object-cover z-0' />
      <div className='lg:w-1/4 h-full flex items-center'>
        <div className='border border-white rounded-lg p-4 h-5/6 w-full relative z-10 bg-xustomBlue text-white shadow-black shadow-lg'>
          <h1 className='text-center relative font-bold text-2xl lg:text-3xl'>
            WELCOME
          </h1>
          <p className='text-center font-semibold text-xl mb-2'>
            Virtual Campus
          </p>
          <figure className='w-full flex justify-center items-center'>
            <img 
            className='w-20'
            src="/logo.png" alt="" />
          </figure>
          <form
            onSubmit={handleLogin}
            action=""
            className='p-3'>
            <label htmlFor="">
              <p className='mb-1 ml-2'>
                User
              </p>
              <input type="text" name='username' id='username'
                className='border-black w-full p-1 pl-2 rounded-md text-black' />
            </label>
            <label htmlFor="">
              <p className='mt-4 mb-1 ml-2'>
                Password
              </p>
              <input type="password" name='password' id='password'
                className='border border-black w-full p-1 pl-2 rounded-md text-black' />
            </label>

            {errorMessage && (
              <p className='text-red-500 text-sm text-center mt-2'>{errorMessage}</p>
            )}

            <div className='flex justify-center items-center p-4 lg:mb-8'>
              <button className='bg-green-500 w-3/6 h-10 lg:mt-3 rounded-md text-white'>
                Login
              </button>
            </div>
          </form>
          <div className='flex flex-col justify-center items-center w-full h-1/6 -mt-4 lg:-mt-12'>
            <p className='border-t border-white w-11/12'>
            </p>
            <p className='text-center text-xs mt-2 lg:mt-1 cursor-pointer'>
              I forgot my password
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
