import React from 'react'
import { Link } from 'react-router-dom'

export default function EditProfile() {
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
                    to={'/profile'}
                    className='h-full'>
                    <div className='w-full h-full flex justify-center items-end'>
                        <button className='bg-green-600 w-1/2 h-1/6 rounded-lg text-white font-semibold mb-6'>
                            Save
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
                        <div className='h-16 flex flex-col justify-start ml-4'>
                            <p className='font-light text-xs italic'>
                                Francisco Manuel
                            </p>
                            <input
                                className='w-10/12 border border-black rounded-md pl-2' />
                        </div>
                        <div className='h-16 flex flex-col justify-start ml-4 '>
                            <p className='font-light text-xs italic'>
                                Vazquez Luna
                            </p>
                            <input
                                className='w-10/12 border border-black rounded-md pl-2' />
                        </div>
                        <div className='h-16 flex flex-col justify-start ml-4 '>
                            <p className='font-light text-xs italic'>
                                CF0000000001
                            </p>
                            <input
                                className='w-10/12 border border-black rounded-md pl-2' />
                        </div>
                        <div className='h-16 flex flex-col justify-start ml-4 '>
                            <p className='font-light text-xs italic'>
                                A1
                            </p>
                            <input
                                className='w-10/12 border border-black rounded-md pl-2' />
                        </div>
                        <div className='h-16 flex flex-col justify-start ml-4 '>
                            <p className='font-light text-xs italic'>
                                Cecilia Pacheco
                            </p>
                            <input
                                className='w-10/12 border border-black rounded-md pl-2' />
                        </div>
                        <div className='h-16 flex flex-col justify-start ml-4 '>
                            <p className='font-light text-xs italic'>
                                francisco@mail.com
                            </p>
                            <input
                                className='w-10/12 border border-black rounded-md pl-2' />
                        </div>
                        <div className='h-16 flex flex-col justify-start ml-4 '>
                            <p className='font-light text-xs italic'>
                                5511223344
                            </p>
                            <input
                                className='w-10/12 border border-black rounded-md pl-2' />
                        </div>
                        <div className='h-16 flex flex-col justify-start ml-4 '>
                            <p className='font-light text-xs italic'>
                                ************
                            </p>
                            <input
                                className='w-10/12 border border-black rounded-md pl-2' />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
