import React from 'react';

const PageSection = ({ children, className = '', background = 'white' }) => {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-neutral-50',
    brand: 'bg-brand-50',
    'brand-700': 'bg-brand-700',
    'brand-800': 'bg-brand-800',
    'brand-900': 'bg-brand-900',
  };

  return (
    <section className={`py-16 md:py-24 ${backgrounds[background] || 'bg-white'} ${className}`}>
      {children}
    </section>
  );
};

export default PageSection;