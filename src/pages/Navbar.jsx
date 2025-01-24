import React from 'react'
import PerfilBar from '../components/Navbar/PerfilBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Navbar() {


    return (
        <div 
        className='overflow-y-hidden bg-gray-200 dark:bg-xustomDarck'>

            <div className='pl-4 pr-4 pb-2 dark:'>
                <PerfilBar />
            </div>

            <div className='flex'>
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}
