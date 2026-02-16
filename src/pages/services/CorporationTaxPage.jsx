import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { useLanguage } from '@/hooks/useLanguage';

const CorporationTaxPage = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "Corporation Tax Services",
      intro: "The Corporation Tax Self Assessment (CTSA) regime places a significant responsibility on company directors to ensure their returns are accurate and filed on time. With increased scrutiny from HMRC, our services are designed to reduce your administrative burden and ensure full compliance, allowing you to focus on improving your bottom line.",
      offerings: [
        "Preparing and submitting your company's Corporation Tax return.",
        "Calculating your Corporation Tax liabilities accurately.",
        "Advising on the timing and amount of Corporation Tax payments.",
        "Identifying tax planning opportunities to minimize your company's tax bill.",
        "Handling all correspondence with HMRC on your behalf."
      ],
      outro: "We proactively manage your corporation tax to improve your bottom line and ensure you never miss a deadline."
    },
    de: {
      title: "Körperschaftsteuer-Dienstleistungen",
      intro: "Das Körperschaftsteuer-Selbstveranlagungssystem (CTSA) legt eine erhebliche Verantwortung auf die Geschäftsführer von Unternehmen, um sicherzustellen, dass ihre Erklärungen korrekt und fristgerecht eingereicht werden. Angesichts der verstärkten Prüfung durch das Finanzamt sind unsere Dienstleistungen darauf ausgelegt, Ihren Verwaltungsaufwand zu reduzieren und die vollständige Einhaltung der Vorschriften zu gewährleisten.",
      offerings: [
        "Erstellung und Einreichung der Körperschaftsteuererklärung Ihres Unternehmens.",
        "Genaue Berechnung Ihrer Körperschaftsteuerschulden.",
        "Beratung zu Zeitpunkt und Höhe der Körperschaftsteuerzahlungen.",
        "Identifizierung von Steuerplanungsmöglichkeiten zur Minimierung der Steuerlast Ihres Unternehmens.",
        "Abwicklung des gesamten Schriftverkehrs mit dem Finanzamt in Ihrem Namen."
      ],
      outro: "Wir verwalten Ihre Körperschaftsteuer proaktiv, um Ihr Ergebnis zu verbessern und sicherzustellen, dass Sie keine Frist verpassen."
    },
    tr: {
      title: "Kurumlar Vergisi Hizmetleri",
      intro: "Kurumlar Vergisi Öz Değerlendirme (CTSA) rejimi, şirket yöneticilerine beyannamelerinin doğru ve zamanında dosyalanmasını sağlama konusunda önemli bir sorumluluk yüklemektedir. HMRC'nin artan denetimiyle, hizmetlerimiz idari yükünüzü azaltmak ve tam uyumluluk sağlamak için tasarlanmıştır, bu da sizin karınızı artırmaya odaklanmanıza olanak tanır.",
      offerings: [
        "Şirketinizin Kurumlar Vergisi beyannamesini hazırlamak ve sunmak.",
        "Kurumlar Vergisi yükümlülüklerinizi doğru bir şekilde hesaplamak.",
        "Kurumlar Vergisi ödemelerinin zamanlaması ve tutarı hakkında danışmanlık yapmak.",
        "Şirketinizin vergi faturasını en aza indirmek için vergi planlama fırsatlarını belirlemek.",
        "HMRC ile tüm yazışmaları sizin adınıza yürütmek."
      ],
      outro: "Karınızı artırmak ve hiçbir son tarihi kaçırmamanızı sağlamak için kurumlar verginizi proaktif olarak yönetiyoruz."
    }
  };

  const pageContent = content[currentLang] || content.en;

  return (
    <ServiceDetailTemplate
      pageData={{
        ...pageContent,
        imageKey: "services.corporationTax",
        cta: {
          title: currentLang === 'tr' ? 'Kurumsal Vergi Desteği Alın' : (currentLang === 'de' ? 'Holen Sie sich Unterstützung bei der Körperschaftsteuer' : 'Get Corporate Tax Support'),
          text: currentLang === 'tr' ? 'İdari yükünüzü nasıl azaltabileceğimizi ve vergi verimliliğinizi nasıl artırabileceğimizi öğrenin.' : (currentLang === 'de' ? 'Erfahren Sie, wie wir Ihren Verwaltungsaufwand reduzieren und Ihre Steuereffizienz verbessern können.' : 'Learn how we can reduce your administrative burden and improve your tax efficiency.'),
          buttonLabel: currentLang === 'tr' ? 'Bize Ulaşın' : (currentLang === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'),
          buttonLink: `/${currentLang}/contact`
        }
      }}
    />
  );
};

export default CorporationTaxPage;