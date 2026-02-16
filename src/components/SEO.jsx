import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  lang = 'en',
  ogImage
}) => {
  const siteConfig = {
    name: "Adamsons Accountants",
    baseUrl: "https://www.adamsons.uk.com"
  };

  const location = useLocation();
  const canonicalUrl = `${siteConfig.baseUrl}${location.pathname}`;

  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  const getAlternateUrl = (targetLang) => {
    const path = location.pathname;
    const langRegex = /^\/(en|de|tr)/;
    if (langRegex.test(path)) {
      return `${siteConfig.baseUrl}${path.replace(langRegex, `/${targetLang}`)}`;
    }
    return `${siteConfig.baseUrl}/${targetLang}${path}`;
  };

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={getAlternateUrl('en')} />
      <link rel="alternate" hrefLang="de" href={getAlternateUrl('de')} />
      <link rel="alternate" hrefLang="tr" href={getAlternateUrl('tr')} />
      <link rel="alternate" hrefLang="x-default" href={getAlternateUrl('en')} />
      
      <link 
        rel="icon" 
        type="image/svg+xml" 
        href="/assets/images/logos/favicon.svg" 
      />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default SEO;