import faqData from '@/constant/faq-data';
import { Section } from '@/components/layout/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { title } from 'process';

const Faq = () => {
  return (
    <Section
      tittle="Got Questions? We've Got Answers!"
      subtittle='We’ve compiled answers to the most common questions to help you understand our services better'
      id='faq'
    >
      <Accordion type='single' collapsible className='mx-auto max-w-180'>
        {faqData.map((data, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger>{data.title}</AccordionTrigger>
            <AccordionContent>{data.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};
export default Faq;
