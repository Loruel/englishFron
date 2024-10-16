import React from 'react'
import PersonalInformation from '../components/Home/PersonalInformation'
import ClassInformation from '../components/Home/ClassInformation'
import SchoolInformation from '../components/Home/SchoolInformation'

export default function Home() {
  return (
    <div className='w-full'>

      <>
        <PersonalInformation />

        <ClassInformation />

        <SchoolInformation />

      </>

    </div>

  )
}
