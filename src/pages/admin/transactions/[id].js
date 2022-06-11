// import Content from '../components/content';
import Breadcumb from '../../../components/breadcumb';
import { RiBankFill } from 'react-icons/ri'
import { FiUserPlus, FiDollarSign, FiActivity, FiEye } from 'react-icons/fi'
import AdminLayout from '../../../dashboard/AdminLayout';
import { Dialog, Transition } from '@headlessui/react'
// import {} from 'react'
import React, { Fragment, useState } from 'react'
// import "daisyui";
// import { Helmet } from "react-helmet"

export default function Id() {
    const role = ['seun', 'tope', 'sade',];
    const days = ["24 hrs ago", "A week ago", "A month ago", "A year ago"];

    const [isOpen, setIsOpen] = useState(false)


    return (
        <AdminLayout>

            <div className="modal" id="my-modal-2">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-yellow-400">Query Trade.</h3>
                    <p className="py-4">Kindly say why you want to query this trade.</p>
                    <div className="form">
                        <textarea className="w-full rounded py-2 px-3 resize-none h-36"></textarea>
                    </div>
                    <div className="modal-action flex">
                        <a href="#" className="btn bg-red-600 mx-1 text-slate-100 transition">Cancel</a>
                        <a href="#" className="btn bg-green-600 mx-1 text-slate-100 hover:bg-green-800 transition">Submit</a>
                    </div>
                </div>
            </div>

            <div className="modal" id="my-modal-1">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Fault Trade</h3>
                    <p className="py-4">Kindly say why you want to fault this trade</p>
                    <div className="form">
                        <textarea className="w-full rounded py-2 px-3 resize-none h-36"></textarea>
                    </div>
                    <div className="modal-action">
                        <a href="#" className="btn bg-red-600 mx-1 text-slate-100 transition">Cancel</a>
                        <a href="#" className="btn bg-green-600 mx-1 text-slate-100 hover:bg-green-800 transition">Submit</a>
                    </div>
                </div>
            </div>


            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 pt-6 pb-24 bg-gray-300 dark:bg-gray-800 px-6 rounded-3xl">
                    <Breadcumb title={'Withdrawal'} />

                    <div className="flex-col h-full flex justify-between">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 mx-3">
                                
                                <div className="bg-yellow-50 flex justify-between items-center p-3 rounded-sm shadow-sm">
                                    <div className="flex justify-start items-center gap-2">
                                        <RiBankFill color={'gold'} size={20} />
                                        <div>
                                            <p className="text-gray-700 font-bold tracking-wider pr-2">
                                                Guaranty Trusted Bank
                                            </p>
                                            <p className="text-gray-400 text-sm">0232882872</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="w-full lg:w-4/12 mx-3">

                                <div className="bg-yellow-50 flex justify-between items-center p-3 rounded-sm shadow-sm">
                                    <div className="flex justify-start items-center gap-2">
                                        <FiDollarSign color={'gold'} size={20} />
                                        <div>
                                            <p className="text-gray-700 font-bold tracking-wider pr-2">
                                                Wallet Balance
                                            </p>
                                            <p className="text-gray-400 text-sm">2,500</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="w-full lg:w-3/12 mx-3">

                            </div>
                        </div>

                        <div className="receipt w-full lg:w-2/12">
                            <img src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="card image" />
                        </div>


                        <div className="flex justify-between">

                            <button type="button" className="inline-flex mx-1 items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-400 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                                Upload Receipts
                            </button>

                            <a href="#my-modal-2" type="button"
                                className="inline-flex mx-1 items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                                Query Transactions
                            </a>

                            <a href="#my-modal-1" type="button"
                                className="inline-flex mx-1 items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-400 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                            >
                                Fault Transactions
                            </a>
                        </div>
                    </div>

                </div>

            </div>



        </AdminLayout>
    );
}
