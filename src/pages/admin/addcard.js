// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
// import AreaChart from '../../components/chart';
import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import AdminLayout from '../../dashboard/AdminLayout';
import { Helmet } from "react-helmet"

export default function addCard() {

    return (
        <AdminLayout>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Cards'} />
                    
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-5/12">
                            <form noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                                <h2 className="text-center font-bold font-large">Add Card</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="cardname" className="block mb-2 text-sm">Card Name</label>
                                        <input type="text" name="cardname" id="cardName" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
			                        </div>
			                        <div>
				                        <div className="flex justify-between mb-2">
                                        <label htmlFor="rate" className="text-sm">Rate</label>
                                    </div>
                                    <input type="text" name="rate" id="rate" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
			                    </div>
                                    <div>
                                        <label htmlFor="image" className="block mb-2 text-sm">Upload</label>
                                        <input type="file" name="image" id="cardimage" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
                                    </div>
		                    </div>
		                    <div className="space-y-2">
                                    <div>
                                        <button type="button" className="w-full px-8 py-3 rounded-md dark:bg-violet-400 dark:text-coolGray-900">Submit Card</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>


        </AdminLayout>
    );
}
