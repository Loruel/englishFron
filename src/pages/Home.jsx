import React from 'react'
import { Link } from 'react-router-dom'
import { englishFunction } from '../context/Context'

export default function Home() {
  const { user } = englishFunction()

  return (
    <div className='w-full pl-10 pr-10 pt-5'>

      <div className='w-full flex space-x-10'>


        <div className='w-5/12 p-4 flex rounded-md border border-xustomBlue shadow-xustomBlue shadow-lg'>
          <div className='w-3/6 flex justify-center items-center'>
            <Link
              to={'/profile'}
              className='ml-6'>
              <figure className='bg-yellow-300 w-36 h-36 rounded-full overflow-hidden flex'>
                <img
                  className='object-cover'
                  src="/profileDefaultBoy.png" alt="" />
              </figure>
            </Link>
          </div>
          <div className='w-4/6 flex flex-col justify-center items-center'>
            <p>
              {user?.first_name}
            </p>
            <p>
              {user?.last_name}
            </p>
            <p className='mt-2'>
              Matricula:
            </p>
            <p>
              {user?.registration_number}
            </p>
            <div className='mt-2 w-full'>
              <Link
                className='w-full flex justify-center'
                to={'/editprofile'}>
                <button className='font-semibold text-white bg-red-600 rounded-lg w-1/2'>
                  Edit profile
                </button>
              </Link>
            </div>
          </div>

        </div>


        <div className='w-4/12 p-4 flex rounded-md border border-xustomBlue shadow-xustomBlue shadow-lg'>
          <div className='w-4/6 flex flex-col justify-center items-center'>
            <p>
              Level:
            </p>
            <p>
              {user?.level}
            </p>
            <p className='mt-4'>
              Module:
            </p>
            <p>
              {user?.block}
            </p>

          </div>
          <div className='w-3/6 flex justify-center items-center mr-5'>
            <Link to={'/level'}>
              <figure className='border-green-400 border-8 w-32 h-32 rounded-full overflow-hidden flex'>
              </figure>
            </Link>
          </div>
        </div>


        <div className='w-3/12 p-4 flex rounded-md border border-xustomBlue shadow-xustomBlue shadow-lg'>
          <div className='w-full flex flex-col justify-center'>
            <p>
              Payment status:
              <span className='ml-2'>
                Pending
              </span>
            </p>
            <p className='mb-4'>
              Payment deadline:
              <span className='ml-2'>
                06/01/2026
              </span>
            </p>
            <Link
              to={'/pay'}
              className='w-full flex justify-center'>
              <button className='bg-green-600 w-3/6 p-2 rounded-md text-white font-semibold'>
                Pay now
              </button>
            </Link>

          </div>
        </div>

      </div>

      <div className='mt-5 w-full flex space-x-10'>

        <div className='w-10/12 p-5 flex rounded-md border border-xustomBlue shadow-xustomBlue shadow-lg'>
          <p className='font-semibold'>
            Today's lesson,
            <span className='ml-2'>
              01/01/2025:
            </span>
          </p>
          <Link to={'/classtoday'}>
            <p className='ml-6'>
              "English Foundations: Step into Conversations"
            </p>
          </Link>

        </div>

        <a
          className='w-3/12'
          href='https://fundaciondevalores-org.zoom.us/j/91427801331?pwd=cW8zallGc0hmVll2S20zRHQrdmN4QT09#success'
          target="_blank" rel="noopener noreferrer">
          <button className='w-full h-full flex justify-center items-center rounded-md border border-xustomZoom bg-xustomZoom shadow-xustomBlue shadow-lg'>
            <figure className=''>
              <svg className='-ml-3' width="50px" height="50px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 11.6C2 8.23969 2 6.55953 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C6.55953 2 8.23969 2 11.6 2H20.4C23.7603 2 25.4405 2 26.7239 2.65396C27.8529 3.2292 28.7708 4.14708 29.346 5.27606C30 6.55953 30 8.23969 30 11.6V20.4C30 23.7603 30 25.4405 29.346 26.7239C28.7708 27.8529 27.8529 28.7708 26.7239 29.346C25.4405 30 23.7603 30 20.4 30H11.6C8.23969 30 6.55953 30 5.27606 29.346C4.14708 28.7708 3.2292 27.8529 2.65396 26.7239C2 25.4405 2 23.7603 2 20.4V11.6Z" fill="#4087FC"></path> <path d="M8.26667 10C7.56711 10 7 10.6396 7 11.4286V18.3571C7 20.369 8.44612 22 10.23 22L17.7333 21.9286C18.4329 21.9286 19 21.289 19 20.5V13.5C19 11.4881 17.2839 10 15.5 10L8.26667 10Z" fill="white"></path> <path d="M20.7122 12.7276C20.2596 13.1752 20 13.8211 20 14.5V17.3993C20 18.0782 20.2596 18.7242 20.7122 19.1717L23.5288 21.6525C24.1019 22.2191 25 21.7601 25 20.9005V11.1352C25 10.2755 24.1019 9.81654 23.5288 10.3832L20.7122 12.7276Z" fill="white"></path> </g></svg>
            </figure>
            <p className='text-white font-semibold'>
              Virtual class
            </p>
          </button>
        </a>

      </div>

      <div className='mt-5 w-full flex space-x-10 mb-5'>

        <div className='w-7/12 p-5 flex flex-col items-center rounded-md border border-xustomBlue shadow-xustomBlue shadow-lg'>

        </div>

        <div className='w-5/12 p-5 flex flex-col items-center rounded-md border border-xustomBlue shadow-xustomBlue shadow-lg'>
          <h1 className='w-full text-center text-xl'>
            Notices
          </h1>
          <div className='flex items-center'>
            <div className='w-2/12 flex justify-center'>
              <button className='bg-xustomBlue rounded-full w-12 h-12 flex justify-center items-center'>
                <img
                  src="/izquierda.svg" alt="" />
              </button>
            </div>
            <figure className='w-8/12'>
              <img src="/aviso2.jpg" alt="" />
            </figure>
            <div className='w-2/12 flex justify-center'>
              <button className='bg-xustomBlue rounded-full w-12 h-12 flex justify-center items-center'>
                <img src="/derecha.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}
