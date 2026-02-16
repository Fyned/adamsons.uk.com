import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { useLanguage } from '@/hooks/useLanguage';

const TaxationPage = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "Taxation Services",
      intro: "Our primary goal is to help you minimize your tax liability through careful and legal planning. We believe that paying less tax is achievable with proactive advice and a deep understanding of the ever-changing tax landscape. We focus on identifying planning opportunities to ensure you are not paying more tax than necessary.",
      offerings: [
        "Advice on minimizing Income Tax and National Insurance liabilities.",
        "Guidance on Capital Gains Tax (CGT) implications for disposals.",
        "Strategic Inheritance Tax (IHT) planning to protect your estate.",
        "Identifying and maximizing all available tax reliefs and allowances.",
        "Proactive planning for upcoming tax changes."
      ],
      outro: "Let us handle the complexities of taxation so you can focus on your financial goals with confidence."
    },
    de: {
      title: "Steuerdienstleistungen",
      intro: "Unser Hauptziel ist es, Ihre Steuerlast durch sorgfältige und legale Planung zu minimieren. Wir glauben, dass weniger Steuern zu zahlen durch proaktive Beratung und ein tiefes Verständnis der sich ständig ändernden Steuerlandschaft erreichbar ist. Wir konzentrieren uns darauf, Planungsmöglichkeiten zu identifizieren, um sicherzustellen, dass Sie nicht mehr Steuern als nötig zahlen.",
      offerings: [
        "Beratung zur Minimierung von Einkommensteuer- und Sozialversicherungsbeiträgen.",
        "Anleitung zu den Auswirkungen der Kapitalertragsteuer (CGT) bei Veräußerungen.",
        "Strategische Erbschaftssteuerplanung (IHT) zum Schutz Ihres Vermögens.",
        "Identifizierung und Maximierung aller verfügbaren Steuererleichterungen und Freibeträge.",
        "Proaktive Planung für bevorstehende Steueränderungen."
      ],
      outro: "Überlassen Sie uns die Komplexität der Besteuerung, damit Sie sich vertrauensvoll auf Ihre finanziellen Ziele konzentrieren können."
    },
    tr: {
      title: "Vergilendirme Hizmetleri",
      intro: "Öncelikli hedefimiz, dikkatli ve yasal planlama yoluyla vergi yükümlülüğünüzü en aza indirmenize yardımcı olmaktır. Proaktif danışmanlık ve sürekli değişen vergi ortamını derinlemesine anlamakla daha az vergi ödemenin mümkün olduğuna inanıyoruz. Gereğinden fazla vergi ödememenizi sağlamak için planlama fırsatlarını belirlemeye odaklanıyoruz.",
      offerings: [
        "Gelir Vergisi ve Ulusal Sigorta yükümlülüklerini en aza indirme konusunda danışmanlık.",
        "Elden çıkarmalar için Sermaye Kazançları Vergisi (CGT) etkileri hakkında rehberlik.",
        "Mirasınızı korumak için stratejik Miras Vergisi (IHT) planlaması.",
        "Mevcut tüm vergi indirimlerini ve muafiyetlerini belirleme ve en üst düzeye çıkarma.",
        "Yaklaşan vergi değişiklikleri için proaktif planlama."
      ],
      outro: "Vergilendirmenin karmaşıklığını bize bırakın, böylece finansal hedeflerinize güvenle odaklanabilirsiniz."
    }
  };

  const pageContent = content[currentLang] || content.en;

  return (
    <ServiceDetailTemplate
      pageData={{
        ...pageContent,
        imageKey: "services.taxation",
        cta: {
          title: currentLang === 'tr' ? 'Vergi Planlamasına Başlayın' : (currentLang === 'de' ? 'Starten Sie Ihre Steuerplanung' : 'Start Your Tax Planning'),
          text: currentLang === 'tr' ? 'Vergi yükünüzü nasıl optimize edebileceğimizi öğrenmek için bugün bize ulaşın.' : (currentLang === 'de' ? 'Kontaktieren Sie uns noch heute, um zu erfahren, wie wir Ihre Steuerlast optimieren können.' : 'Contact us today to find out how we can optimize your tax burden.'),
          buttonLabel: currentLang === 'tr' ? 'Danışmanlık Talep Edin' : (currentLang === 'de' ? 'Beratung anfordern' : 'Request a Consultation'),
          buttonLink: "https://form.ataaccountancy.com"
        }
      }}
    />
  );
};

export default TaxationPage;