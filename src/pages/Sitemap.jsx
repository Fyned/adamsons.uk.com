import React from 'react';

const siteConfig = {
  baseUrl: "https://www.adamsons.uk.com",
  langs: ["en", "de", "tr"],
  pages: [
    "",
    "/about-us",
    "/services",
    "/contact",
    "/services/compliance-services",
    "/services/support-services",
    "/services/consultancy-systems",
    "/services/business-start-up",
    "/services/taxation",
    "/services/corporation-tax-services",
    "/services/personal-tax",
    "/services/vat",
    "/services/ni-and-paye",
    "/services/hmrc-investigations"
  ]
};

const Sitemap = () => {
  const urls = [];

  siteConfig.pages.forEach(page => {
    const urlBlock = siteConfig.langs.map(lang => 
      `<xhtml:link rel="alternate" hreflang="${lang}" href="${siteConfig.baseUrl}/${lang}${page}"/>`
    ).join('');

    // Add x-default for 'en'
    const xDefaultLink = `<xhtml:link rel="alternate" hreflang="x-default" href="${siteConfig.baseUrl}/en${page}"/>`;

    urls.push(
      `<url>
        <loc>${siteConfig.baseUrl}/en${page}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
        ${urlBlock}
        ${xDefaultLink}
      </url>`
    );
  });

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls.join('')}
</urlset>`;
  
  // This component will be rendered server-side or during build,
  // so we return a response with the correct content type.
  // In a typical React CSR app, you'd generate this file at build time.
  // For this environment, we simulate it via a route.
  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

export default Sitemap;