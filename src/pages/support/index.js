// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
import AreaChart from '../../components/chart';
import DoughnutChart from '../../components/donut';
import DropdownRender from '../../components/dropdown';
import { FiUserPlus, FiDollarSign, FiActivity, FiEye } from 'react-icons/fi'
import SupportLayout from '../../dashboard/SupportLayout';
import { FaFileArchive, FaImage } from "react-icons/fa";

export default function HomePage() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["24 hrs ago", "A week ago", "A month ago", "A year ago"];

  return (
    <SupportLayout>


      <div className="h-screen flex flex-col">
        <header className="flex flex-shrink-0">
          <div className="flex-shrink-0 px-4 py-3 bg-gray-800 w-80">
            <button className="flex items-center block w-full">
              <img className="h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                alt="" />
              <span className="ml-4 text-sm font-medium text-white">Monica White</span>
            </button>
          </div>
          <div className="flex-1 flex bg-gray-700 px-6 items-center justify-between">
            <nav>
              <a href="#"
                className="hover:bg-gray-600 rounded-lg  bg-gray-800 inline-block text-sm font-medium text-white px-3 py-2 leading-none">MailBox</a>
            </nav>
            <div className="flex items-center">
              <span className="relative">
                <input
                  className="focus:bg-white focus:text-gray-900 focus:placeholder-gray-700 pl-10 pr-4 py-2 leading-none block w-full bg-gray-900 rounded-lg text-sm placeholder-gray-400 text-white"
                  placeholder="Search" />

              </span>
            </div>
          </div>
        </header>

        <div className="flex overflow-x-hidden">
          <div className="flex bg-gray-200">
            <div className="overflow-y-auto overflow-hidden w-80">
              <div className="px-4 py-2 flex items-center justify-between border-l border-r border-b">
                <button className="text-sm flex items-center font-semibold text-gray-600">
                  <span>Sorted by Date</span>
                  <i className="ml-2 fa fa-angle-down justify-between" aria-hidden="true"></i>
                </button>
                <button className="text-sm flex items-center font-semibold text-gray-600">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
              </div>
              <div className="pt-3 pb-4 ">

                <a href="#" className="block bg-white py-3 border-t">
                  <div className="px-4 py-2 flex  justify-between">
                    <span className="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                    <span className="text-sm font-semibold text-gray-600">2 days ago</span>
                  </div>
                  <span className="text-sm font-semibold text-green-600 font-bold px-4 py-2">Trade Confirm</span>
                  <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </a>
                <a href="#" className="block bg-white py-3 border-t">
                  <div className="px-4 py-2 flex  justify-between">
                    <span className="text-sm font-semibold text-gray-900">Matthew Roberston</span>
                    <span className="text-sm font-semibold text-gray-600">2 days ago</span>
                  </div>
                  <span className="text-sm font-semibold text-red-600 font-bold px-4 py-2">Fault Card</span>
                  <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing </p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-col py-3 w-full inline-block overflow-y-auto overflow-hidden bg-gray-100">

            <div className="shadow-lg">
              <div className="pt-3 pb-4 ">
                <a href="#" className="block bg-white py-3 border-t">
                  <div className="px-4 py-2 flex  justify-between">
                    <span>John Doe</span>
                    <div>
                      <span className="px-3 text-sm font-semibold">#1428</span>
                      <span className="text-sm font-semibold px-4 py-1 text-gray-800 rounded-full bg-green-300">Active</span>
                    </div>

                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="shadow-lg pt-4 ml-2 mr-2 rounded-lg">
                <a href="#" className="block bg-white py-3 border-t pb-4">
                  <div className="px-4 py-2 flex  justify-between">
                    <span className="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                    <div className="flex">
                      <span className="px-4 text-sm font-semibold text-gray-600"> yesterday</span>
                      <img className="h-6 w-6 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                        alt="" />
                    </div>
                  </div>
                  <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium <br /> iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. <br /> Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
                </a>
              </div>
              <div className="shadow-lg pt-4 ml-2 mr-2 rounded-lg">
                <div className="block bg-white py-3 border-t pb-4">
                  <div className="px-4 py-2 flex  justify-between">
                    <span className="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                    <div className="flex">
                      <span className="px-4 text-sm font-semibold text-gray-600"> yesterday</span>
                      <img className="h-6 w-6 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                        alt="" />
                    </div>
                  </div>
                  <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium <br /> iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. <br /> Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
                </div>
              </div>
              <div className="shadow-lg pt-4 ml-2 mr-2 rounded-lg">
                <div className="block bg-white py-3 border-t pb-4">
                  <div className="px-4 py-2 flex  justify-between">
                    <span className="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                    <div className="flex">
                      <span className="px-4 text-sm font-semibold text-gray-600"> yesterday</span>
                      <img className="h-6 w-6 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                        alt="" />
                    </div>
                  </div>
                  <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium <br /> iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. <br /> Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
                </div>
              </div>
              <div className="shadow-lg pt-4 ml-2 mr-2 rounded-lg">
                <a href="#" className="block bg-white py-3 border-t pb-4">
                  <div className="px-4 py-2 flex  justify-between">
                    <span className="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                    <div className="flex">
                      <span className="px-4 text-sm font-semibold text-gray-600"> yesterday</span>
                      <img className="h-6 w-6 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                        alt="" />
                    </div>
                  </div>
                  <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium <br /> iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. <br /> Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
                </a>
              </div>

              <div className="w-full bg-slate-800 py-3 px-3 flex items-center justify-between border-t border-gray-300">

                <input aria-placeholder="Escribe un mensaje aquí" placeholder="Type your message here and hit enter to send"
                  className="py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 outline-none focus:text-gray-700" type="text" name="message" required />
                <div className="flex flex-row">
                  <button className="focus:outline-none flex items-center justify-center h-10 w-8 hover:text-blue-600  text-blue-400">
                    
                    <FaFileArchive className="w-4 h-4 fill-current text-cyan-500" />
                  </button>
                  <button
                    id="capture"
                    className="focus:outline-none flex items-center justify-center h-10 w-8 hover:text-green-600 text-green-400 ml-1 mr-2"
                  >
                    <FaImage className="w-5 h-5 fill-current text-green-500" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </SupportLayout>
  );
}
