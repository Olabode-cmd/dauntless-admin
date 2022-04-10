// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
import AreaChart from '../../components/chart';
import DoughnutChart from '../../components/donut';
import DropdownRender from '../../components/dropdown';
import { FiUserPlus, FiDollarSign, FiActivity, FiEye, FiArrowUp, FiArrowDown } from 'react-icons/fi'
import AgentLayout from '../../dashboard/AgentLayout';

export default function HomePage() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["24 hrs ago", "A week ago", "A month ago", "A year ago"];
  const role = ['seun', 'tope', 'sade',];

  return (
    <AgentLayout>

      <div className="flex flex-wrap py-6">

        <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
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

                    <tr className="text-gray-700">
                      <td className="px-4 py-3 text-ms font-semibold border">Trade002</td>
                      <td className="px-4 py-3 text-ms border">Ecode</td>
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                          </div>
                          <div>
                            <p className="font-semibold text-black">Mia</p>
                            <p className="text-xs text-gray-600">Daunt002</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-ms font-semibold border">#20500</td>
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


    // </AgentLayout>
  );
}
