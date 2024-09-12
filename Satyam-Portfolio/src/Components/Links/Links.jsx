import React from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { SiLeetcode } from "react-icons/si";
import { RiContactsLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Links = () => {

    const links =[
        {
            id:1,
            child:(
                <>
                LinkedIn <AiOutlineLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/satyam-singh-17a4b2207',
            style:'rounded-tr-md'
        },

        
        {
            id:2,
            child:(
                <>
                GIthub <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/Satyam-singh73',
           
        },

        {
            id:3,
            child:(
                <>
                GIthub <SiLeetcode size={30}/>
                </>
            ),
            href:'https://github.com/Satyam-singh73',
           
        },

        {
            id:4,
            child:(
                <>
                Email <MdEmail size={30} />
                </>
            ),
            href:'mailto:satyamsingh50844@gmail.com',
          
        },

        
    ];
            
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>
            {
                links.map((link,index)=>{
                    return(<li key={link.id} className='flex justify-between items-center  w-40 h-14  px-4  ml-[-100px] 
                       bg-[#0c0e19]  '>
                        <a href={link.href}
                        className='flex justify-between hover:ml-[-10px] duration-500 hover:rounded-md items-center w-full bg-[#0c0e19] text-white m-3'>{link.child} </a></li>  
                    )
                })
            } 
        </ul>
    </div>
  )
}

export default Links