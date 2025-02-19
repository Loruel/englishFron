import React, { useState } from 'react'
import { englishFunction } from '../context/Context'

export default function EditProfile() {
  const { user, language, updateProfileMutation } = englishFunction()

  const [email, setEmail] = useState(user?.email || '')
  const [phone, setPhone] = useState(user?.phone || '')
  /* const [currentPassword, setCurrentPassword] = useState('') */
  const [password, setPassword] = useState(user?.password || '')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

   /*  if (password && !currentPassword) {
      setError(language === 'en' ? 'Current password is required' : 'Se requiere la contraseña actual')
      return
    } */

    if (password !== repeatPassword) {
      setErrorMessage(language === 'en'
        ? 'Passwords do not match!'
        : '¡Las contraseñas no coinciden!')
      return
    }

    setErrorMessage('')

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

        <div className='mt-2'>
          <p className='text-xs p-2 pr-8 pl-8 text-center'>
            Remember that when editing your profile the session will be closed
          </p>
        </div>

        <form
          className='h-full p-1 flex flex-col mt-2  '
          onSubmit={handleSubmit}>

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

          <label className='flex w-full mt-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Mail' : 'Correo'}:
            </p>
            <div className='w-4/6'>
              <input
                className='w-11/12 h-6 border-gray-300 border rounded-md text-sm p-1'
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={user?.email} />
            </div>
          </label>

          <label className='flex w-full mt-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Phone' : 'Telefono'}:
            </p>
            <div className='w-4/6'>
              <input
                className='w-11/12 h-6 border-gray-300 border rounded-md text-sm p-1'
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={user?.phone} />
            </div>
          </label>

          {/* <label className='flex w-full mt-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Current password' : 'Contraseña actual'}:
            </p>
            <div className='w-4/6 flex items-end'>
              <input
                className='w-11/12 h-6 border-gray-300 border rounded-md text-sm p-1'
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder='**********' />
            </div>
          </label> */}

          <label className='flex w-full mt-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Password' : 'Contraseña'}:
            </p>
            <div className='w-4/6 flex items-end'>
              <input
                className='w-11/12 h-6 border-gray-300 border rounded-md text-sm p-1'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='**********' />
            </div>
          </label>

          <label className='flex w-full mt-1'>
            <p className='w-2/6 text-end pr-3'>
              {language === 'en' ? 'Repet password' : 'Repetir contraseña'}:
            </p>
            <p className='w-4/6 flex items-end'>
              <input
                className='w-11/12 h-6 border-gray-300 border rounded-md text-sm p-1'
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder='**********' />
            </p>
          </label>

          {errorMessage && (
            <div className='flex justify-center'>
              <p className="text-red-500 pt-5 font-semibold">{errorMessage}</p>
            </div>
          )}

          <div className='p-2 mt-2 flex items-center justify-center'>
            <button className='bg-green-600 w-1/2 rounded-lg text-white font-semibold mb-6'>
              {language === 'en' ? 'Save' : 'Guardar'}
            </button>
          </div>

        </form>


        {/* <div className='h-full p-1 flex lg:col-span-2'>

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

        </div> */}

      </div>
    </div>
  )
}
