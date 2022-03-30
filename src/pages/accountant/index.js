// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
import AreaChart from '../../components/chart';
import DoughnutChart from '../../components/donut';
import DropdownRender from '../../components/dropdown';
import { FiUserPlus, FiDollarSign, FiActivity, FiEye } from 'react-icons/fi'
import AccountantLayout from '../../dashboard/AccountantLayout';

export default function HomePage() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["24 hrs ago", "A week ago", "A month ago", "A year ago"];
  const role = ['seun', 'tope', 'sade',];

  return (
    <AccountantLayout>

      <div className="flex flex-wrap mt-8">
        <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
          <div className="dark:bg-gray-800 bg-gray-300 rounded-3xl px-6 pt-6">
            <div className="flex dark:text-gray-100 text-black text-2xl pb-6 font-bold">
              <p>Traffic Sources</p>

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

        <div className="w-full lg:w-7/12 bg-gray-300 dark:bg-gray-800  mx-3 py-6 px-6 rounded-3xl">
          <Breadcumb title={'Activity Log'} />
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
                        </div>
                    </div>

        </div>
      </div>


    </AccountantLayout>
  );
}
