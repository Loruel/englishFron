import React from 'react'
import { Link } from 'react-router-dom'
import { englishFunction } from '../context/Context'

export default function Profile() {
  const { user } = englishFunction()

  return (
    <div className='pl-4 pr-4 pt-2 mb-5 w-full '>
      <div className='bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col rounded-lg shadow-md shadow-black lg:grid lg:grid-cols-3'>

        <div className='flex flex-col justify-center'>

          <p className='font-bold text-2xl mb-2'>
            Profile
          </p>

          <div className='flex justify-center items-center'>
            <figure className='rounded-full overflow-hidden flex w-40 h-40 mt-2 bg-yellow-200'>
              <img
                className='object-cover'
                src="/profileDefaultBoy.png" alt="" />
            </figure>
          </div>

          <Link
            to={'/editprofile'}
            className='h-full mt-2'>
            <div className='w-full h-full flex justify-center items-end'>
              <button className='bg-emerald-700 w-1/2 h-1/6 rounded-lg text-white font-semibold mb-6 lg:h-10'>
                Edit profile
              </button>
            </div>
          </Link>
        </div>

        <div className='h-full p-1 flex lg:col-span-2'>

          <div className='w-2/6 text-base flex flex-col gap-y-1 lg:gap-y-3 lg:w-1/6 lg:text-lg'>
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
            <p className='flex justify-end items-center'>
              Password:
            </p>
          </div>

          <div className='text-base flex flex-col gap-y-1 lg:gap-y-3 lg:text-lg'>
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
            <p className='flex justify-start ml-2 items-center'>
              {user?.email}
            </p>
            <p className='flex justify-start ml-2 items-center'>
              {user?.phone}
            </p>
            <p className='flex justify-start ml-2 items-center'>
              ************
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}
