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



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Input = styled('input')({
    display: 'none',
});

const Cards = (props) => {
    const lookup = { true: "Available", false: "Unavailable" };

    const [data, setData] = useState([])
    const [cardType, setCardType] = useState([])


    const columns = [
        {
            title: 'Card',
            field: 'imageUrl',
            render: rowData => <img src={rowData.imageUrl} style={{ width: 40, borderRadius: '50%' }} />,
            editComponent: props => (
                <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span" color="warning">
                            Upload
                        </Button>
                    </label>
                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <FiCamera color='gold' />
                        </IconButton>
                    </label>
                </Stack>
            ),
            headerStyle: {
                // backgroundColor: 'yellow',
                fontWeight: 'bold',
            }
        },
        {
            title: "Card Title", field: "name",
            render: rowData => <p className="px-4 py-3 text-ms font-semibold">{rowData.name}</p>,
            
        },
        {
            title: "Counts", field: "count", editable:false,
            render: rowData => <p className="px-4 py-3 text-ms font-semibold">{rowData.count}</p>,

        },
    ];

    const columnCardType = [
        {
            title: 'Card',
            field: 'card',
            lookup: { 1: 'Amazon', 2: 'Itunes', 3: 'GooglePlay' },
            headerStyle: {
                // backgroundColor: 'yellow',
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
            title: "Country", field: "name", headerStyle: {
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
                         (<span className="font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Available </span>) :
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
        { id: 1, imageUrl: "https://media.japan-codes.com/uploads/20150906173700/itunes1500.jpg", name: "Itunes", count: 5, availability: true },
        { id: 2, imageUrl: "https://s.pacn.ws/1500/qb/amazon-gift-card-us-20-473915.2.jpg?o73x4u", name: "Amazon", count: 10, availability: false }
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
                <div className="w-full lg:w-8/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Cards and rates'} />
                    <div className="flex flex-row justify-between">
                        <h1>Add and update cards rate</h1>
                    </div>
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
                                    Cards
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
                                    Card Types
                                </Tab>

                                {/* <Tab
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
                                    Rates
                                </Tab> */}
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

                <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
                    <div className="dark:bg-gray-800 bg-gray-300 rounded-3xl px-6 pt-6">
                        <div className="flex text-white text-2xl pb-6 font-bold">
                            <p className='dark:text-gray-100 text-black'>Today's Cards Log</p>
                        </div>
                        <div>
                            <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700">
                                <img
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                    alt="profile image"
                                    className="object-cover w-10 h-10 rounded-full"
                                />
                                <div className="pl-4 w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="dark:text-white text-black' font-medium">Admin 001</div>
                                    </div>
                                    <p className="my-2 text-sm dark:text-gray-100 text-black'">
                                        Update a card details 
                                    </p>
                                </div>
                            </div>

                            <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700">
                                <img
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                    alt="profile image"
                                    className="object-cover w-10 h-10 rounded-full"
                                />
                                <div className="pl-4 w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="dark:text-white text-black' font-medium">Admin 002</div>
                                    </div>
                                    <p className="my-2 text-sm dark:text-gray-100 text-black'">
                                        increase card rate with Itu001 by 10% on 12/12/2020
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </AdminLayout>
    );
}

export default Cards