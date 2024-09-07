'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Links from './links/Links';
import Image from 'next/image'
import mainLogo from "@/assets/images/logo40.png";
import { List, X } from 'react-bootstrap-icons';
import MobileNavbar from './MobileNavbar';
import RegisterButton from './RegisterButton';

// blue text - #092a5f
// logo hex - #ff5816

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div>
                <div className="px-5 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <Link
                            href="/"
                            aria-label="LeadersQuarters"
                            title="LQ"
                            className="inline-flex items-center"
                        >
                            <Image src={mainLogo}
                                className='hover:scale-100'
                            />
                        </Link>

                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <Links />
                        </ul>

                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link
                                    href="/register"
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Register"
                                    title="Register"
                                >
                                    <RegisterButton>
                                        Register
                                    </RegisterButton>
                                </Link>
                            </li>
                        </ul>

                        <div className="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition-all duration-200 ease-in rounded focus:outline-none focus:shadow-outline font-bold cursor-pointer"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <div className='text-center'>
                                    {isMenuOpen ? <X size={35} /> : <List size={35} />}
                                </div>
                            </button>

                            {isMenuOpen && (
                                <MobileNavbar />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
