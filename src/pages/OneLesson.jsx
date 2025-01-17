import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { englishFunction } from '../context/Context';

export default function OneLesson() {
    const { id } = useParams(); // Obtener el ID de la lección desde la URL
    const { lessons, getLessonOfTheDay } = englishFunction();
    const lesson = lessons[id]; // Buscar la lección correspondiente
    const lessonOfTheDay = getLessonOfTheDay()

    if (!lesson) {
        return <p>Lesson not found</p>;
    }

    return (
        <div className="pl-4 pr-4 pt-2 mb-5 w-full">
            <div className="bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col lg:items-center rounded-lg shadow-md shadow-black">
                <div className="block lg:hidden p-2">
                    <Link to="/level">
                        <button className="bg-red-600 w-32 -ml-14 rounded-lg">
                            <p className="text-white">LEVEL</p>
                        </button>
                    </Link>
                </div>
                {/* Mostrar el mensaje solo si es la lección del día */}
                <div className='lg:w-5/6 mt-5'>
                    <h1 className="font-bold text-2xl">{lesson.name || `Lesson ${id}`}</h1>
                    <p className="text-lg">{lesson.description || 'No description available.'}</p>
                    <h2 className="mt-4 font-semibold text-xl">Objective:</h2>
                    <li>{lesson.objective || 'No objectives provided.'}</li>
                    <div className="mt-4">
                        <h1 className="font-semibold">Content</h1>
                        <p>{lesson.content || 'No content available.'}</p>
                    </div>
                </div>

                <div className="flex justify-center mt-8 h-full lg:w-full">
                    {lesson.video && (
                        <iframe
                            className='w-full h-48 rounded-xl shadow-black shadow-md lg:w-7/12 lg:h-96'
                            src={lesson.video}
                            title="YouTube video player"
                            /* frameborder="0"  */
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            /* referrerpolicy="strict-origin-when-cross-origin"  */
                            /* allowfullscreen */>
                        </iframe>
                    )}
                </div>

                {/* <div className="mt-5">
                    <iframe
                        src="/1.pdf"
                        width="100%"
                        height="600px"
                        title="PDF Viewer">
                    </iframe>
                </div>
 */}
                <div className="mt-5 pl-5 pr-5">
                    {lesson.download && (
                        <a href={lesson.download} download className="bg-emerald-700 p-1 flex items-center justify-center rounded-lg h-10 w-full lg:h-16 lg:mt-9">
                            <img className="ml-3" src="/download.svg" alt="Download icon" />
                            <p className="text-white ml-1 mr-4 font-bold text-sm">Download content</p>
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
}