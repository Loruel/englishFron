import React, { useState } from 'react'
import { englishFunction } from '../context/Context'

export default function EditProfile() {
  const { user, updateProfileMutation } = englishFunction()

  const [email, setEmail] = useState(user?.email || '')
  const [phone, setPhonel] = useState(user?.phone || '')
  const [password, setPassword] = useState(user?.password || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('authToken')

    updateProfileMutation.mutate({
      token,
      userData: { email, phone, password }
    })
  }

  return (
    <div className='pl-4 pr-4 pt-2 mb-5 w-full'>
      <div className='bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col rounded-lg shadow-md shadow-black lg:grid lg:grid-cols-3'>

        <div className='relative flex flex-col justify-center'>
          <div className='relative flex justify-center items-center'>
            <figure className='rounded-full overflow-hidden flex w-40 h-40 mt-2 bg-yellow-200'>
              <img
                className='object-cover'
                src="/profileDefaultBoy.png" alt="" />
            </figure>
          </div>
          <figure className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 bg-black opacity-60 rounded-full w-40 h-40 flex justify-center items-center'>
            <img src="/addphoto.svg" alt="" />
          </figure>
        </div>

        <div className='h-full p-1 flex lg:col-span-2'>

          <div className='w-2/6 text-base flex flex-col gap-y-1'>
            <p className='flex justify-end items-center'>
              Name:
            </p>
            <p className='flex justify-end items-center'>
              Last:
            </p>
            <p className='flex justify-end items-center'>
              Matricula:
            </p>
            <p className='flex justify-end items-center'>
              Nivel:
            </p>
            <p className='flex justify-end items-center'>
              Teacher:
            </p>
            <p className='flex justify-end items-center'>
              Mail:
            </p>
            <p className='flex justify-end items-center'>
              Phone:
            </p>
            <p className='flex justify-end items-center text-sm mt-1'>
              New Password:
            </p>
            <p className='flex justify-end items-center text-sm mt-1'>
              New Password:
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className='text-base flex flex-col gap-y-1'>
            <p className='flex justify-start ml-2 items-center'>
              {user?.first_name}
            </p>
            <p className='flex justify-start ml-2 items-center'>
              {user?.last_name}
            </p>
            <p className='flex justify-start ml-2 items-center'>
              {user?.registration_number}
            </p>
            <p className='flex justify-start ml-2 items-center'>
              {user?.level}
            </p>
            <p className='flex justify-start ml-2 items-center'>
              {user?.teacher}
            </p>
            <input
              className='ml-2 w-11/12 h-6 border-gray-300 border rounded-md text-sm p-1'
              type="text"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              } />
            <input
              className='ml-2 w-11/12 h-6 border-gray-300 border rounded-md text-sm p-1'
              type="text"
              value={phone}
              onChange={(e) =>
                setPhonel(e.target.value)
              } />
            <input
              className='ml-2 w-11/12 h-6 border-gray-300 border rounded-md text-sm p-1'
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              } />
            <input
              className='ml-2 w-11/12 h-6 border-gray-300 border rounded-md text-sm p-1'
              type="password" />

            <div className='w-full h-full flex justify-center items-end mt-5'>
              <button className='bg-green-600 w-full rounded-lg text-white font-semibold mb-6'>
                Save
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  )
}
