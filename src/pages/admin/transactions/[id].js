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

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <AdminLayout>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg text-center font-bold leading-6 text-gray-900"
                                >
                                    Query Trade
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-center text-gray-500">
                                        Why do you want to query this trade? Kindly fill in the answers below
                                    </p>
                                    <div className="text-center my-2">
                                        <textarea className="w-full h-24 resize-none rounded p-2" placeholder="What is your query about?" />
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <button
                                        type="button"
                                        className="inline-flex mx-2 justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Cancel Query
                                    </button>

                                    <button
                                        type="button"
                                        className="inline-flex mx-2 justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>

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
                                Upload Receipt
                            </button>

                            <button type="button"
                                onClick={openModal}
                                className="inline-flex mx-1 items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                                Query Transactions
                            </button>

                            <button
                                type="button"
                                className="inline-flex mx-1 items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-400 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                            >
                                Fault Transactions
                            </button>
                        </div>
                    </div>

                </div>

            </div>



        </AdminLayout>
    );
}
