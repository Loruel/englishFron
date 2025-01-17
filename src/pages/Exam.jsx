import React from 'react'
import { Link } from 'react-router-dom'

export default function Exam() {
    return (
        <div className='pl-4 pr-4 pt-2 mb-5 w-full h-full'>
            <div className='bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col rounded-lg shadow-md shadow-black'>

                <p className='text-center mt-2'>
                    Welcome to your evaluation.
                </p>
                <p className='font-bold text-lg w-full text-center'>
                    NOMBRE DE LA EVALUACION
                </p>
                <p className='text-sm mt-3'>
                    We remind you that this assessment is to measure your knowledge and to be able to reinforce what you do not understand. Please use only your knowledge
                </p>

                <p className='mt-4'>
                    For this evaluation how many with 30 minutes and you have 2 opportunities to do it, when you start it will count as an opportunity, if you are ready click on start
                </p>

                <div className='mt-5 w-full flex justify-center'>
                    <Link to={'/examone'}>
                        <button className='bg-emerald-700 p-1 flex items-center justify-center rounded-lg h-10 text-white font-semibold'>
                            <p className='p-1 pl-4 pr-4'>
                                START
                            </p>
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
