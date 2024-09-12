import React from 'react'
import Qulificationscard1 from './Qulificationscard1'
import Qulificationscard2 from './Qulificationscard2'
const Qulifications = () => {
  return (
    <div id='Qulifications' className='p-10 md:p-24 text-white '>
        <span className='text-xl text-purple-600 md:text-2xl font-semibold leading-normal'>What I have done so far</span>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Qulifications</h1>
        <div className='py-12 px-8 flex  flex-wrap gap-5 justify-center'>
            <Qulificationscard1 title="B.Tech | Computer Science & Engineering" main="Rameshwaram Institute Of Technology And Management | Lucknow" year="2020-2024"  />
            <Qulificationscard2 title="Senior Secondary | CBSE" main="Oxford Public School | Gorakhpur" year="2019-2020" />
            <Qulificationscard2 title="Secondary | CBSE" main="Oxford Public School | Gorakhpur" year="2017-2018" />
        </div>
    </div>
  )
}

export default Qulifications