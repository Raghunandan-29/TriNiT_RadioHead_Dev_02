import React from 'react'
import Card from './Card'
import tutor1 from '../Assets/tutor-1.jpeg'
import tutor2 from '../Assets/tutor2.jpeg'

function Tutors_section() {
  return (
    <div className='flex flex-col mt-6'>
      <div className='text-5xl text-center'>Our Tutors</div>
      <div className='flex mt-12 ml-2 justify-between mr-24'>
        <Card Imgsrc={tutor1}/>
        <Card Imgsrc={tutor2}/>
      </div>      
    </div>
  )
}

export default Tutors_section