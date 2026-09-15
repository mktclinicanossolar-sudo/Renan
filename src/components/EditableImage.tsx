import React, { useState } from 'react';
import { useMedia } from '../context/MediaContext';
import { Camera, Edit3 } from 'lucide-react';

interface EditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageKey: string;
  fallbackSrc?: string;
  isHero?: boolean;
  aspectClass?: string;
  wrapperClassName?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  imageKey,
  fallbackSrc = '/images/hero.jpg',
  alt: fallbackAlt = 'Renan F. de Carvalho - Assessoria & Consultoria Jurídica',
  className = '',
  wrapperClassName = '',
  isHero = false,
  ...props
}) => {
  const { media, isAdminOpen, setActiveEditKey, setIsAdminOpen } = useMedia();
  const current = media[imageKey];
  const src = current?.src || fallbackSrc;
  const alt = current?.alt || fallbackAlt;
  const desktopPos = current?.desktopObjectPosition || 'center center';
  const mobilePos = current?.mobileObjectPosition || 'center center';

  const [hasError, setHasError] = useState(false);

  const effectiveSrc = hasError ? (current?.fallbackSrc || fallbackSrc) : src;

  return (
    <div className={`relative group/img overflow-hidden ${wrapperClassName}`}>
      <img
        src={effectiveSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-transform duration-700 ${className}`}
        style={{
          objectPosition: desktopPos
        }}
        {...props}
      />

      {/* Quick Admin Edit Trigger */}
      {isAdminOpen && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setActiveEditKey(imageKey);
            setIsAdminOpen(true);
          }}
          title={`Editar imagem (${imageKey})`}
          className="absolute top-3 right-3 z-30 bg-[#071C2A]/90 hover:bg-[#F47B34] text-white p-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20 transition-all flex items-center gap-1.5 text-xs font-semibold px-3 opacity-90 group-hover/img:opacity-100"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Alterar</span>
        </button>
      )}
    </div>
  );
};
