import UnleashHero from '@/components/hero/UnleashHero';
import React from 'react';
import "@/app/(unleash)/unleash/unleash.css";
import * as i from '@iconscout/react-unicons';
import Image from 'next/image';

export default function Unleash() {
    return (
        <main>
            {/* Welcome banner for Unleash */}

            {/* <header class="site-header">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 d-flex flex-wrap">
                            <p class="d-flex me-4 mb-0">
                                <i.UilUser size="20" className="inline-block mb-1 mr-3 items-center custom-icon" />
                                <strong class="text-dark">Welcome to Music Festival 2023</strong>
                            </p>
                        </div>

                    </div>
                </div>
            </header> */}

            <section className="hero-section" id="section_1">
                <div className="section-overlay"></div>

                <div className="container flex justify-center items-center mx-auto">
                    <div className="row">

                        <div className="col-12 mt-auto mb-5 text-center">
                            <small>Leaders Quarters Presents</small>

                            <h1 className="text-white mb-5">UNLEASH
                                <br /> Leadership Bootcamp 2024:
                                <br /> Timeless Impact</h1>

                            <p>Join us this December for an unforgettable experience that will empower the next generation of leaders to create a lasting impact.</p>

                            <a className="btn custom-btn smoothscroll" href="#section_2">Register</a>
                        </div>

                        <div className="flex flex-col justify-between lg:flex-row text-center">
                            <div className="date-wrap">
                                <h5 className="text-white">
                                    <i.UilClockEight size="20" className="inline-block mr-3 mb-1.5 items-center custom-icon" />
                                    10 - 12<sup>th</sup>, Dec 2024
                                </h5>
                            </div>

                            <div className="location-wrap mx-auto py-3 lg:py-0">
                                <h5 className="text-white">
                                    <i.UilMapMarker size="20" className="inline-block mr-3 mb-1.5 custom-icon" />
                                    National Center, Lagos, NG
                                </h5>
                            </div>

                            <div className="social-share">
                                <ul className="social-icon flex items-center justify-center">
                                    <span className="text-white me-3">Share:</span>

                                    <li className="social-icon-item">
                                        <a href="#" className="social-icon-link">
                                            <span className="bi-facebook"></span>
                                        </a>
                                    </li>

                                    <li className="social-icon-item">
                                        <a href="#" className="social-icon-link">
                                            <span className="bi-twitter"></span>
                                        </a>
                                    </li>

                                    <li className="social-icon-item">
                                        <a href="#" className="social-icon-link">
                                            <span className="bi-instagram"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="video-wrap">
                    <video autoplay="" loop="" muted="" className="custom-video" poster="">
                        <source src="../../../public/videoDemo.mp4" type="video/mp4" />

                        Your browser does not support the video tag.
                    </video>
                </div> */}
            </section>


            <section className="about-section section-padding" id="section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 mb-4 mb-lg-0 flex items-center">
                            <div className="services-info">
                                <h2 className="text-white mb-4">About Festava 2022</h2>

                                <p className="text-white">Festava Live is free CSS template provided by TemplateMo website. This
                                    layout is built on Bootstrap v5.2.2 CSS library. You are free to use this template for
                                    your commercial website.</p>

                                <h6 className="text-white mt-4">Once in Lifetime Experience</h6>

                                <p className="text-white">You are not allowed to redistribute the template ZIP file on any other
                                    website without a permission.</p>

                                <h6 className="text-white mt-4">Whole Night Party</h6>

                                <p className="text-white">Please tell your friends about our website. Thank you.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="about-text-wrap">
                                <img src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=600" className="about-image img-fluid" />

                                <div className="about-text-info d-flex">
                                    <div className="d-flex">
                                        <i className="about-text-icon bi-person"></i>
                                    </div>


                                    <div className="ms-4">
                                        <h3>a happy moment</h3>

                                        <p className="mb-0">your amazing festival experience with us</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
