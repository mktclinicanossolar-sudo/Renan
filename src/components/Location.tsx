import React from 'react';
import { lawyerData } from '../data/lawyer';
import { EditableImage } from './EditableImage';
import { MapPin, Phone, MessageSquare, Navigation, Clock, Shield } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-[#071C2A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Location Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#F47B34]" />
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#F47B34] uppercase font-sans">
                Localização
              </p>
            </div>

            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.05] mb-6">
              Escritório em Mogi Guaçu.
            </h2>

            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#F47B34] flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    Endereço
                  </h3>
                  <p className="text-white/85 text-sm sm:text-base leading-relaxed font-sans">
                    {lawyerData.address.street} - {lawyerData.address.neighborhood} <br />
                    {lawyerData.address.city} - {lawyerData.address.state} <br />
                    CEP {lawyerData.address.zip}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#F47B34] flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    Telefone & WhatsApp
                  </h3>
                  <p className="text-white/85 text-sm sm:text-base font-sans">
                    {lawyerData.phone.display}
                  </p>
                  <span className="text-xs text-white/50 block mt-0.5">
                    {lawyerData.openingHours.display}
                  </span>
                </div>
              </div>

              {/* Note about consultations */}
              <div className="p-4 rounded-2xl bg-[#0B3042]/70 border border-white/10 text-xs text-white/70 flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#F47B34] flex-shrink-0" />
                <span>Atendimento presencial realizado mediante agendamento prévio.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5">
              <a
                href={lawyerData.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F47B34] hover:bg-[#E3681F] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-[#F47B34]/25 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Como chegar</span>
              </a>

              <a
                href={lawyerData.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-6 py-3.5 rounded-full border border-white/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#F47B34]" />
                <span>Falar pelo WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Facade Preview */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B3042] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              {/* Google Maps iFrame */}
              <div className="h-80 sm:h-96 w-full relative">
                <iframe
                  title="Localização do Escritório Renan F. de Carvalho em Mogi Guaçu"
                  src="https://maps.google.com/maps?q=Rua+Jo%C3%A3o+Teixeira,+162,+Capela,+Mogi+Gua%C3%A7u+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Bottom bar with facade preview */}
              <div className="p-4 sm:p-5 bg-[#071C2A] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-white/20">
                    <EditableImage
                      imageKey="location.facade"
                      fallbackSrc="/images/facade.jpg"
                      alt="Fachada do escritório Renan F. de Carvalho"
                      className="w-full h-full object-cover"
                      wrapperClassName="w-full h-full"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Fachada do Escritório</span>
                    <span className="text-[11px] text-white/60">Fácil acesso e estacionamento nas proximidades</span>
                  </div>
                </div>

                <a
                  href={lawyerData.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#F47B34] hover:underline flex items-center gap-1 whitespace-nowrap"
                >
                  <span>Abrir no Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
