import React, { useState } from 'react'
import { RiCloseLine, RiMenu2Line } from '@remixicon/react'
const Navbar = () => {
    const [menu, openMenu] = useState(false)
    const [showMenu, setShowmenu] = useState(true)
    return (
        <nav className=' flex flex-wrap justify-between md:items-center  bg-black text-white px-10 pt-4 md:px-20 '>
            <span className='text-xl font-bold  bg-black tracking-wide'>Satyam Singh</span>
            <ul className={'${ menu ? "block" : "hidden" } mx-24 p-y2 mt-1 pb-6  font-semibold md:mt-5  bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6'}>
                <a href="#About">
                    <li className='text-md transition-all  bg-black duration-300 p-1 md:p-0 hover:text-purple-600'>About</li>
                </a>
                <a href="#Qulifications">
                    <li className='text-md transition-all  bg-black duration-300 p-1 md:p-0 hover:text-purple-600'>Qulifications</li>
                </a>
                <a href="#Skills">
                    <li className='text-md transition-all  bg-black duration-300 p-1 md:p-0 hover:text-purple-600'>Skills</li>
                </a>
                <a href="#Project">
                    <li className='text-md transition-all  bg-black duration-300 p-1 md:p-0 hover:text-purple-600'>Projects</li>
                </a>
                <a href="#Contact">
                    <li className='text-md transition-all  bg-black duration-300 p-1 md:p-0 hover:text-purple-600 '>Contact</li>
                </a>
            </ul>
            {showMenu ? (
                <RiMenu2Line
                    size={30}
                    className="md:hidden absolute right-10 top-6 transition-all duration-300"
                    onClick={() => {
                        openMenu(!menu);
                        setShowmenu(!showMenu);
                    }}
                />
              ) : (
                <RiCloseLine
                    size={30}
                    className="md:hidden absolute right-10 top-6 transition-all duration-300"
                />
            )}
        </nav>
    );
};

export default Navbar