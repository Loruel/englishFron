import React from 'react'
import { Link } from 'react-router-dom'
import { englishFunction } from '../context/Context'
import { allIncidents } from '../api/incident.Api'
import { useQuery } from '@tanstack/react-query'

export default function IncidentPrincipal() {
    const { /* incidents, */ user } = englishFunction()

    const { data: incidents } = useQuery({
        queryKey: ['incidents'],
        queryFn: allIncidents,
    })

    const userIncident = Array.isArray(incidents?.data)
        ? incidents.data.filter(incident => incident?.id_user === user?.user_id)
        : []

    /*  console.log('User:', user);
     console.log('Incidents:', incidents);
     console.log('Filtered incidents:', userIncident); */

    const getStatusColor = (status) => {
        const statusColors = {
            open: 'bg-red-600',
            in_progress: 'bg-yellow-300',
            closed: 'bg-green-600'
        }
        return statusColors[status]
    }

    return (
        <div className='pl-4 pr-4 pt-2 mb-5 w-full'>
            <div className='bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col rounded-lg shadow-md shadow-black'>

                <div>
                    <h1 className='font-bold text-2xl mb-2'>
                        Your incidents
                    </h1>

                    {userIncident.length > 0 && (
                        <p className='mb-2'>
                            We are working to give you the best and prompt response
                        </p>
                    )}

                    <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-2'>

                        {userIncident.length > 0 ? (
                            userIncident
                                .filter((incident) => incident.status !== 'closed')
                                .map((incident) => (
                                    <div
                                        key={incident.incident_id}
                                        className='flex bg-gray-200 shadow-black shadow-sm rounded-lg mb-3 lg:h-24'>
                                        <div className='flex flex-col justify-center'>
                                            <figure className={`w-4 h-4 rounded-full mr-1 ml-2 ${getStatusColor(incident.status)}`}></figure>
                                        </div>
                                        <div className='flex flex-col justify-center '>
                                            <div className='flex h-4 pl-2 gap-1 text-xs'>
                                                <p>Creation date:</p>
                                                <p className=''>
                                                    {incident.created_at.slice(0, 10)}
                                                </p>
                                            </div>
                                            <div className='flex'>
                                                <p className='ml-2 mt-1 mb-1 font-semibold text-sm'>
                                                    {incident.title.length > 70 ? incident.title.slice(0, 70) + '...' : incident.title}
                                                </p>
                                            </div>
                                            {/* <div className='p-1 flex justify-start text-xs'>
                                            <p className='font-medium'>
                                                Status:
                                            </p>
                                            <p className='ml-2'>
                                                {incident.status}
                                            </p>
                                        </div> */}
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <p className='p-2 text-sm lg:text-base'>
                                No incidents available.
                            </p>
                        )}

                    </div>

                    {/* <div className='p-1 h-14 flex bg-teal-50 border-black border rounded-lg mb-2'>
                        <div className='w-1/12 flex items-center'>
                            <figure className='bg-yellow-400 ml-2 w-4 h-4 rounded-full'></figure>
                        </div>
                        <div className='w-11/12 ml-2'>
                            <p className=''>
                                Examen no calificado
                            </p>
                            <div className='flex justify-start text-xs'>
                                <p className='font-medium'>
                                    Status:
                                </p>
                                <p className='ml-2'>
                                    In progres
                                </p>
                            </div>
                        </div>
                    </div> */}


                </div>

                <div className='mt-5'>
                    <p className='mb-2 font-semibold'>
                        Resolved incidents:
                    </p>

                    <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-3'>

                        {userIncident.length > 0 ? (
                            userIncident
                                .filter((incident) => incident.status === 'closed')
                                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Ordena por fecha descendente
                                .slice(0, 4) // Toma los 4 más recientes
                                .map((incident) => (
                                    <div
                                        key={incident.incident_id}
                                        className='flex bg-gray-200 shadow-black shadow-sm rounded-lg mb-3 lg:h-24'>
                                        <div className='flex flex-col justify-center'>
                                            <figure className={`w-4 h-4 rounded-full mr-1 ml-2 ${getStatusColor(incident.status)}`}></figure>
                                        </div>
                                        <div className='flex flex-col justify-center '>
                                            <div className='flex h-4 pl-2 gap-1 text-xs'>
                                                <p>Creation date:</p>
                                                <p className=''>
                                                    {incident.created_at.slice(0, 10)}
                                                </p>
                                            </div>
                                            <div className='flex'>
                                                <p className='ml-2 mt-1 mb-1 font-semibold text-sm'>
                                                    {incident.title.length > 70 ? incident.title.slice(0, 70) + '...' : incident.title}
                                                </p>
                                            </div>
                                            {/* <div className='p-1 flex justify-start text-xs'>
                                            <p className='font-medium'>
                                                Status:
                                            </p>
                                            <p className='ml-2'>
                                                {incident.status}
                                            </p>
                                        </div> */}
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <p className='p-2 text-sm lg:text-base'>
                                No incidents available.
                            </p>
                        )}

                    </div>

                    {/* <div className='p-1 h-14 flex bg-teal-50 border-black border rounded-lg mb-2'>
                        <div className='w-1/12 flex items-center'>
                            <figure className='bg-green-400 ml-2 w-4 h-4 rounded-full'></figure>
                        </div>
                        <div className='w-11/12 ml-2'>
                            <p className=''>
                                Examen no calificado
                            </p>
                            <div className='flex justify-start text-xs'>
                                <p className='font-medium'>
                                    Resolved:
                                </p>
                                <p className='ml-2'>
                                    01/01/2025
                                </p>
                            </div>
                        </div>
                    </div> */}

                </div>

                <div className='mt-5 w-full flex justify-center'>
                    <Link to={'/newincident'}>
                        <button className='bg-emerald-700 p-1 flex items-center justify-center rounded-lg h-10 text-white font-semibold'>
                            <p className='p-1'>
                                New Incident
                            </p>
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    )
}
