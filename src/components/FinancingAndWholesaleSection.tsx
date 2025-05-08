'use client';

import React from 'react';
import Image from 'next/image';

type Lender = {
  name: string;
  logo: string;
  url: string;
};

const lenders: Lender[] = [
  {
    name: 'Capital One Auto Finance',
    logo: '/lenders/capitalone.png',
    url: 'https://www.capitalone.com/cars/',
  },
  {
    name: 'Westlake Financial',
    logo: '/lenders/westlake.png',
    url: 'https://www.westlakefinancial.com/',
  },
  {
    name: 'Credit Acceptance',
    logo: '/lenders/creditacceptance.png',
    url: 'https://www.creditacceptance.com/',
  },
  {
    name: 'Ally Bank',
    logo: '/lenders/ally.png',
    url: 'https://www.ally.com/auto/',
  },
  {
    name: 'DriveTime',
    logo: '/lenders/drivetime.png',
    url: 'https://www.drivetime.com/financing',
  },
  {
    name: 'AmeriCredit',
    logo: '/lenders/americredit.png',
    url: 'https://www.gmfinancial.com/en-us/auto-finance.html',
  },
  {
    name: 'Lobel Financial',
    logo: '/lenders/lobel.png',
    url: 'https://www.lobelfinancial.com/',
  },
  {
    name: 'Local Credit Unions',
    logo: '/lenders/creditunion.png',
    url: '#',
  },
];

export default function FinancingAndWholesaleSection() {
  return (
    <section className="bg-white text-gray-800 px-4 py-16 space-y-24">
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 text-red-600">Financing Available</h2>
        <p className="text-lg mb-8">
          We partner with trusted lenders to get you financed fast regardless of credit history. Let us help you drive away with confidence and a payment plan that works for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
          {lenders.map((lender) => (
            <a
              key={lender.name}
              href={lender.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-30 transition-opacity"
            >
              <Image
                src={lender.logo}
                alt={lender.name}
                width={120}
                height={60}
                className="object-contain h-12"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Wholesale Inventory Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-600 dark:text-xl">Ask about our Tailored Inventory to Fit Your Needs</h2>
        <p className="text-lg mb-4">
          We buy vehicles at wholesale auctions and pass the savings directly to you. Whether you&apos;re looking for a commuter, family car, or unique vehicle, we can help source it.
        </p>
        <p className="text-lg">
          Don&apos;t see what you want in stock? Contact us and can locate and customize a vehicle purchase that fits your budget and lifestyle.
        </p>
      </div>
      <hr className="w-8 h-8 mx-auto my-8 bg-red-600 border-0 rounded-sm md:my-12 dark:bg-gray-700" />
    </section>
  );
}
