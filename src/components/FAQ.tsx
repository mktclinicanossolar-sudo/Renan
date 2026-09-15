import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqItems } from '../data/faq';
import { lawyerData } from '../data/lawyer';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('areas-atendimento');

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F6F7F4] text-[#102330] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#F47B34]" />
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#0B3042] uppercase">
              Dúvidas Frequentes
            </p>
          </div>
          <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl text-[#071C2A] tracking-tight leading-[1.05]">
            Perguntas sobre o atendimento.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-black/5 overflow-hidden transition-all duration-200 shadow-xs hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#F47B34]"
                >
                  <span className="font-display font-bold uppercase text-lg sm:text-xl text-[#071C2A] tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#F47B34] text-white' : 'bg-black/5 text-[#071C2A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-[#66757F] text-sm sm:text-base leading-relaxed font-sans border-t border-black/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#66757F] mb-4">
            Tem outra dúvida específica sobre o seu caso?
          </p>
          <a
            href={lawyerData.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#071C2A] hover:text-[#F47B34] underline underline-offset-4 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#F47B34]" />
            <span>Converse diretamente com o advogado pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
