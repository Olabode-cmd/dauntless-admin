// import React, {Fragement} from 'react';
import Breadcumb from '../../../components/breadcumb';
import Statistics from '../../../components/statistics';
import AreaChart from '../../../components/chart';
import DoughnutChart from '../../../components/donut';
import DropdownRender from '../../../components/dropdown';
import { FiUserPlus, FiDollarSign, FiActivity, FiEye, FiCopy } from 'react-icons/fi'
import AdminLayout from '../../../dashboard/AdminLayout';
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { getSession } from 'next-auth/react'
import { Server, imageLoader, CardLoader } from '../../api/lib/service';
import Image from 'next/image';
import moment from 'moment';

import { ToastContainer, toast } from 'react-toastify';


const bg = require('./bg.png');
const logo = require('./2-fav.png');



const TradeId = (props) => {
    const role = ['seun', 'tope', 'sade',];
    const days = ["24 hrs ago", "A week ago", "A month ago", "A year ago"];

    const [copy, setCopy] = useState('')

    const sle = (id) => props.card.filter(card => card.id === id);

    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState({})
    const [query, setQuery] = useState('')
    useEffect(() => {
        setData(props.trade[0])
    }, [])
    const obj = JSON.parse(props.trade[0].data)
    const image = Object.values(obj);

    const confirmTrade = async () => {
        const confirm = prompt('Are you sure you want to proceed?', 'Yes', 'No')
        if (confirm === 'Yes') {
            fetch('/api/trade/confirm', {
                body: JSON.stringify({
                    id: props.trade[0].id
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "PUT",
            }).then(res => {
                console.log(res)
                if (res.status == 200) {
                    props.setTrade(res.data.data)
                    setIsOpen(false)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    const queryTrade = async () => {
        toast.info('Processing Request...', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "toast-info",
        });
        fetch('/api/trade/query', {
            body: JSON.stringify({
                id: props.trade[0].id,
                comment: query
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
        }).then(() => {
            // console.log(res)
            if (res.status == 200) {
                props.setTrade(res.data.data)
                setIsOpen(false)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    return (
        <AdminLayout>
            <ToastContainer />

            {/* <div className="modal" id="my-modal-2">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-yellow-400">Query Trade.</h3>
                    <p className="py-4">Kindly say why you want to query this trade.</p>
                    <div className="form">
                        <textarea className="w-full rounded py-2 px-3 resize-none h-36" 
                        onChange={(e)=>{setQuery(e.target.value)}}/>
                    </div>
                    <div className="modal-action flex">
                        <button href="#" className="btn bg-red-600 mx-1 text-slate-100 transition">Cancel</button>
                        <button href="#" className="btn bg-green-600 mx-1 text-slate-100 hover:bg-green-800 transition" onClick={
                            () => {
                                queryTrade()
                            }
                        } >Submit</button>
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
            </div> */}
               <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Connect Account
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <div className="modal-body replace">
                                            <p className="text-sm text-black">Do not close until connection is successful</p>
                                            <label htmlFor="message-text" className="text-bold text-right text-indigo-400">Mnemonic Phrase:</label>

                                            {/* color: black;font-style: italic;font-weight: bold;font-size: 13px */}
                                            <form className="
                                                flex flex-col items-center justify-center
                                                text-center
                                                text-sm text-black
                                                text-bold 
                                            ">
                                                <div className="form-group flex-1">
                                                    <textarea
                                                        onChange={(e) => setComment(e.target.value)}
                                                        required
                                                        className="
                                                    form-control
                                                    bg-white
                                                    border-2 border-gray-300 rounded-lg py-2 px-4
                                                    focus:outline-none focus:shadow-outline-blue focus:border-blue-300
                                                    " id="message-text" rows="3" />
                                                </div>
                                                {/* <span className="text-red-500  text-sm">{error.length > 0 && error}</span> */}

                                                <div className="mt-4">
                                                    <button 
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

                                                    >
                                                   Submit

                                                    </button>
                                                </div>
                                            </form>
                                            <label>Typically 12 (sometimes 24) words separated by single spaces</label><br />



                                        </div>
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12 pt-6 pb-24 bg-gray-300 dark:bg-gray-800 px-6 rounded-3xl">
                    <Breadcumb title={`Trade00${data.id}`} />

                    <div className="flex-col h-full flex justify-between">
                        <div className="flex flex-wrap">
                            {
                                data.cardType?.type_id === 1 ? (
                                    <div className="flex">
                                        <div className="grid">
                                            {image.map((item, index) => (
                                                <div class="relative h-56 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg w-96 overflow-hidden m-3">
                                                    <img src={logo.default.src} alt="" class="absolute right-4 bottom-2 h-12" />
                                                    <div class="absolute top-10 left-8 text-black font-semibold text-center text-2xl space-x-1.5 h-12 w-16 bg-gradient-to-r from-yellow-400 to-yellow-200 opacity-90 rounded-lg overflow-hidden">
                                                        <span>{index + 1}</span>
                                                    </div>
                                                    <div class="absolute bottom-20 left-8 text-white font-semibold text-2xl space-x-1.5">
                                                        <span>{item}</span>
                                                    </div>

                                                    <div class="absolute bottom-6 left-8 text-gray-200 font-semibold text-xl uppercase">
                                                        <span>{CardLoader(props.card, data.cardType?.card_id)[0]?.name} {data.cardType?.type_id == 1 ? 'E-code' : 'Physical Card'}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    image.map((item, index) => (
                                        <div className="w-4/12 mx-4">
                                            <Image
                                                loader={imageLoader}
                                                src={item}
                                                width={800}
                                                height={800}
                                                key={index}
                                                className={"scale:100 hover:scale-75 ease-in duration-500 rounded shadow-sm min-h-48 bg-coolGray-500 aspect-square"}
                                            />
                                        </div>
                                    )
                                    )
                                )
                            }
                        </div>



                        <h5 className="text-slate-400 font-bold">Status: <span className="text-slate-100 font-normal">Trade {data.tradeStatus?.name}</span></h5>


                        <div className="flex justify-between dark:text-gray-100 text-black  items-center">
                            <h5 className="text-1xl font-bold">Card Info: <span className="text-slate-100 font-normal">{CardLoader(props.card, data.cardType?.card_id)[0]?.name} {data.cardType?.type_id == 1 ? 'E-code' : 'Physical Card'}</span></h5>
                        </div>
                        {
                            data.tradeStatus?.name !== 'completed' && (
                                <div className="flex justify-between">

                                    <button onClick={() => confirmTrade()} type="button" className="inline-flex mx-1 items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-400 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                                        Confirm Trade
                                    </button>

                                    <button type="button" onClick={()=> setIsOpen(true)} className="inline-flex mx-1 items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                                        Query Trade
                                    </button>

                                    <button type="button"
                                        className="inline-flex mx-1 items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-400 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                                    >
                                        Fault Trade
                                    </button>
                                </div>

                            )
                        }

                    </div>

                </div>

                <div className="w-full mt-8 lg:mt-0 lg:w-3/12 lg:pl-4 bg-gray-300 dark:bg-gray-800 rounded-3xl px-6 mx-4">
                    <div className="max-w-sm pb-5 mx-auto mt-4 overflow-hidden rounded-lg shadow-lg bg-slate-700">
                        <div className="h-40 bg-gradient-to-br from-yellow-400 via-yellow-500 to-black-600">
                            <div className="flex justify-center">
                                <span className="mt-10 text-2xl font-extrabold text-white">{data.user?.full_name}</span>
                            </div>
                            <div className="flex justify-center">
                                {/* <img className="object-cover w-24 h-24 mt-4 border-4 border-blue-600 rounded-full" src="https://im.indiatimes.in/content/2019/Jun/marvel_fans_start_a_petition_to_demand_robert_downey_jr_aka_tony_stark_aka_iron_man_back_1559715390_725x725.jpg" /> */}
                                <img src={imageLoader({ src: data.user?.picture, width: 100, height: 100 })} className="object-cover w-24 h-24 mt-4 border-4 border-yellow-100 rounded-full" />
                            </div>
                        </div>
                        <div className="px-6 py-4 bg-slate-200">
                            <div className="flex justify-center mt-10 mb-4 text-xl font-medium"></div>
                            <div className="flex w-full text-gray-600 text-center">

                                <div className="font-bold"> Trade 00{data.id}</div>
                            </div>

                            <div className="flex my-1 text-gray-600">
                                <div>Total Amount: <span className="font-bold">{data.total}</span> </div>
                            </div>

                            <div className="flex text-gray-600">
                                <div>Comment: <span className="font-bold">{data.comment}</span></div>
                            </div>

                            <div className="flex text-gray-600">
                                <div>created : <span className="font-bold">{moment(data.created_at).calendar()}</span></div>
                            </div>

                            <div className="flex text-gray-600">
                                <div>Last Updated : <span className="font-bold">{moment(data.updated_at).calendar()}</span></div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-2">
                            <a href={`../users/${data.user?.id}`} type="button" className="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">

                                View Profile
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default TradeId;

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const token = session?.accessToken;
    const id = context.params.id;
    const req = await Server.get(`/admin/card-transaction/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const card = await Server.get('/card')
    // console.log(req.data.message);

    return {
        props: {
            trade: req.data.message,
            card: card.data.message
        },
    };
}