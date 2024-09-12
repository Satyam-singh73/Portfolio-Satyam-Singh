import React from 'react'
import oxf from "../../assets/oxf.jpeg"
const Qulificationscard2 = ({ title, main, year}) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-lg shadow-slate-900 rounded-2xl'>
        <img className='p-4 bg-[#0c0e19]' src={oxf} alt="" />
        <h3 className='px-4 text-xl md:text-1xl bg-[#0c0e19] leading-normal'>
            {title}
        </h3>
        <p className='px-4 text-sm md:text-md leading-tight py-2 bg-[#0c0e19]'>{main}</p>
        <p className='px-4 text-sm md:text-md leading-tight py-2 bg-[#0c0e19]'>{year}</p>
    </div>
  )
}

export default Qulificationscard2