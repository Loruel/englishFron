import React from 'react'
import { Link } from 'react-router-dom'
import { englishFunction } from '../../context/Context'

export default function ButtonExam() {
    const { language } = englishFunction()

    return (
        <Link
            to={'/exams'}>

            <div className='bg-white w-full h-full rounded-lg shadow-md shadow-black transform transition-transform duration-300 ease-in-out hover:scale-105 dark:bg-xustomDarckDark dark:text-white'>
                <div className='w-full flex justify-end items-center h-10'>
                    <figure className='bg-yellow-400 w-7 lg:w-12 h-7 lg:h-12 rounded-full mr-2 lg:-mb-7 flex justify-center items-center p-1'>
                        <img
                            className='w-8'
                            src="/quiz.svg" alt="" />
                    </figure>
                </div>
                <div className='lg:h-14 lg:flex lg:items-end'>
                    <p className='ml-2 -mt-2'>
                        {language === 'en' ? 'Exams' : 'Examenes'}
                    </p>
                </div>
            </div>
        </Link>
    )
}
