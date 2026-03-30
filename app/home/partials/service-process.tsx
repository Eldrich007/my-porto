import serviceProcessData from '@/constant/service-process-data';
import { Section } from '@/components/layout/section';
import PhasesAccordion, {
  PhasesAccordionItem,
} from '@/components/phasses-accordion';

const ServiceProcess = () => {
  return (
    <Section
      tittle='How We Work'
      subtittle='A structured process to bring your ideas to life—seamless, efficient, and tailored to your needs'
      id='service-process'
    >
      <PhasesAccordion>
        {serviceProcessData.map((item, index) => (
          <PhasesAccordionItem key={index} {...item} />
        ))}
      </PhasesAccordion>
    </Section>
  );
};
export default ServiceProcess;
