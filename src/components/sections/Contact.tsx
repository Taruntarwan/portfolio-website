import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ContactForm } from '../forms/ContactForm';
import { ContactInfo } from '../ui/ContactInfo';

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection>
            <ContactInfo />
          </AnimatedSection>
          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};