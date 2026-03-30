import Navbar from './home/partials/navbar';
import Hero from './home/partials/hero';
import TrustedBy from './home/partials/trusted-by';
import ServiceProcess from './home/partials/service-process';
import Service from './home/partials/service';
import ImpactStatistic from './home/partials/impact-statistic';
import Program from './home/partials/program';
import Project from './home/partials/project';
import Testimonial from './home/partials/testimonial';
import Faq from './home/partials/faq';
import Contact from './home/partials/contact';
import Footer from './home/partials/footer';
import ScrollUp from './home/partials/scroll-up';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ImpactStatistic />
      <ServiceProcess />
      <Service />
      <Program />
      <Project />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
      <ScrollUp />
    </>
  );
}
