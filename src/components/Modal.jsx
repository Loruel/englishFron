import React from 'react'
import { englishFunction } from '../context/Context'
import { Link, useNavigate } from 'react-router-dom'

export default function Modal() {
    const { openModal, setOpenModal } = englishFunction()
    const setLocation = useNavigate()

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        console.clear()
        setLocation('/')
    }

    return (
        openModal && (

            <div className='w-full h-screen fixed flex justify-end bg-black bg-opacity-50'
            onClick={handleCloseModal}>
                <div className='border-xustomBlue mt-2 mr-4 w-72 border-2 rounded-lg font-semibold fixed p-2 bg-xustomBlue text-white'
                    onClick={handleCloseModal}>
                    <Link to={'/profile'}>
                        <div className='p-4 pr-12 flex items-center cursor-pointer'>
                            <img src="/profileB.svg" alt="" />
                            <p className='ml-4'>
                                Profile
                            </p>
                        </div>
                    </Link>
                    <div className='p-4 pr-12 flex items-center cursor-pointer'
                        onClick={handleLogout}>
                        <img src="/logout.svg" alt="" />
                        <p className='ml-4'>
                            Logout
                        </p>
                    </div>
                </div>
            </div>

        )

    )
}
