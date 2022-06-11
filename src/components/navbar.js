import React from 'react';
import { FiSunrise, FiMoon, FiMenu } from 'react-icons/fi';
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
// import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar({login}) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
      <div class="bg-slate-700">
          <div class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
              <div class="relative flex items-center justify-between lg:justify-center lg:space-x-16">
                  <ul class="flex items-center hidden space-x-8 lg:flex">
                      <li>
                          <Link
                              href="/"
                              aria-label="Our product"
                              title="Our product"
                              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                          >
                              Home
                          </Link>
                      </li>
                      <li>
                          <Link
                              href="/about"
                              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                          >
                              About Us
                          </Link>
                      </li>
                      <li>
                          <Link
                              href="https://dauntless.tawk.help/"
                              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                          >
                              Help Center
                          </Link>
                      </li>
                  </ul>
                  <img src="/images/2.png" width={30} />
                  <ul class="flex items-center hidden space-x-8 lg:flex">
                    <li>
                          <Link
                              href="https://dauntless.tawk.help/category/faq"
                              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                          >
                              FAQs
                          </Link>
                      </li>
                      <li>
                          <Link
                              href="/auth/login"
                              aria-label="Sign in"
                              title="Sign in"
                              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                          >
                              Sign in
                          </Link>
                      </li>
                      <li>
                          <Link
                              href="/"
                              aria-label="Sign up"
                              title="Sign up"
                              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                          >
                              Sign up
                          </Link>
                      </li>
                  </ul>
                  <div class="lg:hidden">
                      <button
                          aria-label="Open Menu"
                          title="Open Menu"
                          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(true)}
                      >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                              <path
                                  fill="currentColor"
                                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                              />
                              <path
                                  fill="currentColor"
                                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                              />
                              <path
                                  fill="currentColor"
                                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                              />
                          </svg>
                      </button>
                      {isMenuOpen && (
                          <div class="absolute top-0 left-0 w-full">
                              <div class="p-5 bg-white border rounded shadow-sm">
                                  <div class="flex items-center justify-between mb-4">
                                      <div>
                                          <img src="/images/2.png" width={30} />
                                      </div>
                                      <div>
                                          <button
                                              aria-label="Close Menu"
                                              title="Close Menu"
                                              class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                              onClick={() => setIsMenuOpen(false)}
                                          >
                                              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                  <path
                                                      fill="currentColor"
                                                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                  />
                                              </svg>
                                          </button>
                                      </div>
                                  </div>
                                  <nav>
                                      <ul class="space-y-4">
                                          <li>
                                              <Link
                                                  href="/"
                                                  aria-label="Our product"
                                                  title="Our product"
                                                  class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                              >
                                                  Home
                                              </Link>
                                          </li>
                                          <li>
                                              <Link
                                                  href="/about"
                                                  class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                              >
                                                  About
                                              </Link>
                                          </li>
                                          <li>
                                              <Link
                                                  href="https://dauntless.tawk.help/"
                                                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                              >
                                                  Help Center
                                              </Link>
                                          </li>
                                          <li>
                                              <Link
                                                  href="https://dauntless.tawk.help/category/faq"
                                                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                              >
                                                  FAQ
                                              </Link>
                                          </li>
                                          <li>
                                              <Link
                                                  href="/"
                                                  class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                              >
                                                  Sign In
                                              </Link>
                                          </li>
                                          <li>
                                              <Link
                                                  href="/"
                                                  class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                              >
                                                  Sign Up
                                              </Link>
                                          </li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      </div>

  )
}
