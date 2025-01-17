import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Navbar from './pages/Navbar'
import Home2 from './pages/Home2'
import Profile from './pages/Profile'
import Pay from './pages/Pay'
import Level from './pages/Level'
import EditProfile from './pages/EditProfile'
import Incident from './pages/Incident'
import IncidentPrincipal from './pages/IncidentPrincipal'
import Lesson from './pages/Lesson'
import OneLesson from './pages/OneLesson'
import HomeLesson from './pages/HomeLesson'
import Exam from './pages/Exam'
import OneExam from './pages/OneExam'
/* import ProtectedRoutes from './components/ProtectedRoutes' */

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            {/* <Route element={<ProtectedRoutes />}> */}
            <Route element={<Navbar />}>
                <Route path='/home' element={<Home2 />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/editprofile' element={<EditProfile />} />
                <Route path='/pay' element={<Pay />} />
                <Route path='/level' element={<Level />} />
                <Route path='/lesson' element={<Lesson />} />
                <Route path='/onelesson/:id' element={<OneLesson />} />
                <Route path='/homelesson/:id' element={<HomeLesson />} />
                <Route path='/newincident' element={<Incident />} />
                <Route path='/incident' element={<IncidentPrincipal />} />
                <Route path='/exam' element={<Exam />} />
                <Route path='/examone' element={<OneExam />} />

            </Route>
            {/* </Route> */}

            <Route path='*' element={<Navigation to='/' />} />
        </Routes>
    )
}
