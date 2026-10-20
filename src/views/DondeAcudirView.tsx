import React, { useState } from 'react';
import { INFO_INSTITUCIONAL } from '../data/mockData';
import { MapPin, PhoneCall, Heart, Send, CheckCircle2, MessageSquare, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { NavigationTab } from '../types';

interface DondeAcudirViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenAyuda: () => void;
}

export const DondeAcudirView: React.FC<DondeAcudirViewProps> = ({ onNavigate, onOpenAyuda }) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [consulta, setConsulta] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [whatsappUrlGenerada, setWhatsappUrlGenerada] = useState('');

  const buildWhatsappLink = (name: string, phone: string, msg: string) => {
    const texto = `Hola Gustavo, me comunico a través del sitio web de Casa Esquina Libertad.\n\n*Nombre:* ${name}\n*Teléfono de contacto:* ${phone}${
      msg.trim() ? `\n*Consulta / Mensaje:* ${msg.trim()}` : ''
    }\n\nQuisiera información sobre el acompañamiento del dispositivo comunitario.`;
    return `https://wa.me/${INFO_INSTITUCIONAL.whatsappRaw}?text=${encodeURIComponent(texto)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !telefono.trim()) return;

    const url = buildWhatsappLink(nombre, telefono, consulta);
    setWhatsappUrlGenerada(url);
    setEnviado(true);

    // Abrir WhatsApp en una nueva pestaña
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const whatsappDirectoUrl = `https://wa.me/${INFO_INSTITUCIONAL.whatsappRaw}?text=${encodeURIComponent(
    'Hola Gustavo, me comunico desde la página de Casa Esquina Libertad para hacer una consulta.'
  )}`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-16">
      
      {/* 1. Encabezado Oficial */}
      <div className="text-center space-y-3">
        <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#e02128]">
          Atención & Dispositivo Comunitario
        </span>
        <h1 className="font-['Bricolage_Grotesque'] text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight">
          Dónde Acudir y Pedir Ayuda
        </h1>
        <p className="text-sm text-neutral-600 max-w-xl mx-auto">
          Tanto de forma presencial en nuestro dispositivo como a través de WhatsApp directo con el titular o las líneas telefónicas gratuitas 24 horas.
        </p>
      </div>

      {/* 2. Tarjetas de Acudida Directa Oficiales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Tarjeta 1: Dispositivo Comunitario Casa Esquina Libertad */}
        <div className="border-3 border-black bg-[#f0f9ff] p-6 sm:p-8 rounded-sm shadow-hard flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center border-2 border-black">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-['Space_Grotesk'] text-[11px] font-bold uppercase text-[#1e3a8a] block">
                  Dispositivo Comunitario
                </span>
                <h3 className="font-['Bricolage_Grotesque'] text-2xl font-black text-black">
                  {INFO_INSTITUCIONAL.nombre}
                </h3>
              </div>
            </div>

            <div className="bg-white border-2 border-black p-4 rounded-sm">
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase text-neutral-500 block mb-0.5">
                Dirección Física
              </span>
              <p className="font-['Bricolage_Grotesque'] text-xl font-bold text-black">
                {INFO_INSTITUCIONAL.direccion}
              </p>
              <p className="text-sm font-semibold text-[#e02128]">
                {INFO_INSTITUCIONAL.barrio}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Acercate a conversar con nosotros. Promovemos espacios de encuentro, escucha sin juzgar y acompañamiento cercano en el barrio.
            </p>
          </div>

          <div className="pt-4 border-t-2 border-neutral-300">
            <span className="inline-block bg-black text-white px-3 py-1 text-xs font-['Space_Grotesk'] font-bold uppercase rounded-xs">
              Atención Comunitaria en Barrio San Pedrito
            </span>
          </div>
        </div>

        {/* Tarjeta 2: Vías de Contacto Directo */}
        <div className="space-y-4">
          
          {/* WhatsApp Directo con Gustavo Lepori (Titular) */}
          <div className="border-3 border-black bg-[#f0fdf4] p-5 rounded-sm shadow-hard space-y-2 border-emerald-600">
            <div className="flex items-center justify-between">
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-emerald-800">
                Contacto Directo WhatsApp
              </span>
              <span className="bg-emerald-600 text-white text-[10px] font-['Space_Grotesk'] font-black uppercase px-2 py-0.5 rounded-xs border border-black">
                TITULAR
              </span>
            </div>

            <div>
              <h3 className="font-['Bricolage_Grotesque'] text-xl font-black text-black">
                {INFO_INSTITUCIONAL.titularNombre}
              </h3>
              <p className="text-xs text-neutral-600 font-medium">
                {INFO_INSTITUCIONAL.titularRol}
              </p>
              <p className="font-['Space_Grotesk'] text-2xl font-black text-emerald-700 tracking-tight mt-1">
                {INFO_INSTITUCIONAL.whatsappTitular}
              </p>
            </div>

            <a
              href={whatsappDirectoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-hard-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Escribir por WhatsApp a Gustavo</span>
            </a>
          </div>

          {/* Salud Mental Escucha */}
          <div className="border-3 border-black bg-[#fff5f5] p-4 rounded-sm shadow-hard space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#e02128]">
                Atención Telefónica Gratuita
              </span>
              <span className="bg-[#e02128] text-white text-[10px] font-['Space_Grotesk'] font-black uppercase px-2 py-0.5 rounded-xs border border-black">
                24 HS GRATIS
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-['Bricolage_Grotesque'] text-base font-black text-black">
                  Salud Mental Escucha
                </h4>
                <p className="font-['Space_Grotesk'] text-xl font-black text-[#e02128]">
                  {INFO_INSTITUCIONAL.telefonoSaludMental}
                </p>
              </div>
              <a
                href={`tel:${INFO_INSTITUCIONAL.telefonoSaludMental.replace(/\s+/g, '')}`}
                className="btn-tactile px-4 py-2 bg-[#e02128] text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-hard-sm cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Llamar</span>
              </a>
            </div>
          </div>

          {/* SAME 107 */}
          <div className="border-2 border-black bg-white p-3.5 rounded-sm flex items-center justify-between gap-4">
            <div>
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase text-neutral-500 block">
                Urgencias Médicas
              </span>
              <h4 className="font-['Bricolage_Grotesque'] text-sm font-bold text-black">
                {INFO_INSTITUCIONAL.emergenciasNombre}: <strong>{INFO_INSTITUCIONAL.telefonoEmergencias}</strong>
              </h4>
            </div>

            <a
              href={`tel:${INFO_INSTITUCIONAL.telefonoEmergencias}`}
              className="btn-tactile px-3 py-1.5 bg-black text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer whitespace-nowrap"
            >
              Marcar 107
            </a>
          </div>

          {/* Redes Sociales Oficiales */}
          <div className="border-3 border-black bg-white p-4 rounded-sm shadow-hard space-y-2">
            <span className="font-['Space_Grotesk'] text-[11px] font-bold uppercase text-[#e02128] block">
              Redes Sociales Oficiales
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href={INFO_INSTITUCIONAL.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile-sm flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2 px-3 bg-[#1877F2] text-white border border-black rounded-xs text-xs font-['Space_Grotesk'] font-bold uppercase"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook Oficial</span>
              </a>
              <a
                href={INFO_INSTITUCIONAL.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile-sm flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white border border-black rounded-xs text-xs font-['Space_Grotesk'] font-bold uppercase"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram Oficial</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* 3. Formulario de Envío de Mensaje Directo al WhatsApp de Gustavo Lepori */}
      <div className="border-3 border-black bg-[#fdfbf7] p-6 sm:p-8 rounded-sm shadow-hard">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="text-center space-y-1">
            <span className="bg-emerald-100 text-emerald-800 text-[11px] font-['Space_Grotesk'] font-black uppercase px-2.5 py-0.5 rounded-xs border border-emerald-600 inline-block mb-1">
              Envío directo a WhatsApp
            </span>
            <h3 className="font-['Bricolage_Grotesque'] text-2xl font-black text-black">
              Enviar Mensaje al Titular (Gustavo Lepori)
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              Completá tus datos y al pulsar «Enviar por WhatsApp» se abrirá la conversación directamente con Gustavo Lepori ({INFO_INSTITUCIONAL.whatsappTitular}).
            </p>
          </div>

          {!enviado ? (
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 border-2 border-black rounded-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Space_Grotesk'] text-xs font-bold uppercase text-neutral-800 mb-1">
                    Tu Nombre o Apodo *
                  </label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Juan, María..."
                    className="w-full px-3.5 py-2.5 bg-[#fdfbf7] border-2 border-black rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#e02128]"
                  />
                </div>

                <div>
                  <label className="block font-['Space_Grotesk'] text-xs font-bold uppercase text-neutral-800 mb-1">
                    Tu Teléfono o WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Para que Gustavo pueda responderte"
                    className="w-full px-3.5 py-2.5 bg-[#fdfbf7] border-2 border-black rounded-sm text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Space_Grotesk'] text-xs font-bold uppercase text-neutral-800 mb-1">
                  Tu Mensaje o Consulta (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={consulta}
                  onChange={(e) => setConsulta(e.target.value)}
                  placeholder="Escribí lo que desees consultar sobre el acompañamiento o para acercarte a la Casa..."
                  className="w-full px-3.5 py-2.5 bg-[#fdfbf7] border-2 border-black rounded-sm text-sm focus:outline-none"
                />
              </div>

              <div className="bg-[#f0fdf4] p-3 border border-emerald-500 rounded-xs text-xs text-emerald-900 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  El mensaje se enviará al número oficial: <strong>{INFO_INSTITUCIONAL.whatsappTitular}</strong> (Gustavo Lepori).
                </span>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="btn-tactile px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider shadow-hard-sm cursor-pointer flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar por WhatsApp a Gustavo</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white border-2 border-black p-6 rounded-sm text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-['Bricolage_Grotesque'] text-2xl font-black text-black">
                ¡Mensaje preparado para Gustavo Lepori!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 max-w-md mx-auto">
                Si no se abrió automáticamente tu aplicación de WhatsApp, podés presionar el botón de abajo para enviar el mensaje directamente:
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={whatsappUrlGenerada}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile px-6 py-3 bg-emerald-600 text-white border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider flex items-center gap-2 shadow-hard-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Abrir WhatsApp ({INFO_INSTITUCIONAL.whatsappTitular})</span>
                </a>
                <button
                  onClick={() => setEnviado(false)}
                  className="btn-tactile px-4 py-2 bg-white text-black border-2 border-black rounded-sm text-xs font-['Space_Grotesk'] font-bold uppercase"
                >
                  Escribir otro mensaje
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. Cierre con el Mensaje del Folleto */}
      <div className="border-3 border-black bg-[#dcf0fb] p-6 rounded-sm shadow-hard text-center">
        <div className="text-xl text-[#e02128] mb-1">♡</div>
        <p className="font-['Bricolage_Grotesque'] text-lg sm:text-xl font-black text-black">
          "{INFO_INSTITUCIONAL.mensajeCierre}"
        </p>
      </div>

    </div>
  );
};
