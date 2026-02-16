import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { useLanguage } from '@/hooks/useLanguage';

const HMRCPage = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "HMRC Investigations",
      intro: "An HMRC investigation can be a stressful and time-consuming experience. Our experienced team is here to provide expert support and representation, relieving the burden and ensuring the process is handled as efficiently as possible. We have a strong track record of resolving investigations with the best possible outcome for our clients.",
      offerings: [
        "Comprehensive review of your self-assessment tax return before submission.",
        "Handling all communications and negotiations with HMRC on your behalf.",
        "Expert representation during detailed enquiries and compliance checks.",
        "Assistance with PAYE/P11D and VAT investigations.",
        "Providing clear, strategic advice to navigate the investigation process."
      ],
      outro: "With our expertise, you can face an HMRC investigation with confidence, knowing your case is in capable hands."
    },
    de: {
      title: "HMRC-Untersuchungen",
      intro: "Eine Untersuchung durch das Finanzamt (HMRC) kann eine stressige und zeitaufwändige Erfahrung sein. Unser erfahrenes Team steht Ihnen mit fachkundiger Unterstützung und Vertretung zur Seite, um die Last zu lindern und sicherzustellen, dass der Prozess so effizient wie möglich abgewickelt wird. Wir haben eine starke Erfolgsbilanz bei der Lösung von Untersuchungen mit dem bestmöglichen Ergebnis für unsere Kunden.",
      offerings: [
        "Umfassende Überprüfung Ihrer Steuererklärung vor der Einreichung.",
        "Abwicklung der gesamten Kommunikation und Verhandlungen mit dem Finanzamt in Ihrem Namen.",
        "Fachkundige Vertretung bei detaillierten Anfragen und Compliance-Prüfungen.",
        "Unterstützung bei PAYE/P11D- und Umsatzsteuerprüfungen.",
        "Bereitstellung klarer, strategischer Ratschläge zur Navigation durch den Untersuchungsprozess."
      ],
      outro: "Mit unserer Expertise können Sie einer HMRC-Untersuchung mit Zuversicht entgegensehen, da Sie wissen, dass Ihr Fall in kompetenten Händen ist."
    },
    tr: {
      title: "HMRC Soruşturmaları",
      intro: "Bir HMRC soruşturması stresli ve zaman alıcı bir deneyim olabilir. Deneyimli ekibimiz, yükü hafifletmek ve sürecin mümkün olan en verimli şekilde yürütülmesini sağlamak için uzman desteği ve temsil sunmak üzere buradadır. Müşterilerimiz için mümkün olan en iyi sonuçla soruşturmaları çözme konusunda güçlü bir geçmişe sahibiz.",
      offerings: [
        "Göndermeden önce öz değerlendirme vergi beyannamenizin kapsamlı bir şekilde gözden geçirilmesi.",
        "Sizin adınıza HMRC ile tüm iletişim ve müzakerelerin yürütülmesi.",
        "Ayrıntılı soruşturmalar ve uyumluluk kontrolleri sırasında uzman temsil.",
        "PAYE/P11D ve KDV soruşturmalarında yardım.",
        "Soruşturma sürecinde yolunuzu bulmanız için net, stratejik tavsiyeler sunmak."
      ],
      outro: "Uzmanlığımızla, davanızın yetenekli ellerde olduğunu bilerek bir HMRC soruşturmasıyla güvenle yüzleşebilirsiniz."
    }
  };

  const pageContent = content[currentLang] || content.en;

  return (
    <ServiceDetailTemplate
      pageData={{
        ...pageContent,
        imageKey: "services.hmrc",
        cta: {
          title: currentLang === 'tr' ? 'Soruşturma Desteği Alın' : (currentLang === 'de' ? 'Holen Sie sich Untersuchungsunterstützung' : 'Get Investigation Support'),
          text: currentLang === 'tr' ? 'Bir HMRC soruşturmasıyla karşı karşıyaysanız, size nasıl yardımcı olabileceğimizi öğrenmek için hemen bizimle iletişime geçin.' : (currentLang === 'de' ? 'Wenn Sie mit einer HMRC-Untersuchung konfrontiert sind, kontaktieren Sie uns umgehend, um zu erfahren, wie wir Ihnen helfen können.' : 'If you are facing an HMRC investigation, contact us immediately to find out how we can help.'),
          buttonLabel: currentLang === 'tr' ? 'Acil Yardım' : (currentLang === 'de' ? 'Dringende Hilfe' : 'Urgent Help'),
          buttonLink: `/${currentLang}/contact`
        }
      }}
    />
  );
};

export default HMRCPage;