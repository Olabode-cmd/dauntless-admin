// import Content from '../components/content';
import React, { useState, useEffect } from 'react';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
// import AreaChart from '../../components/chart';
import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import AgentLayout from '../../dashboard/AgentLayout';
import Visibility from '@material-ui/icons/Visibility'
import MaterialTable, { Column } from "@material-table/core";
import { Tab } from '@headlessui/react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FiCamera } from 'react-icons/fi';
import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import moment from 'moment';
import { useRouter } from 'next/router';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Input = styled('input')({
    display: 'none',
});

const Index = (props) => {
    const Router = useRouter()

    const [data, setData] = useState(props.data)
    const [selectedRow, setSelectedRow] = useState(null);




    const columns = [
        {
            title: 'Withdrawal ID',
            field: 'id',
            render: rowData => <p className="text-ms font-semibold">Withdral_00{rowData.id}</p>,
            headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            },
            editable: 'never',
        },
        {
            title: "Amount 💰", field: "amount", editable: false, headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            },
            render: (rowData) => {
                return (
                    <div className="flex text-sm tool-tip">
                        <div>
                            <p className="font-semibold text-black">{rowData.amount}</p>
                        </div>
                    </div>
                )
            }

        },
        {
            title: "Duration ⏲", field: 'created_at', editable: false, headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold'
            },
            render: (rowData) => {
                return (
                    <p className="text-sm font-semibold text-gray-600">{moment(rowData.created_at).fromNow()}</p>
                )

            }
        },
        {
            title: 'Payment Type',
            field: 'pay_id',
            render: rowData => <p className="text-ms font-semibold">{rowData.pay_id}</p>,
            headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            },
            editable: 'never',
        },
        {
            title: "User 👷‍♂️", field: "user", editable: false, headerStyle: {
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

        {
            title: "Status 🔄", field: "status", headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            },
            lookup: { 1: "Pending", 2: "Completed", 3: "Cancel" },
            render: rowData => {
                return (
                    <p className="text-xs">
                        {rowData.status === 1 ?
                            (<span className="font-semibold leading-tight text-white bg-gray-700 rounded-sm p-2"> Pending </span>) :
                            rowData.status === 2 ?
                                (<span className="font-semibold leading-tight text-white bg-green-500 rounded-sm p-2"> Completed </span>) :
                                rowData.status === 3 ?
                                    (<span className="font-semibold leading-tight text-white bg-red-400 rounded-sm p-2"> Failed</span>) :
                                    (<span className="font-semibold leading-tight text-white bg-green-100 rounded-sm"></span>)
                        }
                    </p>
                )
            },
            headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            }
        },
    ];


    let active = [];
    let failed = [];
    let completed = [];

    for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].status === 1) {
            active.push(props.data[i]);
        }
        if (props.data[i].status === 2) {
            completed.push(props.data[i]);
        }
        if (props.data[i].status === 3) {
            failed.push(props.data[i]);
        }
    }


    return (
        <AgentLayout>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Withdrawal 🏦 '} />

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
                                    Wallet Withdrawal <span className="text-md text-green-500">({active.length})</span>
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
                                    Instant Withdrawal <span className="text-md text-green-500">({active.length})</span>
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
                                    Completed Withdrawal <span className="text-md text-green-500">({completed.length})</span>

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
                                    Failed Withdrawal <span className="text-md text-red-500">({failed.length})</span>

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
                                        title="Wallet Withdrawal 🔥"
                                        columns={columns}
                                        data={active}
                                        key={data.id}

                                        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                                        options={{
                                            actionsColumnIndex: -1,
                                            rowStyle: {
                                                backgroundColor: '#fafafa',
                                                color: '#'
                                            },
                                            rowStyle: rowData => ({
                                                backgroundColor: (selectedRow == rowData.tableData.id) ? '#eee' : '#FFF',
                                            }),
                                            grouping: true,
                                        }}
                                        actions={[

                                            rowData => ({
                                                icon: Visibility,
                                                tooltip: 'View Trade',
                                                onClick: (event, rowData) => Router.push(`/admin/trade/${rowData.id}`),
                                            })
                                        ]}

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
                                        title="Instant Withdrawal 🔥"
                                        columns={columns}
                                        data={active}
                                        key={data.id}

                                        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                                        options={{
                                            actionsColumnIndex: -1,
                                            rowStyle: {
                                                backgroundColor: '#fafafa',
                                                color: '#'
                                            },
                                            rowStyle: rowData => ({
                                                backgroundColor: (selectedRow == rowData.tableData.id) ? '#eee' : '#FFF',
                                            }),
                                            grouping: true,
                                        }}
                                        actions={[

                                            rowData => ({
                                                icon: Visibility,
                                                tooltip: 'View Trade',
                                                onClick: (event, rowData) => Router.push(`/admin/trade/${rowData.id}`),
                                            })
                                        ]}

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
                                        title="Completed Withdrawals"
                                        columns={columns}
                                        data={completed}
                                        key={data.id}

                                        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                                        options={{
                                            actionsColumnIndex: -1,
                                            rowStyle: {
                                                backgroundColor: '#fafafa',
                                                color: '#'
                                            },
                                            rowStyle: rowData => ({
                                                backgroundColor: (selectedRow == rowData.tableData.id) ? '#eee' : '#FFF',
                                            }),
                                            grouping: true,
                                        }}
                                        actions={[

                                            rowData => ({
                                                icon: Visibility,
                                                tooltip: 'View Trade',
                                                onClick: (event, rowData) => Router.push(`/admin/transactions/${rowData.id}`),
                                            })
                                        ]}

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
                                        title="Failed Withdrawals"
                                        columns={columns}
                                        data={failed}
                                        key={data.id}

                                        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                                        options={{
                                            actionsColumnIndex: -1,
                                            rowStyle: {
                                                backgroundColor: '#fafafa',
                                                color: '#'
                                            },
                                            rowStyle: rowData => ({
                                                backgroundColor: (selectedRow == rowData.tableData.id) ? '#eee' : '#FFF',
                                            }),
                                            grouping: true,
                                        }}
                                        actions={[

                                            rowData => ({
                                                icon: Visibility,
                                                tooltip: 'View Trade',
                                                onClick: (event, rowData) => Router.push(`/admin/transactions/${rowData.id}`),
                                            })
                                        ]}

                                    />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>

                </div>
            </div>

        </AgentLayout>
    );
}

export default Index;


export async function getStaticProps() {
    // const res = await fetch('https://api.jsonbin.io/b/5e9a7b0f6d7e7f3c8b8f7b9e')
    // const data = await res.json()
    // const resCardType = await fetch('https://api.jsonbin.io/b/5e9a7b0f6d7e7f3c8b8f7b9e')
    const data = [
        {
            id: 1,
            user: {
                user_id: "Daunt_001",
            },
            status: 1,
            amount: '5000',
            pay_id: "Instant Withdrawal",
            created_at: '2021-10-28T09:17:50.974Z'
        },
        {
            id: 2,
            user: {
                user_id: "Daunt_002",
            },
            amount: '12000',
            status: 3,
            pay_id: "Wallet",
            created_at: '2021-12-04T18:32:10.62Z'
        },
        {
            id: 3,
            user: {
                user_id: "Daunt_003",
            },
            amount: '9000',
            pay_id: "Wallet",
            status: 2, created_at: '2021-12-04T18:32:10.62Z'
        },
        {
            id: 4,
            user: {
                user_id: "Daunt_004",
            },
            amount: '12000',
            pay_id: "Wallet",
            status: 2,
            created_at: '2022-03-04T18:32:10.62Z'
        },

        {
            id: 5,
            user: {
                user_id: "Daunt_005",
            },
            amount: '12000',
            status: 2,
            pay_id: "Wallet",
            created_at: '2022-03-04T6:32:10.62Z'
        },
        {
            id: 6,
            user: {
                user_id: "Daunt_001",
            },
            amount: '12000',
            status: 3,
            pay_id: "Wallet",
            created_at: '2021-12-04T18:32:10.62Z'
        },
        {
            id: 7,
            user: {
                user_id: "Daunt_002",
            },
            amount: '12000',
            pay_id: "Wallet",
            status: 3, created_at: '2021-12-04T18:32:10.62Z'

        },
        {
            id: 8,
            user: {
                user_id: "Daunt_002",
            },
            amount: '12000',
            pay_id: "Wallet",
            status: 3, created_at: '2021-12-31 1T18:32:10.62Z'

        },


    ];
    return {
        props: {
            data,
            // dataCardType
        },
        revalidate: 1
    }
}