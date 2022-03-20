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
                    <Breadcumb title={'Chats'} />
                    
                    <div className="container mx-auto">
                        <div className="border rounded">
                            <div>
                                <div className="w-full">
                                    <div className="relative flex items-center p-3 border-b border-gray-300">
                                        <img className="object-cover w-10 h-10 rounded-full"
                                            src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
                                        <span className="block ml-2 font-bold text-white-600">Stephanie</span>
                                        <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
                                        </span>
                                    </div>
                                    <div className="relative w-full p-6 overflow-y-auto h-[40rem]">

                                        <ul className="space-y-2">
                                            <li className="flex justify-start">
                                                <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow bg-yellow-700">
                                                    <span className="block text-white">Hi</span>
                                                </div>
                                            </li>
                                            <li className="flex justify-end">
                                                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                                    <span className="block">Hiiii</span>
                                                </div>
                                            </li>
                                            <li className="flex justify-end">
                                                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                                    <span className="block">how are you?</span>
                                                </div>
                                            </li>
                                            <li className="flex justify-start">
                                                <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow bg-yellow-700">
                                                    <span className="block text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>

                                    <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">

                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                            </svg>
                                        </button>

                                        <input type="text" placeholder="Message"
                                            className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                                            name="message" required />
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                            </svg>
                                        </button>
                                        <button type="submit">
                                            <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                            </svg>
                                        </button>
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
        </SupportLayout>
    );
}
