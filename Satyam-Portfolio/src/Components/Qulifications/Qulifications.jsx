import React from 'react'
import QulificationsCard from './QulificationCard'
import q1 from '../../assets/ram.jpeg'
import q2 from '../../assets/oxf.jpeg'
const Qulifications = () => {
  return (
    <div id='Qulifications' className='p-10 md:p-24 text-white '>
        <span className='text-xl text-purple-600 md:text-2xl font-semibold leading-normal'>What I have done so far</span>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Qualifications</h1>
        <div className='py-12 px-8 flex  flex-wrap gap-5 justify-center'>
            <QulificationsCard title="B.Tech | Computer Science & Engineering" main="Rameshwaram Institute Of Technology And Management | Lucknow" year="2020-2024" ram={q1} />
            <QulificationsCard title="Senior Secondary School | CBSE" main="Oxford Public School | Gorakhpur" year="2018-2020" ram={q2}/>
            <QulificationsCard title="Secondary School | CBSE" main="Oxford Public School | Gorakhpur" year="2016-2018" ram={q2}/>
        </div>
    </div>
  )
}

export default Qulifications