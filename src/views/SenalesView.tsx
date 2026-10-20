import React, { useState } from 'react';
import { SENALES_ALERTA, INFO_INSTITUCIONAL } from '../data/mockData';
import { Heart, ArrowRight, HeartHandshake, PhoneCall } from 'lucide-react';
import { NavigationTab } from '../types';

interface SenalesViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenAyuda: () => void;
}

export const SenalesView: React.FC<SenalesViewProps> = ({ onNavigate, onOpenAyuda }) => {
  const [checkedSignals, setCheckedSignals] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (id: string) => {
    setCheckedSignals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-16">
      
      {/* 1. Encabezado con Cinta Amarilla y Estrella Roja (Exacto a la Imagen) */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#fef08a] border-3 border-black px-6 py-2.5 rounded-sm shadow-hard-sm transform -rotate-1">
          <h1 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl font-black text-black uppercase">
            Señales de alerta a tener en cuenta:
          </h1>
          <span className="text-[#e02128] font-black text-2xl">★</span>
        </div>
        <p className="text-sm text-neutral-600 max-w-xl mx-auto font-medium">
          Identificar estos cambios a tiempo nos permite intervenir desde el cuidado y el afecto antes de que la situación se agrave.
        </p>
      </div>

      {/* 2. Las 4 Señales con Viñetas de Corazones Rojos del Afiche */}
      <div className="space-y-4">
        {SENALES_ALERTA.map((item) => {
          const isChecked = !!checkedSignals[item.id];

          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`border-3 border-black p-5 sm:p-6 rounded-sm shadow-hard transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isChecked ? 'bg-[#fff0f0] border-[#e02128]' : 'bg-white hover:bg-[#fdfbf7]'
              }`}
            >
              <div className="flex items-start sm:items-center gap-4">
                {/* Viñeta de Corazón Rojo Pintado idéntico al afiche */}
                <div className="w-12 h-12 rounded-full bg-[#fee2e2] border-2 border-black flex items-center justify-center shrink-0 shadow-hard-sm">
                  <Heart className="w-6 h-6 text-[#e02128] fill-[#e02128]" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-['Bricolage_Grotesque'] text-lg sm:text-xl font-black text-black leading-snug">
                    {item.text}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    {item.detail}
                  </p>
                </div>
              </div>

              {/* Botón de observación */}
              <div className="self-end sm:self-auto shrink-0">
                <span
                  className={`px-3 py-1 text-xs font-['Space_Grotesk'] font-bold uppercase rounded-xs border border-black ${
                    isChecked
                      ? 'bg-[#e02128] text-white'
                      : 'bg-[#f9f6f0] text-neutral-700'
                  }`}
                >
                  {isChecked ? 'Señal observada' : 'Tocar para marcar'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Nota Adhesiva con Cinta Washi Tape */}
      <div className="max-w-2xl mx-auto pt-2">
        <div className="relative bg-[#fef08a] border-3 border-black p-6 rounded-xs shadow-hard transform rotate-1">
          <div className="absolute -top-3.5 left-8 w-24 h-6 bg-[#f472b6] opacity-90 border border-black/40 rotate-[-3deg]" />
          <div className="flex items-center justify-between gap-3">
            <p className="font-['Bricolage_Grotesque'] text-lg sm:text-xl font-black text-black">
              &gt; "{INFO_INSTITUCIONAL.notaPrevenir}"
            </p>
            <span className="text-3xl text-[#e02128]">♡</span>
          </div>
        </div>
      </div>

      {/* 4. Qué hacer si reconocés estas señales */}
      <div className="border-3 border-black bg-[#fdfbf7] p-6 sm:p-8 rounded-sm shadow-hard space-y-4">
        <div className="flex items-center gap-2">
          <HeartHandshake className="w-5 h-5 text-[#e02128]" />
          <h2 className="font-['Bricolage_Grotesque'] text-2xl font-black text-black">
            ¿Reconocés alguna de estas señales en vos o en alguien cercano?
          </h2>
        </div>

        <p className="text-sm text-neutral-700 leading-relaxed">
          No te asustes ni te encierres en el reproche. Como dice nuestro lema: <strong>"Nadie se salva solo/a"</strong>.
          Pedir ayuda no es una debilidad, sino el primer paso para acompañar con amor y respeto.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <button
            onClick={onOpenAyuda}
            className="btn-tactile px-5 py-2.5 bg-[#e02128] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Llamar al 0800 888 4767 (24 hs)</span>
          </button>

          <button
            onClick={() => onNavigate('mapa-redes')}
            className="btn-tactile px-5 py-2.5 bg-white text-black border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer"
          >
            Ver Mapa de Redes Barriales →
          </button>
        </div>
      </div>

      {/* Navegación entre vistas */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-black">
        <button
          onClick={() => onNavigate('que-son')}
          className="btn-tactile px-5 py-2.5 bg-white text-black border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase cursor-pointer"
        >
          ← ¿Qué son los Consumos?
        </button>

        <button
          onClick={() => onNavigate('forma-acompanar')}
          className="btn-tactile px-6 py-2.5 bg-[#e02128] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer flex items-center gap-2"
        >
          <span>Nuestra Forma de Acompañar</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
