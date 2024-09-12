import React from 'react'
import Certificatescard1 from './Certificatescard1'
import Certificatescard2 from './Certificatescard2'
const Certificates = () => {
  return (
    <div id='Certificates' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Certificates</h1>
        <span className='text-xl text-purple-600 md:text-2xl font-semibold leading-normal'>My latest Certificates is here</span>
        <div className='py-12 px-8 flex  flex-wrap gap-5'>
            <Certificatescard1 title="Python"/>
            <Certificatescard2 title="Putor@IITK"/>
        </div>
    </div>
  )
}

export default Certificates