import React from 'react'
import { englishFunction } from '../context/Context'

export default function Exams() {
    const { exams } = englishFunction()

    return (
        <div className='pl-4 pr-4 pt-2 mb-5 w-full h-full'>
            <div className='bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col rounded-lg shadow-md shadow-black'>

                <p>
                    Aqui estan todos los examenes que tengo en la base de datos
                </p>

                {exams && exams.length > 0 ? (
                    exams.map((exam, index) => (
                        <button
                            key={index}
                            className='bg-xustomBlue m-2 p-2 rounded-md'>
                            <p className='text-white font-semibold'>
                                {exam.name}
                            </p>
                        </button>
                    ))
                ) : (
                    <p>No se encontraron examenes.</p>
                )}

            </div>
        </div>
    )
}
