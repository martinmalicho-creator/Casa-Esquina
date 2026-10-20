import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { PhoneCall, Menu, X, ShieldAlert, Facebook, Instagram } from 'lucide-react';
import { LogoCasas } from './LogoCasas';
import { INFO_INSTITUCIONAL } from '../data/mockData';

interface HeaderProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenAyuda: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenAyuda }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavigationTab; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'forma-acompanar', label: 'Forma de Acompañar' },
    { id: 'que-son', label: '¿Qué son los Consumos?' },
    { id: 'senales', label: 'Señales de Alerta' },
    { id: 'mapa-redes', label: 'Mapa de Redes' },
    { id: 'guia-salud', label: 'Guía de Salud Jujuy' },
    { id: 'donde-acudir', label: 'Dónde Acudir' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fdfbf7] border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          
          {/* Zona 1: Logo Oficial de Casas Esquina Libertad */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center focus:outline-none cursor-pointer group shrink-0"
          >
            <LogoCasas size="sm" />
          </button>

          {/* Zona 2: Enlaces de navegación con texto limpio y subrayado en hover */}
          <nav className="hidden 2xl:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-xs font-['Space_Grotesk'] font-bold tracking-wide whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 relative ${
                    isActive
                      ? 'text-[#e02128]'
                      : 'text-neutral-800 hover:text-black'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#e02128]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zona 3: Redes Sociales Oficiales y Botón de llamada */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Facebook Oficial */}
            <a
              href={INFO_INSTITUCIONAL.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-sm border-2 border-black bg-white hover:bg-[#1877F2] hover:text-white transition-colors shadow-hard-sm cursor-pointer"
              title="Facebook de Casas Esquina Libertad"
              aria-label="Facebook Oficial"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* Instagram Oficial */}
            <a
              href={INFO_INSTITUCIONAL.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-sm border-2 border-black bg-white hover:bg-[#E4405F] hover:text-white transition-colors shadow-hard-sm cursor-pointer"
              title="Instagram @casasesquinalibertad_jujuy"
              aria-label="Instagram Oficial"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenAyuda}
              className="btn-tactile flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-[#e02128] text-white border-2 border-black text-xs sm:text-sm font-['Space_Grotesk'] font-bold rounded-sm uppercase tracking-wide cursor-pointer shadow-hard whitespace-nowrap shrink-0"
              title="Línea 0800 888 4767 (Atención gratuita 24 hs)"
            >
              <PhoneCall className="w-4 h-4" />
              <span>0800 888 4767</span>
            </button>

            {/* Menú para pantallas menores a 2xl */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="2xl:hidden p-2 rounded-sm border-2 border-black bg-white shadow-hard-sm cursor-pointer"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú desplegable en dispositivos móviles y pantallas medianas */}
      {mobileMenuOpen && (
        <div className="2xl:hidden bg-[#f9f6f0] border-b-2 border-black px-4 pt-3 pb-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between text-left px-4 py-2.5 text-sm font-bold rounded-sm border-2 transition-all cursor-pointer font-['Space_Grotesk'] ${
                    isActive
                      ? 'bg-[#e02128] text-white border-black shadow-hard-sm'
                      : 'bg-white text-black border-black/30 hover:border-black'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span>→</span>}
                </button>
              );
            })}

            <div className="mt-3 pt-3 border-t-2 border-dashed border-black/20 space-y-2">
              {/* Botón WhatsApp Gustavo Lepori */}
              <a
                href={`https://wa.me/${INFO_INSTITUCIONAL.whatsappRaw}?text=${encodeURIComponent(
                  'Hola Gustavo, me comunico desde la página de Casa Esquina Libertad.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-['Space_Grotesk'] font-bold uppercase rounded-sm border-2 border-black flex items-center justify-center gap-2 shadow-hard-sm"
              >
                <span>WhatsApp Gustavo Lepori ({INFO_INSTITUCIONAL.whatsappTitular})</span>
              </a>

              {/* Botones de Redes Sociales Oficiales */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={INFO_INSTITUCIONAL.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-[#1877F2] text-white text-xs font-['Space_Grotesk'] font-bold uppercase rounded-sm border-2 border-black flex items-center justify-center gap-1.5 shadow-hard-sm"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a
                  href={INFO_INSTITUCIONAL.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-['Space_Grotesk'] font-bold uppercase rounded-sm border-2 border-black flex items-center justify-center gap-1.5 shadow-hard-sm"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAyuda();
                }}
                className="w-full py-2.5 bg-black text-white text-xs font-['Space_Grotesk'] font-bold uppercase rounded-sm border-2 border-black flex items-center justify-center gap-2 shadow-hard-sm"
              >
                <ShieldAlert className="w-4 h-4 text-[#e02128]" />
                <span>Pedir Ayuda / Líneas Directas 24hs</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
