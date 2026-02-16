import React from 'react';
import { motion } from 'framer-motion';
import DefaultLayout from '@/layouts/DefaultLayout';
import SEO from '@/components/SEO';
import PageSection from '@/components/PageSection';
import { useImageRegistry } from '@/hooks/useImageRegistry';
import { useLanguage } from '@/hooks/useLanguage';
import { Check, ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { Link } from 'react-router-dom';
import CTAButton from '@/components/CTAButton';

const HomePage = () => {
  const { getImage } = useImageRegistry();
  const { currentLang } = useLanguage();
  const heroBg = getImage('home.heroBg');
  const features1 = getImage('home.features1');
  const features2 =getImage('home.features2');

  const content = {
    en: {
      heroTitle: "Full Accounting Service",
      heroSubtitle: "Your trusted partner for professional accounting, taxation, and advisory services.",
      cta: "Get a Free Consultation",
      feature1Title: "Full Accounting Service – accounts, taxation and advisory",
      feature1Desc: "We provide a full spectrum of accounting, taxation, and advisory services tailored to your business needs, ensuring compliance and optimizing financial performance.",
      feature1Points: [
        "Professional accounts preparation and management",
        "Expert taxation advice and compliance",
        "Strategic financial advisory services"
      ],
      feature2Title: "Small Business Specialists – cost-effective financial solutions",
      feature2Desc: "Our cost-effective financial solutions are designed specifically to help small and medium-sized businesses thrive and grow.",
      feature2Points: [
        "Affordable pricing packages for growing businesses",
        "Dedicated support and personalized service",
        "Scalable solutions that grow with your business"
      ],
      servicesTitle: "Explore Our Services",
      viewAllServices: "View All Services",
      finalCtaTitle: "Ready to achieve your financial goals? Let's talk.",
      finalCtaButton: "Get a Free Consultation",
    },
    de: {
      heroTitle: "Umfassender Buchhaltungsservice",
      heroSubtitle: "Ihr zuverlässiger Partner für professionelle Buchhaltung, Steuern und Beratung.",
      cta: "Kostenlose Beratung anfordern",
      feature1Title: "Umfassender Buchhaltungsservice – Konten, Steuern und Beratung",
      feature1Desc: "Wir bieten ein komplettes Spektrum an Buchhaltungs-, Steuer- und Beratungsdienstleistungen, die auf Ihre Geschäftsanforderungen zugeschnitten sind, um die Einhaltung von Vorschriften zu gewährleisten und die finanzielle Leistung zu optimieren.",
      feature1Points: [
        "Professionelle Kontenerstellung und -verwaltung",
        "Fachkundige Steuerberatung und Compliance",
        "Strategische Finanzberatungsdienste"
      ],
      feature2Title: "Spezialisten für Kleinunternehmen – kostengünstige Finanzlösungen",
      feature2Desc: "Unsere kostengünstigen Finanzlösungen sind speziell darauf ausgelegt, kleinen und mittleren Unternehmen zum Erfolg und Wachstum zu verhelfen.",
      feature2Points: [
        "Erschwingliche Preispakete für wachsende Unternehmen",
        "Engagierte Unterstützung und persönlicher Service",
        "Skalierbare Lösungen, die mit Ihrem Unternehmen wachsen"
      ],
      servicesTitle: "Entdecken Sie unsere Dienstleistungen",
      viewAllServices: "Alle Dienstleistungen anzeigen",
      finalCtaTitle: "Bereit, Ihre finanziellen Ziele zu erreichen? Lassen Sie uns reden.",
      finalCtaButton: "Kostenlose Beratung anfordern",
    },
    tr: {
      heroTitle: "Tam Kapsamlı Muhasebe Hizmeti",
      heroSubtitle: "Profesyonel muhasebe, vergilendirme ve danışmanlık hizmetleri için güvenilir ortağınız.",
      cta: "Ücretsiz Danışmanlık Alın",
      feature1Title: "Tam Kapsamlı Muhasebe Hizmeti – hesaplar, vergilendirme ve danışmanlık",
      feature1Desc: "İşletmenizin ihtiyaçlarına göre uyarlanmış, uyumluluğu sağlayan ve finansal performansı optimize eden eksiksiz bir muhasebe, vergilendirme ve danışmanlık hizmetleri yelpazesi sunuyoruz.",
      feature1Points: [
        "Profesyonel hesap hazırlama ve yönetimi",
        "Uzman vergi danışmanlığı ve uyumluluk",
        "Stratejik finansal danışmanlık hizmetleri"
      ],
      feature2Title: "Küçük İşletme Uzmanları – uygun maliyetli finansal çözümler",
      feature2Desc: "Uygun maliyetli finansal çözümlerimiz, küçük ve orta ölçekli işletmelerin gelişmesine ve büyümesine yardımcı olmak için özel olarak tasarlanmıştır.",
      feature2Points: [
        "Büyüyen işletmeler için uygun fiyatlı paketler",
        "Özel destek ve kişiselleştirilmiş hizmet",
        "İşletmenizle birlikte büyüyen ölçeklenebilir çözümler"
      ],
      servicesTitle: "Hizmetlerimizi Keşfedin",
      viewAllServices: "Tüm Hizmetleri Görüntüle",
      finalCtaTitle: "Finansal hedeflerinize ulaşmaya hazır mısınız? Hadi konuşalım.",
      finalCtaButton: "Ücretsiz Danışmanlık Alın",
    }
  };

  const pageContent = content[currentLang] || content.en;

  const services = [
    { id: 'compliance', slug: 'compliance-services' },
    { id: 'support', slug: 'support-services' },
    { id: 'consultancy', slug: 'consultancy-systems' },
    { id: 'startup', slug: 'business-start-up' },
    { id: 'taxation', slug: 'taxation' },
    { id: 'corporationTax', slug: 'corporation-tax-services' },
  ];

  const serviceContent = {
    en: {
      compliance: { title: "Compliance Services", summary: "Ensuring your business meets all statutory and regulatory requirements." },
      support: { title: "Support Services", summary: "Providing ongoing support to manage your finances effectively." },
      consultancy: { title: "Consultancy & Systems", summary: "Expert advice to improve your financial systems and strategy." },
      startup: { title: "Business Start-Up", summary: "Guiding you through the process of starting a new venture." },
      taxation: { title: "Taxation", summary: "Comprehensive tax planning and advisory services." },
      corporationTax: { title: "Corporation Tax", summary: "Minimizing your corporate tax liability." },
    },
    de: {
      compliance: { title: "Compliance-Dienstleistungen", summary: "Sicherstellung, dass Ihr Unternehmen alle gesetzlichen und regulatorischen Anforderungen erfüllt." },
      support: { title: "Support-Dienstleistungen", summary: "Laufende Unterstützung zur effektiven Verwaltung Ihrer Finanzen." },
      consultancy: { title: "Beratung & Systeme", summary: "Fachkundige Beratung zur Verbesserung Ihrer Finanzsysteme und -strategie." },
      startup: { title: "Unternehmensgründung", summary: "Begleitung durch den Prozess der Gründung eines neuen Unternehmens." },
      taxation: { title: "Besteuerung", summary: "Umfassende Steuerplanungs- und Beratungsdienste." },
      corporationTax: { title: "Körperschaftsteuer", summary: "Minimierung Ihrer Körperschaftsteuerschuld." },
    },
    tr: {
      compliance: { title: "Uyum Hizmetleri", summary: "İşletmenizin tüm yasal ve düzenleyici gereklilikleri karşılamasını sağlamak." },
      support: { title: "Destek Hizmetleri", summary: "Mali durumunuzu etkin bir şekilde yönetmeniz için sürekli destek sağlamak." },
      consultancy: { title: "Danışmanlık ve Sistemler", summary: "Finansal sistemlerinizi ve stratejinizi geliştirmek için uzman tavsiyesi." },
      startup: { title: "İş Kurma", summary: "Yeni bir girişime başlama sürecinde size rehberlik etmek." },
      taxation: { title: "Vergilendirme", summary: "Kapsamlı vergi planlaması ve danışmanlık hizmetleri." },
      corporationTax: { title: "Kurumlar Vergisi", summary: "Kurumlar vergisi yükümlülüğünüzü en aza indirmek." },
    }
  };

  const currentServiceContent = serviceContent[currentLang] || serviceContent.en;

  return (
    <DefaultLayout>
      <SEO
        title={pageContent.heroTitle}
        description={pageContent.heroSubtitle}
        lang={currentLang}
        ogImage={heroBg?.url}
      />

      <section className="hero-banner">
        <div className="container relative z-10 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto !leading-tight text-shadow-md text-white"
          >
            {pageContent.heroTitle}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 text-shadow"
          >
            {pageContent.heroSubtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold"
              href="https://form.ataaccountancy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {pageContent.cta}
              <ArrowRight size={22} />
            </a>
          </motion.div>
        </div>
      </section>

      <PageSection background="bg-surface-soft">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {features1 && (
                <img
                  src={features1.url}
                  alt={features1.alt}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  loading="lazy"
                  width="550"
                  height="370"
                />
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">
                {pageContent.feature1Title}
              </h2>
              <p className="text-lg text-text-muted mb-6">
                {pageContent.feature1Desc}
              </p>
              <ul className="space-y-3 text-text">
                {pageContent.feature1Points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-900 text-surface flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </PageSection>

      <PageSection background="bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">
                {pageContent.feature2Title}
              </h2>
              <p className="text-lg text-text-muted mb-6">
                {pageContent.feature2Desc}
              </p>
              <ul className="space-y-3 text-text">
                {pageContent.feature2Points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-900 text-surface flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              {features2 && (
                <img
                  src={features2.url}
                  alt={features2.alt}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  loading="lazy"
                  width="550"
                  height="370"
                />
              )}
            </motion.div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700">
              {pageContent.servicesTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const image = getImage(`services.${service.id}`);
              const content = currentServiceContent[service.id];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard
                    title={content.title}
                    summary={content.summary}
                    href={`/${currentLang}/services/${service.slug}`}
                    imageUrl={image?.url}
                    imageAlt={content.title}
                  />
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12">
             <Link to={`/${currentLang}/services`} className="font-semibold text-primary-900 hover:text-primary-600 transition-colors">
                {pageContent.viewAllServices} &rarr;
             </Link>
          </div>
        </div>
      </PageSection>

      <PageSection background="bg-surface">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8">
              {pageContent.finalCtaTitle}
            </h2>
            <CTAButton href="https://form.ataaccountancy.com" external variant="primary" size="lg">
              {pageContent.finalCtaButton}
            </CTAButton>
          </motion.div>
        </div>
      </PageSection>

    </DefaultLayout>
  );
};

export default HomePage;