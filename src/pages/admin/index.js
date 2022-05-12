// import Content from '../components/content';
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
// import { Helmet } from "react-helmet"

export default function HomePage(props) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["24 hours ago", "A week ago", "A month ago", "A year ago"];
  const [trades, setTrades] = useState([]);
  const [typeValue, setTypeValue] = React.useState('');
  const [graphValue, setGraphValue] = React.useState('');
  const [graphData, setGraphData] = React.useState([]);

  const filterDay = useCallback((day) => {
    const filtered = props.trades.filter(trade => {
      const date = moment(trade.created_at).format('YYYY-MM-DD');
      const today = moment().format('YYYY-MM-DD');
      // const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
      const lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');
      const lastMonth = moment().subtract(30, 'days').format('YYYY-MM-DD');
      const lastYear = moment().subtract(365, 'days').format('YYYY-MM-DD');
      if (day === "24 hours ago") {
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

  // loop through each card id and count total time it appears in each trade and put into an array of graphdata
  const graphDataArray = () => props.cards.map(card => {
    const filtered = props.trades.filter(trade => (trade.cardType.card_id === card.id));
    const total = filtered.length;
    const all = {
      name: card.name,
      total: total
    }
    return all.total;
  });

  const sle = (id) => props.cards.filter(card => card.id === id);
  useEffect(() => {
    filterDay(typeValue)
  }, [typeValue])

  useEffect(() => {
    filterMonth(graphValue)
  }, [graphValue])



  useEffect(() => {
    filterDay('24 hours ago')
    filterMonth(moment().format('MMMM'))
  },[])

 
  const data = {
    labels: [...props.cards.map(card => card.name)],
    datasets: [
      {
        label: 'Physical',
        backgroundColor: 'rgba(217, 188, 41,0.3)',
        borderColor: 'rgba(217,188, 41,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(217, 188, 41,0.8)',
        hoverBorderColor: 'rgba(217, 188, 41,1)',
        borderCapStyle: 'round',
        data: [...graphDataArray(1)]
      },
      {
        label: 'Ecode',
        backgroundColor: 'rgba(123, 138, 22,0.3)',
        borderColor: 'rgba(123, 138, 22,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(123, 138, 22,0.8)',
        hoverBorderColor: 'rgba(123, 138, 22,1)',
        borderCapStyle: 'round',
        data: [...graphDataArray(2)]
      },
    ]
  };
  const donutData = {
    labels: [...props.cards.map(card => card.name)],
    datasets: [
      {
        label: '# of Votes',
        data: [...graphDataArray()],
        backgroundColor: [
          ...graphDataArray().map(() => {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
          }),
        ],
        borderColor: [
          //loop graphDataArray through to generate random hexa color
          graphDataArray().map(() => {
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
<<<<<<< HEAD
        <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
=======
      <div className="w-full lg:w-8/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl overflow-y-scroll">
>>>>>>> olabode
          <div className="flex flex-row justify-between">
            <p className='dark:text-gray-100 text-black text-2xl pb-6 font-bold'>Trades</p>
            <div className="pr-4">
              <div className="flex justify-center">
                <div>
                  {/* <div className="relative inline-flex self-center"> */}
                  <select
                    className="text-sm font-bold rounded border-1 border-yellow-700 text-gray-600 h-10 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                    value={typeValue}
                    onChange={(e) => setTypeValue(e.target.value)}
                  >
                    {/* <option value="">View Previous data</option> */}
                    {days.map((day, index) => (
                      <option value={day} key={index}>{day}</option>
                    ))}
                  </select>
                  {/* </div> */}
                </div>
              </div>
            </div>
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
                      <th className="px-4 py-3">Updated</th>
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
                                <p className="text-xs text-gray-600">{sle(trade?.cardType?.card_id)[0].name}</p>
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
                            <a className="cursor-pointer bg-orange-600 hover:bg-orange-500 text-orange-100 py-2 px-4 rounded inline-flex items-center">
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

      <div className="flex flex-wrap mt-8">
        <div className="w-full lg:w-8/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
          <div className="flex flex-row justify-between">
            <h1 className='dark:text-gray-100 text-black'>View Analytics</h1>
            <div className="flex justify-center">
              <div>
                {/* <div className="relative inline-flex self-center"> */}
                <select className="text-sm font-bold rounded border-1 border-yellow-700 text-gray-600 h-10 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  value={graphValue}
                  onChange={(e) => setGraphValue(e.target.value)}
                >
                  <option value="">Select Month</option>
                  {months.map((month, index) => (
                    <option value={index} key={index}>{month}</option>
                  ))}
                </select>
                {/* </div> */}
              </div>
            </div>
          </div>
          <AreaChart data={data} />
        </div>

        <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
          <div className="dark:bg-gray-800 bg-gray-300 rounded-3xl px-6 pt-6">
            <div className="flex dark:text-gray-100 text-black text-2xl pb-6 font-bold">
              <p>Best-Selling Cards</p>

            </div>

            <div>
              <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full ">
                <DoughnutChart data={donutData} />
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const trades = await Server.get('/admin/card-transactions', {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });

  const cards = await Server.get('/card')
  console.log(trades.data.message[0])
  return {
    props: {
      trades: trades.data.message,
      cards: cards.data.message,
      paymentLog: 'google',
    },
  };
}