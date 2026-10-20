import React, { useState } from 'react';
import { CENTROS_SALUD_JUJUY, INFO_INSTITUCIONAL } from '../data/mockData';
import { NavigationTab } from '../types';
import {
  Search,
  MapPin,
  PhoneCall,
  Facebook,
  Instagram,
  Printer,
  HeartPulse,
  Hospital,
  AlertCircle,
  FileText,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface GuiaSaludViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenAyuda: () => void;
}

export const GuiaSaludView: React.FC<GuiaSaludViewProps> = ({ onNavigate, onOpenAyuda }) => {
  const [filtroTipo, setFiltroTipo] = useState<string>('todos');
  const [busqueda, setBusqueda] = useState<string>('');

  const tipos = [
    { id: 'todos', label: 'Todos los Centros' },
    { id: 'Salud Mental y Consumos', label: 'Salud Mental & Consumos' },
    { id: 'CAPS', label: 'CAPS Barriales' },
    { id: 'Hospital', label: 'Hospitales Públicos' },
    { id: 'Dispositivo Comunitario', label: 'Casa Esquina Libertad' },
  ];

  const centrosFiltrados = CENTROS_SALUD_JUJUY.filter((centro) => {
    const coincideTipo = filtroTipo === 'todos' || centro.tipo === filtroTipo;
    const termino = busqueda.toLowerCase().trim();
    const coincideTexto =
      !termino ||
      centro.nombre.toLowerCase().includes(termino) ||
      centro.zona.toLowerCase().includes(termino) ||
      centro.direccion.toLowerCase().includes(termino) ||
      centro.localidad.toLowerCase().includes(termino) ||
      centro.servicios.some((s) => s.toLowerCase().includes(termino));

    return coincideTipo && coincideTexto;
  });

  const handlePrintPdf = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-16">
      
      {/* 1. Encabezado Oficial */}
      <div className="text-center space-y-4">
        <div className="inline-block bg-[#fef08a] border-2 border-black px-5 py-1.5 rounded-sm shadow-hard-sm transform -rotate-1">
          <span className="font-['Space_Grotesk'] text-xs font-black uppercase text-black">
            Red Sanitaria Provincial de Jujuy
          </span>
        </div>

        <h1 className="font-['Bricolage_Grotesque'] text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight">
          Guía de Centros de Atención de Salud de Jujuy
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
          Directorio completo de Hospitales, Centros de Atención Primaria (CAPS), guardias 24 hs y dispositivos comunitarios de la provincia para recibir atención médica y acompañamiento.
        </p>

        {/* Contactos Oficiales y Herramientas (Facebook, Instagram y Exportar/Descargar PDF) */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={INFO_INSTITUCIONAL.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile-sm inline-flex items-center gap-2 px-3.5 py-2 bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-['Space_Grotesk'] font-bold rounded-sm border-2 border-black shadow-hard-sm"
          >
            <Facebook className="w-4 h-4" />
            <span>Facebook: {INFO_INSTITUCIONAL.facebookNombre}</span>
          </a>
          <a
            href={INFO_INSTITUCIONAL.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile-sm inline-flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-['Space_Grotesk'] font-bold rounded-sm border-2 border-black shadow-hard-sm"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram: {INFO_INSTITUCIONAL.instagramHandle}</span>
          </a>
          <button
            type="button"
            onClick={handlePrintPdf}
            className="btn-tactile-sm inline-flex items-center gap-2 px-4 py-2 bg-[#e02128] hover:bg-[#c91a21] text-white text-xs font-['Space_Grotesk'] font-bold rounded-sm border-2 border-black shadow-hard-sm cursor-pointer"
            title="Descargar o imprimir la guía como documento PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Descargar / Imprimir Guía en PDF</span>
          </button>
        </div>
      </div>

      {/* 2. Tarjeta Destacada con Líneas de Emergencia y Contacto Territorial */}
      <div className="border-4 border-black bg-white rounded-sm shadow-hard-lg p-6 sm:p-8 space-y-6">
        
        <div className="border-b-2 border-black pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="font-['Space_Grotesk'] text-xs font-black uppercase text-[#e02128] tracking-widest block">
              Atención Inmediata & Territorial
            </span>
            <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl font-black text-black">
              Líneas de Asistencia Gratuita y Dispositivos de Apoyo
            </h2>
          </div>

          <button
            type="button"
            onClick={handlePrintPdf}
            className="btn-tactile-sm self-start md:self-auto inline-flex items-center gap-2 px-3 py-1.5 bg-[#fef08a] hover:bg-[#fde047] text-black text-xs font-['Space_Grotesk'] font-bold rounded-xs border-2 border-black shadow-hard-sm cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#e02128]" />
            <span>Imprimir Afiche para el Barrio</span>
          </button>
        </div>

        {/* Grilla de Líneas de Emergencia */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Salud Mental 0800 */}
          <div className="bg-[#fff5f5] border-2 border-black p-4 rounded-sm flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase text-[#e02128] block">
                Salud Mental Escucha Jujuy
              </span>
              <strong className="font-['Space_Grotesk'] text-2xl font-black text-black block">
                {INFO_INSTITUCIONAL.telefonoSaludMental}
              </strong>
              <p className="text-xs text-neutral-600">
                Línea telefónica provincial gratuita. Acompañamiento, contención y orientación las 24 hs.
              </p>
            </div>
            <a
              href={`tel:${INFO_INSTITUCIONAL.telefonoSaludMental.replace(/\s+/g, '')}`}
              className="btn-tactile-sm w-full py-2 bg-[#e02128] hover:bg-[#c91a21] text-white border border-black rounded-xs text-xs font-['Space_Grotesk'] font-bold uppercase text-center flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Llamar al 0800</span>
            </a>
          </div>

          {/* SAME 107 Emergencias */}
          <div className="bg-white border-2 border-black p-4 rounded-sm flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase text-neutral-600 block">
                Emergencias Médicas Provinciales
              </span>
              <strong className="font-['Space_Grotesk'] text-2xl font-black text-black block">
                107 (SAME Jujuy)
              </strong>
              <p className="text-xs text-neutral-600">
                Servicio de ambulancias, urgencias de salud y traslados médicos en toda la provincia.
              </p>
            </div>
            <a
              href="tel:107"
              className="btn-tactile-sm w-full py-2 bg-black hover:bg-neutral-800 text-white border border-black rounded-xs text-xs font-['Space_Grotesk'] font-bold uppercase text-center flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Llamar al 107</span>
            </a>
          </div>

          {/* Casa Esquina Libertad */}
          <div className="bg-[#f0fdf4] border-2 border-emerald-600 p-4 rounded-sm flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase text-emerald-800 block">
                Dispositivo Comunitario (San Pedrito)
              </span>
              <strong className="font-['Space_Grotesk'] text-lg font-black text-black block">
                Casa Esquina Libertad
              </strong>
              <p className="text-xs text-neutral-700">
                {INFO_INSTITUCIONAL.direccion}. Titular: <strong>Gustavo Lepori</strong> ({INFO_INSTITUCIONAL.whatsappTitular}).
              </p>
            </div>
            <a
              href={`https://wa.me/${INFO_INSTITUCIONAL.whatsappRaw}?text=${encodeURIComponent(
                'Hola Gustavo, me comunico desde la Guía de Centros de Salud de Casa Esquina Libertad.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile-sm w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white border border-black rounded-xs text-xs font-['Space_Grotesk'] font-bold uppercase text-center flex items-center justify-center gap-1.5"
            >
              <span>WhatsApp con Gustavo</span>
            </a>
          </div>
        </div>

        {/* Mensaje de orientación */}
        <div className="bg-[#fdfbf7] border-2 border-black p-4 rounded-sm flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs text-neutral-700 space-y-1">
            <p className="font-bold text-black">
              ¿Cómo acceder a la atención?
            </p>
            <p>
              Podés concurrir al CAPS más cercano a tu domicilio o a la guardia del hospital de tu zona. En caso de consumos problemáticos o crisis de salud mental, podés acudir a los centros especializados o a <strong>Casa Esquina Libertad</strong> para recibir orientación y contención comunitaria.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Buscador y Filtro de Centros */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b-2 border-black pb-4">
          
          {/* Categorías */}
          <div className="flex flex-wrap gap-2">
            {tipos.map((t) => (
              <button
                key={t.id}
                onClick={() => setFiltroTipo(t.id)}
                className={`btn-tactile-sm px-3.5 py-1.5 text-xs font-['Space_Grotesk'] font-bold uppercase rounded-xs border-2 border-black cursor-pointer ${
                  filtroTipo === t.id
                    ? 'bg-[#e02128] text-white shadow-hard-sm'
                    : 'bg-white text-black hover:bg-neutral-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Campo de Búsqueda */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por barrio, centro o servicio..."
              className="w-full pl-9 pr-3 py-2 bg-white border-2 border-black rounded-xs text-xs font-['Space_Grotesk'] focus:outline-none"
            />
          </div>

        </div>

        {/* 4. Listado de Centros de Salud */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centrosFiltrados.map((centro) => {
            const esCasaEsquina = centro.id === 'casa-esquina-libertad';
            const esSaludMental = centro.tipo === 'Salud Mental y Consumos';

            return (
              <div
                key={centro.id}
                className={`border-3 border-black p-5 rounded-sm shadow-hard flex flex-col justify-between ${
                  esCasaEsquina
                    ? 'bg-[#fff5f5] border-[#e02128]'
                    : esSaludMental
                    ? 'bg-[#f0f9ff]'
                    : 'bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`px-2 py-0.5 text-[10px] font-['Space_Grotesk'] font-bold uppercase rounded-xs border border-black ${
                        esCasaEsquina
                          ? 'bg-[#e02128] text-white'
                          : esSaludMental
                          ? 'bg-[#0284c7] text-white'
                          : 'bg-[#fef08a] text-black'
                      }`}
                    >
                      {centro.tipo}
                    </span>

                    {centro.guardia24hs && (
                      <span className="bg-emerald-600 text-white text-[9px] font-['Space_Grotesk'] font-black uppercase px-1.5 py-0.5 rounded-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Guardia 24 hs</span>
                      </span>
                    )}
                  </div>

                  <h4 className="font-['Bricolage_Grotesque'] text-xl font-black text-black leading-tight">
                    {centro.nombre}
                  </h4>

                  <div className="mt-2 text-xs text-neutral-700 space-y-1">
                    <p className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#e02128] shrink-0 mt-0.5" />
                      <span>{centro.direccion} ({centro.zona}, {centro.localidad})</span>
                    </p>
                    <p className="flex items-center gap-1.5 font-bold text-black pt-1">
                      <PhoneCall className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                      <span>{centro.telefono}</span>
                    </p>
                  </div>

                  {/* Servicios ofrecidos */}
                  <div className="mt-3 pt-2.5 border-t border-neutral-200">
                    <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase text-neutral-500 block mb-1">
                      Servicios principales:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {centro.servicios.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] bg-white border border-black/30 px-1.5 py-0.5 rounded-xs font-['Space_Grotesk'] text-neutral-800"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botón de Llamada o Contacto */}
                <div className="mt-5 pt-3 border-t-2 border-black flex items-center justify-between gap-2">
                  <a
                    href={
                      centro.telefonoLlamada.startsWith('549')
                        ? `https://wa.me/${centro.telefonoLlamada}`
                        : `tel:${centro.telefonoLlamada}`
                    }
                    target={centro.telefonoLlamada.startsWith('549') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="btn-tactile-sm w-full py-2 bg-black hover:bg-[#e02128] text-white border border-black rounded-xs text-xs font-['Space_Grotesk'] font-bold uppercase text-center flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>
                      {centro.telefonoLlamada.startsWith('549') ? 'WhatsApp' : 'Llamar al Centro'}
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Cierre con Mensaje Comunitario */}
      <div className="border-3 border-black bg-[#dcf0fb] p-6 rounded-sm shadow-hard text-center space-y-2">
        <p className="font-['Bricolage_Grotesque'] text-lg sm:text-xl font-black text-black">
          "Cada persona, espacio o institución del barrio puede ser parte de tu red."
        </p>
        <p className="font-['Space_Grotesk'] text-xs text-neutral-700">
          Ante dudas podés comunicarte con Casa Esquina Libertad en {INFO_INSTITUCIONAL.direccion} (Barrio San Pedrito) o al WhatsApp de Gustavo Lepori ({INFO_INSTITUCIONAL.whatsappTitular}).
        </p>
      </div>

    </div>
  );
};
