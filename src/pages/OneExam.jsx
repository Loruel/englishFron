import React, { useState, useEffect } from 'react'
import { englishFunction } from '../context/Context'

export default function OneExam() {
    const { questions } = englishFunction()
    const [selectedAnswers, setSelectedAnswers] = useState({})

    const handleCheckboxChange = (questionId, answer) => {
        setSelectedAnswers(prevState => ({
            ...prevState,
            [questionId]: answer
        }));
    }

    return (
        <div className='pl-4 pr-4 pt-2 mb-5 w-full h-full'>
            <div className='bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col rounded-lg shadow-md shadow-black'>

                <div className='text-center mt-2 mb-2 font-bold text-xl'>
                    NOMBRE DEL EXAMEN
                </div>

                <div className="p-2 mb-2">
                    <p className='text-center'>
                        Questions
                    </p>
                    <div className='flex'>
                        <div className=''>
                            <p className='text-center'>
                                1
                            </p>
                            <figure>
                                <img
                                    className='w-6'
                                    src="checkbox.svg" alt="" />
                            </figure>
                        </div>
                        <div className=''>
                            <p className='text-center'>
                                2
                            </p>
                            <figure>
                                <img
                                    className='w-6'
                                    src="checkbox.svg" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>

                {questions && questions.length > 0 ? (
                    questions.map((question, index) => (
                        <div
                            key={index}
                            className="p-2 bg-gray-200 shadow-black shadow-sm rounded-lg mb-2">
                            <p className='font-semibold'>
                                Answer
                                <span className='ml-1'>
                                    {index + 1}
                                </span>
                            </p>
                            <div className='ml-3'>
                                <p className='mb-2'>
                                    {question.question_text}
                                </p>
                                {question.question_type === 'text' && (
                                    <input
                                        className='border-gray-500 border w-full rounded-md p-1'
                                        type="text"
                                    />
                                )}
                                {question.question_type === 'audio' && (
                                    <button className='bg-blue-500 flex rounded-2xl p-2 pl-4 pr-4 font-semibold text-white text-xs'>
                                        <img
                                            className='w-5 flex justify-center items-center'
                                            src="mic.svg" alt="" />
                                    </button>
                                )}
                                {question.question_type === 'video' && (
                                    <button className='bg-blue-800 flex rounded-2xl p-2 pl-4 pr-4 font-semibold text-white text-xs'>
                                        <img
                                            className='w-5 flex justify-center items-center'
                                            src="videocam.svg" alt="" />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron preguntas.</p>
                )}

            </div>
        </div>
    )
}
