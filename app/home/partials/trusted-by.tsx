import { data } from 'motion/react-client';
import { trustedCompanionData } from '@/constant/companion-data';
import React from 'react';
import Image from 'next/image';
import { clamp, vw } from 'motion';
import Marquee from '@/components/ui/marquee';

const TrustedBy = () => {
  return (
    <div className='mt-6.5 md:mt-20'>
      <h3 className='text-md-semibold md:text-xl-semibold text-neutral-25 text-center'>
        Trusted by Leading Companies Worldwide
      </h3>
      <CompanionMarquee />
    </div>
  );
};
export default TrustedBy;
const CompanionMarquee = () => {
  return (
    <div className='custom-container relative flex h-28.5 items-center md:h-50'>
      <div className='w-full overflow-hidden mix-blend-luminosity'>
        <Marquee className='py-4'>
          {trustedCompanionData.map((data) => (
            <Image
              key={data.alt}
              src={data.src}
              alt={data.alt}
              className='h-full w-auto object-contain select-none'
              style={{
                height: 'clamp(2.13rem, 3.97vw, 3rem)',
              }}
            />
          ))}
        </Marquee>
        {/* decoration */}
        <div className='from-base-background absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r to-transparent' />
        <div className='from-base-background absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l to-transparent' />
      </div>
    </div>
  );
};
