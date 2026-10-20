import React from 'react';
import { X, MapPin, PhoneCall, Heart, CheckCircle2 } from 'lucide-react';
import { INFO_INSTITUCIONAL } from '../data/mockData';

interface LocationMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAyuda: () => void;
}

export const LocationMapModal: React.FC<LocationMapModalProps> = ({ isOpen, onClose, onOpenAyuda }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#fdfbf7] border-3 border-black shadow-hard-lg rounded-sm overflow-hidden my-6">
        
        {/* Encabezado */}
        <div className="bg-[#e02128] text-white px-5 py-3.5 border-b-2 border-black flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#f3b329]" />
            <h3 className="font-['Bricolage_Grotesque'] text-lg sm:text-xl font-bold uppercase tracking-tight">
              Ubicación del Dispositivo Comunitario
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white text-black border-2 border-black rounded-sm hover:bg-neutral-200 cursor-pointer shadow-hard-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Tarjeta de Dirección Oficial del Tríptico */}
          <div className="bg-white border-3 border-black p-5 rounded-sm shadow-hard-sm space-y-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase text-[#e02128] tracking-wider block">
              Casa Esquina Libertad
            </span>
            <h4 className="font-['Bricolage_Grotesque'] text-2xl font-black text-black">
              {INFO_INSTITUCIONAL.direccion}
            </h4>
            <p className="font-['Space_Grotesk'] text-base font-bold text-[#1e3a8a]">
              {INFO_INSTITUCIONAL.barrio}
            </p>
            <div className="pt-2 text-xs text-neutral-700 border-t border-neutral-200">
              Acercate al dispositivo comunitario para informarte, hablar con el equipo o recibir orientación en un marco de contención sin juzgar.
            </div>
          </div>

          {/* Líneas Telefónicas Oficiales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border-2 border-black p-3.5 bg-[#fff5f5] rounded-sm">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase text-[#e02128] block">
                Salud Mental Escucha
              </span>
              <strong className="font-['Space_Grotesk'] text-lg font-black text-black block">
                {INFO_INSTITUCIONAL.telefonoSaludMental}
              </strong>
              <span className="text-[11px] text-neutral-600 block mt-0.5">
                {INFO_INSTITUCIONAL.horarioSaludMental}
              </span>
            </div>

            <div className="border-2 border-black p-3.5 bg-white rounded-sm">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase text-neutral-600 block">
                Emergencias Médicas
              </span>
              <strong className="font-['Space_Grotesk'] text-lg font-black text-black block">
                {INFO_INSTITUCIONAL.telefonoEmergencias} (SAME)
              </strong>
              <span className="text-[11px] text-neutral-600 block mt-0.5">
                Asistencia de urgencia
              </span>
            </div>
          </div>

          {/* Mensaje Recordatorio del Folleto */}
          <div className="bg-[#dcf0fb] p-3.5 border-2 border-black rounded-sm text-xs text-neutral-800 font-medium">
            "{INFO_INSTITUCIONAL.mensajeCierre}"
          </div>
        </div>

        {/* Pie */}
        <div className="bg-[#f9f6f0] px-5 py-3 border-t-2 border-black flex justify-end">
          <button
            onClick={onClose}
            className="btn-tactile px-5 py-2 bg-black text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
