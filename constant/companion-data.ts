import { StaticImageData } from 'next/image';

import AdobeIcon from '@/public/icons/icon-adobe.svg';
import AirbnbIcon from '@/public/icons/icon-air-bnb.svg';
import DatabricksIcon from '@/public/icons/icon-data-bricks.svg';
import DropboxIcon from '@/public/icons/icon-drop-box.svg';
import NetflixIcon from '@/public/icons/icon-netfilx.svg';
import PaypalIcon from '@/public/icons/icon-paypal.svg';
import PostmanIcon from '@/public/icons/icon-postman.svg';
import UpworkIcon from '@/public/icons/icon-upwork.svg';
import ZoomIcon from '@/public/icons/icon-zoom.svg';

type TrustedCompanionImageProps = {
  src: StaticImageData;
  alt: string;
};
export const trustedCompanionData: TrustedCompanionImageProps[] = [
  { src: AdobeIcon, alt: 'Adobe icon' },
  { src: AirbnbIcon, alt: 'Air BnB icon' },
  { src: DatabricksIcon, alt: 'Data Cricks icon' },
  { src: DropboxIcon, alt: 'Drop Box icon' },
  { src: NetflixIcon, alt: 'Netflix icon' },
  { src: PaypalIcon, alt: 'Paypal icon' },
  { src: PostmanIcon, alt: 'Postman icon' },
  { src: UpworkIcon, alt: 'Upwork icon' },
  { src: ZoomIcon, alt: 'Zoom icon' },
];
