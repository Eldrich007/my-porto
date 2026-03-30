import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  tittle: string;
  subtittle: string;
  id?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  tittle,
  subtittle,
  id,
}) => {
  return (
    <div className='custom-container py-10 md:py-20'>
      <div className='text-center'>
        <h2 className='display-sm-bold text-neutral-25 md:display-lg-bold'>
          {tittle}
        </h2>
        <p className='text-sm-regular md:text-md-regular mt-4 text-neutral-400'>
          {subtittle}
        </p>
      </div>
      {/* Content */}
      <div className='mt-6 md:mt-16'>{children}</div>
    </div>
  );
};
