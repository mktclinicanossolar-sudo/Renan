import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { practiceAreas } from '../data/practiceAreas';
import { lawyerData } from '../data/lawyer';
import { PracticeArea } from '../types';
import { HardHat, FileText, Users, ArrowUpRight, CheckCircle2, X, MessageSquare } from 'lucide-react';

export const PracticeAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  const getIcon = (iconName: PracticeArea['iconName']) => {
    switch (iconName) {
      case 'hardhat':
        return <HardHat className="w-8 h-8 text-[#F47B34]" />;
      case 'file-text':
        return <FileText className="w-8 h-8 text-[#F47B34]" />;
      case 'users':
        return <Users className="w-8 h-8 text-[#F47B34]" />;
      default:
        return <FileText className="w-8 h-8 text-[#F47B34]" />;
    }
  };

  return (
    <section id="areas" className="py-20 lg:py-28 bg-[#F6F7F4] text-[#102330] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#F47B34]" />
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#0B3042] uppercase">
                Áreas de Atuação
              </p>
            </div>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl text-[#071C2A] tracking-tight leading-[1.05]">
              Orientação jurídica para o seu momento.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:text-right max-w-md">
            <p className="text-sm sm:text-base text-[#66757F] leading-relaxed">
              Atuação nas áreas Trabalhista, Civil e Previdenciária, sempre com análise individual e foco na sua realidade.
            </p>
            <a
              href={lawyerData.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#071C2A] hover:text-[#F47B34] border border-[#071C2A]/20 hover:border-[#F47B34] px-4 py-2.5 rounded-full transition-all whitespace-nowrap bg-white shadow-xs"
            >
              <span>Falar com o advogado</span>
              <ArrowUpRight className="w-4 h-4 text-[#F47B34]" />
            </a>
          </div>
        </div>

        {/* 3 Main Practice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => setSelectedArea(area)}
              className="group cursor-pointer bg-[#071C2A] hover:bg-[#0B3042] text-white p-7 sm:p-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden border border-white/5"
            >
              {/* Subtle accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F47B34] transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3.5 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    {getIcon(area.iconName)}
                  </div>
                  <div className="w-9 h-9 rounded-full border border-white/20 group-hover:border-[#F47B34] group-hover:bg-[#F47B34] text-white/70 group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                  {area.title}
                </h3>

                <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {area.shortDescription}
                </p>
              </div>

              {/* Topics preview */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#F47B34]">
                <span>Ver detalhes da atuação</span>
                <span className="text-white/50 group-hover:text-white transition-colors">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Practice Area Detail Modal */}
      <AnimatePresence>
        {selectedArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#071C2A] text-white w-full max-w-xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="absolute top-5 right-5 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-white/10">
                  {getIcon(selectedArea.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F47B34]">
                    Área Especializada
                  </span>
                  <h3 className="font-display font-extrabold uppercase text-2xl sm:text-3xl">
                    {selectedArea.title}
                  </h3>
                </div>
              </div>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {selectedArea.fullExplanation}
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/90 mb-3">
                  Tópicos e Casos Frequentes:
                </h4>
                <ul className="space-y-2.5">
                  {selectedArea.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/75">
                      <CheckCircle2 className="w-4 h-4 text-[#F47B34] flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <a
                  href={`${lawyerData.whatsapp.url}&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(selectedArea.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F47B34] hover:bg-[#E3681F] text-white font-bold py-3.5 px-6 rounded-full text-sm shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Consultar sobre {selectedArea.title}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedArea(null)}
                  className="px-5 py-3 rounded-full text-xs font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
