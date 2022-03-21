// import Content from '../components/content';
import Breadcumb from '../../components/breadcumb';
import Statistics from '../../components/statistics';
// import AreaChart from '../../components/chart';
import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import SupportLayout from '../../dashboard/SupportLayout';

export default function HomePage() {
    return (
        <SupportLayout>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <Breadcumb title={'Mailbox'} />
                   
                    <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                        <h2 className="text-center font-bold font-large">Email</h2>
                        <div className="space-y-4">
                            <div>
                                <label for="emailaddress" className="block mb-2 text-sm">To</label>
                                <input type="email" name="emailaddress" id="emailaddress" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
                            </div>

                            <div>
                                <textarea type="text" name="textarea" id="textarea" placeholder="Enter content" style={{height: "500px"}} className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 bg-slate-200 resize-none text-black" />
                            </div>
                          
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="button" className="w-full px-8 py-3 rounded-md dark:bg-violet-400 dark:text-coolGray-900">Send Email</button>
                            </div>
                        </div>
                    </form>

                </div>

                <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
                    <div className="bg-gray-800 rounded-3xl px-6 pt-6">
                        <div className="flex text-white text-2xl pb-6 font-bold">
                            <p>Mails</p>
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
        </SupportLayout>
    );
}
