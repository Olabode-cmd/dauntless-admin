import React from 'react';
import { FiSunrise, FiMoon, FiMenu } from 'react-icons/fi';
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
// import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar({login}) {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const style = {
        close: `flex-col justify-between md:mx-6`,
        open: `flex md:mx-6 md:inline-block duration-500 ease-in transition-all`,
        default: `h-screen overflow-y-auto text-white top-0 lg:absolute bg-gray-900 lg:block lg:z-40`,
    };


  return (
      <nav className="bg-white shadow dark:bg-gray-800 sticky top-0 z-40">
          <div className="container px-6 py-2 mx-auto md:flex md:justify-between md:items-center">
              <div className="flex items-center justify-between">
                  <div>
                      <img src="/images/2.png" width={30} />
                  </div>

                  <div className="flex md:hidden">
                      <button type="button" onClick={toggle} className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                          <FiMenu />
                      </button>
                  </div>
              </div>

              
            <div className={isOpen ? style.open : style.close}>

                <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-2 md:mx-6 md:my-0"><Link href="/">Home</Link></a>
                <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-2 md:mx-6 md:my-0"><Link href="/about">About Us</Link></a>
                <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-2 md:mx-6 md:my-0">Sign In</a>

            </div>

              <div className={isOpen ? style.open : style.close}>    
                  <div className="mx-auto md:ml-auto flex justify-end">
                      <a rel="noopener noreferrer" href="/auth/login" className="my-2 mx-4 text-md font-regular dark:text-slate-100 text-zinc-900 hover:text-yellow-400 flex items-center justify-center">
                          Log In</a>
                      <a rel="noopener noreferrer" href="#" className="px-8 py-3 my-2 mx-1 text-md font-regular rounded border border-yellow-400 hover:bg-yellow-400 dark:text-slate-100 text-zinc-900 flex items-center justify-center">
                          <AiFillApple /> &nbsp; <AiFillAndroid /> &nbsp; Download App</a>
                  </div> 
              </div>
          </div>
      </nav>

  )
}
