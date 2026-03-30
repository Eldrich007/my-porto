import * as React from 'react';
import { Tabs as TabsPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

function Tabs({ ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root {...props} />;
}

const TabsList = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) => {
  return (
    <TabsPrimitive.List
      className={cn('flex items-center border-b border-neutral-900', className)}
      {...props}
    />
  );
};

function TabsTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'group text-sm-regular md:text-md-regular data-[state=active]:text-primary-300 relative h-11 flex-1 cursor-pointer text-center hover:bg-neutral-900 data-[state=active]:font-semibold md:h-11.5',
        className
      )}
      {...props}
    >
      <div className='bg-primary-300 absolute inset-x-0 -bottom-0.25 h-0.5 group-data-[state=inactive]:hidden' />
      {children}
    </TabsPrimitive.Trigger>
  );
}

const TabsContent = (
  props: React.ComponentProps<typeof TabsPrimitive.Content>
) => {
  return <TabsPrimitive.Content {...props} />;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
