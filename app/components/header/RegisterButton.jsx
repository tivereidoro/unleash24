import React from 'react'

export default function RegisterButton({ children }) {
    return (
        <button className='items-center bg-[#092a5f] text-white font-[Poppins] py-2 px-4 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
            {children}
        </button>
    )
}
