import React from 'react'
import singh from "../../assets/satyam.jpeg"
import { FaAngleRight } from 'react-icons/fa'
const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10 items-center' >
        <h1 className='taxt-3xl md:text-6xl font-bold flex mb-4 leading-normal tracking-tighter'>Hello' I am  </h1>
        <span className='text-purple-600 tracking-tighter mt-1 taxt-3xl md:text-6xl font-bold'> Satyam Singh </span> 
        <p className='text-sm md:text-2xl tracking-tight mt-5'>
            And I am a passionated Web Developer
        </p>
        <a href="https://drive.google.com/file/d/1wECaWkbLc0vsKoonQ45sFalEjYVfo3Yf/view?usp=drivesdk" download={true} className='w-[110px] h-[44px] flex items-center group font-semibold mt-7 rounded-3xl bg-[#465697] '><button className='flex ml-5'>Resume <span className='py-1 ml-2 group-hover:rotate-90 hover:text-purple-600 duration-200 bg-[#465697]'> <FaAngleRight className='bg-[#465697]' /></span></button></a>
      </div>
      <div className=' justify-end md-10 '>
        <img className='w-2/4 justify-center ' src={singh} alt="" />
      </div>
    </div>
  )
}

export default Home