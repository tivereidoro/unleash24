import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Unleash2024 from '@/components/banner/Unleash2024';


export default function Header({ menu1 }) {
    return (
        <>
            {/* <Unleash2024 /> */}
            <Navbar menu1={menu1} />
        </>
    )
}
