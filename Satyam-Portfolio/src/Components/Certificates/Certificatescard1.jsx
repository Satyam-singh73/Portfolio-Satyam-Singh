import React from 'react'
import cri from "../../assets/cir1.jpeg"
const Certificatescard1 = ({ title}) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-lg shadow-slate-900 rounded-2xl'>
        <img className='p-4 bg-[#0c0e19]' src={cri} alt="" />
        <h6 className='px-4 text-xl bg-[#0c0e19] md:text-sm font-bold leading-normal'>
            {title}
        </h6>
    </div>
  )
}

export default Certificatescard1