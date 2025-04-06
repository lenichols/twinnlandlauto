'use client'

import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export function NavbarComponent() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
      <div className="max-w-screen-xl flex md:flex-wrap lg:flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center justify-center rtl:space-x-reverse">
          <Image
            src="/images/MillenniumAutoRetailers.png"
            alt="Millennium Auto Logo"
            layout="responsive"
            width={329}
            height={205}
            sizes="(max-width: 768px) 40vw, 14vw"
            className="sm:mx-auto"
          />
          <div className="self-center text-sm md:text-sm lg:text-lg sm:whitespace-normal lg:whitespace-nowrap dark:text-orange-500 pl-4 block">17065 Tennessee Street - Vallejo, CA 94590&nbsp;&nbsp; <span><PhoneCall size={20} className="inline-block" /> <a href={`tel:707-332-9005`} className="font-bold border-none">(707) 332-9005</a></span>
          </div>
        </div>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* <div className="self-center hidden sm:flex text-sm dark:text-orange-500 pl-4 block">17065 Tennessee Street - Vallejo, CA 94590&nbsp;&nbsp; <PhoneCall size={20} className="inline-block" /> <a href={`tel:707-332-9005`} className="font-bold border-none">(707) 332-9005</a>
        </div> */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 mr-8 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white bg-orange-500 rounded-sm md:bg-transparent md:text-orange-500 md:p-0 md:dark:text-orange-400 dark:bg-orange-400 md:dark:bg-transparent"
                aria-current="page"
              >
                Inventory & Financing
              </Link>
            </li>
            {/* <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-orange-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Dropdown{" "}
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                suppressHydrationWarning
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Earnings
                    </Link>
                  </li>
                </ul>
                <div className="py-1">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Sign out
                  </Link>
                </div>
              </div>
            </li> */}
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Other Fleet
              </Link>
            </li>
            {/* <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Financing
              </Link>
            </li> */}
            <li>
              <Link href="#contact_us" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
