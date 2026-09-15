import React from 'react';
import { lawyerData } from '../data/lawyer';
import { MessageSquare, Navigation, Phone, ShieldCheck } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#071C2A] text-white relative overflow-hidden border-t border-white/10">
      {/* Background architectural glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0754A5]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-[#F47B34]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#F47B34]" />
          <span>Atendimento Ético e Seguro</span>
        </div>

        {/* High-Impact Headline */}
        <h2 className="font-display font-extrabold uppercase text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.95] mb-6 max-w-3xl mx-auto">
          Converse sobre <br />
          <span className="text-[#F47B34]">o seu caso.</span>
        </h2>

        {/* Concise Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-sans leading-relaxed mb-10">
          Entre em contato com o escritório para explicar sua situação e receber orientação sobre os próximos passos.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={lawyerData.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F47B34] hover:bg-[#E3681F] text-white font-bold text-base sm:text-lg px-9 py-4 rounded-full shadow-xl shadow-[#F47B34]/30 hover:scale-[1.02] active:scale-100 transition-all duration-200"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>Falar pelo WhatsApp</span>
          </a>

          <a
            href={lawyerData.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/20 transition-colors"
          >
            <Navigation className="w-4 h-4 text-white/80" />
            <span>Como chegar ao escritório</span>
          </a>
        </div>

        {/* Quick Phone Call Fallback */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/60">
          <span>Prefere ligar?</span>
          <a
            href={lawyerData.phone.tel}
            className="text-white hover:text-[#F47B34] font-semibold underline underline-offset-4 transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#F47B34]" />
            <span>{lawyerData.phone.display}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
