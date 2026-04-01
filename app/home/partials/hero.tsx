import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import FeatureCard from '@/components/ui/feature-card';
import { Icon } from '@iconify/react';
import SkewMotion from '@/components/ui/skew-motion';

const Hero = () => {
  return (
    <section
      className='custom-container flex flex-wrap items-center gap-7 overflow-x-hidden pt-28 md:pt-36.75'
      id='hero'
    >
      {/* Kiri */}
      <div className='flex-[5.3] basis-80 gap-6'>
        <h1 className='display-lg-bold md:display-2xl-bold text-neutral-25'>
          Your Trusted IT{''}
          <span className='text-primary-300'> Partner for Digital</span> Success
        </h1>
        <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-400'>
          We craft custom IT solutions that align with your goals, ensuring
          efficiency, security, and innovation
        </p>
        <Button asChild className='mt-6 w-full md:mt-12 md:w-fit'>
          <Link href='#contact'>Get Started</Link>
        </Button>
      </div>
      {/* Kanan */}
      <div
        className='relative flex-[4.7] basis-80'
        style={{ height: 'clamp(21.25rem, 52.81vw, 39.88rem) ' }}
      >
        {/* Image */}
        <SkewMotion asChild>
          <Image
            src='/images/hero-image.svg'
            fill
            alt='Hero Image'
            className='object-contain'
          ></Image>
        </SkewMotion>

        {/* featured card */}
        <FeatureCard
          icon={<Icon icon={'mingcute:flash-fill'} />}
          title={'Elite Solution'}
          description={'Cutting-edge tech, flawless execution'}
          className='absolute top-[10%] right-1/2 -translate-x-[6.25%]'
          animationDelay={0.5}
        />
        {/* featured card */}
        <FeatureCard
          icon={<Icon icon={'bi:bar-chart-fill'} />}
          title={'Real Impact'}
          description={'We turn ideas into measurable success'}
          className='absolute top-[49%] right-1/2 -translate-x-[48%]'
          animationDelay={0.5}
        />
        {/* featured card */}
        <FeatureCard
          icon={<Icon icon={'ri:brain-fill'} />}
          title={'Smart Tech'}
          description={'Innovation that drives real growth.'}
          className='absolute top-[44.2%] left-1/2 translate-x-[37.5%]'
          animationDelay={0.5}
        />
        {/* Decoration */}
        <div className='from-base-background absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t to-transparent' />
      </div>
    </section>
  );
};

export default Hero;
