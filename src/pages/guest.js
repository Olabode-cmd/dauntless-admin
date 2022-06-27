import React, { useState, useEffect } from "react";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { FaHandshake, FaDollarSign, FaMobileAlt } from "react-icons/fa";
import Navbar from '../components/navbar';
import Footer from '../components/footer'
import { signOut, useSession } from 'next-auth/react'

import Stack from '@mui/material/Stack';
import { Server } from './api/lib/service';


function Guest () {
    // const [data, setData] = useState([...props.cards]);


    return (
        <div>
            <Navbar />

            <section className="bg-slate-100 dark:bg-slate-900 pt-16">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl dark:text-slate-100 text-zinc-900">
                            <span className="text-yellow-400">Dauntless</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 text-zinc-900 dark:text-slate-400">Trade as Guest</p>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-112 xl:h-112 2xl:h-128">
                        <img src="images/about-img.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded" />
                    </div>
                </div>
            </section>

            <section className="bg-slate-200 py-6 dark:bg-slate-800  px-4 md:px-4">
                <div className="container flex items-center justify-center mx-auto lg:flex-row lg:justify-between">
                    <div className="w-full lg:w-7/12 justify-center p-6 mt-8 lg:mt-0" data-aos="fade-up" data-aos-duration="1200">
                        <div className="w-full rounded p-8 sm:p-6">
                            <p className="text-2xl font-bold leading-7 text-center text-slate-900 dark:text-slate-100 l-height">Trade</p>
                            <form action="" method="post">
                                <div className="md:flex items-center mt-12">
                                    <div className="w-full md:w-1/2 flex flex-col">
                                        <label className="font-semibold leading-none text-slate-800 dark:text-slate-100">Email</label>
                                        <input type="email" className="leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" />
                                    </div>
                                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                        <label className="font-semibold leading-none text-slate-800 dark:text-slate-100">Select Card</label>
                                        {/* <input type="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" /> */}
                                        <select name="cards" id="card" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded">
                                            <option selected>iTunes</option>
                                            <option>ebay</option>
                                            <option>Bart</option>
                                            <option>Lisa</option>
                                            <option>Maggie</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="md:flex items-center mt-12">
                                    <div className="w-full md:w-1/2 flex flex-col">
                                        <label className="font-semibold leading-none text-slate-800 dark:text-slate-100">Card Type</label>
                                        <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded">
                                            <option selected>Ecode</option>
                                            <option>Physical</option>
                                        </select>
                                    </div>
                                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                        <label className="font-semibold leading-none text-slate-800 dark:text-slate-100">Card Currency</label>
                                        <input type="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" />
                                    </div>
                                </div>
                                <div className="md:flex items-center mt-8">
                                    <div className="w-full flex flex-col">
                                        <label className="font-semibold leading-none text-slate-800 dark:text-slate-100">Subject</label>
                                        <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" />
                                    </div>

                                </div>
                                <div>
                                    <div className="w-full flex flex-col mt-8">
                                        <label className="font-semibold leading-none text-slate-800 dark:text-slate-100">Message</label>
                                        <textarea type="text" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 border-0 rounded resize-none"></textarea>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        Send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12" data-aos="fade-up" data-aos-delay="300">
                        <div className="lg:ml-2">
                            <div className="overflow-x-auto">
                                <table className="table w-full">

                                    <thead>
                                        <tr>
                                            <th>Total Amount</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>5</td>
                                            <td>$1500</td>
                                        </tr>

                                        <tr>
                                            <td>5</td>
                                            <td>$1500</td>
                                        </tr>

                                        <tr>
                                            <td>5</td>
                                            <td>$1500</td>
                                        </tr>

                                        <tr>
                                            <td>5</td>
                                            <td>$1500</td>
                                        </tr>

                                        <tr>
                                            <td>5</td>
                                            <td>$1500</td>
                                        </tr>

                                        <tr>
                                            <td>8</td>
                                            <td>$1500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Guest