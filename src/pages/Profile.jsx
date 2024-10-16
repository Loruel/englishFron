import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='pl-10 pr-10 pt-5 pb-5 w-full flex'>


      <div className='w-3/12 h-full flex flex-col justify-center'>
        <div className='flex justify-center items-center'>
          <figure className='rounded-full overflow-hidden flex w-52 h-52 mt-2 bg-yellow-200'>
            <img
              className='object-cover'
              src="/profileDefaultBoy.png" alt="" />
          </figure>
        </div>

        <Link 
        to={'/editprofile'}
        className='h-full'>
          <div className='w-full h-full flex justify-center items-end'>
            <button className='bg-red-600 w-1/2 h-1/6 rounded-lg text-white font-semibold mb-6'>
              Edit profile
            </button>
          </div>
        </Link> 
      </div>

      <div className='w-9/12 h-full p-2 pl-10 border-black border-l flex'>

        <div className='w-3/12 text-xl'>
          <p className='h-16 flex justify-end items-center'>
            Name:
          </p>
          <p className='h-16 flex justify-end items-center'>
            Last Name:
          </p>
          <p className='h-16 flex justify-end items-center'>
            Matricula:
          </p>
          <p className='h-16 flex justify-end items-center'>
            Nivel:
          </p>
          <p className='h-16 flex justify-end items-center'>
            Teacher:
          </p>
          <p className='h-16 flex justify-end items-center'>
            Mail:
          </p>
          <p className='h-16 flex justify-end items-center'>
            Phone:
          </p>
          <p className='h-16 flex justify-end items-center'>
            Password:
          </p>



        </div>

        <div className='w-9/12 text-xl'>
          <div>
            <p className='h-16 flex justify-start ml-4 items-center'>
              Francisco Manuel
            </p>
            <p className='h-16 flex justify-start ml-4 items-center'>
              Vazquez Luna
            </p>
            <p className='h-16 flex justify-start ml-4 items-center'>
              CF0000000001
            </p>
            <p className='h-16 flex justify-start ml-4 items-center'>
              A1
            </p>
            <p className='h-16 flex justify-start ml-4 items-center'>
              Cecilia Pacheco
            </p>
            <p className='h-16 flex justify-start ml-4 items-center'>
              francisco@mail.com
            </p>
            <p className='h-16 flex justify-start ml-4 items-center'>
              5511223344
            </p>
            <p className='h-16 flex justify-start ml-4 items-center'>
              ************
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}
