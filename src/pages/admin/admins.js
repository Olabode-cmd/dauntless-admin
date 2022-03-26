// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
// import AreaChart from '../../components/chart';
import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import AdminLayout from '../../dashboard/AdminLayout';

export default function Admins() {

    return (
        <AdminLayout>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Admins'} />
                    <div className="flex flex-wrap items-center pb-8">
                        <div className="grid gap-12 mb-12 md:grid-cols-12 xl:grid-cols-4">
                            <div className="min-w-0 rounded-lg border-4  shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                                <div className="p-4 flex items-center">
                                    <div className="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                                        <FiUserPlus color="white" size={20} />
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                            Total clients
                                        </p>
                                        <p className="text-lg font-semibold  text-gray-700 dark:text-gray-200">
                                            6389
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="min-w-0 rounded-lg border-4 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                                <div className="p-4 flex items-center">
                                    <div className="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4">
                                        <FiDollarSign />
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            Account balance
                                        </p>
                                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                            # 46,760.89
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="min-w-0 rounded-lg border-4 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                                <div className="p-4 flex items-center">
                                    <div className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                                        <FiActivity />
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            Trades
                                        </p>
                                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                            376
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="min-w-0 rounded-lg border-4 shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                                <div className="p-4 flex items-center">
                                    <div className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4">
                                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            Pending contacts
                                        </p>
                                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">35</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-12/12">
                            <div className="p-2">
                                <div
                                    className="p-4 rounded-3xl"
                                >
                                    <div className="shadow-lg rounded-lg overflow-hidden">
                                        <div className="py-3 px-5 bg-gray-50 flex justify-between">
                                            <div className="text-black font-medium">Admins</div>

                                            <div className="flex items-center justify-center px-5 py-2 border border-transparent text-base font-small rounded-md text-white bg-yellow-500 hover:bg-yellow-600 md:py-2 md:text-lg md:px-6">
                                                Add Admin
                                            </div>
                                        </div>

                                        <table className="table-fixed border border-slate-500 w-full">
                                            <thead>
                                                <tr>
                                                    <th className="border border-slate-600 py-3 bg-slate-700">Name</th>
                                                    <th className="border border-slate-600 py-3 bg-slate-700">Email</th>
                                                    <th className="border border-slate-600 py-3 bg-slate-700">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">John Doe</td>
                                                    <td className="border border-slate-700 py-3 px-3">johndoe@email.com</td>
                                                    <td className="border border-slate-700 py-3 px-3">
                                                        <button className="bg-green-500 py-2 px-5 text-white mx-1 rounded-md">View Profile</button>
                                                        <button className="bg-red-600 py-2 px-5 text-white mx-1 rounded-md">Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">Jane Doe</td>
                                                    <td className="border border-slate-700 py-3 px-3">janedoe@outlook.com</td>
                                                    <td className="border border-slate-700 py-3 px-3">
                                                        <button className="bg-green-500 py-2 px-5 text-white mx-1 rounded-md">View Profile</button>
                                                        <button className="bg-red-600 py-2 px-5 text-white mx-1 rounded-md">Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">Mary Jane</td>
                                                    <td className="border border-slate-700 py-3 px-3">maryjane120@outlook.com</td>
                                                    <td className="border border-slate-700 py-3 px-3">
                                                        <button className="bg-green-500 py-2 px-5 text-white mx-1 rounded-md">View Profile</button>
                                                        <button className="bg-red-600 py-2 px-5 text-white mx-1 rounded-md">Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
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
