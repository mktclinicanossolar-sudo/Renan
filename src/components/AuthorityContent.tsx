import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { authorityPosts } from '../data/authorityContent';
import { lawyerData } from '../data/lawyer';
import { AuthorityPost } from '../types';
import { EditableImage } from './EditableImage';
import { ArrowUpRight, BookOpen, Clock, X, MessageSquare, Instagram } from 'lucide-react';

export const AuthorityContent: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<AuthorityPost | null>(null);

  return (
    <section id="conteudo" className="py-20 lg:py-28 bg-[#071C2A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#F47B34]" />
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#F47B34] uppercase font-sans">
                Conteúdo Jurídico
              </p>
            </div>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.05]">
              Informação jurídica para entender seus direitos.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={lawyerData.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full border border-white/20 transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#F47B34]" />
              <span>Ver mais em {lawyerData.instagram.handle}</span>
            </a>
          </div>
        </div>

        {/* 3 Curated Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {authorityPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer bg-[#0B3042]/80 hover:bg-[#0B3042] border border-white/10 hover:border-[#F47B34]/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Header preview image */}
                <div className="h-48 w-full relative overflow-hidden bg-[#071C2A]">
                  <EditableImage
                    imageKey={post.mediaKey}
                    fallbackSrc={index === 0 ? '/images/renan_working.jpg' : index === 1 ? '/images/hero.jpg' : '/images/office.jpg'}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3042] via-[#0B3042]/40 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#071C2A]/90 backdrop-blur-sm border border-white/15 text-[11px] font-bold text-[#F47B34] uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-[11px] text-white/50 mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold uppercase text-xl sm:text-2xl text-white mb-3 group-hover:text-[#F47B34] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-3 font-sans">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#F47B34]">
                <span>Ler artigo completo</span>
                <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#071C2A] text-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Fechar artigo"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F47B34]">
                  {selectedPost.category} • {selectedPost.readTime}
                </span>
                <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white mt-1">
                  {selectedPost.title}
                </h3>
              </div>

              <div className="space-y-4 text-white/85 text-sm sm:text-base leading-relaxed font-sans mb-8">
                {selectedPost.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/15">
                <p className="text-xs text-white/60 text-center sm:text-left">
                  Deseja esclarecer dúvidas sobre este tema?
                </p>
                <a
                  href={`${lawyerData.whatsapp.url}&text=Ol%C3%A1!%20Li%20o%20artigo%20sobre%20${encodeURIComponent(selectedPost.title)}%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F47B34] hover:bg-[#E3681F] text-white font-bold px-6 py-3 rounded-full text-xs shadow-md transition-all whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>Falar com o advogado sobre o tema</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
