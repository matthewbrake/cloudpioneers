import React, { useEffect, useRef } from 'react';

const useScrollAnimation = (options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      options
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);
  return ref;
};

const Contact: React.FC = () => {
    const sectionRef = useScrollAnimation();
    return (
        <section ref={sectionRef} id="contact" className="py-24 sm:py-32 text-center transition-all duration-1000 ease-out opacity-0 transform translate-y-4 relative overflow-hidden bg-primary">
             <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-accent/5 rounded-full blur-3xl"></div>
             <div className="absolute -top-1/2 -right-1/4 w-3/4 h-3/4 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-4 sm:px-6 relative">
                <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-text-heading">
                    Ready to build a resilient, modern business?
                </h2>
                <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-text-secondary">
                   Let's start the conversation. Your initial consultation is free, with no obligation. We'll assess your current state and provide a clear, actionable roadmap for your modernization journey.
                </p>
                <div className="mt-12">
                    <a href="mailto:assessment@cloudpioneers.dev" className="inline-block bg-accent hover:bg-opacity-80 text-background font-bold py-4 px-12 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 hover:shadow-accent/30">
                        Get Your Free Assessment
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
