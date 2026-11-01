import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
  showTagline = false
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Road + Location Pin Icon */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-xl shadow-sm transition-transform hover:scale-105`}
        style={{
          background: isLight ? '#ffffff' : '#142D4E'
        }}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full p-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Location Pin outline */}
          <path
            d="M20 4C13.37 4 8 9.37 8 16C8 24.5 20 36 20 36C20 36 32 24.5 32 16C32 9.37 26.63 4 20 4Z"
            fill={isLight ? '#142D4E' : '#1E3A8A'}
            opacity="0.15"
          />
          <path
            d="M20 5C13.92 5 9 9.92 9 16C9 23.8 19.1 34.3 19.54 34.76C19.8 35.03 20.2 35.03 20.46 34.76C20.9 34.3 31 23.8 31 16C31 9.92 26.08 5 20 5Z"
            stroke={isLight ? '#142D4E' : '#ffffff'}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Road Perspective path cutting through the pin */}
          <path
            d="M16 26L18.5 12H21.5L24 26"
            stroke="#16A36A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center Road Dash Markings */}
          <line
            x1="20"
            y1="14"
            x2="20"
            y2="17"
            stroke={isLight ? '#142D4E' : '#ffffff'}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="20"
            x2="20"
            y2="24"
            stroke={isLight ? '#142D4E' : '#ffffff'}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-extrabold tracking-tight ${textSizes[size]}`}
            style={{ color: isLight ? '#ffffff' : '#142D4E' }}
          >
            Raasta<span className="text-[#16A36A]">AI</span>
          </span>
          <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-[#16A36A]/15 text-[#16A36A] border border-[#16A36A]/30">
            Civic
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-xs font-medium tracking-wide ${
              isLight ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Smart Road Issue Platform
          </span>
        )}
      </div>
    </div>
  );
};
