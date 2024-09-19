import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaSquareGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { RiCollageFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";


const Skills = () => {
  return (
    <div id='Skills' className='p-10 md:p-24'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills</h1>
        <span className='text-xl text-purple-600 md:text-2xl font-semibold leading-normal'>My Technical Skills</span>
        <div className='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
                <div className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiCplusplus color="#1572b6" size={50}/>
                <span className='text-white items-center ml-3'>C++</span>
                </div>
                <div className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaHtml5 color="#E34F26" size={50}/>
                <span className='text-white items-center ml-3'>HTML</span>
                </div>
                <div className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaCss3 color="#1572b6" size={50}/>
                <span className='text-white items-center ml-3'>CSS</span>
                </div>
                <div className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaJsSquare color="#F7DF1E" size={50}/>
                <span className='text-white items-center ml-3'>Javascript</span>
                </div>
                <div className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaReact color="#1572b6" size={50}/>
                <span className='text-white items-center ml-3'>React.js</span>
                </div>
                <div className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <RiTailwindCssFill color="#F24E1E" size={50}/>
                <span className='text-white items-center ml-3'>Tailwind</span>
                </div>
                <div className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <DiMongodb color="#47A248" size={50}/>
                <span className='text-white items-center ml-3'>Mongodb</span>
                </div>
                <div className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaSquareGithub color="#FF4438" size={50}/>
                <span className='text-white items-center ml-3'>Github</span>
                </div>
                <div className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaGitAlt color="#FF4438" size={50}/>
                <span className='text-white items-center ml-3'>Git</span>
                </div>
                <div className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <TbBrandNodejs color="#47A248" size={50}/>
                <span className='text-white items-center ml-3'>Node.js</span>
                </div>
                <div className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiExpress color="#47A248" size={50}/>
                <span className='text-white items-center ml-3'>Express.js</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills