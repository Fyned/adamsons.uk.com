import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useImageRegistry } from '@/hooks/useImageRegistry';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Footer = () => {
  const { currentLang } = useLanguage();
  const { getImage } = useImageRegistry();
  const logoWhite = getImage('logo.white');

  const translations = {
    en: {
      slogan: 'Full Accounting Service for businesses of all sizes',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      copyright: 'Adamsons Accountants. All rights reserved.',
      language: 'Language',
      designedBy: 'Designed by DMC Kreatif',
      nav: { home: 'Home', about: 'About Us', services: 'Services', contact: 'Contact' }
    },
    de: {
      slogan: 'Umfassender Buchhaltungsservice für Unternehmen jeder Größe',
      quickLinks: 'Schnell-Links',
      contactInfo: 'Kontaktinformation',
      copyright: 'Adamsons Accountants. Alle Rechte vorbehalten.',
      language: 'Sprache',
      designedBy: 'Webdesign von DMC Kreatif',
      nav: { home: 'Startseite', about: 'Über uns', services: 'Dienstleistungen', contact: 'Kontakt' }
    },
    tr: {
      slogan: 'Her büyüklükteki işletme için Tam Kapsamlı Muhasebe Hizmeti',
      quickLinks: 'Hızlı Bağlantılar',
      contactInfo: 'İletişim Bilgileri',
      copyright: 'Adamsons Accountants. Tüm hakları saklıdır.',
      language: 'Dil',
      designedBy: 'Tasarım: DMC Kreatif',
      nav: { home: 'Anasayfa', about: 'Hakkımızda', services: 'Hizmetler', contact: 'İletişim' }
    }
  };

  const t = translations[currentLang] || translations.en;

  const quickLinks = [
    { label: t.nav.home, path: `/${currentLang}` },
    { label: t.nav.about, path: `/${currentLang}/about-us` },
    { label: t.nav.services, path: `/${currentLang}/services` },
    { label: t.nav.contact, path: `/${currentLang}/contact` }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            {logoWhite && (
              <Link to={`/${currentLang}`}>
                <img
                  src={logoWhite.url}
                  alt={logoWhite.alt}
                  className="h-12 w-auto mb-4"
                  loading="lazy"
                />
              </Link>
            )}
            <p className="text-white/80 text-sm mb-4 max-w-xs">
              {t.slogan}
            </p>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">{t.quickLinks}</span>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-primary-500 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">{t.contactInfo}</span>
            <address className="not-italic space-y-3 text-sm">
              <p className="flex items-start gap-3 text-white/80">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary-500" />
                <span>7 Lewisham Way, London, SE14 6PP</span>
              </p>
              <a href="tel:+442085544449" className="flex items-center gap-3 text-white/80 hover:text-primary-500 transition-colors">
                <Phone size={16} className="flex-shrink-0 text-primary-500" />
                <span>+44 (0)208 554 4449</span>
              </a>
              <a href="mailto:admin@adamsons.uk.com" className="flex items-center gap-3 text-white/80 hover:text-primary-500 transition-colors">
                <Mail size={16} className="flex-shrink-0 text-primary-500" />
                <span>admin@adamsons.uk.com</span>
              </a>
            </address>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">{t.language}</span>
            <div className="w-fit rounded-2xl bg-[#0F0F0F] ring-1 ring-white/10 p-2 shadow-inner backdrop-blur-sm">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} {t.copyright}</p>
          <a
            href="https://dmckreatif.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-white/30 hover:text-white/60 transition-colors text-xs"
          >
            {t.designedBy}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;