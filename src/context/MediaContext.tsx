import React, { createContext, useContext, useState, useEffect } from 'react';
import { MediaItemConfig } from '../types';

interface MediaContextType {
  media: Record<string, MediaItemConfig>;
  updateMedia: (key: string, updates: Partial<MediaItemConfig>) => void;
  resetMedia: (key: string) => void;
  resetAllMedia: () => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  activeEditKey: string | null;
  setActiveEditKey: (key: string | null) => void;
}

const DEFAULT_MEDIA_CONFIG: Record<string, MediaItemConfig> = {
  'hero.main': {
    key: 'hero.main',
    label: 'Hero Principal (1920x1080)',
    src: '/images/hero.jpg',
    fallbackSrc: '/images/hero.jpg',
    alt: 'Dr. Renan F. de Carvalho em seu escritório de advocacia em Mogi Guaçu',
    desktopObjectPosition: 'center 35%',
    mobileObjectPosition: 'center 20%'
  },
  'about.renan': {
    key: 'about.renan',
    label: 'Renan no Escritório (Atendimento)',
    src: '/images/renan_working.jpg',
    fallbackSrc: '/images/renan_working.jpg',
    alt: 'Advogado Renan F. de Carvalho trabalhando em seu escritório',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center'
  },
  'office.main': {
    key: 'office.main',
    label: 'Sala de Consulta do Escritório',
    src: '/images/office.jpg',
    fallbackSrc: '/images/office.jpg',
    alt: 'Ambiente de atendimento e reuniões do escritório Renan F. de Carvalho',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center'
  },
  'office.secondary': {
    key: 'office.secondary',
    label: 'Interior Complementar',
    src: '/images/renan_working.jpg',
    fallbackSrc: '/images/renan_working.jpg',
    alt: 'Espaço institucional do escritório em Mogi Guaçu',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center'
  },
  'location.facade': {
    key: 'location.facade',
    label: 'Fachada do Escritório (Mogi Guaçu)',
    src: '/images/facade.jpg',
    fallbackSrc: '/images/facade.jpg',
    alt: 'Fachada do escritório na Rua João Teixeira, 162, Capela, Mogi Guaçu',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center'
  },
  'authority.post01': {
    key: 'authority.post01',
    label: 'Card Educativo: Horas Extras',
    src: '/images/renan_working.jpg',
    fallbackSrc: '/images/renan_working.jpg',
    alt: 'Publicação sobre jornada de trabalho e horas extras',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center'
  },
  'authority.post02': {
    key: 'authority.post02',
    label: 'Card Educativo: Rescisão',
    src: '/images/hero.jpg',
    fallbackSrc: '/images/hero.jpg',
    alt: 'Publicação sobre cálculo de verbas rescisórias',
    desktopObjectPosition: 'center 40%',
    mobileObjectPosition: 'center 30%'
  },
  'authority.post03': {
    key: 'authority.post03',
    label: 'Card Educativo: Previdenciário',
    src: '/images/office.jpg',
    fallbackSrc: '/images/office.jpg',
    alt: 'Publicação sobre planejamento e aposentadoria',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center'
  }
};

const STORAGE_KEY = 'renan_law_firm_media_cms_v1';

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [media, setMedia] = useState<Record<string, MediaItemConfig>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_MEDIA_CONFIG, ...parsed };
      }
    } catch {
      // ignore
    }
    return DEFAULT_MEDIA_CONFIG;
  });

  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(() => {
    return window.location.pathname === '/admin' || window.location.search.includes('admin=true');
  });
  const [activeEditKey, setActiveEditKey] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(media));
    } catch (e) {
      console.warn('Could not persist media in localStorage', e);
    }
  }, [media]);

  const updateMedia = (key: string, updates: Partial<MediaItemConfig>) => {
    setMedia(prev => {
      const current = prev[key] || DEFAULT_MEDIA_CONFIG[key];
      return {
        ...prev,
        [key]: {
          ...current,
          ...updates
        }
      };
    });
  };

  const resetMedia = (key: string) => {
    if (DEFAULT_MEDIA_CONFIG[key]) {
      setMedia(prev => ({
        ...prev,
        [key]: { ...DEFAULT_MEDIA_CONFIG[key] }
      }));
    }
  };

  const resetAllMedia = () => {
    setMedia(DEFAULT_MEDIA_CONFIG);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  return (
    <MediaContext.Provider
      value={{
        media,
        updateMedia,
        resetMedia,
        resetAllMedia,
        isAdminOpen,
        setIsAdminOpen,
        activeEditKey,
        setActiveEditKey
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context;
};
