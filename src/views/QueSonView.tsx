import React, { useState } from 'react';
import { ELEMENTOS_TRIADA, INFO_INSTITUCIONAL } from '../data/mockData';
import { Lightbulb, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { NavigationTab } from '../types';

interface QueSonViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenAyuda: () => void;
}

export const QueSonView: React.FC<QueSonViewProps> = ({ onNavigate, onOpenAyuda }) => {
  const [selectedTriad, setSelectedTriad] = useState<string>('sustancia');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-16">
      
      {/* 1. Encabezado en Cartel Rojo Pincelado como el Afiche Oficial */}
      <div className="text-center space-y-3">
        <div className="relative inline-block max-w-2xl mx-auto px-4">
          <div className="flex justify-center gap-2 mb-1">
            <span className="text-[#e02128] font-black text-xl">\\</span>
            <span className="text-[#e02128] font-black text-xl">|</span>
            <span className="text-[#e02128] font-black text-xl">//</span>
          </div>

          <div className="bg-[#e02128] text-white py-4 px-6 sm:px-10 rounded-sm border-3 border-black shadow-hard-lg transform -rotate-1">
            <h1 className="font-['Bricolage_Grotesque'] text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
              ¿Qué son los Consumos Problemáticos?
            </h1>
          </div>
        </div>
      </div>

      {/* 2. Definición Principal del Folleto */}
      <div className="border-3 border-black bg-white p-6 sm:p-8 rounded-sm shadow-hard space-y-4">
        <p className="font-['Bricolage_Grotesque'] text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
          "{INFO_INSTITUCIONAL.definicionConsumos}"
        </p>

        <div className="pt-4 border-t-2 border-neutral-200">
          <p className="text-base text-neutral-800 font-medium">
            <strong>{INFO_INSTITUCIONAL.contextoTexto}</strong>
          </p>
        </div>
      </div>

      {/* 3. La Tríada: Sustancia - Persona - Contexto */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#e02128] border border-black rounded-xs" />
          <h2 className="font-['Bricolage_Grotesque'] text-2xl font-black text-black">
            La Tríada de Análisis Integral
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600">
          Para comprender qué está pasando y cómo acompañar, nunca miramos solo la sustancia. Seleccioná cada elemento de la tríada:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ELEMENTOS_TRIADA.map((item) => {
            const isSelected = selectedTriad === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedTriad(item.id)}
                className={`border-3 border-black p-6 rounded-sm cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#fff5f5] shadow-hard-red border-[#e02128]'
                    : 'bg-white shadow-hard hover:bg-[#fdfbf7]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-['Space_Grotesk'] text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded-xs">
                    {item.question}
                  </span>
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e02128]" />
                  )}
                </div>

                <h3 className="font-['Bricolage_Grotesque'] text-2xl font-black text-black">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-700 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Nota Adhesiva Amarilla con Cinta Rosa y Corazón (Exacta a la Foto) */}
      <div className="max-w-2xl mx-auto pt-4">
        <div className="relative bg-[#fef08a] border-3 border-black p-6 sm:p-8 rounded-xs shadow-hard transform rotate-1">
          {/* Cinta adhesiva washi tape rosa */}
          <div className="absolute -top-3.5 left-6 w-24 h-6 bg-[#f472b6] opacity-90 border border-black/40 rotate-[-4deg] shadow-xs" />

          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[#e02128] font-black text-xl mr-2">&gt;</span>
              <span className="font-['Bricolage_Grotesque'] text-xl sm:text-2xl font-black text-black leading-snug">
                "{INFO_INSTITUCIONAL.notaPrevenir}"
              </span>
            </div>

            <div className="text-3xl text-[#e02128] shrink-0">
              ♡
            </div>
          </div>
        </div>
      </div>

      {/* Botones de navegación hacia las siguientes secciones */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-black">
        <button
          onClick={() => onNavigate('inicio')}
          className="btn-tactile px-5 py-2.5 bg-white text-black border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase cursor-pointer"
        >
          ← Volver al Inicio
        </button>

        <button
          onClick={() => onNavigate('senales')}
          className="btn-tactile px-6 py-2.5 bg-[#e02128] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer flex items-center gap-2"
        >
          <span>Ver Señales de Alerta</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
