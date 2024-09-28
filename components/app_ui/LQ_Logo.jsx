import React from 'react';
import Image from 'next/image';
import mainLogo from "@/app/assets/images/LQ_logo.png";

export default function LQ_Logo() {
    return (
        <Image src={mainLogo} alt='LQ Logo'
            className='hover:scale-100'
        />
    )
}
