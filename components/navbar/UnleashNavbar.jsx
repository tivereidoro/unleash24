'use client'
// #F1C62E - for the yellow ish
// #1D1771 - blue
import React, { useEffect, useState } from 'react';

import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    ArrowPathIcon,
    ArrowRightStartOnRectangleIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    PencilSquareIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

import Link from 'next/link';
import LQ_Logo from '@/components/app_ui/LQ_Logo';
import Image from 'next/image';
import { PencilSquare } from 'react-bootstrap-icons';


const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function UnleashNavbar() {

    const [header, setHeader] = useState(false);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function scrollHeader() {
        if (window.scrollY >= 18) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);

        return () => {
            window.addEventListener('scroll', scrollHeader);
        }
    }, [])

    return (
        <div className="relative">
            <header className={`fixed top-0 left-0 right-0 w-full z-30 ${header
                    ? 'bg-white text-gray-900'
                    : 'bg-[transparent] text-white'
                }`}>
                <nav aria-label="Global" className="wrapper flex items-center justify-between lg:py-2.5 sm:py-2">

                    {/* LQ logo */}
                    <div className="flex lg:flex-1">
                        <Link
                            href="/"
                            aria-label="LeadersQuarters"
                            title="LQ"
                            className="inline-flex items-center"
                        >
                            <LQ_Logo />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Popover submenu */}
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">

                        {/* Navbar links without dropdown */}
                        <Link href="/unleash/about" className="text-sm font-semibold leading-6">
                            About
                        </Link>

                        <Link href="/unleash/speakers" className="text-sm font-semibold leading-6 ">
                            Speakers
                        </Link>
                        <Link href="/unleash/gallery" className="text-sm font-semibold leading-6 ">
                            Gallery
                        </Link>

                        {/* Menu option with dropdown */}
                        {/* <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 ">
                                Community
                                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none " />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <Link href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover> */}
                    </PopoverGroup>

                    {/* Registration button */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link href="/unleash/register" className="text-sm font-semibold leading-6  bg-indigo-600 text-white font-[Poppins] py-2 px-4 rounded-full md:ml-8 hover:bg-indigo-400 duration-500">

                            <ArrowRightStartOnRectangleIcon width={18} height={18} className='inline-block mr-1.5' />
                            Register for Unleash
                        </Link>
                    </div>
                </nav>

                {/* =========== MOBILE NAVBAR DIALOG */}
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="wrapper sm:py-3 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white md:py-5 md:duration-300 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            {/* Main logo */}
                            <LQ_Logo />

                            {/* Close button */}
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="mt-8 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            Product
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                        </DisclosureButton>

                                        <DisclosurePanel className="mt-2 space-y-2">
                                            {[...products, ...callsToAction].map((item) => (
                                                <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                            ))}
                                        </DisclosurePanel>
                                    </Disclosure>

                                    <Link
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Features
                                    </Link>
                                    <Link
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Marketplace
                                    </Link>
                                    <Link
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Company
                                    </Link>
                                </div>

                                <div className="py-6">
                                    {/* Register button */}
                                    <Link href="https://bit.ly/RemoteTribeAfrica" className="text-sm font-semibold leading-6  bg-indigo-600 text-white font-[Poppins] py-2 px-4 rounded md:ml-0 hover:bg-indigo-400 duration-500">
                                        Join Us &#x23F5;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </div >
    )
}
