// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
// import AreaChart from '../../components/chart';
import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import AgentLayout from '../../dashboard/AgentLayout';
import { Helmet } from "react-helmet"

export default function Cards() {

    return (
        <AgentLayout>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Cards'} />
                   
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-12/12">
                            <div className="p-2">
                                <div
                                    className="p-4 rounded-3xl"
                                >
                                    <div className="shadow-lg rounded-lg overflow-hidden">
                                        <div className="py-3 px-5 bg-gray-50 flex justify-between">
                                            <div className="text-black font-medium">Cards</div>

                                            <div className="flex items-center justify-center px-5 py-2 border border-transparent text-base font-small rounded-md text-white bg-yellow-500 hover:bg-yellow-600 md:py-2 md:text-lg md:px-6">
                                                Add Card
                                            </div>
                                        </div>

                                        <table className="table-fixed border border-slate-500 w-full">
                                            <thead>
                                                <tr>
                                                    <th className="border border-slate-600 py-3 bg-slate-700">Card</th>
                                                    <th className="border border-slate-600 py-3 bg-slate-700">Rate</th>
                                                    <th className="border border-slate-600 py-3 bg-slate-700">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">iTunes Card</td>
                                                    <td className="border border-slate-700 py-3 px-3">$500</td>
                                                    <td className="border border-slate-700 py-3 px-3">
                                                        <button className="bg-yellow-500 py-2 px-5 text-white mx-1 rounded-md">Update</button>
                                                        <button className="bg-red-600 py-2 px-5 text-white mx-1 rounded-md">Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">Amazon Gift Cards</td>
                                                    <td className="border border-slate-700 py-3 px-3">$500</td>
                                                    <td className="border border-slate-700 py-3 px-3">
                                                        <button className="bg-yellow-500 py-2 px-5 text-white mx-1 rounded-md">Update</button>
                                                        <button className="bg-red-600 py-2 px-5 text-white mx-1 rounded-md">Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">iTunes Card</td>
                                                    <td className="border border-slate-700 py-3 px-3">$500</td>
                                                    <td className="border border-slate-700 py-3 px-3">
                                                        <button className="bg-yellow-500 py-2 px-5 text-white mx-1 rounded-md">Update</button>
                                                        <button className="bg-red-600 py-2 px-5 text-white mx-1 rounded-md">Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">eBay Gift Cards</td>
                                                    <td className="border border-slate-700 py-3 px-3">$398</td>
                                                    <td className="border border-slate-700 py-3 px-3">
                                                        <button className="bg-yellow-500 py-2 px-5 text-white mx-1 rounded-md">Update</button>
                                                        <button className="bg-red-600 py-2 px-5 text-white mx-1 rounded-md">Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-700 py-3 px-3">Jumia Card</td>
                                                    <td className="border border-slate-700 py-3 px-3">$500</td>
                                                    <td className="border border-slate-700 py-3 px-3">
                                                        <button className="bg-yellow-500 py-2 px-5 text-white mx-1 rounded-md">Update</button>
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


        </AgentLayout>
    );
}
