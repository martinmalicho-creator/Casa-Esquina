import React from 'react';
import { CLAVES_PREVENCION, INFO_INSTITUCIONAL } from '../data/mockData';
import { MessageCircle, Ear, Users, Home, Heart, ArrowRight, MapPin, PhoneCall } from 'lucide-react';
import { NavigationTab } from '../types';

interface ComoPrevenimosViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenAyuda: () => void;
}

export const ComoPrevenimosView: React.FC<ComoPrevenimosViewProps> = ({ onNavigate, onOpenAyuda }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'message':
        return <MessageCircle className="w-6 h-6 text-white" />;
      case 'ear':
        return <Ear className="w-6 h-6 text-white" />;
      case 'community':
        return <Users className="w-6 h-6 text-white" />;
      case 'home':
        return <Home className="w-6 h-6 text-white" />;
      case 'heart':
        return <Heart className="w-6 h-6 text-white" />;
      default:
        return <Heart className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-16">
      
      {/* 1. Encabezado en Cinta Amarilla idéntica al Folleto */}
      <div className="text-center space-y-3">
        <div className="inline-block bg-[#fef08a] border-2 border-black px-6 py-2 rounded-sm shadow-hard-sm rotate-1">
          <h1 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl font-black text-black uppercase">
            ¿Cómo Prevenimos y Dónde Acudir?
          </h1>
        </div>
        <p className="text-sm text-neutral-600 max-w-xl mx-auto">
          La prevención no es una fórmula mágica ni un sermón moral; es una práctica cotidiana de cuidado mutuo y escucha en la comunidad.
        </p>
      </div>

      {/* 2. Las 5 Pautas Claves con sus Iconos y Colores del Folleto */}
      <div className="space-y-4">
        {CLAVES_PREVENCION.map((clave) => (
          <div
            key={clave.id}
            className="border-3 border-black bg-white p-5 sm:p-6 rounded-sm shadow-hard flex items-start gap-4 sm:gap-6 hover:shadow-hard-lg transition-all"
          >
            {/* Círculo con el color exacto del folleto */}
            <div className={`w-14 h-14 rounded-full ${clave.bgClass} border-2 border-black flex items-center justify-center shrink-0 shadow-hard-sm`}>
              {getIcon(clave.iconName)}
            </div>

            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-['Space_Grotesk'] text-[11px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded-xs">
                  Pauta {clave.number}
                </span>
              </div>
              <h3 className="font-['Bricolage_Grotesque'] text-xl sm:text-2xl font-black text-black leading-tight">
                {clave.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {clave.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Bloque de Cierre: Acercarse al Dispositivo Comunitario */}
      <div className="border-3 border-black bg-[#dcf0fb] p-6 sm:p-8 rounded-sm shadow-hard flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#e02128]" />
            <h3 className="font-['Bricolage_Grotesque'] text-2xl font-black text-black">
              Casa Esquina Libertad
            </h3>
          </div>
          <p className="text-sm font-bold text-neutral-800">
            {INFO_INSTITUCIONAL.direccion} – {INFO_INSTITUCIONAL.barrio}
          </p>
          <p className="text-xs text-neutral-600">
            "{INFO_INSTITUCIONAL.mensajeCierre}"
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={() => onNavigate('donde-acudir')}
            className="btn-tactile px-5 py-2.5 bg-[#1e3a8a] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer whitespace-nowrap"
          >
            Ver Datos de Acudida →
          </button>
          <button
            onClick={onOpenAyuda}
            className="btn-tactile px-5 py-2.5 bg-[#e02128] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer whitespace-nowrap"
          >
            Llamar al 0800
          </button>
        </div>
      </div>

      {/* Navegación entre vistas */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-black">
        <button
          onClick={() => onNavigate('senales')}
          className="btn-tactile px-5 py-2.5 bg-white text-black border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase cursor-pointer"
        >
          ← Señales de Alerta
        </button>

        <button
          onClick={() => onNavigate('donde-acudir')}
          className="btn-tactile px-6 py-2.5 bg-[#e02128] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer flex items-center gap-2"
        >
          <span>Dónde Acudir & Teléfonos</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
