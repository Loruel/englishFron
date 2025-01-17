import React, { useEffect, useState } from 'react'
import { englishFunction } from '../context/Context'
import { Link } from 'react-router-dom'

export default function Level() {
  const { lessons, userLessons, user } = englishFunction()
  const [filteredUserLessons, setFilteredUserLessons] = useState([])
  const [completionPercentage, setCompletionPercentage] = useState(0)


  useEffect(() => {
    if (user) {
      const userId = user.user_id
      const filtered = userLessons.filter(userLesson => userLesson.user_id === userId)
      setFilteredUserLessons(filtered)

      const totalLessons = filtered.length
      const completedLessons = filtered.filter(lesson => lesson.status === 'completo').length
      const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0
      setCompletionPercentage(progress)
    }
  }, [user, userLessons])

  return (
    <div className='pl-4 pr-4 pt-2 mb-5 w-full'>

      <div className='bg-white pl-5 pr-5 pt-2 pb-2 w-full flex rounded-lg shadow-md shadow-black'>

        <div className='w-2/6 lg:w-1/6 lg:ml-3'>
          <h1 className='font-bold text-xl lg:text-2xl'>
            Level A1
          </h1>
          <h2 className='text-lg lg:text-xl'>
            Block B
          </h2>
        </div>

        <div className='w-4/6 lg:w-5/6 lg:mr-3'>
          <p className='mb-2'>
            Progress
          </p>
          <div className='relative'>
            <div
              className='w-full h-5 border border-green-600 relative rounded-md lg:h-8'>
            </div>
            <div
              className='h-5 bg-green-600 absolute top-0 left-0 rounded-md lg:h-8'
              style={{ width: `${completionPercentage}%` }}>
            </div>
          </div>
        </div>

      </div>

      <div className='bg-white pl-2 pr-2 pt-2 pb-2 w-full flex rounded-lg shadow-md shadow-black gap-y-2 mt-5 font-semibold'>
        <p className='w-3/12'>
          Lesson
        </p>
        <p className='w-8/12'>
          Name
        </p>
        <p className=''>
          Status
        </p>
      </div>

      <div className='bg-white pl-2 pr-2 pt-2 pb-2 w-full flex rounded-lg shadow-md shadow-black flex-col gap-y-2 mt-3 mb-5'>
        {filteredUserLessons && filteredUserLessons.length > 0 ? (
          filteredUserLessons.map((userLesson, index) => {
            const lesson = lessons.find(lesson => lesson.lessonId === userLesson.lesson_id);
            return (
              <div key={index} className='flex w-full p-1 border-b border-gray-400 lg:pt-3 lg:pb-3'>
                <Link
                  to={`/onelesson/${index}`}
                  className='flex w-full'>
                  <p className='w-2/12 ml-4'>
                    {lesson ? lesson.day : 'Day not found'}
                  </p>

                  <p className='w-8/12 ml-2'>
                    {lesson ? lesson.name : 'Lesson not found'}
                  </p>
                </Link>

                <p className='w-1/6 flex items-start justify-end'>
                  {userLesson.status === 'en progreso' ? (
                    <img
                      src='/pending.svg'
                      alt='en progreso'
                      className='w-8'
                    />
                  ) : userLesson.status === 'completo' ? (
                    <img
                      src='/check.svg'
                      alt='completado'
                      className='w-8'
                    />
                  ) : (
                    userLesson.status || 'Not started'
                  )}
                </p>

              </div>
            );
          })
        ) : (
          <p>No user lessons available.</p>
        )}
      </div>

    </div>
  )
}
