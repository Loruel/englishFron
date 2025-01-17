import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { englishFunction } from '../context/Context'
import { useQuery } from '@tanstack/react-query'
import { getMyInformation } from '../api/user.Api'
import Loading from './Loading/Loading'

function ProtectedRoutes() {
    const authToken = localStorage.getItem('authToken')
    const { setUserData } = englishFunction()

    const { data, isError, isLoading } = useQuery({

        queryKey: ['user'],
        queryFn: () => getMyInformation(authToken),
        retry: 1,
        enabled: Boolean(authToken),

    })

    useEffect(() => {

        if (data && !isError && !isLoading) {
            setUserData(data)
        }
    }, [data, isError, setUserData, isLoading])

    if (isLoading) {
        return <Loading />
    }

    if (!authToken || (isError && !data)) {
        localStorage.removeItem('authToken')
        console.clear()
        return <Navigate to='/' replace={true} />
    }

    return <Outlet />
}

export default ProtectedRoutes
