"use client"

import React, { useState } from 'react';
import Button from './RegisterButton';
import Image from 'next/image';
import { List, X } from 'react-bootstrap-icons';
import logo from "@/assets/images/lq-logo-0.png";

export default function Nav() {
    const Links = [
        { name: "Home", link: "/" },
        { name: "About us", link: "/about" },
        { name: "Services", link: "/service" },
        { name: "Events", link: "/events" },
        { name: "Contact", link: "/contact" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='shadow-md w-full fixed top-0 left-0 nav-container'>
                <div className='md:flex items-center justify-between bg-white py-3 md:px-10 px-7 bg-transparent'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                        <span className="items-center text-3xl text-indigo-600 mr-1">
                            <Image src={logo} alt='logo' className="w-10 h-10 hover:scale-100 transition-all" />
                        </span>

                        <span className="pl-1 text-base/4">
                            RemoteTribe <br />
                            Africa
                        </span>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-center font-semibold text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        {/* <ion-icon name=></ion-icon> */}
                        {open ? <X /> : <List />}
                    </div>

                    <ul className={`font-[Poppins] z-40 md:flex md:items-center items-center md:pb-0 pb-8 absolute md:static bg-white md:z-40 z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-17' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='text-center md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                                </li>
                            ))
                        }

                        <div className='flex item-center justify-center'>
                            <Button>
                                <span className='text-center'>Register</span>
                            </Button>
                        </div>
                    </ul>
                </div>
            </div >
        </>
    )
}
