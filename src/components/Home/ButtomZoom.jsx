import React from 'react'
import { englishFunction } from '../../context/Context'

export default function ButtomZoom() {
    const { language } = englishFunction()

    return (
        <a
            href="https://us04web.zoom.us/j/71074453847?pwd=CvKBsJSK6sXbo7g47lJTDBRFlCmrz6.1"
            target="_blank"
            rel="noopener noreferrer">
            <div className='bg-white w-full h-full rounded-lg shadow-md shadow-black transform transition-transform duration-300 ease-in-out hover:scale-105'>
                <div className='w-full flex justify-end items-center h-10'>
                    <figure className='bg-xustomZoom w-7 lg:w-12 h-7 lg:h-12 rounded-full mr-2 lg:-mb-7 flex justify-center items-center p-1'>
                        <img
                            className='w-8'
                            src="/zoomlogo.svg" alt="" />
                    </figure>
                </div>
                <div className='lg:h-14 lg:flex lg:items-end'>
                    <p className='ml-2'>
                        {language === 'en' ? 'Class Link' : 'Link de lección'}
                    </p>
                </div>
            </div>
        </a>
    )
}
