import React from 'react';
import { lawyerData } from '../data/lawyer';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#071C2A] text-white w-full max-w-2xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 relative max-h-[88vh] overflow-y-auto font-sans">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Fechar política de privacidade"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F47B34]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold uppercase text-2xl text-white">
              Política de Privacidade
            </h3>
            <span className="text-xs text-white/60">
              Conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)
            </span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed">
          <p>
            O escritório <strong>{lawyerData.brandName}</strong> preza pela confidencialidade, integridade e sigilo profissional no tratamento de quaisquer informações disponibilizadas por usuários e clientes.
          </p>

          <h4 className="font-bold text-white uppercase text-xs tracking-wider pt-2">
            1. Coleta e Finalidade dos Dados
          </h4>
          <p>
            Os dados fornecidos espontaneamente por meio de canais de contato (como WhatsApp ou telefone), incluindo nome, telefone e relatos preliminares, são utilizados única e exclusivamente para viabilizar o atendimento jurídico solicitado e a análise de viabilidade do caso.
          </p>

          <h4 className="font-bold text-white uppercase text-xs tracking-wider pt-2">
            2. Sigilo Profissional e OAB
          </h4>
          <p>
            Todas as comunicações e documentos compartilhados com o escritório são protegidos pelo sigilo profissional inerente à advocacia, nos termos do Estatuto da Advocacia e do Código de Ética e Disciplina da OAB.
          </p>

          <h4 className="font-bold text-white uppercase text-xs tracking-wider pt-2">
            3. Não Compartilhamento
          </h4>
          <p>
            Seus dados pessoais jamais serão comercializados, cedidos ou compartilhados com terceiros para fins de marketing ou publicidade.
          </p>

          <h4 className="font-bold text-white uppercase text-xs tracking-wider pt-2">
            4. Direitos do Titular
          </h4>
          <p>
            O titular dos dados pode a qualquer momento solicitar a confirmação da existência de tratamento, correção de dados incompletos ou a eliminação de dados dispensáveis, conforme assegurado pela LGPD.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#F47B34] hover:bg-[#E3681F] text-white font-bold text-xs transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
