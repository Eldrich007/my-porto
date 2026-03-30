import { StaticImageData } from 'next/image';
import project1 from '@/public/images/project1.jpg';
import project2 from '@/public/images/project2.png';
import project3 from '@/public/images/project3.png';

type ProjectData = {
  img: StaticImageData;
  title: string;
  description: string;
};

const projectData: ProjectData[] = [
  { img: project1, title: 'Company Profile', description: '2025' },
  {
    img: project2,
    title: 'Portofolio',
    description: '2025',
  },
  {
    img: project3,
    title: 'Blog Website',
    description: '2025',
  },
];
export default projectData;
