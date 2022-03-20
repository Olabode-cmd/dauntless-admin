// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
// import AreaChart from '../../components/chart';
import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import AdminLayout from '../../dashboard/AdminLayout';
import { Helmet } from "react-helmet"

export default function HomePage() {
  
  return (
    <AdminLayout>

      <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>

        
      </Helmet>
    <div className="flex flex-wrap">
      <div className="w-full lg:w-8/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
        <Breadcumb title={'Home'}/>
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
                <div className="shadow-lg rounded-lg overflow-hidden">
                  <div className="py-3 px-5 bg-gray-50">Bar Chart</div>

                  <canvas className="p-10" id="chartBar"></canvas>  
                </div>


              </div>
            </div>
          </div>

        </div>
      
      </div>

      <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
        <div className="bg-gray-800 rounded-3xl px-6 pt-6">
          <div className="flex text-white text-2xl pb-6 font-bold">
            <p>Client Messages</p>
          </div>
          <div>
            <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="profile image"
                className="object-cover w-10 h-10 rounded-full"
              />
              <div className="pl-4 w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="text-white font-medium">Stephanie</div>
                  <div className="flex justify-center items-center cursor-pointer h-7 w-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                </div>
                <p className="my-2 text-sm text-gray-400">
                  I got your first assignment. It was quite good. 🥳 We can
                  continue with the next assignment.
                </p>
                <p className="text-right text-gray-400 text-sm">Dec, 12</p>
              </div>
            </div>
            <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700">
              <img
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="profile image"
                className="object-cover w-10 h-10 rounded-full"
              />
              <div className="pl-4 w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="text-white font-medium">Mark</div>
                  <div className="flex justify-center items-center cursor-pointer h-7 w-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                </div>
                <p className="my-2 text-sm text-gray-400">
                  Hey, can tell me about progress of project? I'm waiting for your
                  response.
                </p>
                <p className="text-right text-gray-400 text-sm">Dec, 12</p>
              </div>
            </div>
            <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700">
              <img
                src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="profile image"
                className="object-cover w-10 h-10 rounded-full"
              />
              <div className="pl-4 w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="text-white font-medium">David</div>
                  <div className="flex justify-center items-center cursor-pointer h-7 w-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                </div>
                <p className="my-2 text-sm text-gray-400">
                  Hey, can tell me about progress of project? I'm waiting for your
                  response.
                </p>
                <p className="text-right text-gray-400 text-sm">Dec, 12</p>
              </div>
            </div>
            <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700">
              <img
                src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="profile image"
                className="object-cover w-10 h-10 rounded-full"
              />
              <div className="pl-4 w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="text-white font-medium">Mark</div>
                  <div className="flex justify-center items-center cursor-pointer h-7 w-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                </div>
                <p className="my-2 text-sm text-gray-400">
                  I am really impressed! Can't wait to see the final result.
                </p>
                <p className="text-right text-gray-400 text-sm">Dec, 12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </AdminLayout>
  );
}
