import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { useLanguage } from '@/hooks/useLanguage';

const NIPAYEPage = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "NI and PAYE Services",
      intro: "Managing payroll, National Insurance (NI), and PAYE obligations can be a time-consuming and complex task for any business. We provide comprehensive support to ensure you comply with all regulations, including Real Time Information (RTI) submissions and P11D filings, while also helping you optimize your NI liabilities.",
      offerings: [
        "Full payroll processing (weekly, fortnightly, monthly).",
        "Management of PAYE, National Insurance, and other statutory deductions.",
        "Real Time Information (RTI) submissions to HMRC.",
        "Preparation and filing of year-end forms, including P60s and P11Ds.",
        "Advice on employee benefits, expenses, and optimizing NI contributions."
      ],
      outro: "Let us handle your payroll and NI compliance, so you can focus on running your business."
    },
    de: {
      title: "SV- und PAYE-Dienstleistungen",
      intro: "Die Verwaltung von Lohnabrechnungen, Sozialversicherungsbeiträgen (SV) und PAYE-Pflichten kann für jedes Unternehmen eine zeitaufwändige und komplexe Aufgabe sein. Wir bieten umfassende Unterstützung, um sicherzustellen, dass Sie alle Vorschriften einhalten, einschließlich der Einreichung von Echtzeitinformationen (RTI) und P11D-Meldungen, und helfen Ihnen gleichzeitig, Ihre SV-Verbindlichkeiten zu optimieren.",
      offerings: [
        "Vollständige Lohn- und Gehaltsabrechnung (wöchentlich, zweiwöchentlich, monatlich).",
        "Verwaltung von PAYE, Sozialversicherung und anderen gesetzlichen Abzügen.",
        "Einreichung von Echtzeitinformationen (RTI) beim Finanzamt.",
        "Erstellung und Einreichung von Jahresendformularen, einschließlich P60 und P11D.",
        "Beratung zu Sozialleistungen, Ausgaben und Optimierung der SV-Beiträge."
      ],
      outro: "Überlassen Sie uns die Einhaltung Ihrer Lohn- und SV-Vorschriften, damit Sie sich auf die Führung Ihres Unternehmens konzentrieren können."
    },
    tr: {
      title: "NI ve PAYE Hizmetleri",
      intro: "Bordro, Ulusal Sigorta (NI) ve PAYE yükümlülüklerini yönetmek, her işletme için zaman alıcı ve karmaşık bir görev olabilir. Gerçek Zamanlı Bilgi (RTI) gönderimleri ve P11D dosyalamaları dahil olmak üzere tüm düzenlemelere uymanızı sağlamak için kapsamlı destek sağlıyor, aynı zamanda NI yükümlülüklerinizi optimize etmenize yardımcı oluyoruz.",
      offerings: [
        "Tam bordro işleme (haftalık, iki haftalık, aylık).",
        "PAYE, Ulusal Sigorta ve diğer yasal kesintilerin yönetimi.",
        "HMRC'ye Gerçek Zamanlı Bilgi (RTI) gönderimleri.",
        "P60'lar ve P11D'ler dahil olmak üzere yıl sonu formlarının hazırlanması ve dosyalanması.",
        "Çalışanlara sağlanan faydalar, masraflar ve NI katkı paylarının optimize edilmesi konusunda danışmanlık."
      ],
      outro: "Bordro ve NI uyumluluğunuzu bize bırakın, böylece siz işinizi yönetmeye odaklanabilirsiniz."
    }
  };

  const pageContent = content[currentLang] || content.en;

  return (
    <ServiceDetailTemplate
      pageData={{
        ...pageContent,
        imageKey: "services.niPaye",
        cta: {
          title: currentLang === 'tr' ? 'Bordro Desteği Alın' : (currentLang === 'de' ? 'Holen Sie sich Lohnbuchhaltungs-Unterstützung' : 'Get Payroll Support'),
          text: currentLang === 'tr' ? 'Bordro yükümlülüklerinizi nasıl basitleştirebileceğimizi ve uyumluluğu nasıl sağlayabileceğimizi öğrenin.' : (currentLang === 'de' ? 'Erfahren Sie, wie wir Ihre Lohnbuchhaltung vereinfachen und die Einhaltung sicherstellen können.' : 'Learn how we can simplify your payroll obligations and ensure compliance.'),
          buttonLabel: currentLang === 'tr' ? 'Bize Ulaşın' : (currentLang === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'),
          buttonLink: `/${currentLang}/contact`
        }
      }}
    />
  );
};

export default NIPAYEPage;