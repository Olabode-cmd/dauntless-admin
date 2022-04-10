import React from "react";
import { useTheme } from 'next-themes'
import { FiSunrise, FiMoon } from 'react-icons/fi'
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import Head from 'next/head'

function Index() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <img src="/images/2.png" width={30} />
            </div>

            <div className="flex md:hidden">
              <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Home</a>
              <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">About Us</a>
              <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Privacy Policy</a>
            </div>


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
      </nav>

      <section className="bg-slate-100 dark:bg-slate-900">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl dark:text-slate-100 text-zinc-900">Welcome to <br />
              <span className="text-yellow-400">Dauntless</span>.trade
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-zinc-900 dark:text-slate-400">Exchange your gift cards at your convenience,
              <br className="hidden md:inline lg:hidden" /> sweet deals, discount and more. Anywhere in the world.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-yellow-400 hover:bg-yellow-600 text-slate-100 flex items-center justify-center">
                <AiFillAndroid /> <span className="inline-block">&nbsp; Android</span></a>
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded border border-yellow-400 hover:bg-yellow-400 dark:text-slate-100 text-zinc-900 flex items-center justify-center">
                <AiFillApple /> &nbsp; iOS App</a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="images/undraw-cards.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 dark:bg-coolGray-500" />
          </div>
        </div>
	    </section>


      <section className="mt-8 mb-6 px-16 md:px-36">
        <span className="block mb-2 text-xs font-medium  uppercase lg:text-center text-yellow-400">How it works</span>
        <h2 className="text-5xl font-bold lg:text-center text-slate-200">Exchange Gift Cards at High Rates</h2>
        <div className="grid gap-6 my-16 lg:grid-cols-3">
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-slate-900">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-yellow-400 text-slate-200">1</div>
            <p className="text-2xl font-semibold">
              <b>Nulla.</b> <br /> Nostrum, corrupti blanditiis. Illum, architecto?
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-slate-900">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-yellow-400 text-slate-200">2</div>
            <p className="text-2xl font-semibold">
              <b>Accusantium.</b> <br /> Vitae saepe atque neque sunt eius dolor veniam alias debitis?
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-slate-900">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-yellow-400 text-slate-200">3</div>
            <p className="text-2xl font-semibold">
              <b>Maxime.</b> <br /> Expedita temporibus culpa reprehenderit doloribus consectetur odio!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-slate-900 px-16 md:px-36">
        <span className="font-bold block text-2xl dark:text-yellow-400 pt-10 text-yellow-400">Filter Cards</span>
        
        <div className="flex flex-wrap items-center justify-between w-full mt-6">
          <select className="select max-w-xs mt-1">
            <option selected>iTunes</option>
            <option>ebay</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>

          <select className="select max-w-xs mt-1">
            <option disabled selected>Select Currency</option>
            <option>Dollar</option>
            <option>Euro</option>
            <option>Pounds</option>
            <option>Naira</option>
          </select>

          <select className="select max-w-xs mt-1">
            <option disabled selected>eCode</option>
            <option>Card Type</option>
          </select>


          <input type="number" className="input max-w-xs mt-1" placeholder="Enter Amount" />

        </div>

        <div className="cards mt-8">
          <span className="cardName mb-6 block text-slate-200 text-2xl font-bold">iTunes</span>

          <div className="p-8 space-y-4 rounded-md bg-gray-800 flex flex-wrap items-center">
            <div className="w-full lg:w-4/12">
              <img className="rounded" src="https://images.macrumors.com/t/TPiNn40dI2FatwyOudkXpY5Msz8=/1600x900/smart/article-new/2016/12/iTunes-gift-card.jpg" alt="giftcard" />
            </div>

            <div className="w-full lg:w-7/12 ml-2">
              <div className="overflow-x-auto">
                <table className="table w-full">

                  <thead>
                    <tr>
                      <th>Total Amount</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>5</td>
                      <td>$1500</td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>$1500</td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td>$1500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <section className="bg-slate-100 dark:bg-slate-900  px-4 md:px-36">
        <div className="max-w-5xl mx-auto pt-4 px-6 sm:px-6 lg:px-8 mb-12">
          <div className="w-full rounded p-8 sm:p-6">
            <p className="text-5xl font-bold leading-7 text-center text-white">Contact me</p>
            <form action="" method="post">
              <div className="md:flex items-center mt-12">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="font-semibold leading-none text-gray-300">Name</label>
                  <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none text-gray-300">Phone</label>
                  <input type="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                </div>
              </div>
              <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                  <label className="font-semibold leading-none text-gray-300">Subject</label>
                  <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                </div>

              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none text-gray-300">Message</label>
                  <textarea type="text" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="m-0">
        <div className="bg-gray-900">
          <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
              <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                <div>
                  <p className="font-medium tracking-wide text-gray-300">Category</p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">News</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">World</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Games</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">References</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium tracking-wide text-gray-300">Apples</p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Web</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">eCommerce</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Business</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Entertainment</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Portfolio</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium tracking-wide text-gray-300">Cherry</p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Media</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Brochure</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Nonprofit</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Educational</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Projects</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium tracking-wide text-gray-300">Business</p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Infopreneur</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Personal</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Wiki</a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Forum</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:max-w-md lg:col-span-2">
                <span className="text-base font-medium tracking-wide text-gray-300">Subscribe for updates</span>
                <form className="flex flex-col mt-4 md:flex-row">
                  <input
                    placeholder="Email"
                    required=""
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-400 hover:bg-yellow-700 focus:shadow-outline focus:outline-none"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="mt-4 text-sm text-gray-500">
                  Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken spare ribs salami.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
              <p className="text-sm text-gray-500">
                © Copyright 2020 Lorem Inc. All rights reserved.
              </p>
              <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path
                      d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                    ></path>
                  </svg>
                </a>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4"></circle>
                    <path
                      d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                    ></path>
                  </svg>
                </a>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path
                      d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    

    
  )
}

export default Index