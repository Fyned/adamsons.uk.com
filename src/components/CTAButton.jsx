import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTAButton = ({ children, href, external = false, variant = 'primary', size = 'md' }) => {
  const baseClasses = "inline-flex items-center justify-center gap-3 rounded-lg font-bold transition-all transform hover:-translate-y-1";
  
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary"
  };

  const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-8 py-4 text-lg',
      lg: 'px-10 py-5 text-xl'
  }

  const Component = external ? 'a' : Link;
  const props = external 
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { to: href };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Component
        {...props}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      >
        {children}
        <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
          <ArrowRight size={size === 'sm' ? 18 : 22} />
        </motion.div>
      </Component>
    </motion.div>
  );
};

export default CTAButton;