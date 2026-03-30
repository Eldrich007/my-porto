import Image from 'next/image';

const ImpactStatistic = () => {
  return (
    <section className='custom-container flex flex-wrap items-center gap-6 py-5 md:gap-12 md:py-20'>
      {/* Images */}
      <div>
        <Image
          src='/images/section-impact.svg'
          className='flex-[2.3] basis-85 rounded-2xl object-cover'
          alt='Impact Image'
          width={442}
          height={432}
        />
      </div>
      {/* Content */}

      <div className='flex-[7.7] basis-80'>
        <h3 className='text-neutral-25 md:display-lg-bold display-sm-bold'>
          Proven Results, Measurable Impact
        </h3>
        <p className='text-sm-regular mt-4 text-neutral-400'>
          We are a team of tech enthusiasts dedicated to building innovative and
          scalable IT solutions. From software development to cloud integration,
          we help businesses thrive in the digital era.
        </p>
        <Statistics />
      </div>
    </section>
  );
};
export default ImpactStatistic;

type statistic = {
  data: string;
  info: string;
};

const Staistic: statistic[] = [
  { data: '50+', info: 'Happy Customer' },
  { data: '100+', info: 'Project Delivered' },
  { data: '98%', info: 'Customer Satisfaction' },
];
const Statistics = () => {
  return (
    <div className='mt-6 flex flex-col items-center divide-neutral-900 max-md:divide-y md:mt-12 md:flex-row md:divide-x'>
      {Staistic.map((statistic) => (
        <div
          key={statistic.data}
          className='w-45 flex-1 px-8 text-center max-md:w-full max-md:py-5 max-md:first:pt-0 max-md:first:pb-0 md:first:pl-0 md:last:pr-0'
        >
          <p className='display-md-bold md:display-lg-bold text-neutral-25'>
            {statistic.data}
          </p>
          <p className='md:text-md-regular text-sm-regular mt-1.5 text-neutral-400'>
            {statistic.info}
          </p>
        </div>
      ))}
    </div>
  );
};
