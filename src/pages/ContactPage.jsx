import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import DefaultLayout from '@/layouts/DefaultLayout';
import SEO from '@/components/SEO';
import PageSection from '@/components/PageSection';
import CTAButton from '@/components/CTAButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLanguage } from '@/hooks/useLanguage';

const ContactPage = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "Contact Us",
      description: "Get in touch with Adamsons Accountants. We're here to help with all your accounting and financial needs.",
      getInTouch: "Get in Touch",
      address: "Address",
      phone: "Phone",
      email: "Email",
      officeHours: "Office Hours",
      weekdays: "Monday - Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      byAppointment: "By Appointment",
      closed: "Closed",
      ctaButton: "Request a Consultation",
      home: "Home",
      contact: "Contact"
    },
    de: {
      title: "Kontaktieren Sie uns",
      description: "Nehmen Sie Kontakt mit Adamsons Accountants auf. Wir sind hier, um bei all Ihren Buchhaltungs- und Finanzbedürfnissen zu helfen.",
      getInTouch: "Kontakt aufnehmen",
      address: "Adresse",
      phone: "Telefon",
      email: "Email",
      officeHours: "Bürozeiten",
      weekdays: "Montag - Freitag",
      saturday: "Samstag",
      sunday: "Sonntag",
      byAppointment: "Nach Vereinbarung",
      closed: "Geschlossen",
      ctaButton: "Beratung anfordern",
      home: "Startseite",
      contact: "Kontakt"
    },
    tr: {
      title: "Bize Ulaşın",
      description: "Adamsons Accountants ile iletişime geçin. Tüm muhasebe ve finansal ihtiyaçlarınızda size yardımcı olmak için buradayız.",
      getInTouch: "İletişime Geçin",
      address: "Adres",
      phone: "Telefon",
      email: "E-posta",
      officeHours: "Çalışma Saatleri",
      weekdays: "Pazartesi - Cuma",
      saturday: "Cumartesi",
      sunday: "Pazar",
      byAppointment: "Randevu ile",
      closed: "Kapalı",
      ctaButton: "Danışmanlık Talep Edin",
      home: "Anasayfa",
      contact: "İletişim"
    }
  };

  const t = content[currentLang] || content.en;

  const breadcrumbs = [
    { name: t.home, path: `/${currentLang}` },
    { name: t.contact, path: `/${currentLang}/contact` }
  ];

  return (
    <DefaultLayout>
      <SEO
        title={t.title}
        description={t.description}
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
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-8 text-center">
              {t.title}
            </h1>
          </motion.div>
        </div>
      </PageSection>

      <PageSection>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200/50"
              >
                <h2 className="text-2xl font-bold text-brand-900 mb-6">{t.getInTouch}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="text-brand-500" size={24} />
                    </div>
                    <div>
                      <span className="font-semibold text-brand-900 block mb-1">{t.address}</span>
                      <address className="not-italic text-neutral-700">
                        7 Lewisham Way<br />
                        London, SE14 6PP
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-lg flex-shrink-0">
                      <Phone className="text-brand-500" size={24} />
                    </div>
                    <div>
                      <span className="font-semibold text-brand-900 block mb-1">{t.phone}</span>
                      <a 
                        href="tel:+442085544449" 
                        className="text-brand-500 hover:text-brand-700 transition-colors"
                      >
                        +44 (0)208 554 4449
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-lg flex-shrink-0">
                      <Mail className="text-brand-500" size={24} />
                    </div>
                    <div>
                      <span className="font-semibold text-brand-900 block mb-1">{t.email}</span>
                      <a 
                        href="mailto:admin@adamsons.uk.com" 
                        className="text-brand-500 hover:text-brand-700 transition-colors"
                      >
                        admin@adamsons.uk.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200/50"
              >
                <h2 className="text-2xl font-bold text-brand-900 mb-6">{t.officeHours}</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                     <Clock className="text-brand-500 flex-shrink-0" size={24} />
                     <div>
                       <p className="font-semibold text-neutral-800">{t.weekdays}: 9:00 AM - 5:30 PM</p>
                       <p className="font-semibold text-neutral-800">{t.saturday}: <span className="font-normal text-neutral-600">{t.byAppointment}</span></p>
                       <p className="font-semibold text-neutral-800">{t.sunday}: <span className="font-normal text-neutral-600">{t.closed}</span></p>
                     </div>
                  </div>
                </div>

                <div className="text-center">
                  <CTAButton href="https://form.ataaccountancy.com" external variant="primary" size="lg">
                    {t.ctaButton}
                  </CTAButton>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-2 rounded-xl shadow-lg overflow-hidden border border-neutral-200/50"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.0584289447906!2d-0.0355667!3d51.475441800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602f82cf1d70b%3A0x479156258416a471!2s7%20Mulberry%20Mews%2C%20Lewisham%20Way%2C%20London%20SE14%206QF%2C%20Birle%C5%9Fik%20Krall%C4%B1k!5e0!3m2!1str!2str!4v1770642368290!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: 0 }}
                className="rounded-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                credentialless="true"
                title="Adamsons Accountants Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </PageSection>
    </DefaultLayout>
  );
};

export default ContactPage;