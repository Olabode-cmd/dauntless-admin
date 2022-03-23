// import Content from '../components/content';
import React, { useState, useEffect } from 'react';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
// import AreaChart from '../../components/chart';
import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import AdminLayout from '../../dashboard/AdminLayout';
import { Helmet } from "react-helmet"
import MaterialTable, { Column } from "@material-table/core";
import { Tab } from '@headlessui/react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FiCamera } from 'react-icons/fi';
import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import moment from 'moment';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Input = styled('input')({
    display: 'none',
});

const Index = (props) => {
    const lookup = { true: "Available", false: "Unavailable" };

    const [data, setData] = useState([])
    const [cardType, setCardType] = useState([])


    const columns = [
        {
            title: 'Trade ID',
            field: 'id',
            render: rowData => <p className="px-4 py-3 text-ms font-semibold">Trade_00{rowData.id}</p>,
            headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            },
            editable: 'never',
        },
        {
            title: "Card Info", field: "name", editable:false,headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            },
            render: (rowData) => {
                return (
                    <div className="flex text-sm tool-tip" data-tip={rowData.card?.type}>
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src={rowData.card?.image} alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                            <p className="font-semibold text-black">{rowData.name}</p>
                            <p className="text-xs text-gray-600">{rowData.card?.code} * {rowData.count}</p>
                        </div>
                    </div>
                )
            }
            
        },
        {
            title: "User", field: "count", editable:false,headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            },
            render: (rowData) => {
                return (
                    <div className="flex text-sm">
                        <div>
                            <p className="font-semibold text-black">Daunt_00{rowData.id}</p>
                        </div>
                    </div>
                )
            }
        },

        {title: "Rate", field: "count", editable:false,headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            },
            render: (rowData) => {
                return (
                    <div className="flex text-sm">
                        <div>
                            <p className="text-black">{rowData.rate}</p>
                        </div>
                    </div>
                )
            }
        },

        {
            title: "Status", field: "status",headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            },
            lookup: { 1: "Pending", 2: "Reviewing", 3: "Agent Redeeming", 4: "Trade Completed", 5: "Trade Rejected", 6: "Trade Paid",  },
            render: rowData =>{
                return (
                    <p className="text-xs">
                        {rowData.status === 1 ?
                         (<span className="font-semibold leading-tight text-white bg-gray-500 rounded-sm"> Pending </span>):
                         lookup[rowData.status] === 'Reviewing' ?
                         (<span className="font-semibold leading-tight text-white bg-orange-300 rounded-sm"> Reviewing </span>):
                         lookup[rowData.status] === 'Agent Redeeming' ?
                         (<span className="font-semibold leading-tight text-white bg-amber-400 rounded-sm"> Agent Redeeming </span>):
                         lookup[rowData.status] === 'Trade Completed' ?
                         (<span className="font-semibold leading-tight text-white bg-green-600 rounded-sm"> Trade Completed </span>):
                         lookup[rowData.status] === 'Trade Rejected' ?
                         (<span className="font-semibold leading-tight text-white bg-red-700 rounded-sm"> Trade Rejected </span>):
                         lookup[rowData.status] === 'Trade Paid' ?
                         (<span className="font-semibold leading-tight text-white bg-yellow-900 rounded-sm"> Trade Paid </span>):
                         (<span className="font-semibold leading-tight text-white bg-green-100 rounded-sm"> {lookup[rowData.status]} </span>)
                        }
                    </p>
                )
            },
            headerStyle: {
                // backgroundColor: 'yellow',
                fontWeight: 'bold',
            }
        },
    ];

    const columnCardType = [
        {
            title: 'Card',
            field: 'card',
            lookup: { 1: 'Amazon', 2: 'Itunes', 3: 'GooglePlay' },
            headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            }
        },

        {
            title: 'Code',
            field: 'code',
            headerStyle: {
                // backgroundColor: 'yellow',
                fontWeight: 'bold',
            }
        },

        {
            title: 'Card Type',
            field: 'type',
            lookup: { 1: 'Physical', 2: 'E-code', 3: 'Virtual' },
            headerStyle: {
                // backgroundColor: 'yellow',
                fontWeight: 'bold',
            }
        },

        {
            title: "Card Name", field: "name", headerStyle: {
                // backgroundColor: 'yellow',
                fontWeight: 'bold',
            }
        },
        {
            title: "Status", field: "status",
            lookup: { true: "Available", false: "Unavailable" },
            render: rowData =>{
                return (
                    <p className="text-xs">
                        {
                            lookup[rowData.status] === 'Available' ?
                         (<span className="font-semibold leading-tight text-white bg-green-100 rounded-sm"> Available </span>) :
                         (<span className="font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> Not Available </span>)
                        }
                    </p>
                )
            },
            headerStyle: {
                // backgroundColor: 'yellow',
                fontWeight: 'bold',
            }
        },
        {
            title: 'Rate',
            field: 'rate',
          render: rowData =><p className="text-ms font-semibold">#{rowData.rate}</p>,

            headerStyle: {
                // backgroundColor: 'yellow',
                fontWeight: 'bold',
            }
        },
    ];

    const sdata = [
        { id: 1, picture: "https://media.japan-codes.com/uploads/20150906173700/itunes1500.jpg", name: "itunes",
            card:{
                code: "Itunes_001",
                type: "Physical",
                name: "Uk 100",
                image: "https://media.japan-codes.com/uploads/20150906173700/itunes1500.jpg",

            },
            user:{
                user_id: "Daunt_001",
            },
        rate: "340", count: 5, status: 1, },
        { id: 2, picture: "https://s.pacn.ws/1500/qb/amazon-gift-card-us-20-473915.2.jpg?o73x4u", name: "Amazon", count: 10, availability: false }
    ];

    const sdataCardType = [
        { id: 1, code:'Amaz001', card: 1, type: 1, name: "Amazon Canada", status: true, rate: "300" },
        { id: 2, code:'Amaz002', card: 1, type: 2, name: "Amazon India", status: false, rate: "400" },
        { id: 3, code:'Amaz003', card: 1, type: 3, name: "Amazon United Kingdom", status: true, rate: "500" },
        { id: 4, code:'Itu001',  card: 2, type: 1, name: "Itunes Canada", status: true, rate: "300" },
        { id: 5, code:'Itu001', card: 2, type: 2, name: "Itunes India", status: false, rate: "400" },
    ]

    useEffect(() => {
        setData(sdata)
        setCardType(sdataCardType)
    }, [])
    return (
        <AdminLayout>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Trades'} />
                    
                    <div className="px-2 sm:px-0">
                        <Tab.Group>
                            <Tab.List className="flex p-1 space-x-1 bg-yellow-600 rounded-xl">
                                {/* {Object.keys(categories).map((category) => ( */}
                                <Tab
                                    // key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg',
                                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-400 ring-white ring-opacity-60',
                                            selected
                                                ? 'bg-white shadow'
                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                        )
                                    }
                                >
                                    Active Trades
                                </Tab>

                                <Tab
                                    // key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg',
                                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-400 ring-white ring-opacity-60',
                                            selected
                                                ? 'bg-white shadow'
                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                        )
                                    }
                                >
                                   Completed Trades
                                </Tab>

                                <Tab
                                    // key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg',
                                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-400 ring-white ring-opacity-60',
                                            selected
                                                ? 'bg-white shadow'
                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                        )
                                    }
                                >
                                    Flagged Trades
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                <Tab.Panel
                                    // key={idx}
                                    className={classNames(
                                        'bg-white dark:bg-gray-700 rounded-xl p-3',
                                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                                    )}
                                >
                                    <MaterialTable
                                        title="Cards"
                                        columns={columns}
                                        data={data}
                                        key={data.id}
                                        editable={{
                                            onRowAdd: newData =>
                                                new Promise((resolve, reject) => {
                                                    setTimeout(() => {
                                                        setData([...data, newData]);

                                                        resolve();
                                                    }, 1000)
                                                }),
                                            onRowUpdate: (newData, oldData) =>
                                                new Promise((resolve, reject) => {
                                                    setTimeout(() => {
                                                        const dataUpdate = [...data];
                                                        const index = oldData.tableData.id;
                                                        dataUpdate[index] = newData;
                                                        setData([...dataUpdate]);

                                                        resolve();
                                                    }, 1000)
                                                }),
                                        }}
                                        options={{
                                            actionsColumnIndex: -1
                                        }}
                                    />

                                </Tab.Panel>

                                <Tab.Panel
                                    // key={idx}
                                    className={classNames(
                                        'bg-white dark:bg-gray-700 rounded-xl p-3',
                                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                                    )}
                                >
                                    <MaterialTable
                                        title="Cards"
                                        columns={columnCardType}
                                        data={cardType}
                                        key={cardType.id}
                                        editable={{
                                            onRowAdd: newData =>
                                                new Promise((resolve, reject) => {
                                                    setTimeout(() => {
                                                        setCardType([...cardType, newData]);

                                                        resolve();
                                                    }, 1000)
                                                }),
                                            onRowUpdate: (newData, oldData) =>
                                                new Promise((resolve, reject) => {
                                                    setTimeout(() => {
                                                        const dataUpdate = [...cardType];
                                                        const index = oldData.tableData.id;
                                                        dataUpdate[index] = newData;
                                                        setCardType([...dataUpdate]);

                                                        resolve();
                                                    }, 1000)
                                                }),
                                        }}
                                        options={{
                                            actionsColumnIndex: -1
                                        }}
                                    />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>

                </div>
            </div>

        </AdminLayout>
    );
}

export default Index;