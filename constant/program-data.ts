import { StaticImageData } from 'next/image';
import tab1Src from '@/public/images/tab1.jpg';
import tab2Src from '@/public/images/tab2.jpg';
import tab3Src from '@/public/images/tab3.jpg';

type ProgramDataProps = {
  key: string;
  label: string;
  title: string;
  description: string;
  imageSRC: StaticImageData;
};

const programData: ProgramDataProps[] = [
  {
    key: 'finance-fintech',
    label: 'Finance & Fintech',
    title: 'Secure & Scalable Financial Solutions',
    description:
      'We help financial institutions with secure, data-driven, and compliant technology solutions to enhance transactions and customer experiences',
    imageSRC: tab1Src,
  },
  {
    key: 'healthcare',
    label: 'Healthcare',
    title: 'Innovative Tech for Better Healthcare',
    description:
      'We build HIPAA-compliant, AI-powered healthcare solutions for better patient care, data management, and operational efficiency',
    imageSRC: tab2Src,
  },
  {
    key: 'e-commerce',
    label: 'E-Commerce',
    title: 'Seamless Shopping & Smart Retail Tech',
    description:
      'Enhance customer experience and streamline operations with AI-powered e-commerce platforms, smart inventory systems, and payment solutions',
    imageSRC: tab3Src,
  },
];
export default programData;
