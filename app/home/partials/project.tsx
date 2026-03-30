import projectData from '@/constant/project-data';
import { Section } from '@/components/layout/section';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

const Project = () => {
  return (
    <Section
      tittle='Transforming Ideas into Digital Excellence'
      subtittle='Explore our past projects and see how we’ve helped businesses grow with innovative IT solutions'
      id='projects'
    >
      <ProjectCards>
        {projectData.map((project) => (
          <ProjectCard
            key={project.title}
            img={project.img}
            title={project.title}
            description={project.description}
          />
        ))}
      </ProjectCards>
    </Section>
  );
};
export default Project;

type ProjectCardsProps = {
  children: React.ReactNode;
};

const ProjectCards: React.FC<ProjectCardsProps> = ({ children }) => {
  return <div className='flex flex-wrap gap-6 md:gap-5'>{children}</div>;
};
type ProjectCardProps = {
  img: StaticImageData;
  title: string;
  description: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className='flex-1 basis-80'>
      <Image
        src={img}
        alt={title}
        className='aspect-square rounded-2xl object-cover md:rounded-4xl'
      />
      <h3 className='text-lg-semibold mt-4 text-neutral-200'>{title}</h3>
      <p className='text-md-regular mt-2 text-neutral-400'>{description}</p>
    </div>
  );
};
