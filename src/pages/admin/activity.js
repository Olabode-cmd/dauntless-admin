// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
import AreaChart from '../../components/chart';
import DoughnutChart from '../../components/donut';
import DropdownRender from '../../components/dropdown';
import { FiUserPlus, FiDollarSign, FiActivity, FiEye } from 'react-icons/fi'
import AdminLayout from '../../dashboard/AdminLayout';
// import { Helmet } from "react-helmet"

export default function HomePage() {
    const role = ['seun', 'tope', 'sade',];
    const days = ["24 hrs ago", "A week ago", "A month ago", "A year ago"];

    return (
        <AdminLayout>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-5/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Admin Activity Log'} />
                    <div className="flex flex-row justify-between">
                        <div>
                            {/* <div className="relative inline-flex self-center"> */}
                            <select className="text-sm font-bold rounded border-1 border-yellow-700 text-gray-600 h-10 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                <option value="">Select Options</option>
                                {days.map((month, index) => (
                                    <option value={index} key={index}>{month}</option>
                                ))}
                            </select>
                            {/* </div> */}
                        </div>
                        <div className="pr-5">
                            {/* <div className="relative inline-flex self-center"> */}
                            <select className="text-sm font-bold rounded border-1 border-yellow-700 text-gray-600 h-10 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                <option value="">Select Admin</option>
                                {role.map((month, index) => (
                                    <option value={index} key={index}>{month}</option>
                                ))}
                            </select>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="mt-10 max-h-96 overflow-x-auto ">
                        {/* <!-- Card 1 --> */}
                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                            {/* <!-- Dot Follwing the Left Vertical Line --> */}
                            <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                            {/* <!-- Line that connecting the box with the vertical line --> */}
                            <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                            {/* <!-- Content that showing in the box --> */}
                            <div className="flex-auto">
                                <h1 className="text-lg">22 hours ago</h1>
                                <h1 className="text-md font-bold">Admin 001 view trade 001</h1>
                            </div>
                            {/* <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a> */}
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                            {/* <!-- Dot Follwing the Left Vertical Line --> */}
                            <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                            {/* <!-- Line that connecting the box with the vertical line --> */}
                            <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                            {/* <!-- Content that showing in the box --> */}
                            <div className="flex-auto">
                                <h1 className="text-lg">22 hours ago</h1>
                                <h1 className="text-md font-bold">Admin 001 view trade 001</h1>
                                {/* <h3></h3> */}
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                            {/* <!-- Dot Follwing the Left Vertical Line --> */}
                            <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                            {/* <!-- Line that connecting the box with the vertical line --> */}
                            <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                            {/* <!-- Content that showing in the box --> */}
                            <div className="flex-auto">
                                <h1 className="text-lg">22 hours ago</h1>
                                <h1 className="text-md font-bold">Admin 001 view trade 001</h1>
                            </div>
                            {/* <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a> */}
                        </div>

                        {/* <!-- Card 4 --> */}
                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                            {/* <!-- Dot Follwing the Left Vertical Line --> */}
                            <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                            {/* <!-- Line that connecting the box with the vertical line --> */}
                            <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                            {/* <!-- Content that showing in the box --> */}
                            <div className="flex-auto">
                                <h1 className="text-lg">22 hours ago</h1>
                                <h1 className="text-md font-bold">Admin 001 view trade 001</h1>
                            </div>
                            <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                        </div>

                        {/* <!-- Card 5 --> */}
                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
                            {/* <!-- Dot Follwing the Left Vertical Line --> */}
                            <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

                            {/* <!-- Line that connecting the box with the vertical line --> */}
                            <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

                            {/* <!-- Content that showing in the box --> */}
                            <div className="flex-auto">
                                <h1 className="text-lg">22 hours ago</h1>
                                <h1 className="text-md font-bold">Admin 001 view trade 001</h1>
                            </div>
                            {/* <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a> */}
                        </div>
                    </div>

                </div>

                <div className="w-full mt-8 lg:mt-0 lg:w-7/12 lg:pl-4">
                    <div className="dark:bg-gray-800 bg-gray-300 rounded-3xl px-6 pt-6">
                        <div className="flex text-white text-2xl pb-6 font-bold">
                            <p className='dark:text-gray-100 text-black'>Statisitics</p>
                        </div>
                        <div>
                            <div className="card bg-gray-400 dark:bg-gray-600">
                                <div className="p-5">
                                    <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 dark:text-white uppercase">Total Income</p>
                                    <h2 className="text-3xl font-extrabold leading-none text-gray-800 dark:text-white truncate">$24,563</h2>
                                </div>
                                <a href="#" className="px-5 py-3 text-sm font-medium text-orange-300 card-footer hover:text-black">See all income reports</a>
                            </div>

                            <div className="card bg-gray-400 mt-5">
                                <div className="p-5">
                                    <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 dark:text-white uppercase">Total Income</p>
                                    <h2 className="text-3xl font-extrabold leading-none text-gray-800 dark:text-white truncate">$24,563</h2>
                                </div>
                                <a href="#" className="px-5 py-3 text-sm font-medium text-orange-300 card-footer hover:text-black">See all income reports</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap mt-8">
                <div className="w-full lg:w-8/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <div className="flex flex-row justify-between">
                        <p className='dark:text-gray-100 text-black text-2xl pb-6 font-bold'>Trades</p>
                        <div className="pr-4">
                            <div className="flex justify-center">
                                <div>
                                    {/* <div className="relative inline-flex self-center"> */}
                                    <select className="text-sm font-bold rounded border-1 border-yellow-700 text-gray-600 h-10 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                        <option value="">View Previous days</option>
                                        {days.map((day, index) => (
                                            <option value={index} key={index}>{day}</option>
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
                <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
                    <div className="dark:bg-gray-800 bg-gray-300 rounded-3xl px-6 pt-6">
                        <div className="flex dark:text-gray-100 text-black text-2xl pb-6 font-bold">
                            <p>Best Rates</p>

                        </div>

                        <div>
                            <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full ">
                                <DoughnutChart />
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
