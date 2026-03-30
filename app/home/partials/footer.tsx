import socialMediaData from '@/constant/social-media-data';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t border-neutral-800'>
      <div className='custom-container py-5xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        <div>
          {/* Image */}
          <Image
            src='/images/logo.svg'
            alt='Logo'
            width={158}
            height={56}
            className='max-md:h-9 max-md:w-35.25'
          />
          {/* Description */}
          <p className='text-xs-regular mt-3xl md:text-sm-regular text-neutral-400'>
            Another masterpiece by Edwin, trained at WebProgrammingHack bootcamp
          </p>
        </div>
        <div className='flex-start gap-4'>
          {/* Logo */}
          {socialMediaData.map((icon) => (
            <Link
              key={icon.alt}
              href={icon.href}
              className='flex-center size-10 rounded-full border border-neutral-800 p-2.5'
            >
              <Image src={icon.src} alt={icon.alt} className='h-full w-auto' />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
