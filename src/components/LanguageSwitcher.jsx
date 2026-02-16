import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';

const LanguageSwitcher = ({ isOverlay, mobile = false }) => {
  const { currentLang, switchLanguage } = useLanguage();
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'tr', label: 'TR' }
  ];

  const getTextColor = () => {
    if (mobile || isOverlay) return 'text-white hover:bg-white/10';
    return 'text-primary-700 hover:bg-primary-900/10';
  };
  
  const getActiveClasses = () => {
    if (mobile) return 'bg-primary-900 text-white';
    if (isOverlay) return 'bg-white text-primary-700';
    return 'bg-primary-900 text-white';
  };

  return (
    <div className={`flex items-center gap-1 p-1 rounded-full transition-colors ${isOverlay || mobile ? 'bg-black/10' : 'bg-neutral-200'}`} role="navigation" aria-label="Language switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 ${
            currentLang === lang.code 
              ? '' 
              : `${getTextColor()} hover:scale-105`
          }`}
          aria-label={`Switch to ${lang.label}`}
          aria-current={currentLang === lang.code}
        >
          {currentLang === lang.code && (
            <motion.div
              layoutId="language-switcher-active"
              className={`absolute inset-0 z-0 rounded-full ${getActiveClasses()}`}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{lang.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;