import React from 'react';
import { motion } from 'motion/react';
import { reviewsData } from '../data/reviews';
import { lawyerData } from '../data/lawyer';
import { Star, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-[#F6F7F4] text-[#102330] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Google 5.0 Rating Summary Card */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-black/5 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0B3042] block mb-2">
                  Avaliações no Google
                </span>
                
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display font-black text-6xl sm:text-7xl text-[#071C2A] tracking-tight">
                    {lawyerData.google.rating}
                  </span>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-amber-500 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-[#66757F]">
                      {lawyerData.google.reviewsCount} avaliações verificadas
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#66757F] leading-relaxed font-sans mb-6">
                  Reconhecimento espontâneo de clientes que confiaram na orientação jurídica do escritório.
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Renan+F+de+Carvalho+Advocacia+Mogi+Gua%C3%A7u"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#071C2A] hover:bg-[#0B3042] text-white text-xs sm:text-sm font-bold py-3.5 px-5 rounded-full transition-colors shadow-sm"
              >
                <span>Ver avaliações no Google</span>
                <ArrowRight className="w-4 h-4 text-[#F47B34]" />
              </a>
            </div>
          </div>

          {/* Right Column: Real Testimonials */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {reviewsData.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <p className="text-[#102330] text-sm leading-relaxed mb-6 font-sans italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                  <div className="w-8 h-8 rounded-full bg-[#071C2A] text-white font-bold text-xs flex items-center justify-center uppercase">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#071C2A] block leading-tight">
                      {review.author}
                    </span>
                    <span className="text-[10px] text-[#66757F] block">
                      Google Review
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
