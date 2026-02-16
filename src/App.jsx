import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ContactPage from '@/pages/ContactPage';

import CompliancePage from '@/pages/services/CompliancePage';
import SupportPage from '@/pages/services/SupportPage';
import ConsultancyPage from '@/pages/services/ConsultancyPage';
import StartupPage from '@/pages/services/StartupPage';
import TaxationPage from '@/pages/services/TaxationPage';
import CorporationTaxPage from '@/pages/services/CorporationTaxPage';
import PersonalTaxPage from '@/pages/services/PersonalTaxPage';
import VATPage from '@/pages/services/VATPage';
import NIPAYEPage from '@/pages/services/NIPAYEPage';
import HMRCPage from '@/pages/services/HMRCPage';
import Sitemap from '@/pages/Sitemap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        
        {['en', 'de', 'tr'].map(lang => (
          <React.Fragment key={lang}>
            <Route path={`/${lang}`} element={<HomePage />} />
            <Route path={`/${lang}/about-us`} element={<AboutPage />} />
            <Route path={`/${lang}/services`} element={<ServicesPage />} />
            <Route path={`/${lang}/contact`} element={<ContactPage />} />
            
            <Route path={`/${lang}/services/compliance-services`} element={<CompliancePage />} />
            <Route path={`/${lang}/services/support-services`} element={<SupportPage />} />
            <Route path={`/${lang}/services/consultancy-systems`} element={<ConsultancyPage />} />
            <Route path={`/${lang}/services/business-start-up`} element={<StartupPage />} />
            <Route path={`/${lang}/services/taxation`} element={<TaxationPage />} />
            <Route path={`/${lang}/services/corporation-tax-services`} element={<CorporationTaxPage />} />
            <Route path={`/${lang}/services/personal-tax`} element={<PersonalTaxPage />} />
            <Route path={`/${lang}/services/vat`} element={<VATPage />} />
            <Route path={`/${lang}/services/ni-and-paye`} element={<NIPAYEPage />} />
            <Route path={`/${lang}/services/hmrc-investigations`} element={<HMRCPage />} />
          </React.Fragment>
        ))}

        <Route path="/sitemap.xml" element={<Sitemap />} />
        
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;