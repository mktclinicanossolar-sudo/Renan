import React, { useState, useEffect } from 'react';
import { lawyerData } from '../data/lawyer';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a subtle welcoming tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2.5 bg-white text-[#071C2A] text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-black/10 flex items-center gap-2 max-w-[220px] animate-in fade-in slide-in-from-bottom-2">
          <span>Olá! Converse diretamente com o escritório.</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-black/40 hover:text-black p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Green WhatsApp Button */}
      <a
        href={lawyerData.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Iniciar conversa no WhatsApp com Renan F. de Carvalho"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
      >
        {/* Subtle pulsating animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.276-.1-.476-.15-.677.15-.2.301-.777.98-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.497-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.238-.244-.59-.493-.51-.677-.52-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.544.719.31 1.28.496 1.718.635.722.23 1.379.197 1.9.12.58-.087 1.781-.728 2.032-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.351z" />
          <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.116.552 4.173 1.603 5.996L.067 24l6.195-1.624c1.761.96 3.754 1.467 5.742 1.468h.005c6.626 0 12.004-5.378 12.004-12.004C24.013 5.378 18.636 0 12.004 0zm0 21.996h-.004c-1.792 0-3.551-.482-5.088-1.393l-.365-.216-3.778.991 1.008-3.684-.237-.377C2.56 15.743 2.01 13.908 2.01 12.004 2.01 6.49 6.49 2.01 12.004 2.01c2.67 0 5.18 1.04 7.069 2.929 1.889 1.889 2.929 4.399 2.929 7.069 0 5.514-4.48 9.988-9.998 9.988z" />
        </svg>
      </a>
    </div>
  );
};
