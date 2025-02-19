import React from 'react'
import { Link } from 'react-router-dom'
import { englishFunction } from '../context/Context'

export default function Profile() {
  const { user, language } = englishFunction()

  return (
    <div className='pl-4 pr-4 pt-2 mb-5 w-full '>
      <div className='bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col rounded-lg shadow-md shadow-black lg:grid lg:grid-cols-3'>

        <div className='flex flex-col justify-center'>

          <p className='font-bold text-2xl mb-2'>
            {language === 'en' ? 'Profile' : 'Perfil'}
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
                {language === 'en' ? 'Edit profile' : 'Editar perfil'}
              </button>
            </div>
          </Link>
        </div>

        <div className='h-full p-1 flex flex-col'>

          <div className='flex w-full mb-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Name' : 'Nombre'}:
            </p>
            <p className='w-4/6'>
              {user?.first_name}
            </p>
          </div>

          <div className='flex w-full mb-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Last Name' : 'Apellido'}:
            </p>
            <p className='w-4/6'>
              {user?.last_name}
            </p>
          </div>

          <div className='flex w-full mt-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Student ID' : 'Matricula'}:
            </p>
            <p className='w-4/6'>
              {user?.last_name}
            </p>
          </div>

          <div className='flex w-full mt-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Level' : 'Nivel'}:
            </p>
            <p className='w-4/6'>
              {user?.level_id}
            </p>
          </div>

          <div className='flex w-full mt-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Teacher' : 'Profesor'}:
            </p>
            <p className='w-4/6'>
              {user?.teacher}
            </p>
          </div>

          <div className='flex w-full mt-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Mail' : 'Correo'}:
            </p>
            <p className='w-4/6'>
              {user?.email}
            </p>
          </div>

          <div className='flex w-full mt-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Phone' : 'Telefono'}:
            </p>
            <p className='w-4/6'>
              {user?.phone}
            </p>
          </div>

          <div className='flex w-full mt-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Password' : 'Contraseña'}:
            </p>
            <p className='w-4/6'>
              **************
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}
