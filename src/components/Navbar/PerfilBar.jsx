import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { englishFunction } from '../../context/Context'

export default function PerfilBar() {
    const setLocation = useNavigate()
    const { user, language, toggleLanguage } = englishFunction()
    const [flag, setFlag] = useState(language === 'en' ? 'banderaEN.png' : 'banderaSPA.png')

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        console.clear()
        setLocation('/')
    }

    const handleFlagClick = () => {
        toggleLanguage()
        setFlag(language === 'en' ? 'banderaSPA.png' : 'banderaEN.png')
    }


    return (
        <>

            <div className='w-full p-2 flex items-center justify-end mt-3 lg:mt-0'>
                <button
                    className='bg-white shadow-sm shadow-black h-5 w-10 mr-2 rounded-full relative overflow-hidden'
                    onClick={handleFlagClick}>
                    <figure>
                        <img
                            className='w-full h-full object-cover'
                            src={flag}
                            alt="" />
                    </figure>
                </button>

                <Link to={'/home'}>
                    <button
                        className='bg-emerald-700 shadow-sm shadow-black text-white w-20 h-5 mr-2 rounded-full flex justify-center items-center text-sm transform transition-transform duration-300 ease-in-out hover:scale-105 dark:bg-emerald-500'>
                        {language === 'en' ? 'Home' : 'Inicio'}
                        <img
                            className='ml-2 h-4'
                            src="/homeWhite.svg" alt="" />
                    </button>
                </Link>
                <button
                    className='bg-red-700 shadow-sm shadow-black text-white w-20 h-5 mr-2 rounded-full flex justify-center items-center text-sm transform transition-transform duration-300 ease-in-out hover:scale-105 dark:bg-red-600'
                    onClick={handleLogout}>
                    {language === 'en' ? 'Logout' : 'Salir'}
                    <img
                        className='ml-2 h-4'
                        src="/logout.svg" alt="" />
                </button>
            </div>

            <div className='bg-xustomBlue shadow-md shadow-black h-10 lg:h-16 w-full flex rounded-xl dark:bg-xustomBlueDark'>

                <div className='w-1/3 lg:w-2/12 p-2 flex items-center justify-start'>
                    <Link
                        className=''
                        to={'/profile'}>
                        <button className='bg-yellow-300 w-16 h-16 lg:w-24 lg:h-24 -mt-5 ml-5 rounded-full overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110'>
                            <img className='w-full h-full object-cover' src="/profileDefaultBoy.png" alt="" />
                        </button>
                    </Link>
                </div>

                <div className='w-1/3 lg:w-3/12 text-white lg:flex lg:items-center lg:-ml-16'>
                    <p className='text-xs lg:text-xl'>
                        {language === 'en' ? 'Welcome back' : 'Bienvenido de nuevo'}
                    </p>
                    <p className='font-semibold -mt-1 lg:-mt-0 lg:ml-2 text-lg lg:text-xl'>
                        {user?.first_name}
                    </p>
                </div>

                <div className=' w-1/3 lg:w-3/12 flex justify-end lg:justify-center items-center'>
                    <Link
                        className=''
                        to={'/home'}>
                        <figure className='lg:ml-11'>
                            <img
                                className='w-10 lg:w-14 mr-5'
                                src="/logo.png" alt="" />
                        </figure>
                    </Link>
                </div>

            </div>

        </>
    )
}
