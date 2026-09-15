import React, { useState, useEffect } from 'react';
import { MediaProvider } from './context/MediaContext';
import { FloatingHeader } from './components/FloatingHeader';
import { Hero } from './components/Hero';
import { PracticeAreas } from './components/PracticeAreas';
import { LaborLawFeature } from './components/LaborLawFeature';
import { AboutOffice } from './components/AboutOffice';
import { ServiceProcess } from './components/ServiceProcess';
import { AuthorityContent } from './components/AuthorityContent';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdminModal } from './components/AdminModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Check URL query parameters or pathname on mount for direct admin access
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('admin') === 'true' || window.location.pathname === '/admin') {
      setIsAdminOpen(true);
    }
  }, []);

  return (
    <MediaProvider>
      <div className="min-h-screen bg-[#071C2A] text-[#F6F7F4] font-sans antialiased overflow-x-hidden selection:bg-[#F47B34] selection:text-white relative">
        {/* Floating Sticky Navigation Bar */}
        <FloatingHeader onOpenAdmin={() => setIsAdminOpen(true)} />

        {/* 1. Hero Section */}
        <main>
          <Hero />

          {/* 2. Áreas de Atuação */}
          <PracticeAreas />

          {/* 3. Direito Trabalhista em Destaque */}
          <LaborLawFeature />

          {/* 4. O Escritório */}
          <AboutOffice />

          {/* 5. Como Funciona o Atendimento */}
          <ServiceProcess />

          {/* 6. Conteúdo Jurídico Curado */}
          <AuthorityContent />

          {/* 7. Avaliações dos Clientes (Google 5.0) */}
          <Reviews />

          {/* 8. Localização em Mogi Guaçu */}
          <Location />

          {/* 9. Perguntas Frequentes (FAQ) */}
          <FAQ />

          {/* 10. Final Call to Action */}
          <FinalCTA />
        </main>

        {/* 11. Footer Institucional */}
        <Footer
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* Floating Quick WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* CMS / Image Management Modal */}
        <AdminModal
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
        />

        {/* Privacy Policy Modal */}
        <PrivacyPolicyModal
          isOpen={isPrivacyOpen}
          onClose={() => setIsPrivacyOpen(false)}
        />
      </div>
    </MediaProvider>
  );
}
