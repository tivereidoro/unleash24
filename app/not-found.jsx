import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            Page not found.!

            Go back <Link href="/">Home</Link>
        </div>
    )
}
