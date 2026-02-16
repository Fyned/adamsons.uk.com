import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { useLanguage } from '@/hooks/useLanguage';

const ConsultancyPage = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "Consultancy & Systems Advice",
      intro: "Our consultancy services are designed to make your business operations more efficient and robust. We provide expert advice on both management controls and information technology to help you achieve your strategic goals.",
      offerings: [
        {
          heading: "Management Consultancy",
          items: [
            "Reviewing and strengthening your management and internal control systems.",
            "Optimizing credit control, stock control, budgeting, and financial reporting systems.",
            "Identifying opportunities to improve efficiency and profitability.",
            "Providing strategic advice to help you navigate complex business challenges."
          ]
        },
        {
          heading: "Information Technology",
          items: [
            "Assisting with the selection of appropriate software and hardware for your needs.",
            "Providing installation, training, and ongoing support for your IT systems.",
            "Developing management reporting solutions to provide timely and accurate information.",
            "Ensuring your IT infrastructure supports your business goals effectively."
          ]
        }
      ],
      outro: "By optimizing your systems and controls, we help you build a more efficient, profitable, and scalable business."
    },
    de: {
      title: "Beratung & Systemberatung",
      intro: "Unsere Beratungsdienste sind darauf ausgelegt, Ihre Geschäftsabläufe effizienter und robuster zu gestalten. Wir bieten kompetente Beratung zu Managementkontrollen und Informationstechnologie.",
      offerings: [
        { heading: "Unternehmensberatung", items: ["Überprüfung und Stärkung Ihrer Management- und internen Kontrollsysteme.", "Optimierung von Kreditkontrolle, Lagerhaltung, Budgetierung und Finanzberichterstattung.", "Identifizierung von Effizienz- und Rentabilitätssteigerungen.", "Strategische Beratung bei komplexen geschäftlichen Herausforderungen."] },
        { heading: "Informationstechnologie", items: ["Hilfe bei der Auswahl geeigneter Software und Hardware.", "Installation, Schulung und laufender Support für Ihre IT-Systeme.", "Entwicklung von Management-Reporting-Lösungen.", "Sicherstellung, dass Ihre IT-Infrastruktur Ihre Geschäftsziele unterstützt."] }
      ],
      outro: "Durch die Optimierung Ihrer Systeme und Kontrollen helfen wir Ihnen, ein effizienteres, profitableres und skalierbareres Geschäft aufzubauen."
    },
    tr: {
      title: "Danışmanlık ve Sistem Tavsiyeleri",
      intro: "Danışmanlık hizmetlerimiz, iş operasyonlarınızı daha verimli ve sağlam hale getirmek için tasarlanmıştır. Stratejik hedeflerinize ulaşmanıza yardımcı olmak için hem yönetim kontrolleri hem de bilgi teknolojileri konusunda uzman tavsiyeleri sunuyoruz.",
      offerings: [
        { heading: "Yönetim Danışmanlığı", items: ["Yönetim ve iç kontrol sistemlerinizi gözden geçirmek ve güçlendirmek.", "Kredi kontrolü, stok kontrolü, bütçeleme ve finansal raporlama sistemlerini optimize etmek.", "Verimliliği ve karlılığı artırma fırsatlarını belirlemek.", "Karmaşık iş zorluklarında yolunuzu bulmanıza yardımcı olacak stratejik tavsiyeler sunmak."] },
        { heading: "Bilgi Teknolojileri", items: ["İhtiyaçlarınıza uygun yazılım ve donanım seçimi konusunda yardımcı olmak.", "BT sistemleriniz için kurulum, eğitim ve sürekli destek sağlamak.", "Zamanında ve doğru bilgi sağlamak için yönetim raporlama çözümleri geliştirmek.", "BT altyapınızın iş hedeflerinizi etkin bir şekilde desteklemesini sağlamak."] }
      ],
      outro: "Sistemlerinizi ve kontrollerinizi optimize ederek daha verimli, karlı ve ölçeklenebilir bir iş kurmanıza yardımcı oluyoruz."
    }
  };

  const pageContent = content[currentLang] || content.en;

  return (
    <ServiceDetailTemplate
      pageData={{
        ...pageContent,
        imageKey: "services.consultancy",
        cta: {
          title: currentLang === 'tr' ? 'Başlamaya Hazır mısınız?' : (currentLang === 'de' ? 'Bereit loszulegen?' : 'Ready to Get Started?'),
          text: currentLang === 'tr' ? 'İşletmenizin başarılı olmasına nasıl yardımcı olabileceğimizi öğrenmek için bugün bize ulaşın.' : (currentLang === 'de' ? 'Kontaktieren Sie uns noch heute, um mehr darüber zu erfahren, wie wir Ihrem Unternehmen zum Erfolg verhelfen können.' : 'Contact us today to learn more about how we can help your business succeed.'),
          buttonLabel: currentLang === 'tr' ? 'Danışmanlık Talep Edin' : (currentLang === 'de' ? 'Beratung anfordern' : 'Request a Consultation'),
          buttonLink: "https://form.ataaccountancy.com"
        }
      }}
    />
  );
};

export default ConsultancyPage;