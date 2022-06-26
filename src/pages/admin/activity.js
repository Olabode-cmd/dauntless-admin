import React, { useState, useEffect, useCallback } from 'react';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
import AreaChart from '../../components/chart';
import DoughnutChart from '../../components/donut';
import DropdownRender from '../../components/dropdown';
import { FiUserPlus, FiDollarSign, FiActivity, FiEye } from 'react-icons/fi'
import AdminLayout from '../../dashboard/AdminLayout';
import { Server } from '../api/lib/service';
import { getSession } from 'next-auth/react';
import moment from 'moment';
import Error from 'next/error'

export default function HomePage(props) {
    const role = ['seun', 'tope', 'sade',];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Today", "A week ago", "A month ago", "A year ago"];
    const [trades, setTrades] = useState([]);
    const [typeValue, setTypeValue] = React.useState('');
    const [graphValue, setGraphValue] = React.useState('');
    const [graphData, setGraphData] = React.useState([]);

    const filterDay = useCallback((day) => {
        const filtered = props.trades.filter(trade => {
            const date = moment(trade.created_at).format('YYYY-MM-DD');
            const today = moment().format('YYYY-MM-DD');
            const lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');
            const lastMonth = moment().subtract(30, 'days').format('YYYY-MM-DD');
            const lastYear = moment().subtract(365, 'days').format('YYYY-MM-DD');
            if (day === "Today") {
                return date === today;
            } else if (day === "A week ago") {
                return date === lastWeek;
            } else if (day === "A month ago") {
                return date === lastMonth;
            } else if (day === "A year ago") {
                return date === lastYear;
            } else {
                return day === "24 hours ago";
            }
        });
        setTrades(filtered);
    }, []);

    // filter by month
    const filterMonth = useCallback((month) => {
        const filtered = props.trades.filter(trade => {
            const date = moment(trade.created_at).format('YYYY-MM');
            const January = moment().subtract(1, 'months').format('YYYY-MM');
            const February = moment().subtract(2, 'months').format('YYYY-MM');
            const March = moment().subtract(3, 'months').format('YYYY-MM');
            const April = moment().subtract(4, 'months').format('YYYY-MM');
            const May = moment().subtract(5, 'months').format('YYYY-MM');
            const June = moment().subtract(6, 'months').format('YYYY-MM');
            const July = moment().subtract(7, 'months').format('YYYY-MM');
            const August = moment().subtract(8, 'months').format('YYYY-MM');
            const September = moment().subtract(9, 'months').format('YYYY-MM');
            const October = moment().subtract(10, 'months').format('YYYY-MM');
            const November = moment().subtract(11, 'months').format('YYYY-MM');
            const December = moment().subtract(12, 'months').format('YYYY-MM');
            const year = moment().format('YYYY');
            if (month === "January") {
                return date === January;
            } else if (month === "February") {
                return date === February;
            } else if (month === "March") {
                return date === March;
            } else if (month === "April") {
                return date === April;
            } else if (month === "May") {
                return date === May;
            } else if (month === "June") {
                return date === June;
            } else if (month === "July") {
                return date === July;
            } else if (month === "August") {
                return date === August;
            } else if (month === "September") {
                return date === September;
            } else if (month === "October") {
                return date === October;
            } else if (month === "November") {
                return date === November;
            } else if (month === "December") {
                return date === December;
            } else if (month === "This year") {
                return date === year;
            } else {
                return true;
            }
        });
        setTrades(filtered);
    }, []);

    // loop through each card id and count total time it appears in each trade by there types and put into an array of graphdata
    const graphDataArray = (x) => props.cards.map(card => {
        const filtered = props.trades.filter(trade => (trade.cardType.card_id === card.id && trade.cardType.type_id === x));
        const all = {
            name: card.name,
            type: x == 1 ? "Ecode" : "Physical",
            total: filtered.length
        }
        return all.total
    });

    const dounutDataArray = () => props.cards.map(card => {
        const filtered = props.trades.filter(trade => (trade.cardType.card_id === card.id));
        const all = {
            name: card.name,
            total: filtered.length
        }
        return all.total
    });

    const sle = (id) => props.cards.filter(card => card.id === id);

    useEffect(() => {
        filterDay(typeValue)
    }, [typeValue])

    useEffect(() => {
        filterMonth(graphValue)
    }, [graphValue])

    useEffect(() => {
        filterDay('Today')
    }, [])





    const data = {
        labels: [...props.cards.map(card => card.name)],
        datasets: [
            {
                label: 'June',
                backgroundColor: 'rgba(217, 188, 41, 0.3)',
                borderColor: 'rgba(217,188, 41, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(217, 188, 41,0.8)',
                hoverBorderColor: 'rgba(217, 188, 41,1)',
                borderCapStyle: 'round',
                data: [...graphDataArray(2)]
            },
            {
                label: 'July',
                backgroundColor: 'rgba(123, 138, 22,0.3)',
                borderColor: 'rgba(123, 138, 22,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(123, 138, 22,0.8)',
                hoverBorderColor: 'rgba(123, 138, 22,1)',
                borderCapStyle: 'round',
                data: [...graphDataArray(1)]
            },
            {
                label: 'August',
                backgroundColor: 'rgba(13, 128, 22,0.3)',
                borderColor: 'rgba(123, 138, 22,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(13, 128, 22,0.8)',
                hoverBorderColor: 'rgba(13, 128, 22,1)',
                borderCapStyle: 'round',
                data: [...graphDataArray(1)]
            },
        ]
    };
    const donutData = {
        labels: [...props.cards.map(card => card.name)],
        datasets: [
            {
                label: '# of Votes',
                data: [...dounutDataArray()],
                backgroundColor: [
                    ...dounutDataArray().map(() => {
                        return '#' + Math.floor(Math.random() * 16777215).toString(16);
                    }),
                ],
                borderColor: [
                    //loop dounutDataArray through to generate random hexa color
                    dounutDataArray().map(() => {
                        return '#' + Math.floor(Math.random() * 16777215).toString(16);
                    }),
                ],
                borderWidth: 2,


            },
        ],
    };

    return (
        <AdminLayout>
            <div className="flex flex-wrap">
                <div className="w-full mt-8 lg:mt-0 lg:w-12/12 lg:pl-4">
                    <div className="dark:bg-gray-800 bg-gray-300 rounded-3xl px-6 pt-6">
                        <div className="flex dark:text-gray-100 text-black text-2xl pb-6 font-bold">
                            <p>Activity Records</p>

                        </div>

                        <div>
                            <div className="border-t solid border-gray-700 py-2 flex 2xl:items-start w-full ">
                               <div className="w-full lg:w-3/12 px-1 pl-0">
                                    <div className="bg-yellow-200 shadow-lg rounded-lg w-full">
                                        <div className="py-5 px-5">
                                            <span className="font-light text-gray-600 text-sm">Total Users</span>
                                            <div className="flex items-center justify-between">
                                                <div className="text-3xl text-gray-800 font-bold">
                                                    2,784
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               </div>

                                <div className="w-full lg:w-3/12 px-1">
                                    <div className="bg-yellow-200 shadow-lg rounded-lg w-full">
                                        <div className="py-5 px-5">
                                            <span className="font-light text-gray-600 text-sm">Total Withdrawals</span>
                                            <div className="flex items-center justify-between">
                                                <div className="text-3xl text-gray-800 font-bold">
                                                    12.8K
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-3/12 px-1">
                                    <div className="bg-yellow-200 shadow-lg rounded-lg w-full">
                                        <div className="py-5 px-5">
                                            <span className="font-light text-gray-600 text-sm">New Contacts</span>
                                            <div className="flex items-center justify-between">
                                                <div className="text-3xl text-gray-800 font-bold">
                                                    81
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-3/12 px-1 pr-0">
                                    <div className="bg-yellow-200 shadow-lg rounded-lg w-full">
                                        <div className="py-5 px-5">
                                            <span className="font-light text-gray-600 text-sm">Total Money Earned</span>
                                            <div className="flex items-center justify-between">
                                                <div className="text-3xl text-gray-800 font-bold">
                                                    $3,897
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap mt-8 lg:pl-4">
                    <div className="w-full lg:w-8/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                        <div className="flex flex-row justify-between">
                            <h1 className='dark:text-gray-100 text-black'>Lead Stats (By Month) </h1>
                            <div className="flex justify-center">
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                        <AreaChart data={data} />
                    </div>

                    <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
                        <div className="dark:bg-gray-800 bg-gray-300 rounded-3xl px-6 pt-6">
                            <div className="flex dark:text-gray-100 text-black text-2xl pb-6 font-bold">
                                <p>Total Withdrawals</p>

                            </div>

                            <div>
                                <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full ">
                                    <DoughnutChart data={donutData} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl lg:pl-4 mt-4">
                        <div className="flex flex-row justify-between">
                            <h1 className='dark:text-gray-100 text-black'>Money Earned</h1>
                            <div className="flex justify-center">
                                <div>

                                </div>
                            </div>
                        </div>
                        <AreaChart data={data} />
                    </div>

                    <div className='w-full lg:w-6/12 pl-2'>
                        <div className="bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl mt-4">
                            <div className="flex flex-row justify-between">
                                <h1 className='dark:text-gray-100 text-black'>Visits by Device type</h1>
                                <div className="flex justify-center">
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <AreaChart data={data} />
                        </div>
                    </div>
                </div>
            </div>
            


        </AdminLayout>
    );
}


export async function getServerSideProps(context) {
    const session = await getSession(context);
    // console.log(session)
    const trades = await Server.get('/admin/card-transactions', {
        headers: {
            Authorization: `Bearer ${session?.accessToken}`,
        },
    });
    // const type = await Server.get('/type')
    const errorCode = trades.status != 200 ? true : false;
    const cards = await Server.get('/card')
    // console.log(trades.data.message[0])
    return {
        props: {
            trades: trades.data.message,
            cards: cards.data.message,
            paymentLog: 'google',
            errorCode,
        },
    };
}