import React from 'react';
import { PILARES_ACOMPANAMIENTO, INFO_INSTITUCIONAL } from '../data/mockData';
import { Heart, Sun, Ear, Users, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { NavigationTab } from '../types';

interface FormaAcompanarViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenAyuda: () => void;
}

export const FormaAcompanarView: React.FC<FormaAcompanarViewProps> = ({ onNavigate, onOpenAyuda }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-16">
      
      {/* 1. Banner Principal: NUESTRA FORMA DE ACOMPAÑAR (Estilo Afiche Callejero) */}
      <div className="text-center space-y-3">
        
        {/* Rayos rojos y cartel de pintura roja */}
        <div className="relative inline-block max-w-2xl mx-auto px-4">
          {/* Destellos rojos superiores */}
          <div className="flex justify-center gap-2 mb-1">
            <span className="text-[#e02128] font-black text-xl">\\</span>
            <span className="text-[#e02128] font-black text-xl">|</span>
            <span className="text-[#e02128] font-black text-xl">//</span>
          </div>

          <div className="bg-[#e02128] text-white py-4 px-6 sm:px-12 rounded-sm border-3 border-black shadow-hard-lg transform -rotate-1">
            <span className="block font-['Space_Grotesk'] text-xs uppercase tracking-widest font-black text-black bg-[#fef08a] px-3 py-0.5 rounded-xs mb-1 inline-block">
              Dispositivo Comunitario
            </span>
            <h1 className="font-['Bricolage_Grotesque'] text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-balance">
              Nuestra Forma de Acompañar
            </h1>
          </div>
        </div>

        <p className="text-sm sm:text-base text-neutral-700 max-w-xl mx-auto font-medium pt-2">
          En Casas Esquina Libertad construimos un modelo de cuidado centrado en la persona, sus derechos y su dignidad, sin exigencias imposibles ni estigmas.
        </p>
      </div>

      {/* 2. Los Tres Pilares en Franjas de Pintura de Color (Exactos a la Imagen) */}
      <div className="space-y-6">
        
        {/* Pilar 1: Franja Amarilla - La Primera Escucha */}
        <div className="border-3 border-black bg-[#fef08a] p-6 sm:p-8 rounded-sm shadow-hard transition-transform hover:-translate-y-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            
            {/* Icono de dos personas tomándose las manos con corazón */}
            <div className="w-20 h-20 rounded-full bg-white border-3 border-black flex flex-col items-center justify-center shrink-0 shadow-hard-sm">
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[#e02128] text-xs">♥</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-black" />
                <div className="w-3 h-0.5 bg-black" />
                <div className="w-4 h-4 rounded-full bg-black" />
              </div>
              <span className="font-['Space_Grotesk'] text-[8px] font-black uppercase text-black mt-1">
                Vínculo
              </span>
            </div>

            <div className="space-y-2 flex-1">
              <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl font-black text-black">
                La Primera Escucha:
              </h2>
              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-semibold">
                Un espacio central de recepción, singular e integral. Escuchamos sin juzgar, con empatía y habilitando la palabra del sujeto.
              </p>
            </div>

          </div>
        </div>

        {/* Pilar 2: Franja Celeste - Reducción de Daños */}
        <div className="border-3 border-black bg-[#bae6fd] p-6 sm:p-8 rounded-sm shadow-hard transition-transform hover:-translate-y-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            
            {/* Icono de dos manos sosteniendo un corazón con destellos */}
            <div className="w-20 h-20 rounded-full bg-white border-3 border-black flex flex-col items-center justify-center shrink-0 shadow-hard-sm">
              <span className="text-[#e02128] text-sm animate-pulse">✦</span>
              <div className="w-6 h-6 rounded-full bg-[#e02128] flex items-center justify-center text-white text-xs font-bold">
                ♥
              </div>
              <span className="font-['Space_Grotesk'] text-[8px] font-black uppercase text-black mt-1">
                Cuidado
              </span>
            </div>

            <div className="space-y-2 flex-1">
              <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl font-black text-black">
                Reducción de Daños:
              </h2>
              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-semibold">
                Una estrategia humanizadora que busca disminuir riesgos sin exigir la abstinencia como condición previa. Respetamos los saberes, tiempos y decisiones de cada persona.
              </p>
            </div>

          </div>
        </div>

        {/* Pilar 3: Franja Rosa / Melón - Recomponer Proyectos de Vida */}
        <div className="border-3 border-black bg-[#fecdd3] p-6 sm:p-8 rounded-sm shadow-hard transition-transform hover:-translate-y-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            
            {/* Icono de sol naciente con personas hacia el horizonte */}
            <div className="w-20 h-20 rounded-full bg-white border-3 border-black flex flex-col items-center justify-center shrink-0 shadow-hard-sm">
              <div className="w-5 h-2.5 rounded-t-full bg-[#f59e0b] border border-black mb-0.5" />
              <div className="flex items-center gap-0.5">
                <span className="w-2 h-2 rounded-full bg-black" />
                <span className="w-2 h-2 rounded-full bg-black" />
                <span className="w-2 h-2 rounded-full bg-black" />
              </div>
              <span className="font-['Space_Grotesk'] text-[8px] font-black uppercase text-black mt-1">
                Futuro
              </span>
            </div>

            <div className="space-y-2 flex-1">
              <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl font-black text-black">
                Recomponer Proyectos de Vida:
              </h2>
              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-semibold">
                Generamos vínculos, entusiasmo y herramientas para que las personas puedan reinscribirse en el mundo con dignidad y derechos.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* 3. Franja Azul / Negra de Cierre: Lema Comunitario */}
      <div className="border-3 border-black bg-[#0f172a] text-white p-6 sm:p-8 rounded-sm shadow-hard relative overflow-hidden text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[#e02128] font-black text-lg">★</span>
              <p className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl font-black tracking-tight text-white">
                &gt; {INFO_INSTITUCIONAL.lemaComunitario}.
              </p>
            </div>
            <p className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-[#fef08a] pl-6">
              {INFO_INSTITUCIONAL.lemaAbordaje}.
            </p>
          </div>

          <div className="text-3xl text-[#e02128]">
            ♡
          </div>
        </div>
      </div>

      {/* 4. Navegación hacia las otras secciones */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-black">
        <button
          onClick={() => onNavigate('inicio')}
          className="btn-tactile px-5 py-2.5 bg-white text-black border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase cursor-pointer"
        >
          ← Volver al Inicio
        </button>

        <button
          onClick={() => onNavigate('mapa-redes')}
          className="btn-tactile px-6 py-2.5 bg-[#e02128] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer flex items-center gap-2"
        >
          <span>Ver Mapa de Redes</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
