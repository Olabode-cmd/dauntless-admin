// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
// import AreaChart from '../../components/chart';
import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import AccountantLayout from '../../dashboard/AccountantLayout';

export default function HomePage() {
    return (
        <AccountantLayout>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Overview'} />
                    <div className="flex flex-wrap items-center pb-8">
                        <div className="grid gap-8 mb-8 md:grid-cols-12 xl:grid-cols-4">
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
                                    style={{ backgroundColor: '#fee4cb' }}
                                >
                                    {/* <AreaChart/> */}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </AccountantLayout>
    );
}
