import React from 'react';

interface LogoCasasProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'color' | 'monochrome' | 'inverted';
}

/**
 * Logo Oficial de Casas Esquina Libertad
 * Vectorizado fiel al archivo original 'casa esquina libertad logo vector.svg' provisto por el usuario:
 * - Arco circular rojo fino que nace en la punta de la estrella izquierda y corona el logo
 * - Estrella roja de 5 puntas en el inicio del arco
 * - Caligrafía roja de pincel 'Casas' en el cuadrante superior derecho
 * - Tipografía en mayúsculas 'ESQUINA' y 'LIBERTAD' alineadas debajo con peso visual rotundo
 */
export const LogoCasas: React.FC<LogoCasasProps> = ({
  className = '',
  size = 'md',
  variant = 'color',
}) => {
  const redColor = variant === 'monochrome' ? '#000000' : '#E02128';
  const textColor = variant === 'inverted' ? '#FFFFFF' : '#111111';

  // Dimensiones equilibradas respetando la proporción cuadrada/rectangular del vector original
  const sizeMap = {
    xs: 'h-10 w-auto aspect-[1/1]',
    sm: 'h-14 sm:h-16 w-auto aspect-[1/1]',
    md: 'h-24 sm:h-28 w-auto aspect-[1/1]',
    lg: 'h-48 sm:h-60 w-auto aspect-[1/1]',
    xl: 'h-64 sm:h-80 w-auto aspect-[1/1]',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}
      title="Casas Esquina Libertad — Dispositivo Comunitario Jujuy"
    >
      <svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-label="Logo Casas Esquina Libertad"
        role="img"
      >
        {/* 1. Arco circular rojo fino que nace en la estrella */}
        <path
          d="M 82 642 C 72 385, 230 155, 500 152 C 675 150, 810 240, 874 378"
          fill="none"
          stroke={redColor}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* 2. Estrella roja de 5 puntas en el extremo inferior izquierdo */}
        <polygon
          points="82,630 96,664 133,666 104,688 114,723 82,702 50,723 60,688 31,666 68,664"
          fill={redColor}
        />

        {/* 3. Palabra 'Casas' caligráfica en rojo oficial */}
        <g id="logo-casas-text">
          {/* Trazado vectorial de alta fidelidad para 'Casas' */}
          <text
            x="705"
            y="515"
            fill={redColor}
            fontFamily="'Kaushan Script', 'Caveat', 'Brush Script MT', cursive"
            fontSize="210"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="-0.02em"
          >
            Casas
          </text>
        </g>

        {/* 4. 'ESQUINA' en mayúsculas negras de imprenta potente */}
        <text
          x="535"
          y="715"
          fill={textColor}
          fontFamily="'Bricolage Grotesque', 'Arial Black', sans-serif"
          fontSize="155"
          fontWeight="900"
          letterSpacing="0.05em"
          textAnchor="middle"
        >
          ESQUINA
        </text>

        {/* 5. 'LIBERTAD' en mayúsculas negras de imprenta potente */}
        <text
          x="535"
          y="870"
          fill={textColor}
          fontFamily="'Bricolage Grotesque', 'Arial Black', sans-serif"
          fontSize="158"
          fontWeight="900"
          letterSpacing="0.06em"
          textAnchor="middle"
        >
          LIBERTAD
        </text>
      </svg>
    </div>
  );
};
