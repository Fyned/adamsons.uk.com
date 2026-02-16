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

const AboutPage = () => {
  const { currentLang } = useLanguage();
  const { getImage } = useImageRegistry();
  const aboutImage = getImage('about.team');

  const content = {
    en: {
      title: "About Adamsons Accountants",
      description: "Learn about Adamsons Accountants - your trusted partner with a strong technical base, a dedicated team, and a reputation for excellence in financial services.",
      heading: "Your Trusted Partner in Financial Excellence",
      p1: "Adamsons Accountants is a leading professional accounting firm built on a strong technical base and a reputation for excellence. We are dedicated to providing comprehensive financial services to businesses of all sizes, from ambitious start-ups to established enterprises.",
      p2: "Our dedicated team of qualified accountants and financial advisors brings together a wealth of experience across multiple disciplines. We are committed to helping our clients navigate the complexities of modern business finance with clarity and confidence.",
      p3: "Our client-focused approach is at the heart of everything we do. We believe in building long-term partnerships, providing not just services, but strategic support tailored to your unique goals as your business grows and evolves.",
      specialtiesTitle: "Our Core Service Specialties",
      specialties: [
        "Comprehensive Accounting & Bookkeeping",
        "Expert Taxation Planning & Compliance",
        "Professional Auditing & Assurance",
        "Corporate Management & Strategic Advisory",
        "In-depth Financial Consulting & Systems Advice"
      ],
      invitation: "Ready to achieve your financial goals? Let's talk.",
      cta: "Get a Free Consultation",
      home: "Home"
    },
    de: {
      title: "Über Adamsons Accountants",
      description: "Erfahren Sie mehr über Adamsons Accountants - Ihr zuverlässiger Partner mit einer starken technischen Basis, einem engagierten Team und einem Ruf für Exzellenz bei Finanzdienstleistungen.",
      heading: "Ihr zuverlässiger Partner für finanzielle Exzellenz",
      p1: "Adamsons Accountants ist eine führende professionelle Wirtschaftsprüfungsgesellschaft, die auf einer starken technischen Basis und einem Ruf für Exzellenz aufbaut. Wir widmen uns der Bereitstellung umfassender Finanzdienstleistungen für Unternehmen jeder Größe, von ehrgeizigen Start-ups bis hin zu etablierten Unternehmen.",
      p2: "Unser engagiertes Team von qualifizierten Wirtschaftsprüfern und Finanzberatern bündelt eine Fülle von Erfahrungen aus verschiedenen Disziplinen. Wir setzen uns dafür ein, unseren Kunden zu helfen, die Komplexität der modernen Unternehmensfinanzierung mit Klarheit und Vertrauen zu meistern.",
      p3: "Unser kundenorientierter Ansatz steht im Mittelpunkt all unseres Handelns. Wir glauben an den Aufbau langfristiger Partnerschaften und bieten nicht nur Dienstleistungen, sondern strategische Unterstützung, die auf Ihre einzigartigen Ziele zugeschnitten ist, während Ihr Unternehmen wächst und sich entwickelt.",
      specialtiesTitle: "Unsere Kernkompetenzen",
      specialties: [
        "Umfassende Buchhaltung & Buchführung",
        "Experten-Steuerplanung & Compliance",
        "Professionelle Wirtschaftsprüfung & Assurance",
        "Unternehmensführung & strategische Beratung",
        "Tiefgehende Finanzberatung & Systemberatung"
      ],
      invitation: "Bereit, Ihre finanziellen Ziele zu erreichen? Lassen Sie uns reden.",
      cta: "Kostenlose Beratung anfordern",
      home: "Startseite"
    },
    tr: {
      title: "Adamsons Accountants Hakkında",
      description: "Adamsons Accountants hakkında daha fazla bilgi edinin - güçlü teknik altyapısı, kendini işine adamış ekibi ve finansal hizmetlerdeki mükemmellik ünü ile güvenilir ortağınız.",
      heading: "Finansal Mükemmellikte Güvenilir Ortağınız",
      p1: "Adamsons Accountants, güçlü bir teknik altyapı ve mükemmellik itibarı üzerine kurulmuş, önde gelen profesyonel bir muhasebe firmasıdır. İddialı yeni girişimlerden köklü işletmelere kadar her büyüklükteki işletmeye kapsamlı finansal hizmetler sunmaya kendimizi adadık.",
      p2: "Nitelikli muhasebecilerden ve finansal danışmanlardan oluşan özel ekibimiz, birden fazla disiplinde zengin bir deneyimi bir araya getirir. Müşterilerimizin modern iş finansmanının karmaşıklıklarında netlik ve güvenle yol almalarına yardımcı olmaya kararlıyız.",
      p3: "Müşteri odaklı yaklaşımımız, yaptığımız her şeyin merkezinde yer alır. İşletmeniz büyüyüp geliştikçe benzersiz hedeflerinize göre uyarlanmış stratejik destek sağlayarak sadece hizmet değil, uzun vadeli ortaklıklar kurmaya inanıyoruz.",
      specialtiesTitle: "Temel Hizmet Uzmanlıklarımız",
      specialties: [
        "Kapsamlı Muhasebe ve Defter Tutma",
        "Uzman Vergi Planlaması ve Mevzuata Uyum",
        "Profesyonel Denetim ve Güvence",
        "Kurumsal Yönetim ve Stratejik Danışmanlık",
        "Derinlemesine Finansal Danışmanlık ve Sistem Tavsiyeleri"
      ],
      invitation: "Finansal hedeflerinize ulaşmaya hazır mısınız? Gelin konuşalım.",
      cta: "Ücretsiz Danışmanlık Alın",
      home: "Anasayfa"
    }
  };

  const pageContent = content[currentLang] || content.en;

  const breadcrumbs = [
    { name: pageContent.home, path: `/${currentLang}` },
    { name: pageContent.title, path: `/${currentLang}/about-us` }
  ];

  return (
    <DefaultLayout>
      <SEO
        title={pageContent.title}
        description={pageContent.description}
        lang={currentLang}
        breadcrumbs={breadcrumbs}
        ogImage={aboutImage?.url}
      />

      <PageSection background="light">
        <div className="container text-center">
          <Breadcrumbs items={breadcrumbs} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">
              {pageContent.heading}
            </h1>
          </motion.div>
        </div>
      </PageSection>

      <PageSection>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            className="prose prose-lg max-w-none prose-p:text-neutral-700 prose-li:text-neutral-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p>{pageContent.p1}</p>
            <p>{pageContent.p2}</p>
            
            <h2 className="text-2xl font-bold text-brand-900 mb-4 mt-8">{pageContent.specialtiesTitle}</h2>
            <ul className="space-y-3 mb-8 not-prose list-none p-0">
              {pageContent.specialties.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success-500 text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} />
                  </div>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            <p>{pageContent.p3}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {aboutImage && (
              <img
                src={aboutImage.url}
                alt={aboutImage.alt}
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
                loading="lazy"
                width="550"
                height="600"
              />
            )}
          </motion.div>
        </div>
      </PageSection>

      <PageSection background="white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-8">
              {pageContent.invitation}
            </h2>
            <CTAButton href="https://form.ataaccountancy.com" external variant="primary" size="lg">
              {pageContent.cta}
            </CTAButton>
          </motion.div>
        </div>
      </PageSection>
    </DefaultLayout>
  );
};

export default AboutPage;