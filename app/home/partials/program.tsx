import programData from '@/constant/program-data';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

const Program = () => {
  return (
    <Section
      tittle='Tailored IT Solutions for Every Industry'
      subtittle='From finance to healthcare and retail, we provide cutting-edge technology solutions to drive efficiency, security, and growth in your industry'
    >
      <Tabs defaultValue={programData[0].key} orientation='horizontal'>
        <TabsList>
          {programData.map((tab) => (
            <TabsTrigger value={tab.key} key={tab.key}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {programData.map((tab) => {
          const { key, ...contentprops } = tab;
          return (
            <TabsContent key={key} value={key}>
              <Content {...contentprops} />
            </TabsContent>
          );
        })}
      </Tabs>
    </Section>
  );
};

export default Program;

type ContentProps = {
  title: string;
  description: string;
  imageSRC: StaticImageData;
};
const Content: React.FC<ContentProps> = ({ title, description, imageSRC }) => {
  return (
    <div className='flex-between mx-auto max-w-232.5 flex-wrap gap-5 pt-6 md:gap-25 md:pt-17'>
      <div className='flex-[7.4] basis-75'>
        <h3 className='display-xs-bold text-neutral-25 md:display-xl-bold'>
          {title}
        </h3>
        <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-400 md:mt-4'>
          {description}
        </p>
        <Button asChild className='mt-6 w-full px-19.5 md:mt-12 md:w-fit'>
          <Link href='#'>Detail</Link>
        </Button>
      </div>
      <Image
        src={imageSRC}
        alt={title}
        className='aspect-square flex-[2.6] basis-75 rounded-2xl object-cover'
      />
    </div>
  );
};
