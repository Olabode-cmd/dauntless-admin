// import Content from '../components/content';
import React, { useState, useEffect } from 'react';
import Breadcumb from '../../components/breadcumb';
import ActivityLog from '../../components/activitylog';
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
import { Server } from '../api/lib/service';
import { getSession } from 'next-auth/react'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Input = styled('input')({
    display: 'none',
});

const Cards = (props) => {
    const lookup = { true: "Available", false: "Unavailable" };

    const [data, setData] = useState([...props.cards]);
    const [cardType, setCardType] = useState([...props.cardType]);
    const [image, setImage] = useState('');

    const uploadImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
        };
        reader.readAsDataURL(file);

        console.log(image)
    }


    const cardOptions = {};
    data.map(option => {
        const { id, name } = option;
        cardOptions[id] = name
    })

    const columns = [
        {
            title: 'Card',
            field: 'picture',
            render: rowData => <img src={rowData.picture} style={{ width: 40, borderRadius: '50%' }} />,
            editComponent: props => (
                <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" type="file" onChange={uploadImage}  />
                        <Button variant="contained" component="span" color="warning">
                            Upload
                            <FiCamera color='gold' size={30} style={{paddingLeft:'10px',}} />
                        </Button>
                    </label>
                    {
                        image &&
                        <img src={image} style={{ width: 40, borderRadius: '50%' }} />
                    }
                    {/* <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <FiCamera color='gold' />
                        </IconButton>
                    </label> */}
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
            title: "Counts", editable: false,
            render: rowData => <p className="px-4 py-3 text-ms font-semibold">{rowData.cardTypes == undefined ? 0 : rowData.cardTypes.length}</p>,

        },
    ];

    const columnCardType = [
        {
            title: 'Card',
            field: "card.id",
            lookup: cardOptions,
            headerStyle: {
                // backgroundColor: 'yellow',
                fontWeight: 'bold',
            }
        },

        // {
        //     title: 'Type',
        //     field: 'type_id',
        //     headerStyle: {
        //         // backgroundColor: 'yellow',
        //         fontWeight: 'bold',
        //     }
        // },

        {
            title: 'Card Type',
            field: 'type_id',
            lookup: { 2: 'Physical', 1: 'E-code', },
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
            render: rowData => {
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
            render: rowData => <p className="text-ms font-semibold">#{rowData.rate}</p>,

            headerStyle: {
                // backgroundColor: 'yellow',
                fontWeight: 'bold',
            }
        },
    ];

    const createCard = async (name, image) => {
        const res = await fetch("/api/create-card", {
          body: JSON.stringify({
            image,
            name,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
    };

    const updateCard = async (id, name, image) => {
        const res = await fetch("/api/update-card", {
          body: JSON.stringify({
            id,
            name,
            image
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
        });
    };

    const createCardType = async (id, name, type, rate, ) => {
        const res = await fetch("/api/create-card-rate", {
          body: JSON.stringify({
            id,
            name,
            rate
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
    };

    const updateCardType = async (id, card_id, name, rate, status) => {
        const res = await fetch("/api/update-card-rate", {
          body: JSON.stringify({
            id,
            card_id,
            name,
            rate
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
        });
        // console.log(id, card_id, name, rate)
    };

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
                                                        createCard(newData.name, image)
                                                        setImage('')
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
                                                        const id = newData.id;
                                                        const name = newData.name;
                                                        // console.log(newData)
                                                        updateCard(id, name);
                                                        resolve();
                                                      }, 1000);
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

                            <ActivityLog />
                        </div>
                    </div>
                </div>

            </div>

        </AdminLayout>
    );
}

export default Cards

export async function getServerSideProps(context) {
    const card = await Server.get('/card')
    const cardType = await Server.get('/card/card-type')
    // console.log(cardType.data.message)
    return {
        props: {
            cards: card.data.message,
            cardType: cardType.data.message
        }
    }
}