'use client'

import type { NextPage } from 'next';
import { NavbarComponent } from '../components/Navbar';
import CarCard from '../components/CarCard';
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import Image from 'next/image';
import ContactForm from '@/components/ContactUsForm';

interface Car {
  id: number;
  image: string;
  model: string;
  price: string;
}

const cars: Car[] = [
  {
    id: 1,
    image: '/images/vehicles/green-jeep.png',
    model: '2023 Sedan',
    price: '$20,000',
  },
  {
    id: 2,
    image: '/images/vehicles/white-toyota.png',
    model: '2022 Toyota',
    price: '$25,000',
  },
  {
    id: 3,
    image: '/images/vehicles/mercedes-suv.png',
    model: '2023 Coupe',
    price: '$22,000',
  },
  {
    id: 4,
    image: '/images/vehicles/mercedes-550-gray.png',
    model: '2023 Coupe',
    price: '$22,000',
  },
  {
    id: 5,
    image: '/images/vehicles/jeep.png',
    model: '2023 Coupe',
    price: '$22,000',
  },
  {
    id: 6,
    image: '/images/vehicles/cybertruck.png',
    model: '2023 Cybertruck',
    price: '$18,000',
  },
  {
    id: 7,
    image: '/images/vehicles/black-jaguar.png',
    model: '2023 Cybertruck',
    price: '$18,000',
  },
  {
    id: 8,
    image: '/images/vehicles/black-masarati.png',
    model: '2023 Maserati',
    price: '$9,500',
  },
  {
    id: 9,
    image: '/images/vehicles/ford-caliber.png',
    model: '2020 Ford Caliber',
    price: '$6,000',
  }
];

const Home: NextPage = () => {

  const imageSources = [
    '/images/vehicles/icons/cars.png',
    '/images/vehicles/icons/trucks.png',
    '/images/vehicles/icons/suvs.png',
    '/images/vehicles/icons/vans.png',
    '/images/vehicles/icons/other.png',
  ];

  useEffect(() => {
    // This will run on the client-side after the page is loaded.
    console.log('Page loaded');
    initFlowbite()
  }, [])

  return (
    <>
      <NavbarComponent />
      <main className="mx-auto mt-24 lg:mt-10">
      <section className="bg-center bg-no-repeat bg-[url('/images/openroadbkg.png')] bg-white bg-blend-luminosity bg-opacity-10">
        <div className="px-4 py-20 mx-auto max-w-screen-xl text-center lg:py-40">
  
        <div className="w-max mx-auto">
          <h1
            className="animate-typing overflow-hidden lg:overflow-hidden whitespace-normal md:whitespace-normal lg:whitespace-nowrap border-r-4 border-r-white text-4xl md:text-5xl lg:text-6xl text-orange-500 text-center font-bold py-4 text-shadow-md">
            Buy Local With Confidence!
          </h1>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">New Vehicles Added Daily</h1>
            {/* <h2 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">In-House Financing on Approved Credit</h2> */}
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Experience the personal touch of a locally run business that sources quality vehicles wholesale, ensuring you get unbeatable deals every time you buy, sell, or trade.</p>
            <div className="flex flex-col space-y-6 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900">
                    View Our Inventory
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Learn more
                </a>  
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-20">
              {imageSources.map((src, index) => (
                <div key={index} className="relative w-full h-16">
                  <Image 
                    src={src} 
                    alt={`Gallery image ${index + 1}`} 
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 640px) 20vw, (max-width: 768px) 8vw, (max-width: 1024px) 12vw, 8vw"
                  />
                </div>
              ))}
            </div>
        </div>
        </section>
        <div className='text-center mt-8'>
            <p className="text-4xl text-gray-500 dark:text-gray-400">We Offer In-House Financing on Approved Credit
            </p>
        </div> 
        <Image src="/images/logos.png" alt="alt" width="0" height="0" sizes="100vw" className="w-full h-auto" />
        <h1 className="text-2xl font-bold mb-4 mx-4 lg:mx-4">Inventory For Sale:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 lg:mx-4">
          {cars.map((car) => (
            <CarCard key={car.id} image={car.image} model={car.model} price={car.price} />
          ))}
        </div>
        <div id="contact_us"></div>
        <ContactForm />
      </main>
    </>
  );
};

export default Home;
