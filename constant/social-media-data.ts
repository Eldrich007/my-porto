import { StaticImageData } from 'next/image';

import sosmed1 from '@/public/icons/icon-facebook.svg';
import sosmed2 from '@/public/icons/icon-instagram.svg';
import sosmed3 from '@/public/icons/icon-linkedin.svg';
import sosmed4 from '@/public/icons/icon-tiktok.svg';

type SocialMediaData = {
  src: StaticImageData;
  alt: string;
  href: string;
};

const socialMediaData: SocialMediaData[] = [
  { src: sosmed1, alt: 'Icon Facebook', href: 'https://www.facebook.com/' },
  { src: sosmed2, alt: 'Icon Instagram', href: 'https://www.instagram.com/' },
  { src: sosmed3, alt: 'Icon Linkedin', href: 'https://www.linkedin.com/' },
  { src: sosmed4, alt: 'Icon Tiktok', href: 'https://www.tiktok.com/' },
];
export default socialMediaData;
