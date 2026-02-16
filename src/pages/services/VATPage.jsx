import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { useLanguage } from '@/hooks/useLanguage';

const VATPage = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "VAT Services",
      intro: "Value Added Tax (VAT) is one of the most complex tax regimes, and failure to comply can lead to significant penalties. We provide comprehensive VAT services to ensure you stay compliant, avoid overpayments, and manage your VAT position effectively.",
      offerings: [
        "Assistance with VAT registration and deregistration.",
        "Advice on choosing the most appropriate VAT scheme for your business.",
        "VAT control and reconciliation to ensure accuracy.",
        "Preparation and submission of VAT returns, including Making Tax Digital (MTD) compliance.",
        "Support and representation in disputes with HMRC."
      ],
      outro: "Our goal is to make VAT simple for you, preventing issues before they arise and resolving any challenges swiftly."
    },
    de: {
      title: "Umsatzsteuer-Dienstleistungen",
      intro: "Die Mehrwertsteuer (USt) ist eines der komplexesten Steuersysteme, und die Nichteinhaltung kann zu erheblichen Strafen führen. Wir bieten umfassende Umsatzsteuerdienstleistungen, um sicherzustellen, dass Sie konform bleiben, Überzahlungen vermeiden und Ihre Umsatzsteuerposition effektiv verwalten.",
      offerings: [
        "Unterstützung bei der Umsatzsteuerregistrierung und -abmeldung.",
        "Beratung bei der Wahl des für Ihr Unternehmen am besten geeigneten Umsatzsteuersystems.",
        "Umsatzsteuerkontrolle und -abstimmung zur Gewährleistung der Genauigkeit.",
        "Erstellung und Einreichung von Umsatzsteuererklärungen, einschließlich der Einhaltung von Making Tax Digital (MTD).",
        "Unterstützung und Vertretung bei Streitigkeiten mit dem Finanzamt."
      ],
      outro: "Unser Ziel ist es, die Umsatzsteuer für Sie einfach zu machen, Probleme zu vermeiden, bevor sie entstehen, und alle Herausforderungen schnell zu lösen."
    },
    tr: {
      title: "KDV Hizmetleri",
      intro: "Katma Değer Vergisi (KDV), en karmaşık vergi rejimlerinden biridir ve uyumsuzluk ciddi cezalara yol açabilir. Uyumlu kalmanızı, fazla ödemelerden kaçınmanızı ve KDV pozisyonunuzu etkili bir şekilde yönetmenizi sağlamak için kapsamlı KDV hizmetleri sunuyoruz.",
      offerings: [
        "KDV kaydı ve kaydının silinmesi konusunda yardım.",
        "İşletmeniz için en uygun KDV planını seçme konusunda danışmanlık.",
        "Doğruluğu sağlamak için KDV kontrolü ve mutabakatı.",
        "Vergiyi Dijitalleştirme (MTD) uyumluluğu dahil olmak üzere KDV beyannamelerinin hazırlanması ve sunulması.",
        "HMRC ile olan anlaşmazlıklarda destek ve temsil."
      ],
      outro: "Amacımız, KDV'yi sizin için basitleştirmek, sorunları ortaya çıkmadan önlemek ve her türlü zorluğu hızla çözmektir."
    }
  };

  const pageContent = content[currentLang] || content.en;

  return (
    <ServiceDetailTemplate
      pageData={{
        ...pageContent,
        imageKey: "services.vat",
        cta: {
          title: currentLang === 'tr' ? 'KDV Konusunda Yardım Alın' : (currentLang === 'de' ? 'Holen Sie sich Hilfe bei der Mehrwertsteuer' : 'Get Help with VAT'),
          text: currentLang === 'tr' ? 'KDV yükümlülüklerinizi basitleştirmek ve işletmenizin uyumlu kalmasını sağlamak için bize ulaşın.' : (currentLang === 'de' ? 'Kontaktieren Sie uns, um Ihre Umsatzsteuerpflichten zu vereinfachen und sicherzustellen, dass Ihr Unternehmen konform bleibt.' : 'Contact us to simplify your VAT obligations and ensure your business stays compliant.'),
          buttonLabel: currentLang === 'tr' ? 'Uzmanla Görüşün' : (currentLang === 'de' ? 'Sprechen Sie mit einem Experten' : 'Speak to an Expert'),
          buttonLink: `/${currentLang}/contact`
        }
      }}
    />
  );
};

export default VATPage;