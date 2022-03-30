// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
import AreaChart from '../../components/chart';
import DoughnutChart from '../../components/donut';
import DropdownRender from '../../components/dropdown';
import { FiUserPlus, FiDollarSign, FiActivity, FiEye } from 'react-icons/fi'
// import {AiHomeFill} from ''
import AgentLayout from '../../dashboard/AgentLayout';

export default function HomePage() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["24 hrs ago", "A week ago", "A month ago", "A year ago"];
  const role = ['seun', 'tope', 'sade',];

  return (
    <AgentLayout>


      <div className="flex flex-wrap mt-8">
        <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4 bg-gray-300 dark:bg-gray-800 rounded-3xl px-6">
            <div className="max-w-sm pb-5 mx-auto mt-4 overflow-hidden rounded-lg shadow-lg bg-slate-700">
                <div className="h-40 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
                    <div className="flex justify-center">
                        <span className="mt-10 text-4xl font-extrabold text-white">Tony Stark</span>
                    </div>
                    <div className="flex justify-center">
                    <img className="object-cover w-24 h-24 mt-4 border-4 border-blue-600 rounded-full" src="https://im.indiatimes.in/content/2019/Jun/marvel_fans_start_a_petition_to_demand_robert_downey_jr_aka_tony_stark_aka_iron_man_back_1559715390_725x725.jpg" />
                    </div>
                </div>
                <div className="px-6 py-4 bg-slate-200">
                    <div className="flex justify-center mt-10 mb-4 text-xl font-medium">CEO, Stark Industries</div>
                    <div className="flex w-full text-gray-600">
                        <svg className="h-5 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>A-123, This is my office address</span>
                    </div>

                    <div className="flex my-1 text-gray-600">
                        <svg className="h-5 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>email@email.com</span>
                    </div>

                    <div className="flex text-gray-600">
                        <svg className="h-5 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>+91 1234567890</span>
                    </div>
                </div>
                <div className="flex justify-center mt-2">
                    <button type="button" className="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                        Edit Profile
                    </button>
                </div>
            </div>

        <div>

          </div>
        </div>
        <div className="w-full lg:w-6/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 mx-4 rounded-3xl">
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
                            {/* <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a> */}
                        </div>
                    </div>

        </div>
      </div>


    </AgentLayout>
  );
}
