import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { useLanguage } from '@/hooks/useLanguage';

const CompliancePage = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "Compliance Services",
      intro: "We handle all statutory duties for your business, ensuring you meet every regulatory requirement with confidence. Our proactive approach helps you avoid penalties and focus on what you do best: running your business.",
      offerings: [
        "Statutory audits",
        "Preparation of annual accounts",
        "Company secretarial services",
        "Comprehensive payroll procedures",
        "Preparation and submission of tax returns",
        "Assistance with grant claims"
      ],
      outro: "We relieve your regulatory burden so you can drive your business forward without worry."
    },
    de: {
      title: "Compliance-Dienstleistungen",
      intro: "Wir erledigen alle gesetzlichen Pflichten für Ihr Unternehmen und stellen sicher, dass Sie alle regulatorischen Anforderungen souverän erfüllen. Unser proaktiver Ansatz hilft Ihnen, Strafen zu vermeiden und sich auf das zu konzentrieren, was Sie am besten können: Ihr Geschäft zu führen.",
      offerings: [
        "Gesetzliche Prüfungen",
        "Erstellung von Jahresabschlüssen",
        "Sekretariatsdienste für Unternehmen",
        "Umfassende Gehaltsabrechnungsverfahren",
        "Erstellung und Einreichung von Steuererklärungen",
        "Unterstützung bei Förderanträgen"
      ],
      outro: "Wir entlasten Sie von regulatorischen Auflagen, damit Sie Ihr Unternehmen sorgenfrei vorantreiben können."
    },
    tr: {
      title: "Uyum Hizmetleri",
      intro: "İşletmeniz için tüm yasal görevleri yerine getiriyor, tüm düzenleyici gereklilikleri güvenle karşılamanızı sağlıyoruz. Proaktif yaklaşımımız, cezalardan kaçınmanıza ve en iyi yaptığınız şeye, yani işinizi yönetmeye odaklanmanıza yardımcı olur.",
      offerings: [
        "Yasal denetimler",
        "Yıllık hesapların hazırlanması",
        "Şirket sekreterliği hizmetleri",
        "Kapsamlı bordro prosedürleri",
        "Vergi beyannamelerinin hazırlanması ve sunulması",
        "Hibe başvurularında yardım"
      ],
      outro: "Yasal yükünüzü hafifletiyoruz, böylece işinizi endişelenmeden ileriye taşıyabilirsiniz."
    }
  };

  const pageContent = content[currentLang] || content.en;

  return (
    <ServiceDetailTemplate
      pageData={{
        title: pageContent.title,
        imageKey: "services.compliance",
        intro: pageContent.intro,
        offerings: pageContent.offerings,
        outro: pageContent.outro,
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

export default CompliancePage;