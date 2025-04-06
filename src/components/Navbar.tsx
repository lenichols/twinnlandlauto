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
    <div className="max-w-screen-xl mx-auto px-4 py-4">
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo and Address */}
        <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-4 w-full">
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-4">
            <Image
              src="/images/MillenniumAutoRetailers.png"
              alt="Millennium Auto Logo"
              width={140}
              height={87}
              className="h-auto w-[140px]"
            />
            <div className="text-center md:text-left text-sm md:text-sm lg:text-lg dark:text-orange-500 mt-2 md:mt-0">
              17065 Tennessee Street - Vallejo, CA 94590&nbsp;&nbsp;
              <span className="whitespace-nowrap">
                <PhoneCall size={20} className="inline-block" />{" "}
                <a href="tel:707-332-9005" className="font-bold border-none">
                  (707) 332-9005
                </a>
              </span>
            </div>
          </div>
        </div>
  
        {/* Hamburger Menu (Mobile only) */}
        <div className="absolute right-0 top-0 md:hidden">
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
  
        {/* Desktop Menu */}
        <div className="hidden md:block mt-4 md:mt-0" id="navbar-dropdown">
        <ul className="flex flex-col md:flex-row md:flex-nowrap md:space-x-8 font-medium p-4 md:p-0 border border-gray-100 md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 whitespace-nowrap">
        <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white bg-orange-500 rounded-sm md:bg-transparent md:text-orange-500 md:p-0 md:dark:text-orange-400 dark:bg-orange-400 md:dark:bg-transparent"
              >
                Inventory & Financing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Other Fleet
              </Link>
            </li>
            <li>
              <Link
                href="#contact_us"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
  
      {/* Mobile Dropdown */}
      <div className="hidden mt-4 md:hidden" id="navbar-dropdown">
        <ul className="flex flex-col font-medium p-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 space-y-2">
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-white bg-orange-500 rounded-sm"
            >
              Inventory & Financing
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Other Fleet
            </Link>
          </li>
          <li>
            <Link
              href="#contact_us"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
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
