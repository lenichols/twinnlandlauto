'use client';

import React from 'react';
import Image from 'next/image';

export default function OwnerBioSection() {
  return (
    <section className="bg-gray-50 dark:bg-black text-gray-800 dark:text-slate-100 px-4 py-16">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-72 h-72 rounded-full overflow-hidden border border-gray-300 dark:border-none shadow-md bg-white flex items-center justify-center">
          <Image
            src="/images/walter-placeholder.jpg"
            alt="Walter L. Saulter"
            width={292}
            height={292}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Bio Text */}
        <div className="flex-1 ">
          <h2 className="text-3xl font-bold mb-4">Meet Walter L. Saulter</h2>
          <p className="text-lg leading-relaxed mb-4">
            Walter L. Saulter is the proud owner of TwinnLand Auto and brings over 35 years of experience in the car sales industry. A well-known and respected figure in the Bay Area, Walter built his career working as a finance manager for several top dealerships across Northern California.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Throughout his career, Walter has remained committed to helping customers from all walks of life secure affordable, reliable transportation. He has owned and operated multiple independent car lots, consistently focusing on low-cost vehicles that serve the needs of everyday families and individuals.
          </p>
          <p className="text-lg leading-relaxed">
            Walter&apos;s deep knowledge of vehicle financing and passion for community-focused service make him a trusted resource for those looking to buy with confidence. At Twinn L&L Auto, he continues that legacy one customer at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
