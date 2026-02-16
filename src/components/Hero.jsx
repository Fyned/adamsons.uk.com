import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '@/components/CTAButton';

const Hero = ({ title, subtitle, backgroundImageUrl, ctaLabel, ctaHref }) => {
  const bgStyle = backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : {};
  return (
    <section 
      className="relative min-h-[70vh] md:min-h-[600px] flex items-center justify-center text-white overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={bgStyle}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-700/80 to-brand-500/70"></div>
      
      <div className="container relative z-10 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto !leading-tight text-shadow-md text-white"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 text-shadow"
          >
            {subtitle}
          </motion.p>
        )}
        
        {ctaLabel && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <CTAButton href={ctaHref} external>
              {ctaLabel}
            </CTAButton>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;