import React from 'react';

export default function LQ_Hero() {
    return (
        <section class="w-full  ">
            {/* Overlay */}
            <div className='absolute top-0 left-0 bg-black/70 z-[2]' />
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">



                {/* <!-- Title --> */}
                <div class="max-w-3xl text-center mx-auto">
                    <h1 class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        UNLEASH Leadership Bootcamp 2024: Timeless Impacts
                    </h1>
                </div>
                {/* <!-- End Title --> */}

                <div class="max-w-3xl text-center mx-auto">
                    <p class="text-lg text-white/70">Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.</p>
                </div>

                {/* <!-- Buttons --> */}
                <div class="text-center">
                    <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6" href="#">
                        Get started
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </a>
                </div>
                {/* <!-- End Buttons --> */}
            </div>
            {/* <!-- End Hero --> */}
        </section>
    )
}
