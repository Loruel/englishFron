import React from 'react'
import { Link } from 'react-router-dom'

export default function PersonalInformation() {
    return (
        <div className='pl-10 pr-10 pt-5 w-full flex space-x-10'>

            <Link
                to={'/profile'}
                className='w-5/12'>
                <div className=' p-5 h-full flex rounded-md border border-teal-600 shadow-gray-400 shadow-md'>
                    <div className='w-3/6 flex justify-center items-center'>
                        <figure className='bg-yellow-300 w-36 h-36 rounded-full overflow-hidden flex'>
                            <img
                                className='object-cover'
                                src="/profileDefaultBoy.png" alt="" />
                        </figure>
                    </div>
                    <div className='w-4/6 flex flex-col justify-center items-center'>
                        <p>
                            Francisco Manuel
                        </p>
                        <p>
                            Vazquez Luna
                        </p>
                        <p className='mt-5'>
                            Matricula:
                        </p>
                        <p>
                            CF0000000001
                        </p>
                    </div>
                </div>
            </Link>

            <Link
                to={'/level'}
                className='w-4/12'>
                <div className='p-5 h-full flex rounded-md border border-teal-600 shadow-gray-400 shadow-md'>
                    <div className='w-4/6 flex flex-col justify-center items-center'>
                        <p>
                            Level:
                        </p>
                        <p>
                            A1
                        </p>
                        <p>
                            Module:
                        </p>
                        <p>
                            January - March
                        </p>
                    </div>
                    <div className='w-3/6 flex justify-center items-center'>
                        <figure className='border-green-400 border-8 w-32 h-32 rounded-full overflow-hidden flex'>
                        </figure>
                    </div>
                </div>
            </Link>


            <div className='w-3/12 p-5 flex rounded-md border border-teal-600 shadow-gray-400 shadow-md'>
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
    )
}
