import React from 'react';
import { FiSunrise, FiMoon, FiMenu } from 'react-icons/fi'

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const style = {
        close: `flex flex-col md:flex-row md:mx-6 hidden md:inline-block`,
        open: `flex flex-col md:flex-row md:mx-6 md:inline-block duration-500 ease-in transition-all`,
        default: `h-screen overflow-y-auto text-white top-0 lg:absolute bg-gray-900 lg:block lg:z-40`,
    };

  return (
      <nav className="bg-white shadow dark:bg-gray-800">
          <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
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

              <div className="items-center md:flex">
                  <div className={isOpen ? style.open : style.close}>
                      <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Home</a>
                      <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">About Us</a>
                      <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Privacy Policy</a>

                      <label htmlFor="Toggle2" className="inline-flex items-center mx-2 space-x-4 cursor-pointer dark:text-coolGray-100 block pr-5">
                          <span><FiSunrise size={'20px'} color="gold" /></span>
                          <span className="relative">
                              <input id="Toggle2" type="checkbox" className="hidden peer" onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                              <div className="w-10 h-4 rounded-full shadow dark:bg-coolGray-600 peer-checked:dark:bg-violet-400"></div>
                              <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-400"></div>
                          </span>
                          <span><FiMoon size={'20px'} color="gold" /></span>

                      </label>
                  </div>
              </div>
          </div>
      </nav>

  )
}
