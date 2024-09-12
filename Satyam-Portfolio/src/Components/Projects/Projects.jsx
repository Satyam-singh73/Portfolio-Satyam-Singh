import React from 'react'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <div id='Project' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <span className='text-xl text-purple-600 md:text-2xl font-semibold leading-normal'>My latest project is here</span>
        <div className='py-12 px-8 flex  flex-wrap gap-5'>
            <ProjectCard title="Portfolio" main="this is a bloging website created in the next js and used some component labirey" />
            <ProjectCard title="Inventory Management System" main="this is a bloging website created in the next js and used some component labirey" />
            <ProjectCard title="bloging Website" main="this is a bloging website created in the next js and used some component labirey" />
        </div>
    </div>
  )
}

export default Projects