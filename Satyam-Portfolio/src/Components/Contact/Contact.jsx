import React from 'react'
import ContactLinks from './ContactLinks'
function Contact() {
  return (
    <div 
        id='Contact'
        className='flex justify-around bg-[#171d32] text-white p-10 md:p-12 items-center'
    >
        <div>
            <h6 className='text-sm md:text-xl font-semibold'>Satyam | <span className='ml-2 text-purple-600'>Portfolio</span></h6>
            <p className='mt-2'>Thank You for exploring my personal portfolio website.</p>
            <p className=''>Let's connect on social media for more updates.</p>
            <p>Wishimg you continued success.</p>
        </div>
        <ul className='text-sm md:text-xl'>
        <span className='text-xl text-purple-600 md:text-2xl font-semibold leading-normal'>Contact</span>
        <ContactLinks />
        </ul>
    </div>
  )
}

export default Contact