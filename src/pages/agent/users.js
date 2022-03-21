// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
// import AreaChart from '../../components/chart';
import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import AgentLayout from '../../dashboard/AgentLayout';

export default function Users() {

    return (
        <AgentLayout>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Users'} />
                   
                   

                </div>
            </div>


        </AgentLayout>
    );
}
