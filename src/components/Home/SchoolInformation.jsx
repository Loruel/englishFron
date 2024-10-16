import React from 'react'

export default function SchoolInformation() {
    return (
        <div className='pl-10 pr-10 pt-5 w-full flex space-x-10 mb-5'>

            <div className='w-7/12 p-5 flex flex-col items-center rounded-md border border-teal-600 shadow-gray-400 shadow-md'>

            </div>

            <div className='w-5/12 p-5 flex flex-col items-center rounded-md border border-teal-600 shadow-gray-400 shadow-md'>
                <h1 className='w-full text-center text-xl'>
                    Notices
                </h1>
                <div className='flex items-center'>
                    <div className='w-2/12 flex justify-center'>
                        <button className='bg-teal-600 rounded-full w-12 h-12 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    <figure className='w-8/12'>
                        <img src="/aviso1.jpeg" alt="" />
                    </figure>
                    <div className='w-2/12 flex justify-center'>
                        <button className='bg-teal-600 rounded-full w-12 h-12 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
