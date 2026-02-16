import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

const DefaultLayout = ({ children }) => {
  const location = useLocation();
  const { currentLang } = useLanguage();
  
  const isHomePage = location.pathname === `/${currentLang}`;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-brand-900 focus:text-white rounded-md">
        Skip to main content
      </a>
      <Header isHomePage={isHomePage} />
      <main id="main" className={`flex-grow ${isHomePage ? '' : 'pt-24 md:pt-28'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;