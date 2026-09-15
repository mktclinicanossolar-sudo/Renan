import React, { useState } from 'react';
import { useMedia } from '../context/MediaContext';
import { MediaItemConfig } from '../types';
import { X, Upload, RotateCcw, Check, Lock, Image as ImageIcon, Sparkles, Sliders } from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const {
    media,
    updateMedia,
    resetMedia,
    resetAllMedia,
    activeEditKey,
    setActiveEditKey
  } = useMedia();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [selectedKey, setSelectedKey] = useState<string>(activeEditKey || 'hero.main');
  const [savedNotice, setSavedNotice] = useState(false);

  // Sync when activeEditKey changes from quick clicks
  React.useEffect(() => {
    if (activeEditKey) {
      setSelectedKey(activeEditKey);
    }
  }, [activeEditKey]);

  if (!isOpen) return null;

  const currentItem = media[selectedKey];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123' || password === 'renan2026' || password === 'advocacia') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Senha incorreta. Utilize a senha institucional (ex: advocacia).');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (max 8MB)
    if (file.size > 8 * 1024 * 1024) {
      alert('Arquivo muito grande. O limite máximo é de 8MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        updateMedia(selectedKey, { src: base64 });
        triggerSaved();
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerSaved = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="bg-[#071C2A] text-white w-full max-w-4xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#0B3042]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F47B34] text-white flex items-center justify-center">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display font-bold uppercase text-lg sm:text-xl tracking-tight text-white">
                Gestão de Imagens e Identidade Visual (CMS)
              </h2>
              <span className="text-[11px] text-white/60">
                Altere fotografias sem editar o código-fonte da aplicação.
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            aria-label="Fechar painel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Authentication Gate */
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto my-auto">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-[#F47B34]">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold uppercase text-2xl mb-2">
              Acesso Administrativo
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mb-6 font-sans">
              Para atualizar as imagens oficiais do escritório Renan F. de Carvalho, insira a credencial de acesso.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha de acesso (padrão: advocacia)"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#F47B34] focus:outline-none text-white text-sm"
                autoFocus
              />
              {authError && (
                <p className="text-xs text-red-400 text-left font-medium">{authError}</p>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-[#F47B34] hover:bg-[#E3681F] text-white font-bold rounded-xl text-sm transition-colors shadow-md"
              >
                Acessar Gestão de Mídia
              </button>
            </form>
          </div>
        ) : (
          /* Image Management Interface */
          <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
            {/* Left sidebar: Media keys list */}
            <div className="md:col-span-4 border-r border-white/10 p-4 overflow-y-auto max-h-[70vh] space-y-2 bg-[#05131D]/50">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 px-2 block mb-1">
                Imagens do Site
              </span>
              {(Object.values(media) as MediaItemConfig[]).map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setSelectedKey(item.key)}
                  className={`w-full text-left p-3 rounded-xl transition-all text-xs font-semibold flex items-center justify-between ${
                    selectedKey === item.key
                      ? 'bg-[#F47B34] text-white shadow-md'
                      : 'hover:bg-white/5 text-white/80'
                  }`}
                >
                  <span className="truncate">{item.label}</span>
                  <span className="text-[10px] opacity-70 ml-2 font-mono">
                    {item.key.split('.')[0]}
                  </span>
                </button>
              ))}

              <div className="pt-4 border-t border-white/10 mt-4 px-2">
                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Deseja restaurar todas as imagens originais padrão?')) {
                      resetAllMedia();
                      triggerSaved();
                    }
                  }}
                  className="w-full text-left text-[11px] text-red-400 hover:text-red-300 py-1.5 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restaurar todas para o padrão</span>
                </button>
              </div>
            </div>

            {/* Right pane: Editor for selected item */}
            <div className="md:col-span-8 p-6 overflow-y-auto max-h-[70vh] space-y-6">
              {currentItem && (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#F47B34] font-bold font-mono">
                        {currentItem.key}
                      </span>
                      <h3 className="font-display font-bold uppercase text-xl text-white">
                        {currentItem.label}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        resetMedia(currentItem.key);
                        triggerSaved();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                      title="Restaurar fotografia padrão original"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Restaurar original</span>
                    </button>
                  </div>

                  {/* Image Preview & Upload Controls */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 h-56 sm:h-64 flex items-center justify-center">
                    <img
                      src={currentItem.src}
                      alt={currentItem.alt}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: currentItem.desktopObjectPosition }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                      <label className="cursor-pointer bg-[#F47B34] hover:bg-[#E3681F] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        <span>Carregar do Computador</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Settings Form */}
                  <div className="space-y-4">
                    {/* URL Input */}
                    <div>
                      <label className="block text-xs font-bold text-white/80 uppercase mb-1.5">
                        URL da Imagem (ou envie acima)
                      </label>
                      <input
                        type="text"
                        value={currentItem.src}
                        onChange={(e) => {
                          updateMedia(currentItem.key, { src: e.target.value });
                          triggerSaved();
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#F47B34] focus:outline-none text-xs text-white"
                        placeholder="https://exemplo.com/imagem.jpg"
                      />
                    </div>

                    {/* Alt text */}
                    <div>
                      <label className="block text-xs font-bold text-white/80 uppercase mb-1.5">
                        Texto Alternativo (Acessibilidade & SEO)
                      </label>
                      <input
                        type="text"
                        value={currentItem.alt}
                        onChange={(e) => {
                          updateMedia(currentItem.key, { alt: e.target.value });
                          triggerSaved();
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#F47B34] focus:outline-none text-xs text-white"
                      />
                    </div>

                    {/* Desktop Object Position */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white/80 uppercase mb-1.5 flex items-center gap-1.5">
                          <Sliders className="w-3.5 h-3.5 text-[#F47B34]" />
                          <span>Posição Desktop</span>
                        </label>
                        <select
                          value={currentItem.desktopObjectPosition}
                          onChange={(e) => {
                            updateMedia(currentItem.key, { desktopObjectPosition: e.target.value });
                            triggerSaved();
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/15 focus:border-[#F47B34] text-xs text-white"
                        >
                          <option value="center center">Centralizado (center center)</option>
                          <option value="center top">Topo Central (center top)</option>
                          <option value="center 30%">Foco no Rosto Alto (center 30%)</option>
                          <option value="center 35%">Foco no Rosto Médio (center 35%)</option>
                          <option value="center 40%">Foco no Tronco (center 40%)</option>
                          <option value="center bottom">Base Central (center bottom)</option>
                          <option value="left center">Alinhado à Esquerda</option>
                          <option value="right center">Alinhado à Direita</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-white/80 uppercase mb-1.5 flex items-center gap-1.5">
                          <Sliders className="w-3.5 h-3.5 text-[#F47B34]" />
                          <span>Posição Mobile</span>
                        </label>
                        <select
                          value={currentItem.mobileObjectPosition}
                          onChange={(e) => {
                            updateMedia(currentItem.key, { mobileObjectPosition: e.target.value });
                            triggerSaved();
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/15 focus:border-[#F47B34] text-xs text-white"
                        >
                          <option value="center center">Centralizado (center center)</option>
                          <option value="center top">Topo Central (center top)</option>
                          <option value="center 20%">Foco Superior (center 20%)</option>
                          <option value="center 30%">Foco Médio (center 30%)</option>
                          <option value="center bottom">Base Central (center bottom)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Live Saved Notice */}
                  {savedNotice && (
                    <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                      <Check className="w-4 h-4" />
                      <span>Alterações salvas com sucesso! A imagem no site já foi atualizada.</span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#05131D] flex items-center justify-between text-xs text-white/60">
          <span>Persistência garantida via armazenamento local e cache resiliente.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};
