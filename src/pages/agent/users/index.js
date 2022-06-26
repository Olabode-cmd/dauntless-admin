// import Content from '../components/content';
import React, { useEffect } from 'react';
import Breadcumb from '../../../components/breadcumb';
import Statistics from '../../../components/statistics';
import { getSession } from 'next-auth/react';
import { FiUserPlus, FiDollarSign, FiActivity, FiSave } from 'react-icons/fi'
import AgentLayout from '../../../dashboard/AgentLayout';
import MaterialTable, { Column } from "@material-table/core";
import Visibility from '@material-ui/icons/Visibility'
import Icon from "@material-ui/core/Icon";
import { forwardRef } from 'react';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Check from '@material-ui/icons/Check'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import moment from 'moment';
import { useRouter } from 'next/router';
import { Server } from '../../api/lib/service';


export default function Users(props) {
    const [users, setUsers] = React.useState([]);
    const Router = useRouter();

    const column = [
        {
            title: "Customer ID", field: "customer_id", editable: false, headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            }, render: (rowData) => <p className="text-ms font-semibold">{rowData.customer_id}</p>
        },
        // { title: "Name", field: "name" },
        {
            title: "User", editable: false,
            headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            },
            render: (rowData) => {
                return (
                    <div className="flex text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src={rowData.picture} alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                            <p className="font-semibold text-black">{rowData.full_name}</p>
                            <p className="text-xs text-gray-600">Joined {moment(rowData.created_at).fromNow()}</p>
                        </div>
                    </div>
                )
            }
        },
        {
            title: "Rating", field: "trade_count", editable: false,
            headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            },
            render: rowData => (
                <div className="flex items-center">

                    {
                        rowData.cardTransactions.length <= 10 && rowData.cardTransactions.length != 0 ? (
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-gray-400" disabled />
                            </div>
                        ) : rowData.cardTransactions.length <= 20 && rowData.cardTransactions.length > 10 ? (
                            <div className="rating rating-half">
                                <input type="radio" name="rating-1" className="mask mask-star-2 mask-half-1  bg-orange-400" disabled />
                            </div>
                        ) : rowData.cardTransactions.length <= 25 && rowData.cardTransactions.length > 20 ? (
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star-2  bg-orange-400" disabled />
                            </div>
                        ) : rowData.cardTransactions.length <= 30 && rowData.cardTransactions.length > 25 ? (
                            <div className="rating rating-half">
                                <input type="radio" name="rating-1" className="rating-hidden" />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
                            </div>
                        ) : rowData.cardTransactions.length <= 40 && rowData.cardTransactions.length > 30 ? (
                            <div className="rating rating-half">
                                <input type="radio" name="rating-1" className="rating-hidden" />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-1" disabled />
                                <input type="radio" name="rating-1" className="bg-orange-500 mask mask-star-2 mask-half-2" disabled />
                            </div>
                        ) : rowData.cardTransactions.length <= 50 && rowData.cardTransactions.length > 40 ? (
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
        {
            title: "Verified", field: "is_verified", editable: false, headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            }, lookup: { true: "Yes", false: "No" }
        },
        {
            title: "Status", field: "status",
            lookup: { true: "Active", false: "Banned" },
            headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
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
            title: "Available Balance", editable: false, headerStyle: {
                backgroundColor: 'orange',
                fontWeight: 'bold',
            },
            render: rowData => {
                return (
                    <div className="flex items-center">
                        {
                            rowData.userWallet !== undefined || rowData.userWallet.amount != '0' ? (
                                <p className="text-ms font-semibold">{rowData.userWallet?.amount}</p>) : (
                                <p className="text-ms font-semibold">0</p>
                            )
                        }
                    </div>
                )
            }
        }
    ]

    const updateStatus = React.useCallback(async(id, status) => {
        const res = await fetch("/api/user_status", {
            body: JSON.stringify({
                id,
                status,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
        });
    });


    useEffect(() => {
        setUsers([...props.userData])
    }, [])
    return (
        <AgentLayout>

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
                                            }}
                                            title="Manage Users"
                                            columns={column}
                                            data={users}
                                            actions={[
                                                {
                                                    icon: Visibility,
                                                    tooltip: "View User",
                                                    onClick: (event, rowData) => {
                                                        if (rowData.is_verified == true) {
                                                            Router.push(`/agent/users/${rowData.id}`);
                                                        }
                                                        null
                                                    },
                                                },
                                            ]}

                                            editable={{
                                                onRowUpdate: (newData, oldData) =>
                                                    new Promise((resolve, reject) => {
                                                        setTimeout(async () => {
                                                            const dataUpdate = [...users];
                                                            const index = oldData.tableData.id;
                                                            dataUpdate[index] = newData;
                                                            const id = dataUpdate[index].id;
                                                            const status = dataUpdate[index].status;
                                                            setUsers([...dataUpdate]);
                                                            updateStatus(id, status);
                                                            resolve();
                                                        }, 1000);
                                                    })
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


        </AgentLayout>
    );
}


export async function getServerSideProps(context) {
    const session = await getSession(context);
    const user = await Server.get('/admin/users', {
        headers: {
            Authorization: `Bearer ${session?.accessToken}`,
        },
    });
    // console.log(user.data.message);
    return {
        props: {
            userData: user.data.message,
        },
    }
}