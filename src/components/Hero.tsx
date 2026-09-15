import React from 'react';
import { motion } from 'motion/react';
import { EditableImage } from './EditableImage';
import { lawyerData } from '../data/lawyer';
import { MessageSquare, ArrowDown, ShieldCheck, FileCheck, MapPin, ChevronRight } from 'lucide-react';

interface HeroProps {
  onScrollToAreas?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToAreas }) => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#071C2A]"
      aria-label="Apresentação do Escritório Renan F. de Carvalho"
    >
      {/* 1. Full-Bleed 16:9 Cinematic Photographic Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <EditableImage
          imageKey="hero.main"
          fallbackSrc="/images/hero.jpg"
          alt="Advogado Renan F. de Carvalho em seu escritório de advocacia em Mogi Guaçu"
          className="w-full h-full object-cover scale-100"
          wrapperClassName="w-full h-full"
        />

        {/* 2. Deep Navy Localized Gradient Overlays for Flawless Text Contrast */}
        {/* Horizontal gradient: opaque on left for typography, transparent over Renan's portrait on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C2A] via-[#071C2A]/90 md:via-[#071C2A]/75 to-[#071C2A]/40 z-10" />

        {/* Vertical subtle gradient for top header contrast and bottom section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071C2A] via-transparent to-[#071C2A]/60 z-10" />

        {/* Architectural Brand Text Subtle Accent (similar to the office wall in the client's mockup) */}
        <div className="hidden 2xl:flex absolute top-36 right-20 z-10 flex-col items-end text-right opacity-25 select-none pointer-events-none font-display font-bold tracking-widest text-white text-sm uppercase space-y-1">
          <span>Planejamento</span>
          <span>Estratégia</span>
          <span>Resultado</span>
          <span>Respeito</span>
        </div>
      </div>

      {/* 3. Hero Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col justify-between min-h-[85vh] md:min-h-screen">
        <div className="max-w-2xl lg:max-w-3xl my-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#F47B34]" />
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-white/90 uppercase font-sans">
              Advocacia em Mogi Guaçu
            </p>
          </motion.div>

          {/* H1 Main Headline - High-contrast, Bold Condensed Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold uppercase text-4xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.92] tracking-tight text-white mb-5 sm:mb-6"
          >
            Seus Direitos <br />
            No Trabalho <br />
            <span className="text-[#F47B34] inline-block drop-shadow-sm">Importam.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-white/85 max-w-xl font-normal leading-relaxed mb-8 sm:mb-10 font-sans"
          >
            Atuação jurídica em Direito Trabalhista, Civil e Previdenciário, com análise individual e orientação objetiva.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10 sm:mb-14"
          >
            {/* Dominant Primary CTA */}
            <a
              href={lawyerData.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F47B34] hover:bg-[#E3681F] text-white font-bold text-base sm:text-lg px-7 py-4 rounded-full shadow-lg shadow-[#F47B34]/30 hover:shadow-[#F47B34]/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Falar com o advogado</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#areas"
              onClick={(e) => handleScrollClick(e, '#areas')}
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 backdrop-blur-sm text-center"
            >
              <span>Conhecer áreas de atuação</span>
              <ChevronRight className="w-4 h-4 text-white/70" />
            </a>
          </motion.div>

          {/* 3 Core Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/15 max-w-2xl"
          >
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F47B34]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium leading-snug">
                Atendimento personalizado
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/90">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F47B34]">
                <FileCheck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium leading-snug">
                Estratégia jurídica com base técnica
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/90">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F47B34]">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium leading-snug">
                Mogi Guaçu e região
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center sm:justify-start pt-6">
          <a
            href="#areas"
            onClick={(e) => handleScrollClick(e, '#areas')}
            className="group inline-flex flex-col items-center text-white/60 hover:text-white transition-colors text-[11px] font-semibold uppercase tracking-widest"
          >
            <span className="mb-1">Scroll</span>
            <ArrowDown className="w-4 h-4 text-[#F47B34] animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
