'use client';

import { navigationData } from '@/constant/navigation-data';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { rgba, useScroll, useTransform, motion } from 'motion/react';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,12,13,0)', 'rgba(12,12,13,0.4)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='custom-container flex-between h-16 md:h-21'>
        {/* image */}
        <Image
          src='/images/logo.svg'
          alt='Logo'
          width={158}
          height={56}
          className='max-md:h-9 max-md:w-35.25'
        />
        {/* Navbar */}
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-3'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link href={data.href} className='hover:text-primary-300 p-4'>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* button */}
        <Button className='hidden lg:flex'>
          <Link href='#contact'>Get Started</Link>
        </Button>

        {/* mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Menu className='cursor-pointer lg:hidden' />
          </SheetTrigger>
          <SheetContent className='p-4'>
            <nav className='mt-16'>
              <ul className='flex flex-col gap-3'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <Link
                      href={data.href}
                      className='hover:text-primary-200 py-4'
                    >
                      {data.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button asChild className='mt-3 w-full'>
              <SheetClose asChild>
                <Link href='#contact'>Get Started</Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};
export default Navbar;
