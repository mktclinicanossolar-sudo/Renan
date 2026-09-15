import React from 'react';
import { motion } from 'motion/react';
import { lawyerData } from '../data/lawyer';
import { ArrowRight, MessageSquare, Headphones, FileSearch, Compass } from 'lucide-react';

export const ServiceProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Entendimento',
      icon: <Headphones className="w-5 h-5 text-[#F47B34]" />,
      description: 'O primeiro contato ajuda a compreender a situação e a necessidade apresentada de forma reservada e atenta.'
    },
    {
      number: '02',
      title: 'Análise',
      icon: <FileSearch className="w-5 h-5 text-[#F47B34]" />,
      description: 'Documentos, registros e informações fáticas são avaliados com rigor técnico de acordo com cada caso.'
    },
    {
      number: '03',
      title: 'Orientação',
      icon: <Compass className="w-5 h-5 text-[#F47B34]" />,
      description: 'Os próximos caminhos jurídicos possíveis são apresentados de forma transparente, objetiva e sem promessas ilusórias.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F6F7F4] text-[#102330] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#F47B34]" />
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#0B3042] uppercase">
              Como Funciona
            </p>
          </div>
          <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl text-[#071C2A] tracking-tight leading-[1.05]">
            Um atendimento direto desde o primeiro contato.
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-black/5 shadow-md flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display font-black text-4xl sm:text-5xl text-[#0B3042]/20 group-hover:text-[#F47B34]/40 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#071C2A]/5 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl text-[#071C2A] mb-3">
                  {step.title}
                </h3>

                <p className="text-[#66757F] text-sm sm:text-base leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 flex items-center text-xs font-semibold text-[#0B3042]">
                <span>Etapa {index + 1} de 3</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance disclaimer complying with OAB ethical standards */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#66757F] font-sans max-w-xl mx-auto">
            A consulta jurídica consiste na análise técnica e diagnóstica da situação apresentada, sem garantia de resultados judiciais futuros.
          </p>
        </div>
      </div>
    </section>
  );
};
