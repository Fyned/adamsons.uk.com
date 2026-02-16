import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { useLanguage } from '@/hooks/useLanguage';

const StartupPage = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "Business Start-Up",
      intro: "Starting a new business is an exciting venture, but it comes with many challenges. We provide a comprehensive checklist and expert guidance to ensure you start on the right foot and build a solid foundation for success.",
      offerings: [
        {
          heading: "1. Choose Your Business Structure",
          items: ["Decide on the most suitable structure: sole trader, partnership, limited liability partnership, or limited company."]
        },
        {
          heading: "2. Prepare Your Business Plan",
          items: ["Prepare a comprehensive business plan, cashflow projections, budgets, and trading forecasts."]
        },
        {
          heading: "3. Secure Financing",
          items: ["Assess your finance requirements and draw up proposals to secure funding from banks or other sources."]
        },
        {
          heading: "4. Establish Banking Relations",
          items: ["Open a business bank account and establish a working relationship with your bank."]
        },
        {
          heading: "5. Register with Authorities",
          items: ["Register your new business with Companies House and HM Revenue & Customs."]
        },
        {
          heading: "6. Handle Company Secretarial Duties",
          items: ["Manage all necessary company secretarial issues from the start."]
        },
        {
          heading: "7. Set Up Accounting Systems",
          items: ["Set up an internal bookkeeping and accounting system tailored to your business needs."]
        },
        {
          heading: "8. Manage VAT and Payroll",
          items: ["Register for VAT and set up a PAYE scheme for payroll if required."]
        }
      ],
      outro: "With our step-by-step guidance, you can navigate the complexities of starting a business with confidence."
    },
    de: {
      title: "Unternehmensgründung",
      intro: "Ein neues Unternehmen zu gründen ist aufregend, aber auch mit vielen Herausforderungen verbunden. Wir bieten eine umfassende Checkliste und fachkundige Anleitung, um sicherzustellen, dass Sie den richtigen Start hinlegen.",
      offerings: [
        { heading: "1. Rechtsform wählen", items: ["Entscheiden Sie sich für die passende Rechtsform: Einzelunternehmen, Personengesellschaft oder Kapitalgesellschaft."] },
        { heading: "2. Businessplan erstellen", items: ["Erstellen Sie einen umfassenden Businessplan, Cashflow-Prognosen und Budgets."] },
        { heading: "3. Finanzierung sichern", items: ["Bewerten Sie Ihren Finanzierungsbedarf und erstellen Sie Anträge für Banken."] },
        { heading: "4. Bankbeziehungen aufbauen", items: ["Eröffnen Sie ein Geschäftskonto und bauen Sie eine Beziehung zu Ihrer Bank auf."] },
        { heading: "5. Bei Behörden anmelden", items: ["Registrieren Sie Ihr neues Unternehmen beim Handelsregister und Finanzamt."] },
        { heading: "6. Gesellschaftsrechtliche Pflichten", items: ["Erledigen Sie von Anfang an alle gesellschaftsrechtlichen Angelegenheiten."] },
        { heading: "7. Buchhaltungssystem einrichten", items: ["Richten Sie ein internes Buchhaltungs- und Rechnungswesensystem ein."] },
        { heading: "8. Umsatzsteuer und Lohnbuchhaltung", items: ["Registrieren Sie sich für die Umsatzsteuer und richten Sie bei Bedarf ein PAYE-System ein."] }
      ],
      outro: "Mit unserer schrittweisen Anleitung können Sie die Komplexität einer Unternehmensgründung selbstbewusst meistern."
    },
    tr: {
      title: "İş Kurma",
      intro: "Yeni bir iş kurmak heyecan verici bir girişimdir, ancak birçok zorluğu da beraberinde getirir. Doğru bir başlangıç yapmanızı ve başarı için sağlam bir temel oluşturmanızı sağlamak amacıyla kapsamlı bir kontrol listesi ve uzman rehberliği sunuyoruz.",
      offerings: [
        { heading: "1. İş Yapınızı Seçin", items: ["En uygun yapıyı belirleyin: şahıs şirketi, ortaklık, limitet şirket vb."] },
        { heading: "2. İş Planınızı Hazırlayın", items: ["Kapsamlı bir iş planı, nakit akışı projeksiyonları, bütçeler ve ticari tahminler hazırlayın."] },
        { heading: "3. Finansman Sağlayın", items: ["Finansman gereksinimlerinizi değerlendirin ve bankalardan veya diğer kaynaklardan fon sağlamak için teklifler hazırlayın."] },
        { heading: "4. Bankacılık İlişkileri Kurun", items: ["Bir işletme banka hesabı açın ve bankanızla bir çalışma ilişkisi kurun."] },
        { heading: "5. Yetkili Mercilere Kaydolun", items: ["Yeni işletmenizi Şirketler Sicili (Companies House) ve Gelir ve Gümrük İdaresi'ne (HMRC) kaydedin."] },
        { heading: "6. Şirket Sekreterliği Görevlerini Yürütün", items: ["Gerekli tüm şirket sekreterliği konularını başlangıçtan itibaren yönetin."] },
        { heading: "7. Muhasebe Sistemlerini Kurun", items: ["İşletmenizin ihtiyaçlarına göre uyarlanmış bir iç defter tutma ve muhasebe sistemi kurun."] },
        { heading: "8. KDV ve Bordroyu Yönetin", items: ["Gerekirse KDV için kaydolun ve bordro için bir PAYE şeması oluşturun."] }
      ],
      outro: "Adım adım rehberliğimizle, bir iş kurmanın karmaşıklıklarını güvenle aşabilirsiniz."
    }
  };

  const pageContent = content[currentLang] || content.en;

  return (
    <ServiceDetailTemplate
      pageData={{
        ...pageContent,
        imageKey: "services.startup",
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

export default StartupPage;