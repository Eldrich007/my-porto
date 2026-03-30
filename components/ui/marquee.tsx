import { cn } from '@/lib/utils';
import { div, i } from 'motion/react-client';
import { ComponentPropsWithRef, ReactNode } from 'react';

interface MarqueeProps extends ComponentPropsWithRef<'div'> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) => {
  return (
    <div
      className={cn(
        'group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:3rem]'
      )}
    >
      {Array(repeat)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 [gap:var(--gap)]', {
              // Mode Horizontal
              'animate-marquee flex-row': !vertical,
              // Mode Vertikal
              'animate-marquee-vertical flex-col': vertical,
              // Pause On Hover
              'group-hover:[animation-play-stated:paused]': pauseOnHover,
              // Mode Reverse
              '[animation-direction:reverse]': reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};
export default Marquee;
