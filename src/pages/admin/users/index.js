// import Content from '../components/content';
import React, { useEffect } from 'react';
import Breadcumb from '../../../components/breadcumb';
import Statistics from '../../../components/statistics';
import { FiUserPlus, FiDollarSign, FiActivity, FiSave } from 'react-icons/fi'
import AdminLayout from '../../../dashboard/AdminLayout';
import MaterialTable, { Column } from "@material-table/core";
import Icon from "@material-ui/core/Icon";
import { forwardRef } from 'react';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Check from '@material-ui/icons/Check'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import moment from 'moment';

export default function Users() {
    const [state, setState] = React.useState({
        users: [],
    })

    const column = [
        { title: "customer_id", field: "customer_id", editable:false, headerStyle :{
            backgroundColor: 'orange',
            fontWeight:'bold',
        }, render: (rowData) => <p className="text-ms font-semibold">{rowData.customer_id}</p> },
        // { title: "Name", field: "name" },
        {
            title: "User", field: "picture",editable:false,
            headerStyle :{
                backgroundColor: 'orange',
                fontWeight:'bold',
            },
            render: (rowData) => {
                return (
                    <div className="flex text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src={rowData.picture} alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                            <p className="font-semibold text-black">{rowData.name}</p>
                            <p className="text-xs text-gray-600">Joined {moment(rowData.created_at).fromNow()}</p>
                        </div>
                    </div>
                )
            }
        },
        {
            title: "Rating", field: "trade_count", editable:false,
            headerStyle :{
                backgroundColor: 'orange',
                fontWeight:'bold',
            },
            render: rowData => (
                <div className="flex items-center">

                    {
                        rowData.trade_count <= 10 && rowData.trade_count != 0 ? (
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-gray-400" disabled />
                            </div>
                        ) : rowData.trade_count <= 20 && rowData.trade_count > 10 ? (
                            <div className="rating rating-half">
                                <input type="radio" name="rating-1" className="mask mask-star-2 mask-half-1  bg-orange-400" disabled />
                            </div>
                        ) : rowData.trade_count <= 25 && rowData.trade_count > 20 ? (
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star-2  bg-orange-400" disabled />
                            </div>
                        ) : rowData.trade_count <= 30 && rowData.trade_count > 25 ? (
                            <div className="rating rating-half">
                                <input type="radio" name="rating-1" className="rating-hidden" />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
                            </div>
                        ) : rowData.trade_count <= 40 && rowData.trade_count > 30 ? (
                            <div className="rating rating-half">
                                <input type="radio" name="rating-1" className="rating-hidden" />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
                            </div>
                        ) : rowData.trade_count <= 50 && rowData.trade_count > 40 ? (
                            <div className="rating rating-half">
                                <input type="radio" name="rating-1" className="rating-hidden" />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
                            </div>
                        ) : "NO RATING YET"


                    }
                </div>
            )
        },
        { title: "Verified", field: "verified", editable:false, headerStyle :{
            backgroundColor: 'orange',
            fontWeight:'bold',
        }, lookup: { true: "Yes", false: "No" } },
        {
            title: "Status", field: "status",
            lookup: { 1: "Active", 2: "Banned" },
            headerStyle :{
                backgroundColor: 'orange',
                fontWeight:'bold',
            },
            render: rowData => {
                return (
                    <div className="flex items-center">
                        {
                            rowData.status == 1 ? (
                                <div className="badge badge-success gap-2">
                                    Active
                                </div>
                            ) : (
                                <div className="badge badge-error gap-2">
                                    Banned
                                </div>
                            )
                        }
                    </div>
                )
            },
        },
        {
            title: "Available Balance", editable:false, field: "available_balance",headerStyle :{
                backgroundColor: 'orange',
                fontWeight:'bold',
            },
            render: rowData => {
                return (
                    <div className="flex items-center">
                    {
                        rowData.available_balance != 0 || rowData.available_balance == null ? (
                            <p className="text-ms font-semibold">{rowData.available_balance}</p>) : (
                                <p className="text-ms font-semibold">0</p>
                            )
                    }
                    </div>
                )
            }
        }
    ]

    const userData = [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "customer_id": "daunt001",
        "created_at": "2020-01-01",
        "status": 1,
        "verified": true,
        'available_balance': 40000,
        "trade_count": 11,
        "picture": `https://randomuser.me/api/portraits/thumb/men/1.jpg`
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "customer_id": "daunt002",
        "created_at": "2020-01-02",
        "verified": false,
        "status": 1,
        "trade_count": 2,
        'available_balance': 32000,
        "picture": `https://randomuser.me/api/portraits/thumb/men/2.jpg`
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "customer_id": "daunt003",
        "created_at": "2020-01-03",
        "verified": true,
        "trade_count": 41,
        'available_balance': 15000,
        "picture": `https://randomuser.me/api/portraits/thumb/men/3.jpg`
    },
    {
        "id": 4,
        "name": "Okoro Williams",
        "customer_id": "daunt004",
        "username": "Okorosha",
        "created_at": "2021-01-23",
        "status": 2,
        "trade_count": 21,
        "verified": true,
        'available_balance': 0,

        "picture": `https://randomuser.me/api/portraits/thumb/men/4.jpg`

    }
    ]
    // const tableIcons = {
    //     Save: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    // }
    useEffect(() => {
        setState({
            users: userData
        })
    }, [])
    return (
        <AdminLayout>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Manage Users'} />
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-12/12">
                            <div className="p-2">
                                <div
                                    className="p-4 rounded-3xl"
                                >
                                    <div className="shadow-lg rounded-lg overflow-hidden">

                                        <MaterialTable
                                            icons={{
                                                Check: () => <Check />
                                                // DetailPanel: () => <ChevronRight />
                                            }}
                                            title="Manage Users"
                                            columns={column}
                                            data={state.users}
                                            actions={[

                                                rowData => ({
                                                    icon: 'Check',
                                                    tooltip: 'Delete User',
                                                    onClick: (event, rowData) => Router.push(`/admin/user/${rowData.id}`),
                                                })
                                            ]}

                                            editable={{
                                                onRowUpdate: (newData, oldData) =>
                                                    new Promise((resolve, reject) => {
                                                        setTimeout(() => {
                                                            const dataUpdate = [...state.users];
                                                            const index = oldData.tableData.id;
                                                            dataUpdate[index] = newData;
                                                            setState({users: [...dataUpdate]});

                                                            resolve();
                                                        }, 1000)
                                                    }),
                                            }}
                                            options={{
                                                actionsColumnIndex: -1,
                                                grouping: true
                                            }}
                                        />

                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </AdminLayout>
    );
}
