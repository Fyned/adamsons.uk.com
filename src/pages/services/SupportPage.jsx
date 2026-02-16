import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { useLanguage } from '@/hooks/useLanguage';

const SupportPage = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "Support Services",
      intro: "Our support services are designed to provide you with the critical information and assistance you need to grow your business and increase profitability. We partner with you to manage your finances effectively.",
      offerings: [
        {
          heading: "Management Information",
          items: [
            "Prepare monthly or quarterly management accounts.",
            "Report on key performance indicators to give you a concise overview of your business.",
            "Provide actual performance figures compared to budgets and/or prior years.",
            "Help you make informed business decisions by highlighting trends and opportunities."
          ]
        },
        {
          heading: "Payroll",
          items: [
            "Set up and manage your payroll system, whether weekly or monthly.",
            "Handle custom payslips, administration of PAYE, national insurance, and statutory payments.",
            "Complete all statutory forms, including year-end returns, for submission to HMRC.",
            "Summarise and analyse staff costs for better financial management."
          ]
        },
        {
          heading: "Bookkeeping",
          items: [
            "Maintain your accounting records, freeing you to focus on your business.",
            "Prepare and file VAT returns accurately and on time.",
            "Offer expert advice on bookkeeping matters and software."
          ]
        },
        {
          heading: "Business Planning & Forecasting",
          items: [
            "Develop comprehensive business plans and financial forecasts.",
            "Create cashflow and profit projections to support financing applications.",
            "Regularly compare actual results to forecasts to keep your business on track."
          ]
        },
        {
          heading: "Liaising with Banks & Institutions",
          items: [
            "Act as a bridge between your business and financial institutions.",
            "Prepare necessary proposals and documentation to secure funding.",
            "Ensure a smooth and professional process when dealing with banks."
          ]
        }
      ],
      outro: "By handling these essential tasks, we empower you to focus on strategic growth and profitability."
    },
    de: {
      title: "Support-Dienstleistungen",
      intro: "Unsere Support-Dienstleistungen sind darauf ausgelegt, Ihnen die entscheidenden Informationen und die Unterstützung zu bieten, die Sie benötigen, um Ihr Geschäft auszubauen und die Rentabilität zu steigern.",
      offerings: [
        { heading: "Management-Informationen", items: ["Erstellung monatlicher oder vierteljährlicher Management-Konten.", "Berichterstattung über wichtige Leistungsindikatoren.", "Vergleich der tatsächlichen Leistung mit Budgets/Vorjahren.", "Unterstützung bei fundierten Geschäftsentscheidungen."] },
        { heading: "Lohnbuchhaltung", items: ["Einrichtung und Verwaltung Ihres Lohn- und Gehaltssystems.", "Bearbeitung von Lohnabrechnungen, PAYE, Sozialversicherung.", "Ausfüllen aller gesetzlichen Formulare für das Finanzamt.", "Analyse der Personalkosten."] },
        { heading: "Buchhaltung", items: ["Führung Ihrer Buchhaltungsunterlagen.", "Erstellung und Einreichung von Umsatzsteuererklärungen.", "Fachkundige Beratung zu Buchhaltungsfragen."] },
        { heading: "Geschäftsplanung & Prognosen", items: ["Entwicklung umfassender Geschäftspläne und Finanzprognosen.", "Erstellung von Cashflow- und Gewinnprognosen.", "Regelmäßiger Soll-Ist-Vergleich."] },
        { heading: "Kontakt mit Banken & Institutionen", items: ["Vermittlung zwischen Ihrem Unternehmen und Finanzinstituten.", "Vorbereitung von Finanzierungsanträgen.", "Professionelle Abwicklung mit Banken."] }
      ],
      outro: "Indem wir diese wesentlichen Aufgaben übernehmen, ermöglichen wir Ihnen, sich auf strategisches Wachstum und Rentabilität zu konzentrieren."
    },
    tr: {
      title: "Destek Hizmetleri",
      intro: "Destek hizmetlerimiz, işinizi büyütmeniz ve karlılığınızı artırmanız için ihtiyaç duyduğunuz kritik bilgileri ve yardımı sağlamak üzere tasarlanmıştır. Finansmanınızı etkin bir şekilde yönetmek için sizinle ortaklık yapıyoruz.",
      offerings: [
        { heading: "Yönetim Bilgilendirmesi", items: ["Aylık veya üç aylık yönetim hesapları hazırlamak.", "İşletmenize dair özet bir bakış sunan anahtar performans göstergelerini raporlamak.", "Gerçekleşen performansı bütçeler ve/veya önceki yıllarla karşılaştırmak.", "Eğilimleri ve fırsatları vurgulayarak bilinçli iş kararları vermenize yardımcı olmak."] },
        { heading: "Bordrolama", items: ["Haftalık veya aylık bordro sisteminizi kurmak ve yönetmek.", "Özel maaş bordroları, PAYE, ulusal sigorta ve yasal ödemelerin idaresini yürütmek.", "Yıl sonu beyannameleri dahil tüm yasal formları HMRC'ye sunulmak üzere tamamlamak.", "Daha iyi finansal yönetim için personel maliyetlerini özetlemek ve analiz etmek."] },
        { heading: "Defter Tutma", items: ["Muhasebe kayıtlarınızı tutarak sizin işinize odaklanmanızı sağlamak.", "KDV beyannamelerini doğru ve zamanında hazırlamak ve dosyalamak.", "Defter tutma konuları ve yazılımları hakkında uzman tavsiyesi sunmak."] },
        { heading: "İş Planlaması ve Tahmin", items: ["Kapsamlı iş planları ve finansal tahminler geliştirmek.", "Finansman başvurularını desteklemek için nakit akışı ve kar projeksiyonları oluşturmak.", "İşletmenizi yolda tutmak için gerçekleşen sonuçları düzenli olarak tahminlerle karşılaştırmak."] },
        { heading: "Bankalar ve Kurumlarla İlişkiler", items: ["İşletmeniz ile finans kurumları arasında bir köprü görevi görmek.", "Finansman sağlamak için gerekli teklifleri ve belgeleri hazırlamak.", "Bankalarla ilişkilerde sorunsuz ve profesyonel bir süreç sağlamak."] }
      ],
      outro: "Bu temel görevleri üstlenerek, stratejik büyümeye ve karlılığa odaklanmanızı sağlıyoruz."
    }
  };

  const pageContent = content[currentLang] || content.en;

  return (
    <ServiceDetailTemplate
      pageData={{
        ...pageContent,
        imageKey: "services.support",
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

export default SupportPage;