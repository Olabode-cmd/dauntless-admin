// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
import AreaChart from '../../components/chart';
import DoughnutChart from '../../components/donut';
import DropdownRender from '../../components/dropdown';
import { FiUserPlus, FiDollarSign, FiActivity, FiEye } from 'react-icons/fi'
import SupportLayout from '../../dashboard/SupportLayout';

export default function HomePage() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["24 hrs ago", "A week ago", "A month ago", "A year ago"];

  return (
    <SupportLayout>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
          <Breadcumb title={'Home - Activity'} />
          <div className="flex flex-row justify-between">
            <h1>Support Dashboard</h1>
            <div className="flex justify-center">
              <div>
                {/* <div className="relative inline-flex self-center"> */}
                <select className="text-sm font-bold rounded border-1 border-yellow-700 text-gray-600 h-10 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                  <option value="">Select Month</option>
                  {months.map((month, index) => (
                    <option value={index} key={index}>{month}</option>
                  ))}
                </select>
                {/* </div> */}
              </div>
            </div>
          </div>
          <AreaChart />
        </div>


      </div>


    </SupportLayout>
  );
}
