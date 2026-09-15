import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
  showSubtitle = true
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-[#071C2A]';
  const subtitleColor = isLight ? 'text-white/70' : 'text-[#66757F]';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Brand Geometric Fan Icon in vibrant Orange */}
      <svg
        viewBox="0 0 100 100"
        className={
          size === 'sm'
            ? 'w-8 h-8 flex-shrink-0'
            : size === 'lg'
            ? 'w-12 h-12 flex-shrink-0'
            : 'w-10 h-10 flex-shrink-0'
        }
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Fan blades matching the official firm visual identity */}
        <path
          d="M18 82C22 75 32 60 46 54C48 57 43 72 32 82H18Z"
          fill="#F47B34"
        />
        <path
          d="M26 82C34 68 47 47 62 41C64 45 56 65 44 82H26Z"
          fill="#F47B34"
        />
        <path
          d="M38 82C48 64 64 36 78 30C80 34 71 58 57 82H38Z"
          fill="#F47B34"
        />
        <path
          d="M52 82C64 60 80 28 92 20C94 24 85 51 70 82H52Z"
          fill="#F47B34"
        />
        <path
          d="M66 82C76 60 90 28 98 14C100 17 92 48 81 82H66Z"
          fill="#E3681F"
        />
      </svg>

      <div className="flex flex-col justify-center leading-none text-left">
        <span
          className={`font-display font-extrabold uppercase tracking-tight ${textColor} ${
            size === 'sm'
              ? 'text-sm'
              : size === 'lg'
              ? 'text-xl'
              : 'text-base sm:text-lg'
          }`}
          style={{ letterSpacing: '0.02em' }}
        >
          Renan F. de Carvalho
        </span>
        {showSubtitle && (
          <span
            className={`font-sans font-medium uppercase tracking-wider mt-1 ${subtitleColor} ${
              size === 'sm'
                ? 'text-[8.5px]'
                : size === 'lg'
                ? 'text-[11px]'
                : 'text-[9.5px] sm:text-[10px]'
            }`}
            style={{ letterSpacing: '0.12em' }}
          >
            Assessoria & Consultoria Jurídica
          </span>
        )}
      </div>
    </div>
  );
};
