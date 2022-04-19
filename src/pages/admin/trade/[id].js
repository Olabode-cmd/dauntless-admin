// import Content from '../components/content';
import Breadcumb from '../../../components/breadcumb';
import Statistics from '../../../components/statistics';
import AreaChart from '../../../components/chart';
import DoughnutChart from '../../../components/donut';
import DropdownRender from '../../../components/dropdown';
import { FiUserPlus, FiDollarSign, FiActivity, FiEye } from 'react-icons/fi'
import AdminLayout from '../../../dashboard/AdminLayout';
import { Dialog, Transition } from '@headlessui/react'
// import {} from 'react'
import React, { Fragment, useState } from 'react'
// import "daisyui";
// import { Helmet } from "react-helmet"

export default function HomePage() {
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
                <div className="w-full lg:w-8/12 pt-6 pb-24 bg-gray-300 dark:bg-gray-800 px-6 rounded-3xl">
                    <Breadcumb title={'Trade'} />
                    
                    <div className="flex-col h-full flex justify-between">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-3/12 mx-3">
                                <img src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="card image"/>
                            </div>

                            <div className="w-full lg:w-3/12 mx-3">
                                <img src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="card image" />
                            </div>

                            <div className="w-full lg:w-3/12 mx-3">
                                <img src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="card image" />
                            </div>
                        </div>

              {/* <a href="#my-modal-2" className="btn">Open modal</a> */}
            

                        <h5 className="text-slate-400 font-bold">Status: <span className="text-slate-100 font-normal">Trade incomplete</span></h5>

                        <div className="flex justify-between">
                            <button type="button" className="inline-flex mx-1 items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-400 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                                Confirm Trade
                            </button>
                            
                            <a href="#my-modal-2" type="button"
                                 className="inline-flex mx-1 items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                                Query Trade
                            </a>

                            <a href="#my-modal-1" type="button"
                                className="inline-flex mx-1 items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-400 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                            >
                                Fault Trade
                            </a>
                        </div>
                    </div>
                    
                </div>

                <div className="w-full mt-8 lg:mt-0 lg:w-3/12 lg:pl-4 bg-gray-300 dark:bg-gray-800 rounded-3xl px-6 mx-4">
                    <div className="max-w-sm pb-5 mx-auto mt-4 overflow-hidden rounded-lg shadow-lg bg-slate-700">
                        <div className="h-40 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
                            <div className="flex justify-center">
                                <span className="mt-10 text-4xl font-extrabold text-white">Tony Stark</span>
                            </div>
                            <div className="flex justify-center">
                            <img className="object-cover w-24 h-24 mt-4 border-4 border-blue-600 rounded-full" src="https://im.indiatimes.in/content/2019/Jun/marvel_fans_start_a_petition_to_demand_robert_downey_jr_aka_tony_stark_aka_iron_man_back_1559715390_725x725.jpg" />
                            </div>
                        </div>
                        <div className="px-6 py-4 bg-slate-200">
                            <div className="flex justify-center mt-10 mb-4 text-xl font-medium"></div>
                            <div className="flex w-full text-gray-600 text-center">
                                
                                <div className="font-bold"> Trade 001</div>
                            </div>

                            <div className="flex my-1 text-gray-600">
                                <div>Total Amount: <span className="font-bold">$450</span> </div>
                            </div>

                            <div className="flex text-gray-600">
                                <div>Comment: <span className="font-bold">Fast Payout</span></div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-2">
                            <button type="button" className="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                                View Profile
                            </button>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

            </div>


           
        </AdminLayout>
    );
}
