import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { lawyerData } from '../data/lawyer';
import { MessageSquare, Menu, X, Phone, MapPin } from 'lucide-react';

interface FloatingHeaderProps {
  onOpenAdmin?: () => void;
}

export const FloatingHeader: React.FC<FloatingHeaderProps> = ({ onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Áreas de atuação', href: '#areas' },
    { label: 'O Escritório', href: '#escritorio' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Conteúdo', href: '#conteudo' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-5 transition-all duration-300 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto w-full rounded-2xl sm:rounded-full pointer-events-auto transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-[#071C2A]/90 backdrop-blur-md shadow-xl shadow-black/30 border border-white/10'
            : 'bg-[#071C2A]/60 backdrop-blur-sm border border-white/5 shadow-md'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#F47B34] rounded-lg transition-transform hover:scale-[1.01]"
          aria-label="Renan F. de Carvalho - Página Inicial"
        >
          <Logo variant="light" size="sm" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/90">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative py-1 text-white/80 hover:text-white transition-colors hover:after:w-full after:w-0 after:h-0.5 after:bg-[#F47B34] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Admin */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={lawyerData.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F47B34] hover:bg-[#E3681F] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg shadow-[#F47B34]/25 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F47B34] whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 fill-white text-white" />
            <span>Falar com o advogado</span>
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={lawyerData.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F47B34] hover:bg-[#E3681F] text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1.5 shadow-sm whitespace-nowrap"
            aria-label="Falar pelo WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Contato</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F47B34]"
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden pointer-events-auto mt-2 max-w-7xl mx-auto w-full bg-[#071C2A]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-semibold text-white/90 hover:text-[#F47B34] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={lawyerData.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center inline-flex items-center gap-2 bg-[#F47B34] hover:bg-[#E3681F] text-white font-bold py-3 rounded-xl transition-colors shadow-md text-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Falar com o advogado pelo WhatsApp</span>
              </a>

              <a
                href={lawyerData.phone.tel}
                className="w-full justify-center inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/90 font-medium py-2.5 rounded-xl transition-colors text-sm border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#F47B34]" />
                <span>Ligar: {lawyerData.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
