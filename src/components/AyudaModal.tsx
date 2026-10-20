import React, { useState, useEffect } from 'react';
import { X, PhoneCall, Heart, MapPin, Wind, MessageCircle } from 'lucide-react';
import { INFO_INSTITUCIONAL } from '../data/mockData';

interface AyudaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AyudaModal: React.FC<AyudaModalProps> = ({ isOpen, onClose }) => {
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathTimer, setBreathTimer] = useState(4);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setBreathTimer((prev) => {
        if (prev > 1) return prev - 1;
        if (breathPhase === 'inhale') {
          setBreathPhase('hold');
          return 4;
        } else if (breathPhase === 'hold') {
          setBreathPhase('exhale');
          return 6;
        } else {
          setBreathPhase('inhale');
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, breathPhase]);

  if (!isOpen) return null;

  const whatsappDirectoUrl = `https://wa.me/${INFO_INSTITUCIONAL.whatsappRaw}?text=${encodeURIComponent(
    'Hola Gustavo, me comunico desde la página de Casa Esquina Libertad para pedir orientación o ayuda.'
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#fdfbf7] border-3 border-black shadow-hard-lg rounded-sm overflow-hidden my-6">
        
        {/* Encabezado del Modal con el estilo rojo oficial */}
        <div className="bg-[#e02128] text-white px-5 py-4 border-b-2 border-black flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white text-[#e02128] border-2 border-black flex items-center justify-center font-black">
              ★
            </div>
            <div>
              <h2 className="font-['Bricolage_Grotesque'] text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight">
                Pedir Ayuda es Prevenir
              </h2>
              <p className="font-['Space_Grotesk'] text-xs text-white/90 font-medium">
                Casas Esquina Libertad · {INFO_INSTITUCIONAL.lemaComunitario}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white text-black border-2 border-black rounded-sm hover:bg-neutral-200 cursor-pointer shadow-hard-sm"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mensaje oficial del tríptico */}
        <div className="bg-[#dcf0fb] px-5 py-3 border-b-2 border-black text-xs font-['Space_Grotesk'] font-bold text-neutral-800 flex items-center gap-2">
          <Heart className="w-4 h-4 text-[#e02128] fill-[#e02128] shrink-0" />
          <span>"{INFO_INSTITUCIONAL.mensajeCierre}"</span>
        </div>

        <div className="p-6 space-y-5">
          
          {/* Canales Directos */}
          <div className="space-y-3">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase text-[#e02128] tracking-widest block">
              Contacto Inmediato
            </span>

            {/* WhatsApp con Gustavo Lepori */}
            <div className="border-3 border-black p-4 bg-[#f0fdf4] rounded-sm shadow-hard-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-emerald-600">
              <div>
                <span className="text-[11px] font-['Space_Grotesk'] font-bold text-emerald-800 uppercase block">
                  WhatsApp con {INFO_INSTITUCIONAL.titularNombre} (Titular)
                </span>
                <span className="font-['Space_Grotesk'] text-xl font-black text-emerald-700 block">
                  {INFO_INSTITUCIONAL.whatsappTitular}
                </span>
                <span className="text-xs text-neutral-600 font-medium">
                  Atención y orientación directa por mensaje
                </span>
              </div>
              <a
                href={whatsappDirectoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-hard-sm cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>

            {/* Salud Mental Escucha */}
            <div className="border-2 border-black p-3.5 bg-white rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-['Space_Grotesk'] font-bold text-neutral-600 uppercase block">
                  Salud Mental Escucha (Gratis 24 hs)
                </span>
                <span className="font-['Space_Grotesk'] text-xl font-black text-[#e02128] block">
                  {INFO_INSTITUCIONAL.telefonoSaludMental}
                </span>
              </div>
              <a
                href={`tel:${INFO_INSTITUCIONAL.telefonoSaludMental.replace(/\s+/g, '')}`}
                className="btn-tactile px-4 py-2 bg-[#e02128] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-hard-sm cursor-pointer whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Llamar al 0800</span>
              </a>
            </div>

            {/* SAME 107 */}
            <div className="border-2 border-black p-3 bg-white rounded-sm flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-['Space_Grotesk'] font-bold text-neutral-600 uppercase block">
                  {INFO_INSTITUCIONAL.emergenciasNombre}
                </span>
                <span className="font-['Space_Grotesk'] text-lg font-black text-black">
                  {INFO_INSTITUCIONAL.telefonoEmergencias}
                </span>
              </div>
              <a
                href={`tel:${INFO_INSTITUCIONAL.telefonoEmergencias}`}
                className="btn-tactile px-3.5 py-1.5 bg-black text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer whitespace-nowrap"
              >
                Marcar 107
              </a>
            </div>
          </div>

          {/* Acercarse al Dispositivo Comunitario */}
          <div className="border-2 border-black p-4 bg-[#f9f6f0] rounded-sm space-y-1">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#e02128]" />
              <h4 className="font-['Bricolage_Grotesque'] text-base font-bold text-black">
                Dispositivo Comunitario Casa Esquina Libertad
              </h4>
            </div>
            <p className="text-sm font-semibold text-neutral-800">
              {INFO_INSTITUCIONAL.direccion} – {INFO_INSTITUCIONAL.barrio}
            </p>
          </div>

          {/* Redes Sociales Oficiales */}
          <div className="border-2 border-black p-3 bg-white rounded-sm space-y-1.5">
            <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase text-neutral-600 block">
              Redes Sociales Oficiales:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={INFO_INSTITUCIONAL.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile-sm py-1.5 px-2 bg-[#1877F2] text-white text-[11px] font-['Space_Grotesk'] font-bold uppercase rounded-xs border border-black flex items-center justify-center gap-1.5 shadow-hard-sm"
              >
                <span>Facebook Oficial</span>
              </a>
              <a
                href={INFO_INSTITUCIONAL.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile-sm py-1.5 px-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-[11px] font-['Space_Grotesk'] font-bold uppercase rounded-xs border border-black flex items-center justify-center gap-1.5 shadow-hard-sm"
              >
                <span>Instagram Oficial</span>
              </a>
            </div>
          </div>

          {/* Pauta de calma / Respiración */}
          <div className="bg-white border-2 border-black p-3.5 rounded-sm text-center space-y-1.5">
            <div className="flex items-center justify-center gap-1.5 text-xs font-['Space_Grotesk'] font-bold text-neutral-700 uppercase">
              <Wind className="w-3.5 h-3.5 text-[#2ea89d]" />
              <span>Tomate una pausa para respirar despacio</span>
            </div>
            <div className="font-['Space_Grotesk'] text-2xl font-black text-black">
              {breathTimer}s
            </div>
            <div className="text-[11px] uppercase font-bold text-neutral-600 tracking-wider">
              {breathPhase === 'inhale' && 'Inhalá por la nariz despacio...'}
              {breathPhase === 'hold' && 'Mantené el aire con calma...'}
              {breathPhase === 'exhale' && 'Exhalá suavemente por la boca...'}
            </div>
          </div>

        </div>

        {/* Pie del Modal */}
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
