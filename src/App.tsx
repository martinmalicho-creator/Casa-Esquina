/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavigationTab } from './types';
import { Header } from './components/Header';
import { OperationalRibbon } from './components/OperationalRibbon';
import { AyudaModal } from './components/AyudaModal';
import { LocationMapModal } from './components/LocationMapModal';
import { InicioView } from './views/InicioView';
import { FormaAcompanarView } from './views/FormaAcompanarView';
import { QueSonView } from './views/QueSonView';
import { SenalesView } from './views/SenalesView';
import { MapaRedesView } from './views/MapaRedesView';
import { GuiaSaludView } from './views/GuiaSaludView';
import { DondeAcudirView } from './views/DondeAcudirView';
import { Footer } from './components/Footer';

export default function App() {
  // Detectar pestaña inicial desde el hash de la URL (#guia-salud, #senales, etc.)
  const getTabFromHash = (): NavigationTab => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '') as NavigationTab;
      const validTabs: NavigationTab[] = [
        'inicio',
        'forma-acompanar',
        'que-son',
        'senales',
        'mapa-redes',
        'guia-salud',
        'donde-acudir'
      ];
      if (validTabs.includes(hash)) {
        return hash;
      }
    }
    return 'inicio';
  };

  const [currentTab, setCurrentTab] = useState<NavigationTab>(getTabFromHash);
  const [isAyudaOpen, setIsAyudaOpen] = useState(false);
  const [isLocationMapOpen, setIsLocationMapOpen] = useState(false);

  // Escuchar cambios de hash de la URL para sincronizar pestañas
  React.useEffect(() => {
    const handleHashChange = () => {
      const tab = getTabFromHash();
      setCurrentTab(tab);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Actualizar el hash en la barra de direcciones cuando cambia de pestaña
  const handleSelectTab = (tab: NavigationTab) => {
    setCurrentTab(tab);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${tab}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-[#1b1c1a]">
      {/* 1. Cintillo superior operativo (Dirección oficial en Barrio San Pedrito y teléfonos) */}
      <OperationalRibbon
        onShowMapModal={() => setIsLocationMapOpen(true)}
        onOpenAyuda={() => setIsAyudaOpen(true)}
      />

      {/* 2. Barra de Navegación Oficial con LogoCasas */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenAyuda={() => setIsAyudaOpen(true)}
      />

      {/* 3. Vistas Principales basadas en los Afiches Oficiales */}
      <main className="flex-1">
        {currentTab === 'inicio' && (
          <InicioView
            onNavigate={handleSelectTab}
            onOpenAyuda={() => setIsAyudaOpen(true)}
            onShowMapModal={() => setIsLocationMapOpen(true)}
          />
        )}

        {currentTab === 'forma-acompanar' && (
          <FormaAcompanarView
            onNavigate={handleSelectTab}
            onOpenAyuda={() => setIsAyudaOpen(true)}
          />
        )}

        {currentTab === 'que-son' && (
          <QueSonView
            onNavigate={handleSelectTab}
            onOpenAyuda={() => setIsAyudaOpen(true)}
          />
        )}

        {currentTab === 'senales' && (
          <SenalesView
            onNavigate={handleSelectTab}
            onOpenAyuda={() => setIsAyudaOpen(true)}
          />
        )}

        {currentTab === 'mapa-redes' && (
          <MapaRedesView
            onNavigate={handleSelectTab}
            onOpenAyuda={() => setIsAyudaOpen(true)}
          />
        )}

        {currentTab === 'guia-salud' && (
          <GuiaSaludView
            onNavigate={handleSelectTab}
            onOpenAyuda={() => setIsAyudaOpen(true)}
          />
        )}

        {currentTab === 'donde-acudir' && (
          <DondeAcudirView
            onNavigate={handleSelectTab}
            onOpenAyuda={() => setIsAyudaOpen(true)}
          />
        )}
      </main>

      {/* 4. Pie de Página */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenAyuda={() => setIsAyudaOpen(true)}
      />

      {/* 5. Modales Oficiales de Asistencia y Ubicación */}
      <AyudaModal
        isOpen={isAyudaOpen}
        onClose={() => setIsAyudaOpen(false)}
      />

      <LocationMapModal
        isOpen={isLocationMapOpen}
        onClose={() => setIsLocationMapOpen(false)}
        onOpenAyuda={() => {
          setIsLocationMapOpen(false);
          setIsAyudaOpen(true);
        }}
      />
    </div>
  );
}
