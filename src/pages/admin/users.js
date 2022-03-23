// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
// import AreaChart from '../../components/chart';
import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import AdminLayout from '../../dashboard/AdminLayout';
import MaterialTable from 'material-table';

export default function Users() {

    return (
        <AdminLayout>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Manage Users'} />
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-12/12">
                            <div className="p-2">
                                <div
                                    className="p-4 rounded-3xl"
                                >
                                    <div className="shadow-lg rounded-lg overflow-hidden">

                                        <MaterialTable
                                            title="Positioning Actions Column Preview"
                                            columns={[
                                                { title: 'Name', field: 'name' },
                                                { title: 'Surname', field: 'surname' },
                                                { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                                                {
                                                    title: 'Birth Place',
                                                    field: 'birthCity',
                                                    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                                                },
                                            ]}
                                            data={[
                                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                                            ]}
                                            actions={[
                                                {
                                                    icon: 'save',
                                                    tooltip: 'Save User',
                                                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                                                },
                                                rowData => ({
                                                    icon: 'delete',
                                                    tooltip: 'Delete User',
                                                    onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                                                    disabled: rowData.birthYear < 2000
                                                })
                                            ]}
                                            options={{
                                                actionsColumnIndex: -1
                                            }}
                                        />

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
