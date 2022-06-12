import React from "react";
import { useTheme } from 'next-themes'
import { FiSunrise, FiMoon, FiMenu } from 'react-icons/fi'
import { AiFillAndroid, AiFillApple, AiOutlineCheck } from "react-icons/ai";
import Navbar from '../components/navbar';
import Footer from '../components/footer'

function About () {
    const { theme, setTheme } = useTheme()
    return (
        <div>
            <Navbar />

            <section className="bg-slate-100 dark:bg-slate-900 pt-16">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl dark:text-slate-100 text-zinc-900">
                            <span className="text-yellow-400">Dauntless</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 text-zinc-900 dark:text-slate-400">About Us</p>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-112 xl:h-112 2xl:h-128">
                        <img src="images/about-img.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded" />
                    </div>
                </div>
            </section>

            <section className="bg-slate-200 dark:bg-slate-800 dark:text-coolGray-100 mb-8">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-zinc-900 dark:text-slate-200">About Dauntless</h2>
                        {/* <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-yellow-400">Dauntless is </p> */}
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-yellow-400">Ad vix debet docendi</h3>
                            <p className="mt-6 space-y-12 text-slate-800 dark:text-slate-200">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at similique nam fugit culpa tenetur.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, fugit voluptates.
                                Commodi earum doloribus at ducimus aliquid deserunt dicta voluptate ea consequatur id.
                            </p>
                            <p className="mt-6 space-y-12 text-slate-800 dark:text-slate-200">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at similique nam fugit culpa tenetur.
                                Commodi earum doloribus at ducimus aliquid deserunt dicta voluptate ea consequatur id.
                            </p>
                            <p className="mt-6 space-y-12 text-slate-800 dark:text-slate-200">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at similique nam fugit culpa tenetur.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, fugit voluptates.
                                Commodi earum doloribus at ducimus aliquid deserunt dicta voluptate ea consequatur id.
                            </p>
                            
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://source.unsplash.com/random/360x480" alt="image" className="mx-auto rounded-lg shadow-lg dark:bg-coolGray-500" />
                        </div>
                    </div>
                    <div>
                    
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About