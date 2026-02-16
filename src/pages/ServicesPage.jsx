import React from 'react';
import { motion } from 'framer-motion';
import DefaultLayout from '@/layouts/DefaultLayout';
import SEO from '@/components/SEO';
import PageSection from '@/components/PageSection';
import ServiceCard from '@/components/ServiceCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLanguage } from '@/hooks/useLanguage';
import { useImageRegistry } from '@/hooks/useImageRegistry';

const ServicesPage = () => {
  const { currentLang } = useLanguage();
  const { getImage } = useImageRegistry();

  const content = {
    en: {
      pageTitle: "Our Services",
      pageDescription: "Comprehensive accounting, taxation, and financial services tailored to your business needs. Explore our full range of professional services.",
      heading: "Our Professional Services",
      subheading: "Comprehensive financial solutions designed to help your business succeed.",
      home: "Home",
      services: [
        { id: 'compliance', slug: 'compliance-services', title: 'Compliance Services', summary: 'Ensure your business meets all regulatory requirements with our comprehensive compliance services.' },
        { id: 'support', slug: 'support-services', title: 'Support Services', summary: 'Ongoing support and guidance to help your business thrive in a competitive environment.' },
        { id: 'consultancy', slug: 'consultancy-systems', title: 'Consultancy & Systems Advice', summary: 'Expert advice on financial systems and business processes to optimize your operations.' },
        { id: 'startup', slug: 'business-start-up', title: 'Business Start-Up', summary: 'Complete support for new businesses, from registration to initial accounting setup.' },
        { id: 'taxation', slug: 'taxation', title: 'Taxation', summary: 'Comprehensive tax planning and compliance services for individuals and businesses.' },
        { id: 'corporationTax', slug: 'corporation-tax-services', title: 'Corporation Tax Services', summary: 'Expert corporation tax planning, preparation, and filing services.' },
        { id: 'personalTax', slug: 'personal-tax', title: 'Personal Tax', summary: 'Personal tax return preparation and planning to minimize your tax liability.' },
        { id: 'vat', slug: 'vat', title: 'VAT', summary: 'VAT registration, returns, and compliance services for businesses of all sizes.' },
        { id: 'niPaye', slug: 'ni-and-paye', title: 'NI and PAYE', summary: 'National Insurance and PAYE management for employers and employees.' },
        { id: 'hmrc', slug: 'hmrc-investigations', title: 'HMRC Investigations', summary: 'Professional representation and support during HMRC investigations and enquiries.' }
      ]
    },
    de: {
      pageTitle: "Unsere Dienstleistungen",
      pageDescription: "Umfassende Buchhaltungs-, Steuer- und Finanzdienstleistungen, die auf Ihre Geschäftsanforderungen zugeschnitten sind. Entdecken Sie unser gesamtes Spektrum an professionellen Dienstleistungen.",
      heading: "Unsere professionellen Dienstleistungen",
      subheading: "Umfassende Finanzlösungen, die Ihrem Unternehmen zum Erfolg verhelfen.",
      home: "Startseite",
      services: [
        { id: 'compliance', slug: 'compliance-services', title: 'Compliance-Dienstleistungen', summary: 'Stellen Sie sicher, dass Ihr Unternehmen alle gesetzlichen Anforderungen erfüllt.' },
        { id: 'support', slug: 'support-services', title: 'Support-Dienstleistungen', summary: 'Laufende Unterstützung, damit Ihr Unternehmen erfolgreich ist.' },
        { id: 'consultancy', slug: 'consultancy-systems', title: 'Beratung & Systemberatung', summary: 'Expertenrat zur Optimierung Ihrer Finanzsysteme und Geschäftsprozesse.' },
        { id: 'startup', slug: 'business-start-up', title: 'Unternehmensgründung', summary: 'Vollständige Unterstützung für neue Unternehmen von der Gründung bis zur Buchhaltung.' },
        { id: 'taxation', slug: 'taxation', title: 'Besteuerung', summary: 'Umfassende Steuerplanungs- und Compliance-Dienstleistungen.' },
        { id: 'corporationTax', slug: 'corporation-tax-services', title: 'Körperschaftsteuer', summary: 'Fachkundige Planung und Einreichung der Körperschaftsteuer.' },
        { id: 'personalTax', slug: 'personal-tax', title: 'Einkommensteuer', summary: 'Persönliche Steuererklärung und Planung zur Minimierung Ihrer Steuerlast.' },
        { id: 'vat', slug: 'vat', title: 'Umsatzsteuer', summary: 'Umsatzsteuerregistrierung, -erklärungen und Compliance-Services.' },
        { id: 'niPaye', slug: 'ni-and-paye', title: 'Sozialversicherung & Lohnsteuer', summary: 'Verwaltung von Sozialversicherung und Lohnsteuer für Arbeitgeber.' },
        { id: 'hmrc', slug: 'hmrc-investigations', title: 'HMRC-Prüfungen', summary: 'Professionelle Vertretung bei Prüfungen durch das Finanzamt.' }
      ]
    },
    tr: {
      pageTitle: "Hizmetlerimiz",
      pageDescription: "İşletmenizin ihtiyaçlarına göre uyarlanmış kapsamlı muhasebe, vergilendirme ve finansal hizmetler. Tüm profesyonel hizmetlerimizi keşfedin.",
      heading: "Profesyonel Hizmetlerimiz",
      subheading: "İşletmenizin başarılı olmasına yardımcı olmak için tasarlanmış kapsamlı finansal çözümler.",
      home: "Anasayfa",
      services: [
        { id: 'compliance', slug: 'compliance-services', title: 'Uyum Hizmetleri', summary: 'İşletmenizin tüm yasal gereklilikleri karşıladığından emin olun.' },
        { id: 'support', slug: 'support-services', title: 'Destek Hizmetleri', summary: 'İşletmenizin rekabetçi bir ortamda gelişmesine yardımcı olacak sürekli destek.' },
        { id: 'consultancy', slug: 'consultancy-systems', title: 'Danışmanlık ve Sistem Tavsiyeleri', summary: 'Operasyonlarınızı optimize etmek için finansal sistemler ve iş süreçleri üzerine uzman tavsiyesi.' },
        { id: 'startup', slug: 'business-start-up', title: 'İş Kurma', summary: 'Yeni işletmeler için kayıttan ilk muhasebe kurulumuna kadar eksiksiz destek.' },
        { id: 'taxation', slug: 'taxation', title: 'Vergilendirme', summary: 'Bireyler ve işletmeler için kapsamlı vergi planlaması ve uyum hizmetleri.' },
        { id: 'corporationTax', slug: 'corporation-tax-services', title: 'Kurumlar Vergisi Hizmetleri', summary: 'Uzman kurumlar vergisi planlaması, hazırlığı ve beyan hizmetleri.' },
        { id: 'personalTax', slug: 'personal-tax', title: 'Bireysel Vergi', summary: 'Vergi yükümlülüğünüzü en aza indirmek için kişisel vergi beyannamesi hazırlama ve planlama.' },
        { id: 'vat', slug: 'vat', title: 'KDV', summary: 'Her büyüklükteki işletme için KDV kaydı, beyannameleri ve uyum hizmetleri.' },
        { id: 'niPaye', slug: 'ni-and-paye', title: 'SGK ve Bordro', summary: 'İşverenler ve çalışanlar için Sosyal Güvenlik ve Bordro yönetimi.' },
        { id: 'hmrc', slug: 'hmrc-investigations', title: 'HMRC İncelemeleri', summary: 'HMRC incelemeleri ve soruşturmaları sırasında profesyonel temsil ve destek.' }
      ]
    }
  };

  const pageContent = content[currentLang] || content.en;
  
  const breadcrumbs = [
    { name: pageContent.home, path: `/${currentLang}` },
    { name: pageContent.pageTitle, path: `/${currentLang}/services` }
  ];

  return (
    <DefaultLayout>
      <SEO
        title={pageContent.pageTitle}
        description={pageContent.pageDescription}
        lang={currentLang}
        breadcrumbs={breadcrumbs}
      />

      <PageSection background="light">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">
              {pageContent.heading}
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
              {pageContent.subheading}
            </p>
          </motion.div>
        </div>
      </PageSection>

      <PageSection>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageContent.services.map((service, index) => {
              const image = getImage(`services.${service.id}`);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <ServiceCard
                    title={service.title}
                    summary={service.summary}
                    href={`/${currentLang}/services/${service.slug}`}
                    imageUrl={image?.url}
                    imageAlt={service.title}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </PageSection>
    </DefaultLayout>
  );
};

export default ServicesPage;