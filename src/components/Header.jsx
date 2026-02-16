import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { useImageRegistry } from '@/hooks/useImageRegistry';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MainNav from '@/components/MainNav';
import CTAButton from '@/components/CTAButton';

const Header = ({ isHomePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentLang } = useLanguage();
  const { getImage } = useImageRegistry();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  const logoPrimary = getImage('logo.primary');
  const logoWhite = getImage('logo.white');

  const translations = {
    en: { cta: 'Get a Quote', login: 'Login', verify: 'Verify' },
    de: { cta: 'Angebot anfordern', login: 'Anmelden', verify: 'Verifizieren' },
    tr: { cta: 'Teklif Al', login: 'Giriş Yap', verify: 'Doğrula' },
  };

  const t = translations[currentLang] || translations.en;
  
  const isOverlayMode = isHomePage && !isScrolled;

  const getLogo = () => {
    if (isMobileMenuOpen) return logoWhite;
    return isOverlayMode ? logoWhite : logoPrimary;
  };
  
  const currentLogo = getLogo();
  
  const externalLinkClasses = `text-sm font-semibold transition-colors hover:no-underline focus:no-underline ${isOverlayMode 
    ? "text-white hover:text-primary-100" 
    : "text-primary-700 hover:text-primary-900"}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isOverlayMode
            ? 'bg-transparent py-4'
            : 'bg-white/95 backdrop-blur-sm shadow-md py-3'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <Link 
              to={`/${currentLang}`} 
              className="flex-shrink-0 site-logo hover:no-underline focus:no-underline"
              aria-label="Adamsons Accountants Home"
            >
              {currentLogo && (
                <img
                  src={currentLogo.url}
                  alt={currentLogo.alt}
                  className="h-10 md:h-12 w-auto transition-all duration-300"
                  loading="eager"
                  width="180"
                  height="48"
                />
              )}
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              <MainNav isOverlay={isOverlayMode} />
            </nav>

            <div className="flex items-center gap-4">
               <div className="hidden lg:flex items-center gap-4">
                  <a href="https://portal.ataaccountancy.com/" target="_blank" rel="noopener noreferrer" className={externalLinkClasses}>{t.login}</a>
                  <a href="https://verify.ataaccountancy.com/" target="_blank" rel="noopener noreferrer" className={externalLinkClasses}>{t.verify}</a>
                  <LanguageSwitcher isOverlay={isOverlayMode} />
               </div>
               <div className="hidden sm:block">
                <CTAButton 
                  href="https://form.ataaccountancy.com" 
                  external 
                  variant={isOverlayMode ? 'secondary' : 'primary'}
                  size="sm"
                >
                  {t.cta}
                </CTAButton>
               </div>
               <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 rounded-md transition-colors z-50 text-current"
                  aria-label="Toggle mobile menu"
                  aria-expanded="false"
               >
                  <Menu size={28} className={isOverlayMode ? 'text-white' : 'text-primary-900'} />
               </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-primary-900/95 backdrop-blur-sm z-[100] lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="h-full flex flex-col pt-6 pb-8">
               <div className="container flex justify-between items-center mb-8">
                 <Link 
                  to={`/${currentLang}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:no-underline focus:no-underline"
                 >
                   {logoWhite && <img src={logoWhite.url} alt={logoWhite.alt} className="h-10 w-auto"/>}
                 </Link>
                 <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-md transition-colors text-white"
                    aria-label="Close mobile menu"
                  >
                    <X size={28} />
                 </button>
               </div>

              <nav className="flex-grow px-6 overflow-y-auto" aria-label="Mobile navigation">
                <MainNav mobile onNavigate={() => setIsMobileMenuOpen(false)} />
                 <div className="border-t border-white/10 mt-6 pt-6 space-y-4">
                   <a href="https://portal.ataaccountancy.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-white text-lg py-2 hover:no-underline">
                     <span>{t.login}</span><ArrowRight size={20} />
                   </a>
                   <a href="https://verify.ataaccountancy.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-white text-lg py-2 hover:no-underline">
                     <span>{t.verify}</span><ArrowRight size={20} />
                   </a>
                 </div>
              </nav>
              <div className="p-6 mt-auto">
                 <p className="text-white/50 text-sm mb-4 text-center">Language</p>
                 <div className="flex justify-center">
                    <LanguageSwitcher mobile />
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;