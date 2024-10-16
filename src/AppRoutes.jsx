import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import ClassToday from './pages/ClassToday'
import Profile from './pages/Profile'
import Pay from './pages/Pay'
import Level from './pages/Level'
import EditProfile from './pages/EditProfile'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route element={<Navbar />}>
                <Route path='/home' element={<Home />} />
                <Route path='/classtoday' element={<ClassToday />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/editprofile' element={<EditProfile />} />
                <Route path='/pay' element={<Pay />} />
                <Route path='/level' element={<Level />} />

            </Route>

            <Route path='*' element={<Navigation to='/' />} />
        </Routes>
    )
}
