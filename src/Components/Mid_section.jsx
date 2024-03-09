import React from 'react'
import Tutors_section from '../Components/Tutors_section'
function Mid_section() {
  return (
    <div className='flex flex-row'>
        <div className='w-1/4'></div>
        <div className='w-3/4'>
            <Tutors_section/>
        </div>


    </div>
  )
}

export default Mid_section