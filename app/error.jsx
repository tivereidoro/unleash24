'use client';

import Link from 'next/link';
import React from 'react'

export default function error() {
    return (
        <div>
            An error occured here.

            Go back <Link href={"/"}>Home</Link>
        </div>
    )
}
