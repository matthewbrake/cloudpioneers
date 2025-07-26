import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';

interface HomePageProps {
  navigate: (page: string, anchor?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="overflow-x-hidden font-sans">
      <Hero />
      <WhyUs />
      <Process />
      <Services navigate={navigate} />
      <Contact />
    </div>
  );
};

export default HomePage;
