import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

const MainNav = ({ mobile = false, onNavigate, isOverlay }) => {
  const { currentLang } = useLanguage();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const translations = {
    en: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact',
      quote: 'Quote Form',
      verify: 'Verify',
      login: 'Login',
      allServices: 'All Services',
      serviceItems: {
        compliance: 'Compliance Services',
        support: 'Support Services',
        consultancy: 'Consultancy & Systems Advice',
        startup: 'Business Start-Up',
        taxation: 'Taxation',
        corpTax: 'Corporation Tax Services',
        personalTax: 'Personal Tax',
        vat: 'VAT',
        ni_paye: 'NI and PAYE',
        hmrc: 'HMRC Investigations',
      },
    },
    de: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Dienstleistungen',
      contact: 'Kontakt',
      quote: 'Angebotsformular',
      verify: 'Verifizieren',
      login: 'Anmeldung',
      allServices: 'Alle Dienstleistungen',
      serviceItems: {
        compliance: 'Compliance-Dienstleistungen',
        support: 'Support-Dienstleistungen',
        consultancy: 'Beratung & Systemberatung',
        startup: 'Unternehmensgründung',
        taxation: 'Besteuerung',
        corpTax: 'Körperschaftsteuerdienste',
        personalTax: 'Einkommensteuer',
        vat: 'Umsatzsteuer',
        ni_paye: 'SV und PAYE',
        hmrc: 'HMRC-Prüfungen',
      },
    },
    tr: {
      home: 'Anasayfa',
      about: 'Hakkımızda',
      services: 'Hizmetler',
      contact: 'İletişim',
      quote: 'Teklif Formu',
      verify: 'Doğrula',
      login: 'Giriş Yap',
      allServices: 'Tüm Hizmetler',
      serviceItems: {
        compliance: 'Uyum Hizmetleri',
        support: 'Destek Hizmetleri',
        consultancy: 'Danışmanlık ve Sistem Tavsiyeleri',
        startup: 'İş Kurma',
        taxation: 'Vergilendirme',
        corpTax: 'Kurumlar Vergisi Hizmetleri',
        personalTax: 'Kişisel Vergi',
        vat: 'KDV',
        ni_paye: 'NI ve PAYE',
        hmrc: 'HMRC Soruşturmaları',
      },
    },
  };

  const t = translations[currentLang] || translations.en;
  const s = t.serviceItems;

  const navItems = [
    { label: t.home, path: `/${currentLang}` },
    { label: t.about, path: `/${currentLang}/about-us` },
    {
      label: t.services,
      path: `/${currentLang}/services`,
      dropdown: [
        { label: s.compliance, path: `/${currentLang}/services/compliance-services` },
        { label: s.support, path: `/${currentLang}/services/support-services` },
        { label: s.consultancy, path: `/${currentLang}/services/consultancy-systems` },
        { label: s.startup, path: `/${currentLang}/services/business-start-up` },
        { label: s.taxation, path: `/${currentLang}/services/taxation` },
        { label: s.corpTax, path: `/${currentLang}/services/corporation-tax-services` },
        { label: s.personalTax, path: `/${currentLang}/services/personal-tax` },
        { label: s.vat, path: `/${currentLang}/services/vat` },
        { label: s.ni_paye, path: `/${currentLang}/services/ni-and-paye` },
        { label: s.hmrc, path: `/${currentLang}/services/hmrc-investigations` }
      ]
    },
    { label: t.contact, path: `/${currentLang}/contact` },
  ];
  
  const externalNavItems = [
      { label: t.quote, path: 'https://form.ataaccountancy.com', external: true },
      { label: t.verify, path: 'https://verify.ataaccountancy.com', external: true },
      { label: t.login, path: 'https://portal.ataaccountancy.com', external: true }
  ];

  const handleClick = () => {
    if (onNavigate) onNavigate();
  };
  
  const isLinkActive = (path) => {
    if (path === `/${currentLang}/services`) {
      return location.pathname.startsWith(path);
    }
    return location.pathname === path;
  };
  
  const linkClasses = (isDropdown = false) => `relative group transition-colors duration-200 font-medium text-base px-3 py-2 rounded-full whitespace-nowrap hover:no-underline focus:no-underline ${
    isOverlay ? 'text-white' : 'text-primary-800'
  } ${isDropdown ? 'flex items-center gap-1 cursor-pointer' : ''}`;

  const mobileLinkClasses = "block w-full text-left text-2xl text-white hover:text-primary-300 py-3 transition-colors font-medium focus:outline-none focus:text-primary-300 hover:no-underline focus:no-underline";

  if (mobile) {
    return (
      <div className="space-y-4">
        {navItems.map((item, index) => (
          <div key={index}>
            {item.dropdown ? (
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                  className={`${mobileLinkClasses} flex items-center justify-between w-full`}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={24}
                    className={`transition-transform ${openDropdown === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 space-y-1 mt-2 border-l-2 border-white/20"
                    >
                      <Link to={item.path} onClick={handleClick} className="block text-white/80 hover:text-white py-2 px-3 rounded-md hover:bg-white/5 transition-colors text-lg focus:outline-none focus:bg-white/10 hover:no-underline focus:no-underline">
                        {t.allServices}
                      </Link>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={handleClick}
                          className="block text-white/80 hover:text-white py-2 px-3 rounded-md hover:bg-white/5 transition-colors text-lg focus:outline-none focus:bg-white/10 hover:no-underline focus:no-underline"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to={item.path}
                onClick={handleClick}
                className={mobileLinkClasses}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <div className="border-t border-white/10 my-6"></div>
        {externalNavItems.map((item) => (
             <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mobileLinkClasses} hover:no-underline`}
                onClick={handleClick}
              >
                {item.label}
              </a>
        ))}
      </div>
    );
  }

  return (
    <>
      {navItems.map((item) => {
        const isActive = isLinkActive(item.path);
        return (
          <div key={item.path} className="relative">
            {item.dropdown ? (
              <div
                className={linkClasses(true)}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span>{item.label}</span>
                <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                {(isActive || openDropdown === item.label) && (
                  <motion.div
                    layoutId="active-nav-pill-desktop"
                    className={`absolute inset-0 z-[-1] rounded-full ${isOverlay ? 'bg-white/10' : 'bg-primary-100'}`}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-10"
                    >
                      <Link
                        to={item.path}
                        className="block font-semibold px-4 py-2 text-neutral-800 hover:bg-primary-100 hover:text-primary-700 transition-colors focus:outline-none focus:bg-primary-100 hover:no-underline focus:no-underline"
                      >
                        {t.allServices}
                      </Link>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-colors focus:outline-none focus:bg-primary-100 hover:no-underline focus:no-underline"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to={item.path}
                className={linkClasses()}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill-desktop"
                    className={`absolute inset-0 z-[-1] rounded-full ${isOverlay ? 'bg-white/10' : 'bg-primary-100'}`}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            )}
          </div>
        );
      })}
    </>
  );
};

export default MainNav;