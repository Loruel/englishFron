import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { englishFunction } from '../../context/Context';

export default function ButtonProgres() {
    const { lessons, userLessons, user, level, language } = englishFunction();
    const [completionPercentage, setCompletionPercentage] = useState(0)

    useEffect(() => {
        if (user) {
            const userId = user.user_id;
            const userLevelId = user.level_id // Obtén el level_id del usuario

            // Filtrar las lecciones por user_id y level_id
            const filteredLessons = userLessons.filter(userLesson =>
                userLesson.user_id === userId && lessons.some(lesson => lesson.lessonId === userLesson.lesson_id && lesson.level_id === userLevelId)
            );

            // Calcular el porcentaje de progreso
            const totalLessons = filteredLessons.length;
            const completedLessons = filteredLessons.filter(lesson => lesson.status === 'completo').length;
            const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
            setCompletionPercentage(progress);
        }
    }, [user, userLessons, lessons])

    return (
        <Link to={'/level'}>
            <div className='bg-white w-full h-full flex flex-col items-center rounded-lg shadow-md shadow-black transform transition-transform duration-300 ease-in-out hover:scale-105 dark:bg-xustomDarckDark dark:text-white'>
                <div className='flex'>
                    <div className='p-2'>
                        <figure className="border-green-400 border w-24 lg:w-44 h-24 lg:h-44 ml-2 rounded-full overflow-hidden flex relative">
                            <svg
                                className="absolute top-0 left-0 w-full h-full wave-animation transform scale-x-150"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d={`M0,${100 - completionPercentage} Q25,${90 - completionPercentage} 50,${100 - completionPercentage} T100,${100 - completionPercentage} V100 H0 Z`}
                                    fill="#4CAF50"
                                />
                            </svg>
                        </figure>
                    </div>
                    <p className='w-10 flex items-center'>
                        {Math.round(completionPercentage)}%
                    </p>
                </div>
                <div className='-mt-1'>
                    <p>
                        {language === 'en' ? 'Nivel A1, Block 1' : 'Nivel A1, Bloque 1'}
                    </p>
                </div>
            </div>

            <style>
                {`
                    .wave-animation path {
                        animation: waveMove 3s infinite ease-in-out;
                    }

                    @keyframes waveMove {
                        0% {
                            transform: translateX(0);
                        }
                        50% {
                            transform: translateX(10%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }
                `}
            </style>
        </Link>
    )
}
            