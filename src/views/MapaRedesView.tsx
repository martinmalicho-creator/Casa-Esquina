import React, { useState } from 'react';
import { MAPA_REDES_NODOS, INFO_INSTITUCIONAL } from '../data/mockData';
import { NodoRed, NavigationTab } from '../types';
import { Heart, Users, School, Home, Cross, ArrowRight, Sparkles } from 'lucide-react';

interface MapaRedesViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenAyuda: () => void;
}

export const MapaRedesView: React.FC<MapaRedesViewProps> = ({ onNavigate, onOpenAyuda }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('casa-esquina');

  const selectedNode = MAPA_REDES_NODOS.find((n) => n.id === selectedNodeId) || MAPA_REDES_NODOS[2];

  const getIcon = (type: string) => {
    switch (type) {
      case 'familia':
        return <Heart className="w-5 h-5 text-black fill-black" />;
      case 'escuela':
        return <School className="w-5 h-5 text-black" />;
      case 'casa':
        return <span className="font-black text-white text-base">★</span>;
      case 'caps':
        return <span className="font-black text-black text-xl leading-none">+</span>;
      case 'amigos':
        return <Users className="w-5 h-5 text-black" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-16">
      
      {/* 1. Marco Estilo Pizarra / Afiche Negro Oficial */}
      <div className="border-4 border-black bg-[#121312] text-white p-6 sm:p-10 rounded-sm shadow-hard-lg relative overflow-hidden">
        
        {/* Rayos y Título de Pincel Amarillo */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-block bg-[#facc15] text-black px-6 py-2 rounded-sm border-2 border-black font-['Bricolage_Grotesque'] text-xl sm:text-2xl font-black uppercase tracking-wider transform -rotate-1 shadow-hard-sm">
            MAPA DE REDES:
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-[#facc15] font-black text-2xl tracking-tighter">\\</span>
            <h1 className="font-['Bricolage_Grotesque'] text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Juntos Construimos Apoyo
            </h1>
            <span className="text-[#facc15] font-black text-2xl tracking-tighter">//</span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 font-['Space_Grotesk'] max-w-lg mx-auto">
            Tocá cada círculo del mapa para conocer cómo cada espacio o persona del barrio forma parte de tu red de contención:
          </p>
        </div>

        {/* 2. Diagrama Radial Interactivo */}
        <div className="relative py-6 max-w-xl mx-auto">
          
          {/* Círculo Central: YO */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setSelectedNodeId('casa-esquina')}
              className="relative group focus:outline-none cursor-pointer"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#facc15] border-4 border-black flex flex-col items-center justify-center shadow-hard hover:scale-105 transition-transform">
                {/* Rayos solares dibujados alrededor */}
                <div className="flex gap-1 text-black font-black text-xs -mt-1">
                  <span>-</span>
                  <span>|</span>
                  <span>-</span>
                </div>
                <span className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl font-black text-black tracking-tight">
                  YO
                </span>
                <span className="font-['Space_Grotesk'] text-[9px] font-black uppercase text-black">
                  Centro de Vida
                </span>
              </div>
            </button>
          </div>

          {/* Flechas indicativas hacia los 5 nodos */}
          <div className="text-center text-xs font-['Space_Grotesk'] text-[#facc15] uppercase tracking-widest font-bold mb-4">
            ↑ ↓ Redes Comunitarias Conectadas
          </div>

          {/* Los 5 Nodos Circulares alrededor */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-2">
            {MAPA_REDES_NODOS.map((nodo) => {
              const isSelected = selectedNodeId === nodo.id;

              return (
                <button
                  key={nodo.id}
                  onClick={() => setSelectedNodeId(nodo.id)}
                  className={`flex flex-col items-center p-3 rounded-sm border-2 border-black transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-black scale-105 ring-4 ring-[#facc15] shadow-hard'
                      : 'bg-[#222422] text-neutral-200 hover:bg-[#2c2e2c]'
                  }`}
                >
                  {/* Círculo del color del afiche */}
                  <div
                    className={`w-14 h-14 rounded-full ${nodo.bgClass} border-2 border-black flex items-center justify-center shadow-hard-sm mb-2`}
                  >
                    {getIcon(nodo.iconType)}
                  </div>

                  <span className="font-['Bricolage_Grotesque'] text-xs sm:text-sm font-bold text-center leading-tight">
                    {nodo.label}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* 3. Ficha de Detalle del Nodo Seleccionado */}
        <div className="mt-8 bg-white text-black border-3 border-black p-5 sm:p-6 rounded-sm shadow-hard">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b-2 border-black pb-3">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full ${selectedNode.bgClass} border-2 border-black flex items-center justify-center`}>
                {getIcon(selectedNode.iconType)}
              </div>
              <h3 className="font-['Bricolage_Grotesque'] text-2xl font-black text-black">
                {selectedNode.label}
              </h3>
            </div>
            <span className="bg-[#facc15] text-black border border-black px-2 py-0.5 text-[10px] font-['Space_Grotesk'] font-bold uppercase rounded-xs">
              Eslabón de Cuidado
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm">
            <div>
              <strong className="block font-['Space_Grotesk'] uppercase text-neutral-500 text-xs mb-1">
                ¿Quiénes son?
              </strong>
              <p className="text-neutral-800 font-medium leading-relaxed">
                {selectedNode.description}
              </p>
            </div>

            <div>
              <strong className="block font-['Space_Grotesk'] uppercase text-[#e02128] text-xs mb-1">
                ¿Cómo aportan a tu red?
              </strong>
              <p className="text-neutral-800 font-medium leading-relaxed">
                {selectedNode.comoAporta}
              </p>
            </div>
          </div>
        </div>

        {/* 4. Pie del Afiche: "No estás solo ni sola" */}
        <div className="text-center pt-8 space-y-3">
          <p className="font-['Bricolage_Grotesque'] text-base sm:text-lg text-neutral-300 font-semibold max-w-xl mx-auto">
            Cada persona, espacio o institución del barrio puede ser parte de tu red.
          </p>

          <div className="inline-block">
            <div className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl font-black text-[#facc15] tracking-wide border-b-4 border-[#facc15] pb-1">
              = {INFO_INSTITUCIONAL.lemaRedes}. =
            </div>
          </div>
        </div>

      </div>

      {/* 5. Navegación */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-black">
        <button
          onClick={() => onNavigate('forma-acompanar')}
          className="btn-tactile px-5 py-2.5 bg-white text-black border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase cursor-pointer"
        >
          ← Nuestra Forma de Acompañar
        </button>

        <button
          onClick={() => onNavigate('donde-acudir')}
          className="btn-tactile px-6 py-2.5 bg-[#e02128] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer flex items-center gap-2"
        >
          <span>Dónde Acudir</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
