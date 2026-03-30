'use client';

import * as React from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'mb-4 rounded-2xl bg-neutral-900 p-4 last:mb-0 md:mb-8 md:rounded-4xl md:p-6',
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          '!text-md-semibold md:text-lg-semibold text-neutral-25 hover:text-primary-200 data-[state=open]:text-primary-300 group/trigger flex flex-1 cursor-pointer items-start justify-between gap-4 text-left transition-all',
          className
        )}
        {...props}
      >
        <div className='flex-1 text-left'>{children}</div>
        <div className='shrink-0'>
          <PlusIcon className='group-data-[state=open]/trigger:hidden' />
          <MinusIcon className='group-data-[state=closed]/trigger:hidden' />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm-regular overflow-hidden'
      {...props}
    >
      <div className={cn('text-sm-regular mt-4 text-neutral-400', className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
