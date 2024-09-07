import React from 'react';
import Link from 'next/link';
import Links from './links/Links';
import RegisterButton from './RegisterButton';

export default function MobileNavbar() {
    return (
        <div className="absolute top-20 left-0 w-full z-40">
            <div className="p-5 bg-black border rounded shadow-sm">
                {/* <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <a
                                                    href="/"
                                                    aria-label="Unleash"
                                                    title="Unleash"
                                                    className="inline-flex items-center"
                                                >
                                                    <svg
                                                        className="w-8 text-deep-purple-accent-400"
                                                        viewBox="0 0 24 24"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeMiterlimit="10"
                                                        stroke="currentColor"
                                                        fill="none"
                                                    >
                                                        <rect x="3" y="1" width="7" height="12" />
                                                        <rect x="3" y="17" width="7" height="6" />
                                                        <rect x="14" y="1" width="7" height="6" />
                                                        <rect x="14" y="11" width="7" height="12" />
                                                    </svg>

                                                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                        Unleash 2024
                                                    </span>
                                                </a>
                                            </div>

                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div> */}

                <nav>
                    <ul className="space-y-2 z-40 md:flex md:items-center sm:flex sm:items-center transition-all duration-500 ease-in">
                        <Links />

                        <div className='flex item-center justify-center pt-6'>
                            <RegisterButton>
                                <span className='text-center'>Register Now</span>
                            </RegisterButton>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
