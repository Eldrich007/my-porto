import testimonialData from '@/constant/testimonial-data';
import { Section } from '@/components/layout/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';
import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

const Testimonial = () => {
  return (
    <Section
      tittle='What Our Clients Say'
      subtittle='Real stories from businesses that have transformed with our IT solutions.'
      id='testimonial'
    >
      <Carousel>
        <CarouselContent>
          {testimonialData.map((testimonial, index) => (
            <CarouselItem key={index}>
              <TestimonialCards
                key={index}
                rating={testimonial.rating}
                description={testimonial.description}
                profileSrc={testimonial.profileSrc}
                profileName={testimonial.profileName}
                profileOccupation={testimonial.profileOccupation}
              ></TestimonialCards>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </Section>
  );
};
export default Testimonial;

type TestimonialCardsProps = {
  rating: number;
  description: string;
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
};
const TestimonialCards: React.FC<TestimonialCardsProps> = ({
  rating,
  description,
  profileSrc,
  profileName,
  profileOccupation,
}) => {
  return (
    <div className='bg-base-background rounded-2xl border border-neutral-900 p-4 md:rounded-3xl md:p-6'>
      <div className='flex gap-1'>
        {/* Rating */}
        {new Array(rating).fill(null).map((_, index) => (
          <Icon
            icon='line-md:star-filled'
            key={index}
            className='text-2xl text-yellow-500'
          />
        ))}
      </div>
      {/* Description */}
      <p className='text-sm-regular md:text-md-regular text-neutral-25 h-11xl mt-4 line-clamp-5 md:h-37.5'>
        {description}
      </p>
      <div className='flex-start mt-4 gap-4 md:mt-6'>
        {/* Profile Image */}
        <Image
          src={profileSrc}
          alt={profileName}
          className='size-12 rounded-full'
        />
        <div>
          {/* Profile Name */}
          <p className='text-sm-semibold md:text-md-semibold text-neutral-200'>
            {profileName}
          </p>

          {/* Profile Occupation */}
          <p className='text-sm-regular md:text-md-regular text-neutral-400'>
            {profileOccupation}
          </p>
        </div>
      </div>
    </div>
  );
};
