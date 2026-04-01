'use client';
import { Button } from '@/components/ui/button';
import { MoveUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ScrollUp = () => {
  const handleScroll = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Button
      variant='outline'
      size='icon'
      onClick={handleScroll}
      asChild
      className='bg-base-background fixed right-10 bottom-10'
    >
      <Link href='#hero'>
        <MoveUp />
      </Link>
    </Button>
  );
};
export default ScrollUp;
