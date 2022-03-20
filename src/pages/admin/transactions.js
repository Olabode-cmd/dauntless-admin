// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
// import AreaChart from '../../components/chart';
import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import AdminLayout from '../../dashboard/AdminLayout';


export default function Transactions() {

    return (
        <AdminLayout>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Transactions'} />
                   
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-12/12">
                            <div className="p-2">
                                <div
                                    className="p-4 rounded-3xl"
                                >
                                    <div className="shadow-lg rounded-lg overflow-hidden">
                                        <div className="py-3 px-5 bg-gray-50 flex justify-between">
                                            <div className="text-black font-large font-bold">Transactions</div>
                                        </div>

                                        <table className="table-fixed border border-slate-500 w-full">
                                            <thead>
                                                <tr>
                                                    <th className="border border-slate-600 py-3 bg-slate-700">Date</th>
                                                    <th className="border border-slate-600 py-3 bg-slate-700">Card Type</th>
                                                    <th className="border border-slate-600 py-3 bg-slate-700">Account</th>
                                                    <th className="border border-slate-600 py-3 bg-slate-700">Transaction ID</th>
                                                    <th className="border border-slate-600 py-3 bg-slate-700">Value</th>
                                                    <th className="border border-slate-600 py-3 bg-slate-700">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">March 12, 2022</td>
                                                    <td className="border border-slate-700 py-3 px-3">Google Play</td>
                                                    <td className="border border-slate-700 py-3 px-3">User 0911</td>
                                                    <td className="border border-slate-700 py-3 px-3">Ref No: 564332</td>
                                                    <td className="border border-slate-700 py-3 px-3">$500</td>
                                                    <td className="border border-slate-700 py-3 px-3 bg-green-500 text-center">Verified</td>
                                                </tr>

                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">April 12, 2022</td>
                                                    <td className="border border-slate-700 py-3 px-3">Google Play</td>
                                                    <td className="border border-slate-700 py-3 px-3">User 0911</td>
                                                    <td className="border border-slate-700 py-3 px-3">Ref No: 564332</td>
                                                    <td className="border border-slate-700 py-3 px-3">$530</td>
                                                    <td className="border border-slate-700 py-3 px-3 bg-green-500 text-center">Verified</td>
                                                </tr>

                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">April 12, 2022</td>
                                                    <td className="border border-slate-700 py-3 px-3">Google Play</td>
                                                    <td className="border border-slate-700 py-3 px-3">User 0911</td>
                                                    <td className="border border-slate-700 py-3 px-3">Ref No: 564332</td>
                                                    <td className="border border-slate-700 py-3 px-3">$530</td>
                                                    <td className="border border-slate-700 py-3 px-3 bg-yellow-500 text-center">Pending</td>
                                                </tr>

                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">April 12, 2022</td>
                                                    <td className="border border-slate-700 py-3 px-3">Google Play</td>
                                                    <td className="border border-slate-700 py-3 px-3">User 0911</td>
                                                    <td className="border border-slate-700 py-3 px-3">Ref No: 564332</td>
                                                    <td className="border border-slate-700 py-3 px-3">$530</td>
                                                    <td className="border border-slate-700 py-3 px-3 bg-green-500 text-center">Verified</td>
                                                </tr>

                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">March 12, 2022</td>
                                                    <td className="border border-slate-700 py-3 px-3">Google Play</td>
                                                    <td className="border border-slate-700 py-3 px-3">User 0911</td>
                                                    <td className="border border-slate-700 py-3 px-3">Ref No: 564332</td>
                                                    <td className="border border-slate-700 py-3 px-3">$500</td>
                                                    <td className="border border-slate-700 py-3 px-3 bg-yellow-500 text-center">Pending</td>
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
