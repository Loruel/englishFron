import React, { useState, useEffect } from 'react'
import { englishFunction } from '../context/Context'
import { useParams } from 'react-router-dom'

export default function OneExam() {
    const { questions, options } = englishFunction()
    const { id } = useParams()

    /*console.log(questions)*/

    const filteredQuestions = questions.filter(
        (question) => question.exam_id === parseInt(id, 10)
    )

    const [timeLeft, setTimeLeft] = useState(1200)

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }     // Función para formatear el tiempo restante en minutos y segundos


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(timer) // Detener el temporizador cuando se acabe el tiempo
                    return 0;
                }
                return prevTime - 1
            })
        }, 1000)// Iniciar el cronómetro cuando el componente se monte

        return () => clearInterval(timer); // Limpiar el temporizador cuando el componente se desmonte
    }, []);

    const playAudio = (audioFile) => {
        const audio = new Audio(audioFile);
        audio.play();
    }

    return (
        <div className='pl-4 pr-4 pt-2 mb-5 w-full h-full'>
            <div className='bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col rounded-lg shadow-md shadow-black'>

                <div className='text-center mt-2 mb-2 font-bold text-xl'>
                    NOMBRE DEL EXAMEN
                </div>

                {/* <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-2 rounded-lg shadow-md z-50">
                    <p className="font-semibold">Tiempo restante: {formatTime(timeLeft)}</p>
                </div> */}

                <div className="p-2 mb-2 bg-gray-200 shadow-black shadow-sm rounded-lg">
                    <p className='text-center'>
                        Questions
                    </p>

                    <div className='grid grid-cols-10'>
                        {filteredQuestions.map((_, index) => (
                            <div key={index} className='text-center p-1'>
                                <p className='mb-1'>
                                    {index + 1}
                                </p>
                                <figure className='w-5 h-5 border-2 border-xustomBlue rounded-md'>

                                </figure>
                            </div>
                        ))}
                    </div>

                </div>

                {filteredQuestions.length > 0 ? (
                    filteredQuestions.map((question, index) => (
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
                                <p className='font-semibold italic text-sm'>
                                    {question.instructions}
                                </p>
                                {question.optional_text && (
                                    <p className='p-2 bg-white rounded-3xl mt-1 mb-1'>
                                        {question.optional_text}
                                    </p>
                                )}
                                {question.optional_audio && (
                                    <button 
                                    onClick={() => playAudio('/prueba.m4a')}
                                    className='bg-blue-500 w-full flex rounded-2xl p-2 pl-4 pr-4 font-semibold text-white text-xs mt-1 mb-1'>
                                        <img
                                            className='w-5 flex justify-center items-center'
                                            src="/mic.svg" alt="" />
                                    </button>
                                )}
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
                                            src="/mic.svg" alt="" />
                                    </button>
                                )}
                                {question.question_type === 'video' && (
                                    <button className='bg-blue-800 flex rounded-2xl p-2 pl-4 pr-4 font-semibold text-white text-xs'>
                                        <img
                                            className='w-5 flex justify-center items-center'
                                            src="/videocam.svg" alt="" />
                                    </button>
                                )}
                                {question.question_type === 'multiple_choice' && (
                                    <div className="mt-2">
                                        {options
                                            .filter(option => option.question_id === question.id)
                                            .map((option, idx) => (
                                                <div key={idx} className="mb-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name={`question-${question.id}`}
                                                            value={option.option_text}
                                                            className="mr-2"
                                                        />
                                                        {option.option_text}
                                                    </label>
                                                </div>
                                            ))}
                                    </div>
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
