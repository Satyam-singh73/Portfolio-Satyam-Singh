import React from 'react'
const About = () => {
    return (
        <div id='About' className='text-white overflow-hidden justify-between items-start p-10 md:p-20  shadow-xl'>
            <h2 className='text-2xl md:text-4xl font-bold'>About Me</h2>
            <div>
            <span className='w-96'>
                <h1 className='text-xl text-purple-600 md:text-2xl font-semibold leading-normal'>My Introduction</h1>
                <p className='text-xl md:text-md leading-tight'>hey there, I am satyam Singh a 20 years-old computer science and engineering.Undergrad who is passionate about softwer development. Right now i am look ing for an opportunity
                    where Ican use my skills and can contribute on large project. Currently, I'am focusing on Data
                    structure and algorithms using c++ language and deeping dive in the world of full-stack development
                    using MERN STACK</p>
            </span>
            </div>
        </div>
    )
}
export default About