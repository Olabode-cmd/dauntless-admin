import React from "react";
import { useTheme } from 'next-themes'
import { FiSunrise, FiMoon, FiMenu } from 'react-icons/fi'
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { FaHandshake, FaDollarSign, FaMobileAlt } from "react-icons/fa";
import Navbar from '../components/navbar';
import Footer from '../components/footer'
import { RiSpamLine } from "react-icons/ri";

// FaHandshake


function Index() {
  const { theme, setTheme } = useTheme()


  return (
    <div>
      <Navbar />


      <section className="bg-slate-100 dark:bg-slate-900">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-8 lg:flex-row lg:justify-between">
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

          
          <div className="items-center relative text-center p-6 mt-8 lg:mt-0 hidden md:flex">
            <img src="images/header-img.png" alt="" className="header-img" />
            <img src="images/card-float.png" alt="" className="card-float one" />
            <img src="images/card-float2.png" alt="" className="card-float two" />
            <img src="images/card-float3.png" alt="" className="card-float three" />
          </div>
        </div>
	    </section>

      {/* h-72 sm:h-80 lg:h-112 xl:h-112 2xl:h-128 */}


      <section className="pt-8 pb-6 px-16 md:px-36 bgimg">
        <span className="block mb-2 text-sm font-medium  uppercase lg:text-center text-yellow-400">How it works</span>
        <h2 className="text-5xl font-bold lg:text-center text-slate-200">Exchange Gift Cards at High Rates</h2>
        <div className="grid gap-6 my-16 lg:grid-cols-3">

          <div className="card-info space-y-4 p-8">
            <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full"> <FaHandshake /> </span>
            <h3 className="text-2xl font-bold">Trusted.</h3>
            <p>Trade with high confidence, as we assure you the highest level of encryption and professionally audited exchange system.</p>
          </div>

          <div className="card-info space-y-4 p-8">
            <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full"> <FaDollarSign /> </span>
            <h3 className="text-2xl font-bold">Instant Payment</h3>
            <p>Using state-of-the-art payment procedures, you are guaranteed to get your payment sent to your account within minutes.</p>
          </div>

          <div className="card-info space-y-4 p-8">
            <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full"> <FaMobileAlt /> </span>
          
            <p className="text-2xl font-bold">Cross-Platform Availiability</p>
            <p>Sell any gift card, anywhere, anytime, using our modern gift card trading application available on Android, iOS and web browser.</p>
          </div>
        </div>

      </section>

      <section className="dark:bg-slate-800 dark:text-coolGray-100 mt-4">
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:justify-between">
          <div className="flex-1 justify-center p-6 mt-8 lg:mt-0">
            <img src="images/mobile.png" alt="smartphone" className="object-contain rounded w-7/12 m-auto" />
            {/* <img src="images/workflow.gif" alt="animated character" className="object-contain rounded w-7/12 m-auto" /> */}
          </div>

          <div className="flex-1">
            <div className="flex-col justify-center px-6 py-12 text-left rounded-sm lg:max-w-md xl:max-w-lg">
              <h1 className="text-3xl font-bold leading-none sm:text-5xl text-slate-800 dark:text-slate-200">Trade with us on
              <span className="text-yellow-400"> Dauntless</span> Platform
            </h1>
            <p className="mt-6 text-lg sm:mb-3 medium-font">
              Dauntless allows you to trade gift cards from a variety of retailers,
              including iTunes, Amazon, Steam Wallet, Google Play, Apple Store, eBay, Walmart, Sephora,
              OneVanilla, Nordstrom, Target, JCPenney, Best Buy, Nike, Hotels.com, Macy's, Gamestop,
              Xbox, Vanilla, G2A, American Express (AMEX), OffGamers, Foot Locker, Visa, Play Station,
              and others.
            </p>
            <p className="mt-2 text-lg sm:mb-12 medium-font">Our payment system is amazingly coherent. You get your money almost instantly, no fees attached and no limits.
              <br /> Don't worry about rates. We offer the best payout for your assets based on the current market value.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded border border-yellow-400 hover:bg-yellow-400 dark:text-slate-100 text-zinc-900 flex items-center justify-center">
                Read More</a>
            </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-slate-100 dark:bg-slate-900 px-16 pb-16 md:px-36">
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

      <section className="dark:bg-coolGray-800 dark:text-coolGray-100 mt-4 py-4">
        <span className="block text-sm font-medium  uppercase text-center text-yellow-400">Download App</span>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl text-slate-800 dark:text-slate-200">Download
              <span className="text-yellow-400"> Dauntless</span> Mobile App
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Experience the best of Dauntless as you download our mobile application to your phone or tablet.
              <br /> Available for iOS and Android operating systems.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-yellow-400 hover:bg-yellow-600 text-slate-100 flex items-center justify-center">
                <AiFillAndroid /> <span className="inline-block">&nbsp; Android</span></a>
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded border border-yellow-400 hover:bg-yellow-400 dark:text-slate-100 text-zinc-900 flex items-center justify-center">
                <AiFillApple /> &nbsp; iOS App</a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="images/cards.jpg" alt="" className="object-contain rounded h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 dark:bg-coolGray-500" />
          </div>
        </div>
      </section>

      {/* <section className="bg-slate-100 py-6 dark:bg-slate-900  px-4 md:px-36">
        <div className="container flex items-center justify-center mx-auto lg:flex-row lg:justify-between">
          <div className="mx-auto pt-4 px-0 sm:px-0 lg:px-3 mb-12 flex-1 justify-center">
            <div className="w-full rounded p-8 sm:p-6">
              <p className="text-5xl font-bold leading-7 text-center text-white l-height">Contact Us</p>
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
                    <textarea type="text" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded resize-none"></textarea>
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

          <div className="items-center relative text-center p-6 mt-8 lg:mt-0 flex-1">
            <img src="images/smartphone.png" alt="" className="object-contain rounded w-7/12 m-auto" />
          </div>
        </div>
        
      </section> */}

      <section className="bg-slate-100 py-6 dark:bg-slate-900  px-4 md:px-4">
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:justify-between">
          <div className="flex-1 justify-center p-6 mt-8 lg:mt-0">
            <div className="w-full rounded p-8 sm:p-6">
              <p className="text-5xl font-bold leading-7 text-center text-white l-height">Contact Us</p>
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
                    <textarea type="text" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded resize-none"></textarea>
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

          <div className="flex-1 hidden md:flex">
            <img src="images/smartphone.png" alt="" className="object-contain rounded w-12/12 m-auto" />
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <Footer />
    </div>
    

    
  )
}

export default Index