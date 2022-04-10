// import Content from '../components/content';
import React, { useState, useEffect } from 'react';
import Breadcumb from '../../../components/breadcumb';
import { RiBankFill } from 'react-icons/ri'
import { AiOutlineMail, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai'
import AdminLayout from '../../../dashboard/AdminLayout';
import MaterialTable, { Column } from "@material-table/core";
import { Tab } from '@headlessui/react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FiCamera, FiEye } from 'react-icons/fi';
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

const Id = (props) => {
  const Router = useRouter()

  const [data, setData] = useState(props.data)
  const [cardType, setCardType] = useState([])
  const [selectedRow, setSelectedRow] = useState(null);




  return (
    <AdminLayout>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
          <Breadcumb title={'User 🦸‍♂️'} />

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
                  User Profile <span className="text-md text-green-500"></span>
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
                  Completed Trades <span className="text-md text-green-500"></span>

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
                  Failed Trades <span className="text-md text-red-500"></span>

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

                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-8/12  bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                      <div className='flex-row'>
                        <div className="flex text-white text-2xl pb-6 font-bold">
                          <p className='dark:text-gray-100 text-black'>User Profile</p>
                        </div>
                        <div className="w-full pb-5 mt-4 overflow-hidden rounded-lg shadow-lg dark:bg-slate-300 bg-white">
                          <div className="h-40 bg-gradient-to-br from-orange-400 via-yellow-500 to-gray-600">
                            <div className="flex justify-center">
                              <span className="mt-10 text-4xl font-extrabold  text-white">Femi Oyewo</span>
                            </div>
                            <div className="flex justify-center">
                              <img className="object-cover w-24 h-24 mt-4 border-4 border-orange-400 rounded-full" src="https://im.indiatimes.in/content/2019/Jun/marvel_fans_start_a_petition_to_demand_robert_downey_jr_aka_tony_stark_aka_iron_man_back_1559715390_725x725.jpg" />
                            </div>
                          </div>
                          <div className="px-6 py-4">
                            <div className="flex justify-center mt-10 mb-4 text-xl font-medium">Joined A year ago</div>
                            <div className="flex my-1 text-gray-600">
                              <AiOutlineMail size={20} className="h-5 mt-1 mr-2" />
                              <span>email@email.com</span>
                            </div>

                            <div className="flex text-gray-600">
                              <AiOutlinePhone size={20} className="h-5 mt-1 mr-2" />

                              <span>+91 1234567890</span>
                            </div>

                            <div className="flex text-gray-600">
                              <AiOutlineUser size={20} className="h-5 mt-1 mr-2" />

                              <span>Daunt001</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-col mt-5 gap-7 text-sm">
                        <div
                          className="bg-yellow-50 flex justify-between items-center p-3 rounded-sm shadow-sm"
                        >
                          <div className="flex justify-start items-center gap-2">
                            <RiBankFill color={'gold'} size={20} />
                            <div>
                              <p className="text-gray-700 font-bold tracking-wider pr-2">
                                Guaranty Trusted Bank
                              </p>
                              <p className="text-gray-400 text-sm">0232882872</p>
                            </div>
                          </div>


                        </div>

                        <div
                          className="bg-yellow-50 flex justify-between items-center p-3 rounded-sm shadow-sm mt-4"
                        >
                          <div className="flex justify-start items-center gap-2">
                            <RiBankFill color={'gold'} size={20} />
                            <div>
                              <p className="text-gray-700 font-bold tracking-wider pr-2">
                                Guaranty Trusted Bank
                              </p>
                              <p className="text-gray-400 text-sm">0232882872</p>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                    {/* account card info */}


                    <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
                      <div className="dark:bg-gray-800 bg-gray-300 rounded-3xl px-6 pt-6">
                        <div className="flex text-white text-2xl pb-6 font-bold">
                          <p className='dark:text-gray-100 text-black'>User Activity Log</p>
                        </div>
                        <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full dark:hover:bg-gray-700  hover:bg-gray-200">

                          <div className="pl-4 w-full">
                            <div className="flex items-center justify-between w-full">
                              <div className="dark:text-white text-gray-800 font-medium">User 001</div>
                            </div>
                            <p className="my-2 text-sm dark:text-gray-100 text-gray-800">
                              Was paid #200.00 on 12/12/2020
                            </p>
                          </div>
                        </div>
                        <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full dark:hover:bg-gray-700 hover:bg-gray-200">
                          <div className="pl-4 w-full">
                            <div className="flex items-center justify-between w-full">
                              <div className="dark:text-white text-gray-800 font-medium">User 001</div>
                            </div>
                            <p className="my-2 text-sm dark:text-gray-100 text-gray-800">
                              Was paid #200.00 on 12/12/2020
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>



                  </div>
                </Tab.Panel>

                <Tab.Panel
                  // key={idx}
                  className={classNames(
                    'bg-white dark:bg-gray-700 rounded-xl p-3',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                  )}
                >

      <div className="flex flex-wrap mt-8">
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
                    <tr className="text-gray-700">
                      <td className="px-4 py-3 text-ms font-semibold border">Trade001</td>
                      <td className="px-4 py-3 text-ms border">Ecode</td>
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                          </div>
                          <div>
                            <p className="font-semibold text-black">Sufyan</p>
                            <p className="text-xs text-gray-600">Daunt001</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-ms font-semibold border">#20000</td>
                      <td className="px-4 py-3 text-xs border">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Completed </span>
                      </td>
                      <td className="px-4 py-3 text-sm border">6/4/2000</td>
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
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>

                </Tab.Panel>
                <Tab.Panel
                  // key={idx}
                  className={classNames(
                    'bg-white dark:bg-gray-700 rounded-xl p-3',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                  )}
                >

                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

        </div>
      </div>

    </AdminLayout>
  );
}

export default Id;


// export async function getServerSideProps(context) {
//   // const session = await getSession(context);
//   // if (!session) {
//   //   return {
//   //     props: {},
//   //     redirect: {
//   //       destination: '/login',
//   //       permanent: false
//   //     }
//   //   };
//   // }

//   // if (session.user.role != 2){
//   //   return {
//   //     props: {},
//   //     redirect: {
//   //       destination: '/error',
//   //       permanent: false
//   //     }
//   //   };
//   // }
//   // const token = session?.accessToken;
//   // const id = context.params.id;
//   // const coinData = await Server.get(`/admin/coin/${id}`, {
//   //   headers: {
//   //     Authorization: `Bearer ${token}`,
//   //   },
//   // });
//   // const coin = await coinData.data.message;
//   return {
//     props: {
//       // coin,
//     },
//   };
// }