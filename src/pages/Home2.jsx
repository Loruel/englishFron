import React from 'react'
import ButtomZoom from '../components/Home/ButtomZoom'
import ButtonLesson from '../components/Home/ButtonLesson'
import ButtonProgres from '../components/Home/ButtonProgres'
import ButtonPay from '../components/Home/ButtonPay'
import ButtonIncident from '../components/Home/ButtonIncident'
import Noticias from '../components/Home/Noticias'
import HomeLesson from './HomeLesson'
import ButtonExam from '../components/Home/ButtonExam'


export default function Home2() {
    return (
        <>
            <div className='flex h-screen'>

                <div className='hidden lg:block w-1/2 h-full pr-1 pl-4 mt-2 mb-2 overflow-y-auto'>
                    {/* <div className='bg-white pl-5 pr-5 pt-2 pb-5 w-full flex flex-col rounded-lg shadow-md shadow-black'> */}
                    <HomeLesson />
                    {/* </div> */}
                </div>

                <div className='w-full lg:w-1/2 h-full pr-4 pl-4 lg:pr-1 lg:mr-4 mt-2 mb-2'>

                    <div className='hidden lg:block'>
                        <div className='flex w-full h-60'>
                            <div className='w-1/2 p-2 pr-2'>
                                <ButtonProgres />
                            </div>
                            <div className='w-1/2 mt-1'>
                                <div className='flex w-full h-1/2'>
                                    <div className='w-1/2 p-2'>
                                        <ButtonLesson />
                                    </div>
                                    <div className='w-1/2 p-2'>
                                        <ButtomZoom />
                                    </div>
                                </div>
                                <div className='flex w-full h-1/2'>
                                    <div className='w-1/2 p-2'>
                                        <ButtonPay />
                                    </div>
                                    <div className='w-1/2 p-2'>
                                        <ButtonIncident />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='block lg:hidden'>
                        <div className='h-36 w-full flex'>
                            <div className='w-7/12 p-1 pr-2'>
                                <ButtonProgres />
                            </div>
                            <div className='w-5/12'>
                                <div className='h-1/2 p-1'>
                                    <ButtonLesson />
                                </div>
                                <div className='h-1/2 p-1'>
                                    <ButtomZoom />
                                </div>
                            </div>
                        </div>
                        <div className='h-16 w-full mt-1 flex'>
                            <div className='w-1/2 p-1'>
                                <ButtonPay />
                            </div>
                            <div className='w-1/2 p-1'>
                                <ButtonIncident />
                            </div>
                        </div>
                    </div>

                    <div className='mt-1'>
                        <div className='p-1'>
                            <ButtonExam />
                        </div>
                    </div>

                    <div className='mt-1'>
                        <div className='p-1'>
                            <Noticias />
                        </div>
                        {/* <div className='p-1 mt-1 mb-4'>
                            <WorDay />
                        </div> */}
                    </div>
                </div>

            </div>

        </>
    )
}
