import React from 'react'

export default function OneExam() {
    return (
        <div className='pl-4 pr-4 pt-2 mb-5 w-full h-full'>
            <div className='bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col rounded-lg shadow-md shadow-black'>

                <div className='text-center mt-2 mb-2 font-bold text-xl'>
                    NOMBRE DEL EXAMEN
                </div>

                <div>
                    <p className='font-semibold'>
                        Answer 1
                    </p>
                    <div className='p-1'>
                        <p className='mb-2'>
                            En teoria aqui va la pregnta este es solo un ejemplo de pregunta de opcion multiple?
                        </p>
                        <div className='flex'>
                            <input
                                className=''
                                type="checkbox" />
                            <p className=' ml-2'>
                                Respuesta 1
                            </p>
                        </div>
                        <div className='flex'>
                            <input
                                className=''
                                type="checkbox" />
                            <p className=' ml-2'>
                                Respuesta 2
                            </p>
                        </div>
                        <div className='flex'>
                            <input
                                className=''
                                type="checkbox" />
                            <p className=' ml-2'>
                                Respuesta 3
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='font-semibold'>
                        Answer 2
                    </p>
                    <div className='p-1'>
                        <p className='mb-2'>
                            En teoria aqui va la pregnta este es solo un ejemplo de pregunta para escribir?
                        </p>
                        <div className='flex'>
                            <input
                                className='border-black border w-full rounded-md'
                                type="text" />
                        </div>
                    </div>
                </div>

                <div>
                    <p className='font-semibold'>
                        Answer 3
                    </p>
                    <div className='p-1'>
                        <p className='mb-2'>
                            En teoria aqui va la pregnta este es solo un ejemplo de pregunta para grabar audio?
                        </p>
                        <div className='flex'>
                            <button className='bg-blue-500 rounded-2xl p-2 pl-4 pr-4 font-semibold text-white'>
                                GRABAR AUDIO
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='font-semibold'>
                        Answer 4
                    </p>
                    <div className='p-1'>
                        <p className='mb-2'>
                            En teoria aqui va la pregnta este es solo un ejemplo de pregunta para grabar video?
                        </p>
                        <div className='flex'>
                            <button className='bg-blue-800 rounded-2xl p-2 pl-4 pr-4 font-semibold text-white'>
                                GRABAR VIDEO
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
