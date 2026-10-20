import React from 'react';
import { NavigationTab } from '../types';
import { INFO_INSTITUCIONAL } from '../data/mockData';
import { LogoCasas } from '../components/LogoCasas';
import { ArrowRight, PhoneCall, MapPin, Heart, HelpCircle, AlertTriangle, ShieldCheck, Share2, Hospital } from 'lucide-react';

interface InicioViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenAyuda: () => void;
  onShowMapModal: () => void;
}

export const InicioView: React.FC<InicioViewProps> = ({ onNavigate, onOpenAyuda, onShowMapModal }) => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. Portada Principal con el Logo Oficial y Banner de Pintura */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Logo Oficial: Casas Esquina Libertad vectorizado idéntico a CASASROJOYNEGRO.png */}
          <div className="flex justify-center pb-2">
            <LogoCasas size="lg" />
          </div>

          {/* Banner Rojo Pincelado: PREVENIR TAMBIÉN ES CUIDAR */}
          <div className="max-w-2xl mx-auto relative px-4">
            <div className="bg-[#e02128] text-white py-4 sm:py-5 px-6 sm:px-10 rounded-sm border-3 border-black shadow-hard-lg transform -rotate-1 hover:rotate-0 transition-transform">
              <h1 className="font-['Bricolage_Grotesque'] text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.05] text-balance">
                {INFO_INSTITUCIONAL.lemaPrincipal}
              </h1>
            </div>
          </div>

          {/* Bajada Oficial del Folleto */}
          <div className="max-w-2xl mx-auto">
            <p className="font-['Bricolage_Grotesque'] text-lg sm:text-xl font-bold text-neutral-900 leading-snug">
              {INFO_INSTITUCIONAL.bajada}
            </p>
          </div>

          {/* Ilustración Simbólica del Folleto: Abrazo Cerebro (Azul) y Corazón (Rojo) */}
          <div className="py-2 flex justify-center">
            <div className="relative p-6 sm:p-8 bg-white border-3 border-black rounded-full shadow-hard w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-25">
                <div className="w-full h-full rounded-full border-4 border-dashed border-[#f3b329]" />
              </div>

              {/* Dibujo Vectorial del Abrazo del Cerebro y el Corazón */}
              <div className="relative z-10 flex items-center justify-center gap-1">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#60a5fa] border-3 border-black flex flex-col items-center justify-center p-2 shadow-hard-sm relative -mr-4 rotate-[-6deg]">
                  <div className="flex gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-black" />
                    <span className="w-2 h-2 rounded-full bg-black" />
                  </div>
                  <span className="w-4 h-2 border-b-2 border-black rounded-full" />
                  <span className="font-['Space_Grotesk'] text-[9px] uppercase font-black text-black mt-1">
                    Mente
                  </span>
                </div>

                <div className="z-20 w-8 h-4 bg-[#f3b329] border-2 border-black rounded-full shadow-xs" />

                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#f87171] border-3 border-black flex flex-col items-center justify-center p-2 shadow-hard-sm relative -ml-4 rotate-[6deg]">
                  <div className="flex gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-black" />
                    <span className="w-2 h-2 rounded-full bg-black" />
                  </div>
                  <span className="w-4 h-2 border-b-2 border-black rounded-full" />
                  <span className="font-['Space_Grotesk'] text-[9px] uppercase font-black text-black mt-1">
                    Sentir
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Cinta Azul: > "Nadie se salva solo/a" */}
          <div className="inline-block">
            <div className="bg-[#1e3a8a] text-white px-6 py-2.5 rounded-sm border-2 border-black shadow-hard-sm font-['Bricolage_Grotesque'] text-lg sm:text-xl font-black italic tracking-wide">
              &gt; "{INFO_INSTITUCIONAL.lemaComunitario}"
            </div>
          </div>

          {/* Botones de Acción Inmediata */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href={`https://wa.me/${INFO_INSTITUCIONAL.whatsappRaw}?text=${encodeURIComponent(
                'Hola Gustavo, me comunico desde la página de Casa Esquina Libertad para hacer una consulta.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-black rounded-sm font-['Space_Grotesk'] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-hard cursor-pointer flex items-center gap-2"
            >
              <span>WhatsApp Gustavo Lepori ({INFO_INSTITUCIONAL.whatsappTitular})</span>
            </a>

            <button
              onClick={onOpenAyuda}
              className="btn-tactile px-5 py-3 bg-[#e02128] text-white border-2 border-black rounded-sm font-['Space_Grotesk'] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-hard cursor-pointer flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Línea 0800 888 4767</span>
            </button>

            <button
              onClick={() => onNavigate('guia-salud')}
              className="btn-tactile px-5 py-3 bg-[#fef08a] text-black border-2 border-black rounded-sm font-['Space_Grotesk'] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-hard cursor-pointer flex items-center gap-2"
            >
              <span>Guía de Salud Jujuy →</span>
            </button>
          </div>

          {/* Enlaces a Redes Sociales Oficiales */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <a
              href={INFO_INSTITUCIONAL.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile-sm inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1877F2] text-white text-xs font-['Space_Grotesk'] font-bold rounded-sm border border-black shadow-hard-sm"
            >
              <span>Facebook Oficial</span>
            </a>
            <a
              href={INFO_INSTITUCIONAL.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile-sm inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-['Space_Grotesk'] font-bold rounded-sm border border-black shadow-hard-sm"
            >
              <span>{INFO_INSTITUCIONAL.instagramHandle}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Tarjetas de Acceso a las Secciones de los Afiches */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Tarjeta 1: Nuestra Forma de Acompañar */}
          <div className="border-3 border-black bg-[#fef08a] p-6 rounded-sm shadow-hard flex flex-col justify-between">
            <div className="space-y-2">
              <span className="font-['Space_Grotesk'] text-[10px] font-black uppercase text-black bg-white px-2 py-0.5 rounded-xs border border-black inline-block">
                Los 3 Pilares
              </span>
              <h3 className="font-['Bricolage_Grotesque'] text-xl font-black text-black leading-tight">
                Nuestra Forma de Acompañar
              </h3>
              <p className="text-xs text-neutral-800 leading-relaxed font-medium">
                La Primera Escucha, Reducción de Daños y Recomponer Proyectos de Vida.
              </p>
            </div>
            <div className="pt-4 border-t-2 border-black mt-3">
              <button
                onClick={() => onNavigate('forma-acompanar')}
                className="btn-tactile w-full py-2 bg-black text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase cursor-pointer"
              >
                Ver Pilares →
              </button>
            </div>
          </div>

          {/* Tarjeta 2: ¿Qué son los Consumos? */}
          <div className="border-3 border-black bg-white p-6 rounded-sm shadow-hard flex flex-col justify-between">
            <div className="space-y-2">
              <span className="font-['Space_Grotesk'] text-[10px] font-black uppercase text-white bg-[#e02128] px-2 py-0.5 rounded-xs inline-block">
                La Tríada
              </span>
              <h3 className="font-['Bricolage_Grotesque'] text-xl font-black text-black leading-tight">
                ¿Qué son los Consumos?
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                Sustancia - Persona - Contexto. No aislamos a la persona de su realidad.
              </p>
            </div>
            <div className="pt-4 border-t-2 border-neutral-300 mt-3">
              <button
                onClick={() => onNavigate('que-son')}
                className="btn-tactile w-full py-2 bg-[#e02128] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase cursor-pointer"
              >
                Ver Definición →
              </button>
            </div>
          </div>

          {/* Tarjeta 3: Mapa de Redes */}
          <div className="border-3 border-black bg-[#121312] text-white p-6 rounded-sm shadow-hard flex flex-col justify-between">
            <div className="space-y-2">
              <span className="font-['Space_Grotesk'] text-[10px] font-black uppercase text-black bg-[#facc15] px-2 py-0.5 rounded-xs inline-block">
                Comunidad
              </span>
              <h3 className="font-['Bricolage_Grotesque'] text-xl font-black text-white leading-tight">
                Mapa de Redes
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-medium">
                Juntos construimos apoyo: familia, amigos, escuela, hospital y Casa Esquina.
              </p>
            </div>
            <div className="pt-4 border-t-2 border-neutral-700 mt-3">
              <button
                onClick={() => onNavigate('mapa-redes')}
                className="btn-tactile w-full py-2 bg-[#facc15] text-black border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase cursor-pointer"
              >
                Abrir Mapa →
              </button>
            </div>
          </div>

          {/* Tarjeta 4: Dónde Acudir */}
          <div className="border-3 border-black bg-[#f0f9ff] p-6 rounded-sm shadow-hard flex flex-col justify-between">
            <div className="space-y-2">
              <span className="font-['Space_Grotesk'] text-[10px] font-black uppercase text-white bg-[#0284c7] px-2 py-0.5 rounded-xs inline-block">
                San Pedrito
              </span>
              <h3 className="font-['Bricolage_Grotesque'] text-xl font-black text-black leading-tight">
                Dónde Acudir
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                {INFO_INSTITUCIONAL.direccion} y líneas telefónicas 24 hs.
              </p>
            </div>
            <div className="pt-4 border-t-2 border-neutral-300 mt-3">
              <button
                onClick={() => onNavigate('donde-acudir')}
                className="btn-tactile w-full py-2 bg-[#0284c7] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase cursor-pointer"
              >
                Cómo Llegar →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Banner Destacado: Guía de Centros de Atención de Salud de Jujuy */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-3 border-black bg-white p-6 sm:p-8 rounded-sm shadow-hard flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Icono representativo de la red de salud */}
            <div className="w-16 h-16 bg-[#e02128] p-3 rounded-sm border-2 border-black shrink-0 flex items-center justify-center text-white shadow-hard-sm">
              <Hospital className="w-8 h-8" />
            </div>
            <div>
              <span className="font-['Space_Grotesk'] text-[10px] font-black uppercase text-[#e02128] tracking-widest block">
                Directorio Oficial Provincial
              </span>
              <h3 className="font-['Bricolage_Grotesque'] text-2xl font-black text-black">
                Guía de Centros de Atención de Salud de Jujuy
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                Hospitales, CAPS barriales y centros de salud mental de la provincia con teléfonos, guardias y direcciones.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('guia-salud')}
            className="btn-tactile px-6 py-3 bg-[#e02128] hover:bg-[#c91a21] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer whitespace-nowrap shrink-0"
          >
            Ver Directorio de Salud →
          </button>
        </div>
      </section>

      {/* 3. Nota Adhesiva Oficial del Folleto */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#fef08a] border-3 border-black p-6 sm:p-8 rounded-xs shadow-hard transform rotate-[-0.5deg]">
          <div className="absolute -top-3.5 left-10 w-28 h-6 bg-[#f472b6] opacity-90 border border-black/40 rotate-[-2deg]" />
          <div className="flex items-center justify-between gap-4">
            <p className="font-['Bricolage_Grotesque'] text-xl sm:text-2xl font-black text-black leading-snug">
              &gt; "{INFO_INSTITUCIONAL.notaPrevenir}"
            </p>
            <span className="text-3xl text-[#e02128] shrink-0">♡</span>
          </div>
        </div>
      </section>

    </div>
  );
};
