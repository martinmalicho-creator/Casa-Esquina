import React from 'react';
import { MapPin, Phone, Heart, MessageCircle } from 'lucide-react';
import { INFO_INSTITUCIONAL } from '../data/mockData';

interface OperationalRibbonProps {
  onShowMapModal: () => void;
  onOpenAyuda: () => void;
}

export const OperationalRibbon: React.FC<OperationalRibbonProps> = ({ onShowMapModal, onOpenAyuda }) => {
  const whatsappUrl = `https://wa.me/${INFO_INSTITUCIONAL.whatsappRaw}?text=${encodeURIComponent(
    'Hola Gustavo, me comunico desde la página de Casa Esquina Libertad.'
  )}`;

  return (
    <div className="bg-[#f3b329] text-black border-b-2 border-black py-2 px-4 text-xs font-['Space_Grotesk'] font-bold tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        
        {/* Dirección exacta del folleto */}
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span>{INFO_INSTITUCIONAL.direccion} – {INFO_INSTITUCIONAL.barrio}</span>
          <button
            onClick={onShowMapModal}
            className="underline hover:text-white transition-colors cursor-pointer ml-1"
          >
            [Ver ubicación]
          </button>
        </div>

        {/* WhatsApp directo con Gustavo Lepori */}
        <div className="flex items-center gap-2">
          <MessageCircle className="w-3.5 h-3.5 shrink-0 text-emerald-800" />
          <span>WhatsApp Titular (Gustavo Lepori): <strong>{INFO_INSTITUCIONAL.whatsappTitular}</strong></span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 text-white px-2 py-0.5 rounded-xs text-[10px] uppercase font-black hover:bg-emerald-800 transition-colors"
          >
            Escribir
          </a>
        </div>

        {/* Teléfono de Salud Mental Escucha 24 hs */}
        <div className="hidden lg:flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>Salud Mental: <strong>{INFO_INSTITUCIONAL.telefonoSaludMental}</strong> ({INFO_INSTITUCIONAL.horarioSaludMental})</span>
        </div>

      </div>
    </div>
  );
};
