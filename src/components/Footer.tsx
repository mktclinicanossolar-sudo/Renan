import React from 'react';
import { Logo } from './Logo';
import { lawyerData } from '../data/lawyer';
import { Instagram, MapPin, Phone, MessageSquare, Shield, Lock } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenAdmin }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05131D] text-white/70 py-16 border-t border-white/10 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Col 1: Logo and Brand */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-white/60 text-xs leading-relaxed max-w-sm">
              Assessoria e consultoria jurídica em Mogi Guaçu e região, atuando com análise técnica e compromisso ético nas áreas Trabalhista, Civil e Previdenciária.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={lawyerData.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#F47B34] text-white/80 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram de Renan F. de Carvalho"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={lawyerData.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#F47B34] text-white/80 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp do escritório"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation shortcuts */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold uppercase text-white tracking-wider text-sm">
              Navegação
            </h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href="#areas" className="hover:text-white transition-colors">Áreas de atuação</a>
              </li>
              <li>
                <a href="#escritorio" className="hover:text-white transition-colors">O Escritório</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações de Clientes</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização em Mogi Guaçu</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold uppercase text-white tracking-wider text-sm">
              Atendimento & Endereço
            </h4>
            <p className="text-white/60 flex items-start gap-2 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#F47B34] flex-shrink-0 mt-0.5" />
              <span>{lawyerData.address.formatted}</span>
            </p>
            <p className="text-white/60 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F47B34] flex-shrink-0" />
              <a href={lawyerData.phone.tel} className="hover:text-white transition-colors">
                {lawyerData.phone.display}
              </a>
            </p>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 text-[10px] text-white/50 border border-white/5">
                {lawyerData.oab.displayNotice}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-[11px]">
          <p>
            © {currentYear} {lawyerData.publicDisplayName} - Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline"
            >
              Política de Privacidade
            </button>

            {/* Admin Access Trigger */}
            <button
              type="button"
              onClick={onOpenAdmin}
              className="text-white/30 hover:text-white/80 transition-colors flex items-center gap-1"
              title="Painel Administrativo de Imagens"
            >
              <Lock className="w-3 h-3" />
              <span>Gestão de Mídia</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
