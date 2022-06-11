// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
import AreaChart from '../../components/chart';
import DoughnutChart from '../../components/donut';
import DropdownRender from '../../components/dropdown';
import { FiUserPlus, FiDollarSign, FiActivity, FiEye, FiArrowUp, FiArrowDown } from 'react-icons/fi'
import AgentLayout from '../../dashboard/AgentLayout';
import { Server } from '../api/lib/service';
import { getSession } from 'next-auth/react';
import moment from 'moment';
import React, { useState, useEffect, useCallback } from 'react';
import Error from 'next/error'


export default function HomePage(props) {
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

  

  return (
    <AgentLayout>

      <div className="flex flex-wrap py-6">

        <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
          <div className="flex flex-row justify-between">
            <p className='dark:text-gray-100 text-black text-2xl pb-6 font-bold'>Trades</p>
          </div>
          <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100  uppercase border-b border-gray-600">
                      <th className="px-4 py-3">Reference Id</th>
                      <th className="px-4 py-3">Trade Type</th>
                      <th className="px-4 py-3">Customer</th>
                      <th className="px-4 py-3">Total</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Action</th>

                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {
                      trades.length > 0 ? trades.map((trade, index) => (
                        <tr className="text-gray-700" key={index}>
                          <td className="px-4 py-3 text-ms font-semibold border">Trade00{trade?.id}</td>
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                <img className="object-cover w-full h-full rounded-full" src={sle(trade?.cardType?.card_id)[0].picture} alt="" loading="lazy" />
                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                                  { }
                                </div>
                              </div>
                              <div>
                                <p className="font-semibold text-black">{trade?.cardType?.name}</p>
                                <p className="text-xs text-gray-600">{sle(trade?.cardType?.card_id)[0].name} * {trade?.count}</p>
                                <p className="text-md text-gray-600">{trade?.cardType?.type_id == 1 ? "Ecode" : "Physical Card"}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                              </div>
                              <div>
                                <p className="font-semibold text-black">{trade?.user?.full_name.split(' ')[0]}</p>
                                <p className="text-xs text-gray-600">{trade?.user?.customer_id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold border">#{trade?.total}</td>
                          <td className="px-4 py-3 text-xs border">
                            {
                              trade?.tradeStatus?.name === 'pending' ? <span className="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-sm"> {trade?.tradeStatus.name} </span>
                                : trade?.tradeStatus?.name === 'failed' ? <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> {trade?.tradeStatus.name} </span>
                                  : trade?.tradeStatus?.name === 'completed' ? <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {trade?.tradeStatus.name} </span>
                                    : <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {Processing} </span>
                            }
                          </td>
                          <td className="px-4 py-3 text-sm border">{moment(trade?.created_at).calendar()}</td>
                          <td className="px-4 py-3 text-sm border">{moment(trade?.updated_at).calendar()}</td>

                          <td className="px-4 py-3 text-sm border">
                            <a className="cursor-pointer bg-orange-600 hover:bg-orange-500 text-orange-100 py-2 px-4 rounded inline-flex items-center" href={`admin/trade/${trade?.id}`}>
                              <span>
                                <FiEye
                                  size={20}
                                />
                              </span>
                            </a>

                          </td>

                        </tr>
                      )) : (
                        <tr>
                          <td colSpan="8" className="text-center text-gray-500">No Trades Yet</td>
                        </tr>
                      )
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>


    </AgentLayout>
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
