import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const ContactLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    <MdOutlineEmail size={30} /> <span className='ml-5'>satyamsingh50844@gmail.com</span>
                </>
            ),
            href: 'mailto:satyamsingh50844@gmail.com',

        },
        {
            id: 2,
            child: (
                <>
                    <FaLinkedin size={30} /> <span className='ml-5'>satyam-singh-17a4b2207</span>
                </>
            ),
            href: 'https://www.linkedin.com/in/satyam-singh-17a4b2207',
            style: 'rounded-tr-md'
        },

        {
            id: 3,
            child: (
                <>
                    <FaGithubSquare size={30} /> <span className='ml-5'>Satyam-singh73</span>
                </>
            ),
            href: 'https://github.com/Satyam-singh73',

        },

        {
            id: 4,
            child: (
                <>
                    <SiLeetcode size={30} /> <span className='ml-5'>Satyamsingh73</span>
                </>
            ),
            href: 'https://leetcode.com/u/Satyamsingh73/',

        },

        {
            id: 5,
            child: (
                <>
                    <FaPhoneAlt size={30} /> <span className='ml-5'>7317664974</span>
                </>
            ),
            href: 'tel:+7317664974',

        },

    ];

    return (
        <div >
            <ul>
                {
                    links.map((link, index) => {
                        return (<li key={link.id} className='
                       bg-[#171d32] mt-1 text-sm md:text-xl items-center'>
                            <a href={link.href}
                                className='flex'>{link.child} </a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ContactLinks