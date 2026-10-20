import React from 'react';
import { NavigationTab } from '../types';
import { MapPin, Phone, Heart, Facebook, Instagram } from 'lucide-react';
import { INFO_INSTITUCIONAL } from '../data/mockData';

interface FooterProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenAyuda: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenAyuda }) => {
  return (
    <footer className="bg-[#1b1c1a] text-white border-t-3 border-black pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1: Identidad Oficial */}
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="font-['Bricolage_Grotesque'] text-xl font-black tracking-tight text-white uppercase">
                Casas Esquina Libertad
              </h3>
              <p className="text-[11px] font-['Space_Grotesk'] font-bold text-[#e02128] uppercase tracking-wider">
                Dispositivo Comunitario · San Salvador de Jujuy
              </p>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed pt-1">
              Consumos Problemáticos y Salud Mental Popular. Informarnos, hablar y pedir ayuda a tiempo también es una forma de cuidarnos.
            </p>
            <div className="pt-1">
              <span className="inline-block bg-[#f3b329] text-black px-2 py-0.5 text-[11px] font-['Space_Grotesk'] font-black uppercase rounded-xs">
                "{INFO_INSTITUCIONAL.lemaComunitario}"
              </span>
            </div>

            {/* Redes Sociales Oficiales */}
            <div className="pt-2 space-y-2">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase text-neutral-400 block">
                Redes Sociales Oficiales:
              </span>
              <div className="flex flex-col gap-1.5">
                <a
                  href={INFO_INSTITUCIONAL.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#1877F2] text-white hover:bg-[#166fe5] transition-colors border border-black text-xs font-['Space_Grotesk'] font-bold"
                  title="Facebook de Casas Esquina Libertad"
                >
                  <Facebook className="w-3.5 h-3.5 shrink-0" />
                  <span>Facebook Oficial</span>
                </a>
                <a
                  href={INFO_INSTITUCIONAL.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:opacity-95 transition-opacity border border-black text-xs font-['Space_Grotesk'] font-bold"
                  title="Instagram de Casas Esquina Libertad"
                >
                  <Instagram className="w-3.5 h-3.5 shrink-0" />
                  <span>{INFO_INSTITUCIONAL.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: Navegación de los Afiches */}
          <div className="space-y-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase text-[#f3b329] tracking-wider block mb-2">
              Secciones
            </span>
            <ul className="text-xs space-y-2 font-medium text-neutral-300">
              <li>
                <button
                  onClick={() => {
                    onSelectTab('inicio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  → Inicio & Portada
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('forma-acompanar');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  → Nuestra Forma de Acompañar
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('que-son');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  → ¿Qué son los Consumos? (La Tríada)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('senales');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  → Señales de Alerta
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('mapa-redes');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  → Mapa de Redes Barriales
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('guia-salud');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer font-bold text-[#fef08a]"
                >
                  → Guía de Centros de Salud de Jujuy
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('donde-acudir');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  → Dónde Acudir & Dispositivo
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Atención y WhatsApp Titular */}
          <div className="space-y-3">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase text-[#e02128] tracking-wider block mb-2">
              Contacto Directo
            </span>
            <div className="bg-[#292a27] p-3 border border-neutral-700 rounded-sm space-y-1.5 text-xs">
              <p className="text-emerald-400 font-bold">
                WhatsApp Titular: {INFO_INSTITUCIONAL.titularNombre}
              </p>
              <p className="font-['Space_Grotesk'] text-base font-black text-white">
                {INFO_INSTITUCIONAL.whatsappTitular}
              </p>
              <a
                href={`https://wa.me/${INFO_INSTITUCIONAL.whatsappRaw}?text=${encodeURIComponent(
                  'Hola Gustavo, me comunico desde la página de Casa Esquina Libertad.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile block text-center py-1 bg-emerald-600 hover:bg-emerald-700 text-white border border-black rounded-xs text-[11px] font-['Space_Grotesk'] font-bold uppercase"
              >
                Enviar WhatsApp
              </a>
            </div>

            <div className="bg-[#292a27] p-2.5 border border-neutral-700 rounded-sm text-xs">
              <p className="text-neutral-400 text-[11px]">
                Salud Mental 24 hs: <strong className="text-white">{INFO_INSTITUCIONAL.telefonoSaludMental}</strong>
              </p>
            </div>
          </div>

          {/* Columna 4: Dispositivo Comunitario */}
          <div className="space-y-2 text-xs text-neutral-300">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase text-[#f3b329] tracking-wider block mb-2">
              Dispositivo Comunitario
            </span>
            <p className="flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-[#f3b329] shrink-0 mt-0.5" />
              <span>{INFO_INSTITUCIONAL.direccion} – {INFO_INSTITUCIONAL.barrio}</span>
            </p>
            <p className="text-neutral-400 pt-1">
              Emergencias médicas: <strong>{INFO_INSTITUCIONAL.telefonoEmergencias}</strong> ({INFO_INSTITUCIONAL.emergenciasNombre})
            </p>
          </div>

        </div>

        {/* Cierre Inferior */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-['Space_Grotesk']">
          <p>
            {INFO_INSTITUCIONAL.nombre} · {INFO_INSTITUCIONAL.lemaPrincipal}
          </p>
          <div className="flex items-center gap-2">
            <span>Pedir ayuda también es prevenir</span>
            <span>·</span>
            <span>{INFO_INSTITUCIONAL.barrio}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
