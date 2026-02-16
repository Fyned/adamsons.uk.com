import React from 'react';
import { motion } from 'framer-motion';
import DefaultLayout from '@/layouts/DefaultLayout';
import SEO from '@/components/SEO';
import PageSection from '@/components/PageSection';
import CTAButton from '@/components/CTAButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLanguage } from '@/hooks/useLanguage';
import { useImageRegistry } from '@/hooks/useImageRegistry';
import { Check } from 'lucide-react';

const ServiceDetailTemplate = ({ pageData }) => {
  const { currentLang } = useLanguage();
  const { getImage } = useImageRegistry();

  if (!pageData) return null;

  const { title, imageKey, intro, offerings, outro, cta, altText } = pageData;
  const image = getImage(imageKey);
  const homeText = currentLang === 'tr' ? 'Anasayfa' : currentLang === 'de' ? 'Startseite' : 'Home';
  const servicesText = currentLang === 'tr' ? 'Hizmetlerimiz' : currentLang === 'de' ? 'Dienstleistungen' : 'Services';
  
  const breadcrumbs = [
    { name: homeText, path: `/${currentLang}` },
    { name: servicesText, path: `/${currentLang}/services` },
    { name: title, path: window.location.pathname }
  ];

  const isStructuredOfferings = offerings.length > 0 && typeof offerings[0] === 'object' && offerings[0] !== null && 'heading' in offerings[0];
  
  const translations = {
      en: { offer: "What We Offer" },
      de: { offer: "Was wir anbieten" },
      tr: { offer: "Sunduklarımız" }
  };
  const t = translations[currentLang];

  const OfferingList = ({ items }) => (
    <ul className="space-y-4">
      {items.map((item, itemIndex) => (
        <li key={itemIndex} className="flex items-start gap-3 not-prose">
          <div className="w-6 h-6 rounded-full bg-success-500 text-white flex items-center justify-center flex-shrink-0 mt-1">
            <Check size={16} />
          </div>
          <span className="text-neutral-700">{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <DefaultLayout>
      <SEO
        title={title}
        description={intro}
        lang={currentLang}
        breadcrumbs={breadcrumbs}
        ogImage={image?.url}
      />

      <PageSection background="light">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">
              {title}
            </h1>
          </motion.div>
        </div>
      </PageSection>

      <PageSection>
        <div className="container grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-16">
          <motion.div 
            className="lg:col-span-3 prose prose-lg max-w-none prose-p:text-neutral-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="lead font-semibold">{intro}</p>

            {isStructuredOfferings ? (
              <div className="mt-10 space-y-10">
                {offerings.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-2xl font-bold text-brand-900 mb-6">{section.heading}</h2>
                    <OfferingList items={section.items} />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-brand-900 mb-6 mt-10">{t.offer}</h2>
                <div className="mb-8">
                  <OfferingList items={offerings} />
                </div>
              </>
            )}

            {outro && <p className="font-semibold text-brand-700 mt-10">{outro}</p>}
          </motion.div>
          
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {image && (
                <div className="sticky top-28">
                  <img
                    src={image.url}
                    alt={altText || image.alt || title}
                    className="rounded-xl shadow-2xl w-full h-auto object-cover mb-8"
                    loading="lazy"
                    width="450"
                    height="450"
                  />
                  {cta && (
                    <div className="bg-brand-50 border border-brand-200 p-6 rounded-xl text-center">
                      <h3 className="text-xl font-bold text-brand-900 mb-3">
                        {cta.title}
                      </h3>
                      <p className="text-neutral-700 mb-6 text-sm">
                        {cta.text}
                      </p>
                      <CTAButton href={cta.buttonLink} external>
                        {cta.buttonLabel}
                      </CTAButton>
                    </div>
                  )}
                </div>
            )}
          </motion.div>
        </div>
      </PageSection>
    </DefaultLayout>
  );
};

export default ServiceDetailTemplate;