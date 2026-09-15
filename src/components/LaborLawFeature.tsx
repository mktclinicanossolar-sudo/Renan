import React from 'react';
import { motion } from 'motion/react';
import { lawyerData } from '../data/lawyer';
import { Briefcase, ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';

export const LaborLawFeature: React.FC = () => {
  const laborTopics = [
    'Relações de trabalho',
    'Verbas trabalhistas e rescisão',
    'Jornada de trabalho e horas extras',
    'Orientação preventiva e resolução de dúvidas'
  ];

  return (
    <section className="py-16 bg-[#071C2A] text-white border-y border-white/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0754A5]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F47B34]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#0B3042] to-[#071C2A] rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/15 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left Column: Heading & Concise Copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F47B34]/15 border border-[#F47B34]/30 text-[#F47B34] text-xs font-bold uppercase tracking-wider mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Atuação em Destaque</span>
            </div>

            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-white mb-4">
              Questões trabalhistas exigem contexto, não respostas prontas.
            </h2>

            {/* Strict copy limit (~30 words) */}
            <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed mb-6">
              Cada situação laboral tem particularidades documentais e fáticas únicas. A análise técnica prévia
              esclarece direitos, deveres e as melhores medidas para cada caso em Mogi Guaçu.
            </p>

            {/* Bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {laborTopics.map((topic, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle className="w-4 h-4 text-[#F47B34] flex-shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Impact Action Card */}
          <div className="w-full lg:w-auto flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={`${lawyerData.whatsapp.url}&text=Ol%C3%A1!%20Gostaria%20de%20orienta%C3%A7%C3%A3o%20sobre%20Direito%20Trabalhista.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F47B34] hover:bg-[#E3681F] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#F47B34]/30 hover:scale-[1.02] transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Analisar meu caso trabalhista</span>
            </a>

            <div className="text-center lg:text-left">
              <span className="text-[11px] text-white/60 font-sans block">
                Atendimento presencial em Mogi Guaçu ou por videoconferência.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
