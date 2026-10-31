import React from 'react';

interface LengehLogoProps {
  className?: string;
}

export const LengehLogo: React.FC<LengehLogoProps> = ({ className = '' }) => {
  return (
    <div
      className={`inline-flex items-center justify-center select-none overflow-hidden ${className}`}
      style={{
        height: '22px',
        maxHeight: '22px',
      }}
    >
      <img
        src="/Subtract (1).png?v=original"
        alt="LENGEH"
        height={22}
        onError={(e) => {
          // Fallback to /Subtract.png or SVG if needed
          const target = e.currentTarget as HTMLImageElement;
          if (!target.src.includes('Subtract.png')) {
            target.src = '/Subtract.png?v=original';
          }
        }}
        className="h-[22px] w-auto object-contain block"
        style={{
          height: '22px',
        }}
      />
    </div>
  );
};

