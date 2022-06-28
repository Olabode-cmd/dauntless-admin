// import Content from '../components/content';
import React, { useState, useEffect } from 'react';
import Breadcumb from '../../components/breadcumb';
import AgentLayout from '../../dashboard/AgentLayout';
import MaterialTable, { Column } from "@material-table/core";
import Visibility from '@material-ui/icons/Visibility'
import { Tab } from '@headlessui/react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { AiFillAndroid, AiFillApple, AiFillCamera } from "react-icons/ai";
import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Approve = () => {
    

    return (
        <AgentLayout>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Request Withdrawal'} />
                    <div className="px-2 sm:px-0">
                        <flex className="flex-wrap">
                            <div className="w-full lg:w-7/12">
                                <form action="" method="post">
                                    <div className="md:flex items-center mt-12">
                                        <div className="w-full md:w-1/2 flex flex-col">
                                            <label className="font-semibold text-sm leading-none text-slate-800 dark:text-slate-100">Bank</label>
                                            <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded">
                                                <option selected>UBA</option>
                                                <option>Zenith Bank</option>
                                                <option>First Bank</option>
                                                <option>Access Bank</option>
                                            </select>
                                        </div>
                                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                            <label className="font-semibold text-sm leading-none text-slate-800 dark:text-slate-100">Account Number</label>
                                            <input type="number" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" />
                                        </div>
                                    </div>
                                    <div className="md:flex items-center mt-12">
                                        <div className="w-full md:w-1/2 flex flex-col">
                                            <label className="font-semibold text-sm leading-none text-slate-800 dark:text-slate-100">Account Name</label>
                                            <input type="text" value="First and Last Name" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" disabled />
                                        </div>
                                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                            <label className="font-semibold text-sm leading-none text-slate-800 dark:text-slate-100">Amount</label>
                                            <input type="number" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 text-slate-900 dark:text-gray-50 bg-slate-200 dark:bg-gray-600 rounded" />
                                        </div>
                                    </div>

                                    <div className="flex w-full">
                                        <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                            Request Withdrawal
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </flex>
                    </div>

                </div>
            </div>

        </AgentLayout>
    );
}

export default Approve;
