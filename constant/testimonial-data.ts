import { StaticImageData } from 'next/image';
import person1Src from '@/public/images/person1.jpg';
import person2Src from '@/public/images/person2.jpg';
import person3Src from '@/public/images/person3.jpg';

type testimonialDataProps = {
  rating: number;
  description: string;
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
};

const testimonialData: testimonialDataProps[] = [
  {
    rating: 5,
    description:
      'Working with Syntax has been a game-changer for our business. Their IT solutions streamlined our operations and helped us scale faster than we expected. Highly recommended!',
    profileSrc: person1Src,
    profileName: 'Michael Anderson',
    profileOccupation: 'CEO of FinTech Solutions',
  },
  {
    rating: 5,
    description:
      'The UI/UX design provided by Syntax completely transformed our platform. Our users love the new interface, and engagement rates have significantly increased',
    profileSrc: person2Src,
    profileName: 'Sarah Thompson',
    profileOccupation: 'Head of Product at E-Hub',
  },
  {
    rating: 5,
    description:
      'Cybersecurity was a major concern for us, but Syntax delivered a secure and scalable solution that gave us peace of mind. Their team is truly professional and reliable.',
    profileSrc: person3Src,
    profileName: 'David Collins',
    profileOccupation: 'CTO of MedTech Innovations',
  },
  {
    rating: 5,
    description:
      'Working with Syntax has been a game-changer for our business. Their IT solutions streamlined our operations and helped us scale faster than we expected. Highly recommended!',
    profileSrc: person1Src,
    profileName: 'Michael Anderson',
    profileOccupation: 'CEO of FinTech Solutions',
  },
  {
    rating: 4,
    description:
      'The UI/UX design provided by Syntax completely transformed our platform. Our users love the new interface, and engagement rates have significantly increased',
    profileSrc: person2Src,
    profileName: 'Sarah Thompson',
    profileOccupation: 'Head of Product at E-Hub',
  },
  {
    rating: 5,
    description:
      'Cybersecurity was a major concern for us, but Syntax delivered a secure and scalable solution that gave us peace of mind. Their team is truly professional and reliable.',
    profileSrc: person3Src,
    profileName: 'David Collins',
    profileOccupation: 'CTO of MedTech Innovations',
  },
  {
    rating: 4,
    description:
      'Working with Syntax has been a game-changer for our business. Their IT solutions streamlined our operations and helped us scale faster than we expected. Highly recommended!',
    profileSrc: person1Src,
    profileName: 'Michael Anderson',
    profileOccupation: 'CEO of FinTech Solutions',
  },
  {
    rating: 5,
    description:
      'The UI/UX design provided by Syntax completely transformed our platform. Our users love the new interface, and engagement rates have significantly increased',
    profileSrc: person2Src,
    profileName: 'Sarah Thompson',
    profileOccupation: 'Head of Product at E-Hub',
  },
  {
    rating: 4,
    description:
      'Cybersecurity was a major concern for us, but Syntax delivered a secure and scalable solution that gave us peace of mind. Their team is truly professional and reliable.',
    profileSrc: person3Src,
    profileName: 'David Collins',
    profileOccupation: 'CTO of MedTech Innovations',
  },
];

export default testimonialData;
