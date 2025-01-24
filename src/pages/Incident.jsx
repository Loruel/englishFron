import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { englishFunction } from '../context/Context'
import { useQueryClient } from '@tanstack/react-query'

export default function Incident() {
  const { createIncidentMutation, user } = englishFunction()
  const [errorMessage, setErrorMessage] = useState('')
  
  const queryClient = useQueryClient()
  
  const handleCreateIncident = async e => {
    e.preventDefault()
    setErrorMessage('')
    const title = e.target.title.value.trim()
    const type = e.target.type.value.trim()
    const description = e.target.description.value.trim()

    if (!title || !type || !description) {
      setErrorMessage("Todos los campos son obligatorios.")
      return;
    }

    const userData = {
      title,
      type,
      description,
      user_id: user.user_id
    }

    createIncidentMutation.mutate(userData, {
      onError: (error) => {
        setErrorMessage(error.response?.data?.message || 'Error al crear el incidente.')
      },
      onSuccess: () => {
        queryClient.invalidateQueries('incidents')
        setErrorMessage('') // Limpia cualquier error en caso de éxito.
      }
    })
  }

  return (
    <div className='pl-4 pr-4 pt-2 mb-5 w-full'>
      <div className='bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col rounded-lg shadow-md shadow-black'>
        <div className='p-2'>
          <Link to={'/incident'}>
            <button className='bg-red-600 w-32 -ml-14 rounded-lg'>
              <p className='text-white'>
                BACK
              </p>
            </button>
          </Link>
        </div>
        <div>
          <h1 className='font-bold text-xl mb-2'>
            New incident
          </h1>
          <p>
            We apologize, our commitment to you is our priority
          </p>
          <p className='mt-2'>
            Help us by filling in the following information, as specific as possible, if necessary you can attach photoss
          </p>
        </div>

        <form
          onSubmit={handleCreateIncident}
          className='mt-6 p-4 bg-xustomBlue text-white rounded-xl'>

          <div className='flex'>

            <label className='w-8/12'>
              <p className='mb-2'>
                Category:
              </p>
              <select
                className='w-full p-2 rounded-lg text-black'
                name="type"
                id="type">
                <option value="">Select a category</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>

            <div className='w-4/12 flex items-end justify-end'>
              <button className='bg-xustomBrown w-10/12 h-10 rounded-lg flex items-center justify-center'>
                <img
                  className='w-7'
                  src="/image.svg" alt="" />
              </button>
            </div>

          </div>

          <label htmlFor="">
            <p className='mb-2 mt-2'>
              Title:
            </p>
            <input
              className='w-full p-2 rounded-lg text-black'
              type="text"
              name="title"
              id="title" />
          </label>

          <label className='mt-4'>
            <p className='mb-2 mt-2'>
              Describe your problems:
            </p>
            <textarea
              className='rounded-lg w-full h-48 text-black p-2'
              name="description"
              id="description"></textarea>
          </label>

          {errorMessage && (
            <p className='text-red-500 text-center mt-2'>{errorMessage}</p>
          )}

          <div className='flex justify-center mt-4'>
            <button className='bg-green-600 p-1 rounded-lg'>
              <p className='text-white font-semibold p-1'>
                Upload incident
              </p>
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}
