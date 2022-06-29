import React, { useState, useEffect } from "react";
import { AiFillAndroid, AiFillApple, AiFillCamera } from "react-icons/ai";
import { FaHandshake, FaDollarSign, FaMobileAlt } from "react-icons/fa";
import Navbar from '../components/navbar';
import Footer from '../components/footer'
import { signOut, useSession } from 'next-auth/react'

import Stack from '@mui/material/Stack';
import { Server } from './api/lib/service';


function Guest({ cards, cardType }) {
    const { session: session, status } = useSession();
    const [data, setData] = useState([]);
    const [type, setType] = useState([]);

    const [brand, setBrand] = useState('')

    useEffect(() => {
        setData(cards);
    }, []);

    const cardBrandSelect = async (event) => {
        setBrand(event.target.value);
        const cardType = data.filter((card) => card.id == event.target.value);
        console.log(cardType)
        setType(cardType);
    }

    // Forms Preview
    const [email, setEmail] = useState("hi");
    const changeEmail = (e) => {
        // let newEmail = e.target.value;
        setEmail(e.target.value);
        console.log(setEmail)
        // setEmail("hey")

    }


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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-start justify-center mx-auto lg:justify-between">
                    <div className="justify-center p-6 mt-8 lg:mt-0 inline-block" data-aos="fade-up" data-aos-duration="1200">
                        <div className="w-full rounded p-8 sm:p-6">
                            <p className="text-2xl font-bold leading-7 text-center text-slate-900 dark:text-slate-100 l-height">Trade</p>
                            <form action="" method="post">
                                <div className="md:flex items-center mt-12">

                                    <div className="w-full md:w-1/2 flex flex-col m-1">
                                        <label className="font-semibold leading-none text-slate-800 dark:text-slate-100">Email</label>
                                        <input type="email" className="leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" 
                                            onChange={(e) => changeEmail(e)} />
                                    </div>

                                    <div className="w-full md:w-1/2 flex flex-col m-1">
                                        <label className="font-semibold leading-none text-slate-800 dark:text-slate-100">Select Card</label>
                                        {/* <input type="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" /> */}
                                        <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded"
                                            value={brand}
                                            onChange={(e) => cardBrandSelect(e)}>
                                            <option selected>Select a card</option>
                                            {
                                                data.map((item, index) => {
                                                    return <option key={index} value={item.id}>{item.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="md:flex items-center mt-12 w-full">

                                    <div className="w-full md:w-1/2 flex flex-col m-1">
                                        <label className="font-semibold text-slate-800 dark:text-slate-100">Card Type</label>
                                        <select className=" w-full text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded">
                                            <option selected>Ecode</option>
                                            <option>Physical</option>
                                        </select>
                                    </div>

                                    <div className="w-full md:w-1/2 flex flex-col m-1">
                                        <label className="font-semibold text-slate-800 dark:text-slate-100">Card Currency</label>
                                        <input type="email" className="text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" />
                                    </div>
                                </div>

                                <div className="md:flex items-center mt-12">
                                    <div className="w-full md:w-1/2 flex flex-col m-1">
                                        <label className="font-semibold text-slate-800 dark:text-slate-100">Amount</label>
                                        <input type="text" className="text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" />
                                    </div>
                                    <div className="w-full md:w-1/2 flex flex-col m-1">
                                        <label className="font-semibold text-slate-800 dark:text-slate-100">Number of Cards</label>
                                        <input type="text" className="text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" />
                                    </div>

                                    <div className="w-full md:w-1/2 flex flex-col m-1 hidden">
                                        <label className="font-semibold text-slate-800 dark:text-slate-100">Enter E-code Value</label>
                                        <input type="text" className="text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" />
                                    </div>
                                </div>

                                <div className="md:flex items-center mt-8">
                                    <div className="w-full flex flex-col">
                                        <label className="font-semibold leading-none text-slate-800 dark:text-slate-100">Image</label>
                                        <input type="file" id="file-upload" className="hidden" />
                                        <label for="file-upload" className="bg-slate-200 dark:bg-gray-600 mt-4 py-4 rounded z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                                                <p className="z-10 text-xs font-light text-center text-slate-100">Upload Image</p>
                                                <AiFillCamera className="z-10 w-8 h-8 text-indigo-400" size={40} />
                                        </label>
                                    </div>

                                </div>
                                <div>
                                    <div className="w-full flex flex-col mt-8">
                                        <label className="font-semibold leading-none text-slate-800 dark:text-slate-100">Leave an Instruction</label>
                                        <textarea type="text" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 border-0 rounded resize-none"></textarea>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {
                        type.length > 0 && (
                            <div className="cards mt-3 lg:mt-16">
                                <span className="cardName mb-6 block text-slate-800 dark:text-slate-200 text-2xl font-bold">{type[0]?.name}</span>

                                <div className="p-8 space-y-4 rounded-md bg-slate-300 dark:bg-gray-600 flex flex-wrap items-center">
                                    <div className="w-full lg:w-4/12">
                                        <img className="rounded" src={type[0]?.picture} alt="giftcard" />
                                    </div>

                                    <div className="w-full lg:w-7/12 ml-2">
                                        <div className="overflow-x-auto">
                                            <table className="table w-full">

                                                <thead>
                                                    <tr>
                                                        <th>data</th>
                                                        <th>value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* {type[0]?.cardTypes.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{document.getElementById('user_email').value}</td>
                                                                
                                                                <td>{item.rate}/S</td>
                                                            </tr>
                                                        )
                                                    })
                                                    } */}
                                                    <tr>
                                                        <td>Email</td>
                                                        <td>{setEmail}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </div>
    )
}

export default Guest

export async function getServerSideProps(context) {
    const card = await Server.get('/card')
    const cardType = await Server.get('/card/card-type')
    return {
        props: {
            cards: card.data.message,
            cardType: cardType.data.message
        }
    }
}