import React from 'react'
import ProjectCard from './ProjectCard'
import pr1 from '../../assets/Project1.png'
import pr2 from '../../assets/Project2.jpeg'
import pr3 from '../../assets/Project3.png'
import pr4 from '../../assets/Project4.png'
const Projects = () => {
  return (
    <div id='Project' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <span className='text-xl text-purple-600 md:text-2xl font-semibold leading-normal'>My latest project is here</span>
        <div className='py-12 px-8 flex  flex-wrap gap-5'>
            <ProjectCard title="Portfolio" main="My Personal portfolio website using React.js and taillwind." imageUrl={pr1} />
            <ProjectCard title="Inventory Management System" main="This is a Inventory Management System using  Python." imageUrl={pr2} />
            <ProjectCard title="Currency Convector" main="This is a Currency Convector websit using React.js and taillwind." imageUrl={pr3}/>
            <ProjectCard title="Password Generator" main="This is a Password Generator websit using React.js and taillwind." imageUrl={pr4}/>
        </div>
    </div>
  )
}

export default Projects