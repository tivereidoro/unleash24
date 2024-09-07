import Link from 'next/link';
import React from 'react';

export default function Links() {
    const links = [
        {
            title: "Home",
            path: "/",
            ariaLabel: "Unleash 2024"
        },
        {
            title: "About",
            path: "/about",
            ariaLabel: "About Unleash"
        },
        {
            title: "Speakers",
            path: "/speakers",
            ariaLabel: "Speakers"
        },
        {
            title: "Contact",
            path: "/contact",
            ariaLabel: "Contact Us"
        },
    ];

    return (
        <>
            {links.map((
                link => (
                    <li className="flex items-center justify-center pt-2">
                        <Link
                            href={link.path}
                            key={link.title}
                            aria-label={link.ariaLabel}
                            className="pt-2 flex items-center font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                        >
                            {link.title}
                        </Link>
                    </li>
                )
            ))}
        </>
    )
}
