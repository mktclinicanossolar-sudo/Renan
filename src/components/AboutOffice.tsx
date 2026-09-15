import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EditableImage } from './EditableImage';
import { lawyerData } from '../data/lawyer';
import { UserCheck, ShieldCheck, MapPin, ArrowRight, X, Phone, MessageSquare } from 'lucide-react';

export const AboutOffice: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <section id="escritorio" className="py-20 lg:py-28 bg-[#071C2A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Office Photograph with "MAIS QUE PROCESSOS, PESSOAS." overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0B3042] aspect-[4/3] sm:aspect-[16/10]">
              <EditableImage
                imageKey="about.renan"
                fallbackSrc="/images/renan_working.jpg"
                alt="Advogado Renan F. de Carvalho em atendimento no escritório em Mogi Guaçu"
                className="w-full h-full object-cover"
                wrapperClassName="w-full h-full"
              />

              {/* Inner subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071C2A]/90 via-transparent to-transparent pointer-events-none" />

              {/* High-Impact Brand Philosophy Badge as shown in the design mockup */}
              <div className="absolute bottom-6 right-6 z-20 bg-[#071C2A]/90 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl shadow-xl">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/70 block">
                  Mais que processos,
                </span>
                <span className="font-display font-extrabold uppercase text-lg sm:text-xl text-white tracking-wide">
                  Pessoas.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Office Text & Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#F47B34]" />
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#F47B34] uppercase font-sans">
                O Escritório
              </p>
            </div>

            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.05] mb-5">
              Atendimento próximo, <br className="hidden sm:inline" />
              com análise individual.
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans mb-8">
              O escritório Renan F. de Carvalho oferece atendimento jurídico com foco na escuta, na análise técnica e na construção de estratégias adequadas para cada situação.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3.5 text-white/90">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#F47B34] flex-shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-semibold block leading-tight">Atendimento personalizado</span>
                  <span className="text-xs text-white/60 font-sans">Acompanhamento direto e escuta ativa de cada cliente.</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-white/90">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#F47B34] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-semibold block leading-tight">Compromisso com ética e transparência</span>
                  <span className="text-xs text-white/60 font-sans">Informações claras sobre viabilidade e etapas do processo.</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-white/90">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#F47B34] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-semibold block leading-tight">Mogi Guaçu e região</span>
                  <span className="text-xs text-white/60 font-sans">Espaço estruturado e acolhedor para consultoria presencial.</span>
                </div>
              </div>
            </div>

            {/* Action button */}
            <div>
              <button
                type="button"
                onClick={() => setIsGalleryOpen(true)}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full border border-white/20 transition-all hover:scale-[1.02] shadow-sm"
              >
                <span>Conhecer o escritório</span>
                <ArrowRight className="w-4 h-4 text-[#F47B34]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Office Modal Gallery */}
      <AnimatePresence>
        {isGalleryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#071C2A] text-white w-full max-w-3xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-5 right-5 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F47B34]">Ambiente Profissional</span>
                <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white">
                  Instalações e Espaço de Atendimento
                </h3>
                <p className="text-xs sm:text-sm text-white/70 mt-1">
                  {lawyerData.address.formatted}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl overflow-hidden border border-white/10 h-56">
                  <EditableImage
                    imageKey="office.main"
                    fallbackSrc="/images/office.jpg"
                    alt="Sala de atendimento do escritório Renan F. de Carvalho"
                    className="w-full h-full object-cover"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-56">
                  <EditableImage
                    imageKey="location.facade"
                    fallbackSrc="/images/facade.jpg"
                    alt="Fachada do escritório em Mogi Guaçu"
                    className="w-full h-full object-cover"
                    wrapperClassName="w-full h-full"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <p className="text-xs text-white/70">
                  Agende sua consulta presencial para uma análise tranquila e reservada.
                </p>
                <a
                  href={lawyerData.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F47B34] hover:bg-[#E3681F] text-white font-bold px-6 py-3 rounded-full text-xs shadow-md whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>Agendar atendimento</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
