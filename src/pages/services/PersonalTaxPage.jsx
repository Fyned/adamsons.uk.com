import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { useLanguage } from '@/hooks/useLanguage';

const PersonalTaxPage = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "Personal Tax",
      intro: "We offer a comprehensive personal tax service that is both professional and discreet. Our experts provide tailored advice to help you navigate the complexities of the tax system, ensuring you meet your obligations while maximizing your financial efficiency.",
      offerings: [
        {
          heading: "Self Assessment",
          items: [
            "Acting as your agent, dealing directly with HMRC on your behalf.",
            "Preparing and filing your tax return accurately and on time.",
            "Calculating your tax liability and advising on payment dates.",
            "Providing proactive advice on how to minimize your tax bill."
          ]
        },
        {
          heading: "Personal Tax Planning",
          items: [
            "Reviewing your individual circumstances to identify tax-saving opportunities.",
            "Advising on pensions, tax-efficient investments, and allowances.",
            "Planning for major life events such as retirement or property sales.",
            "Structuring your affairs to optimize your tax position."
          ]
        },
        {
          heading: "Estate & Inheritance Tax Planning",
          items: [
            "Helping you plan for the future to protect your family's wealth.",
            "Advising on will preparation and the use of trusts.",
            "Structuring life assurance policies to minimize inheritance tax.",
            "Making the most of all available exemptions and reliefs."
          ]
        }
      ],
      outro: "Our advisory tone and expert guidance ensure you are always in control of your personal finances."
    },
    de: {
      title: "Einkommensteuer",
      intro: "Wir bieten einen umfassenden persönlichen Steuerservice, der sowohl professionell als auch diskret ist. Unsere Experten bieten maßgeschneiderte Beratung, um Ihnen bei der Navigation durch die Komplexität des Steuersystems zu helfen.",
      offerings: [
        { heading: "Selbstveranlagung", items: ["Wir handeln als Ihr Vertreter direkt mit dem Finanzamt.", "Erstellen und reichen Ihre Steuererklärung korrekt und fristgerecht ein.", "Berechnen Ihre Steuerschuld und beraten Sie zu Zahlungsterminen.", "Geben proaktive Ratschläge zur Minimierung Ihrer Steuerlast."] },
        { heading: "Persönliche Steuerplanung", items: ["Überprüfung Ihrer individuellen Umstände zur Identifizierung von Steuersparmöglichkeiten.", "Beratung zu Renten, steuereffizienten Anlagen und Freibeträgen.", "Planung für wichtige Lebensereignisse wie Ruhestand oder Immobilienverkäufe.", "Strukturierung Ihrer Angelegenheiten zur Optimierung Ihrer Steuerposition."] },
        { heading: "Nachlass- & Erbschaftssteuerplanung", items: ["Hilfe bei der Zukunftsplanung zum Schutz des Familienvermögens.", "Beratung zur Testamentserstellung und Nutzung von Trusts.", "Strukturierung von Lebensversicherungen zur Minimierung der Erbschaftssteuer.", "Optimale Nutzung aller verfügbaren Befreiungen und Erleichterungen."] }
      ],
      outro: "Unser beratender Ton und unsere fachkundige Anleitung stellen sicher, dass Sie stets die Kontrolle über Ihre persönlichen Finanzen haben."
    },
    tr: {
      title: "Kişisel Vergi",
      intro: "Hem profesyonel hem de gizli, kapsamlı bir kişisel vergi hizmeti sunuyoruz. Uzmanlarımız, vergi sisteminin karmaşıklıklarında yolunuzu bulmanıza yardımcı olmak için size özel tavsiyeler sunarak, mali verimliliğinizi en üst düzeye çıkarırken yükümlülüklerinizi yerine getirmenizi sağlar.",
      offerings: [
        { heading: "Öz Değerlendirme (Self Assessment)", items: ["Temsilciniz olarak hareket ederek, sizin adınıza doğrudan HMRC ile ilgilenmek.", "Vergi beyannamenizi doğru ve zamanında hazırlamak ve dosyalamak.", "Vergi yükümlülüğünüzü hesaplamak ve ödeme tarihleri hakkında tavsiyede bulunmak.", "Vergi faturanızı nasıl en aza indireceğiniz konusunda proaktif tavsiyeler sunmak."] },
        { heading: "Kişisel Vergi Planlaması", items: ["Vergi tasarrufu fırsatlarını belirlemek için bireysel durumunuzu gözden geçirmek.", "Emeklilik, vergi açısından verimli yatırımlar ve muafiyetler hakkında danışmanlık yapmak.", "Emeklilik veya mülk satışı gibi önemli yaşam olayları için planlama yapmak.", "Vergi pozisyonunuzu optimize etmek için işlerinizi yapılandırmak."] },
        { heading: "Miras ve Veraset Vergisi Planlaması", items: ["Ailenizin servetini korumak için geleceği planlamanıza yardımcı olmak.", "Vasiyet hazırlığı ve tröstlerin kullanımı konusunda danışmanlık yapmak.", "Veraset vergisini en aza indirmek için hayat sigortası poliçelerini yapılandırmak.", "Mevcut tüm muafiyetlerden ve indirimlerden en iyi şekilde yararlanmak."] }
      ],
      outro: "Danışmanlık odaklı yaklaşımımız ve uzman rehberliğimiz, kişisel mali durumunuzun her zaman kontrolünüz altında olmasını sağlar."
    }
  };

  const pageContent = content[currentLang] || content.en;

  return (
    <ServiceDetailTemplate
      pageData={{
        ...pageContent,
        imageKey: "services.personalTax",
        cta: {
          title: currentLang === 'tr' ? 'Kişisel Vergi Planlaması Yapın' : (currentLang === 'de' ? 'Planen Sie Ihre persönliche Steuer' : 'Plan Your Personal Tax'),
          text: currentLang === 'tr' ? 'Mali durumunuzu optimize etmenize nasıl yardımcı olabileceğimizi öğrenmek için bir danışmanlık randevusu alın.' : (currentLang === 'de' ? 'Vereinbaren Sie eine Beratung, um zu erfahren, wie wir Ihnen helfen können, Ihre Finanzen zu optimieren.' : 'Schedule a consultation to learn how we can help you optimize your finances.'),
          buttonLabel: currentLang === 'tr' ? 'Randevu Alın' : (currentLang === 'de' ? 'Termin vereinbaren' : 'Book an Appointment'),
          buttonLink: "https://form.ataaccountancy.com"
        }
      }}
    />
  );
};

export default PersonalTaxPage;