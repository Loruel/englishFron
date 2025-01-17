import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { englishFunction } from '../context/Context';

export default function HomeLesson() {
    const { getLessonOfTheDay } = englishFunction();
    const [lessonOfTheDay, setLessonOfTheDay] = useState(null)

    useEffect(() => {
        // Obtener la lección del día y almacenarla en el estado local
        const lesson = getLessonOfTheDay();
        setLessonOfTheDay(lesson);
    }, [getLessonOfTheDay]);

    if (!lessonOfTheDay) {
        return <p>Loading today's lesson...</p>;
    }

    return (
        <div className="pl-4 pr-4 pt-2 mb-5 w-full">
            <div className="bg-white pl-5 pr-5 pt-2 pb-5 w-full flex lg:items-center flex-col rounded-lg shadow-md shadow-black">

                <div className="block lg:hidden p-2">
                    <Link to="/level">
                        <button className="bg-red-600 w-32 -ml-14 rounded-lg">
                            <p className="text-white">LEVEL</p>
                        </button>
                    </Link>
                </div>

                <div className="hidden lg:block font-bold text-2xl w-full text-center mb-3 mt-3">
                    LESSON TODAY
                </div>

                <div className='lg:w-11/12'>

                    <h1 className="font-bold text-2xl">
                        {lessonOfTheDay.name || 'Lesson Today'}
                    </h1>

                    <p className="text-lg">
                        {lessonOfTheDay.description || 'No description available.'}
                    </p>

                    <h2 className="mt-4 font-semibold text-xl">
                        Objective:
                    </h2>

                    <li>
                        {lessonOfTheDay.objective || 'No objectives provided.'}
                    </li>

                    <div className="mt-4">
                        <h1 className="font-semibold">
                            Content
                        </h1>
                        <p>
                            {lessonOfTheDay.content || 'No content available.'}
                        </p>
                    </div>

                </div>

                <div className="flex justify-center mt-5 h-full lg:w-full">
                    {lessonOfTheDay.video && (
                        <iframe
                            className="w-full h-48 rounded-xl shadow-black shadow-md lg:w-11/12 lg:h-64"
                            src={lessonOfTheDay.video}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    )}
                </div>

                <div className="pl-5 pr-5">
                    {lessonOfTheDay.download && (
                        <a
                            href={lessonOfTheDay.download}
                            download
                            className="bg-emerald-700 p-1 flex items-center justify-center rounded-lg h-10 w-full lg:h-12 lg:mt-9"
                        >
                            <img
                                className="ml-3"
                                src="/download.svg"
                                alt="Download icon" />
                            <p className="text-white mr-3 font-semibold text-sm ml-1">
                                Download content
                            </p>
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
}