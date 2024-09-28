import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, TwitterX } from 'react-bootstrap-icons';
import footerLogo from '@/app/assets/images/lq-black40.png';

export default function Footer() {
    return (
        <footer className="">
            <div className="relative mt-16 bg-[#092a5f]">
                <svg
                    className="absolute top-0 w-full h-8 -mt-5 sm:-mt-10 sm:h-16 text-[#092a5f]"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 54"
                >
                    <path
                        fill="currentColor"
                        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                    />
                </svg>

                {/* max-w-7xl lg:mx-auto p-5   w-full; */}
                {/* px-4 pb-6 pt-16 sm:px-6 */}
                <div className=" max-w-7xl xl:px-0 md:px-10 w-full px-6 py-6 md:pt-7 pt-10 lg:mx-auto lg:pt-8">
                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">

                        <div className="flex flex-col justify-center">
                            <div className="flex justify-center text-teal-600 sm:justify-start">
                                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-200'>
                                    <Link
                                        href="/"
                                        aria-label="LeadersQuarters"
                                        title="LQ"
                                        className="inline-flex items-center"
                                    >
                                        <Image src={footerLogo} alt='LQ logo'
                                            className='hover:scale-100'
                                        />
                                    </Link>
                                </div>
                            </div>

                            <p className="mt-6 max-w-md text-center lg:text-left leading-relaxed text-gray-400 sm:max-w-xs sm:text-left">
                                Advocating EFFECTIVE leadership
                            </p>

                            <h3 className="text-lg text-center sm:text-left font-medium mt-4 text-gray-400">Follow us:</h3>

                            <ul className="mt-4 lg:mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                                <li>
                                    <Link
                                        href="https://x.com/leaderquarters"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-[#ff5816] transition hover:text-[#ff5816]/60"
                                    >
                                        <span className="sr-only">X</span>
                                        <TwitterX size={25} />
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="https://www.linkedin.com/company/leaders-quarters-lq/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-[#ff5816] transition hover:text-[#ff5816]/50"
                                    >
                                        <span className="sr-only">LinkedIn</span>
                                        <Linkedin size={25} />
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="https://web.facebook.com/leadersquarters"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-[#ff5816] transition hover:text-[#ff5816]/50"
                                    >
                                        <span className="sr-only">Facebook</span>
                                        <Facebook size={25} />
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="https://www.instagram.com/leadersquarters/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-[#ff5816] transition hover:text-[#ff5816]/50"
                                    >
                                        <span className="sr-only">Instagram</span>
                                        <Instagram size={25} />
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        <div className="grid grid-cols-1 pt-6 md:pt-0 lg:pt-0 gap-8 lg:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2 lg:grid-col-3 md:border-0 lg:border-0 border-t border-gray-300">
                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-400">Who Are We</p>

                                <ul className="mt-4 lg:mt-8 space-y-4 text-sm">
                                    <li>
                                        <Link className="text-gray-500 underline transition hover:text-[#ff5816]/75" href="#">
                                            About Us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="text-gray-500 underline transition hover:text-[#ff5816]/75" href="#">
                                            Meet the Team
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="text-gray-500 underline transition hover:text-[#ff5816]/75" href="#">
                                            Success Stories
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="text-gray-500 underline transition hover:text-[#ff5816]/75" href="#"> Community Events </Link>
                                    </li>

                                    <li>
                                        <Link className="text-gray-500 underline transition hover:text-[#ff5816]/75" href="#"> Blog/Resource Library </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-400">Our Services</p>

                                <ul className="mt-4 lg:mt-8 space-y-4 text-sm">
                                    <li>
                                        <Link className="text-gray-500 underline transition hover:text-[#ff5816]/75" href="#">
                                            Remote Job Listings
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="text-gray-500 underline transition hover:text-[#ff5816]/75" href="#">
                                            CV Writing/Review
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="text-gray-500 underline transition hover:text-[#ff5816]/75" href="#">
                                            Live Trainings
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="text-gray-500 underline transition hover:text-[#ff5816]/75" href="#"> Mentorship </Link>
                                    </li>

                                    <li>
                                        <Link className="text-gray-500 underline transition hover:text-[#ff5816]/75" href="#"> Support &amp; Network </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-400">Contact Us</p>

                                <ul className="mt-4 lg:mt-8 space-y-4 text-sm">
                                    <li>
                                        {/* rtl:sm:justify-end */}
                                        <Link
                                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start "
                                            href="#"
                                        >
                                            <span className="flex-1 text-gray-500">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="size-5 shrink-0 inline-block text-gray-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                &nbsp;
                                                contact@leadersquarters.com</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                            href="#"
                                        >
                                            <span className="flex-1 text-gray-500">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="size-5 shrink-0 text-gray-500 inline-block"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    />
                                                </svg>&nbsp;+234 805 247 5173</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-300 pt-6">
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <p className="text-sm text-gray-500">
                                {/* Copyright and privacy policy session */}
                                <Link
                                    className="inline-block text-[#ff5816] underline transition hover:text-[#ff5816]/75"
                                    href="#"
                                >
                                    Terms & Conditions
                                </Link>

                                &nbsp;
                                <span className='m-1 text-white'>&middot;</span>
                                &nbsp;

                                <Link
                                    className="inline-block text-[#ff5816] underline transition hover:text-[#ff5816]/75"
                                    href="#"
                                >
                                    Privacy Policy
                                </Link>
                            </p>

                            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; {new Date().getFullYear()} || Leaders Quarters. &nbsp; All rights reserved.</p>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
