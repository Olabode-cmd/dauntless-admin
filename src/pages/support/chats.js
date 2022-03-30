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
                        <span className="absolute inset-y-0 left-0 flex items-center">
                            <i className="fa fa-search h-5 w-5 px-2" style={{color: "gray"}} aria-hidden="true"></i>

                        </span>
                        <input
                            className="focus:bg-white focus:text-gray-900 focus:placeholder-gray-700 pl-10 pr-4 py-2 leading-none block w-full bg-gray-900 rounded-lg text-sm placeholder-gray-400 text-white"
                            placeholder="Search" />

                    </span>
                    <button className="ml-6 text-gray-400 hover:text-gray-200">
                        <i className="fa fa-bell-o h-5 w-5 fill-current" aria-hidden="true" style={{color: "#fff"}}></i>
                    </button>
                    <button className="ml-6 text-gray-400 hover:text-gray-200">
                        <i className="fa fa-question-circle-o h-5 w-5 fill-current" aria-hidden="true"
                            style={{color: "#fff"}}></i>
                    </button>
                </div>
            </div>
        </header>

        <div className="flex-1 flex overflow-x-hidden">
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
                            <span className="text-sm font-semibold text-gray-900 px-4 py-2">Refund</span>
                            <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        </a>
                        <a href="#" className="block bg-white py-3 border-t">
                            <div className="px-4 py-2 flex  justify-between">
                                <span className="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                                <span className="text-sm font-semibold text-gray-600">2 days ago</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 px-4 py-2">Refund</span>
                            <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing </p>
                        </a>
                        <a href="#" className="block bg-white py-3 border-t">
                            <div className="px-4 py-2 flex  justify-between">
                                <span className="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                                <span className="text-sm font-semibold text-gray-600">2 days ago</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 px-4 py-2">Refund</span>
                            <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        </a>
                        <a href="#" className="block bg-white py-3 border-t">
                            <div className="px-4 py-2 flex  justify-between">
                                <span className="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                                <span className="text-sm font-semibold text-gray-600">2 days ago</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 px-4 py-2">Refund</span>
                            <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col py-3 w-auto inline-block overflow-y-auto overflow-hidden bg-gray-100">
                    
                    {/* <div className="flex justify-between ">
                        <button>
                            <i className="px-3 fa fa-reply text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                            <i className="px-3 fa fa-tag text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                            <i className="px-3 fa fa-user-circle text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                            <i className="px-3 fa fa-inbox text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                            <i className="fa fa-ellipsis-h text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                        </button>
                        <button>
                            <i className="fa fa-angle-down text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                            <i className="px-4 fa fa-angle-up text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                        </button>
                    </div> */}
                    <div className="shadow-lg">
                        <div className="pt-3 pb-4 ">
                            <a href="#" className="block bg-white py-3 border-t">
                                <div className="px-4 py-2 flex  justify-between">
                                    <span>Re: Student Discount?</span>
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
                                <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium <br /> iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. <br/> Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
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
                                <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium <br/> iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. <br/> Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
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
                                <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium <br/> iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. <br/> Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
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
                                <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium <br/> iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. <br/> Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
                            </a>
                        </div>

                              <div className="w-full py-3 px-3 flex items-center justify-between border-t border-gray-300">

                                  <input aria-placeholder="Escribe un mensaje aquí" placeholder="Type your message here and hit enter to send"
                                      className="py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 outline-none focus:text-gray-700 fixed" style={{ zIndex: 10 }} type="text" name="message" required />
                              </div>
                    </div>

                </div>
            </div>
            </div>
        </div>


    </SupportLayout>
  );
}
