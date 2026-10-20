import { SenalAlerta, ClavePrevencion, ElementoTriada, PilarAcompanamiento, NodoRed, CentroSalud } from '../types';

export const CENTROS_SALUD_JUJUY: CentroSalud[] = [
  {
    id: 'casa-esquina-libertad',
    nombre: 'Casa Esquina Libertad',
    tipo: 'Dispositivo Comunitario',
    localidad: 'San Salvador de Jujuy',
    zona: 'Barrio San Pedrito',
    direccion: 'Párroco Marshke Nº 1588',
    telefono: '+54 9 3884 76-3412 (Gustavo Lepori)',
    telefonoLlamada: '5493884763412',
    guardia24hs: false,
    servicios: ['Primera Escucha', 'Reducción de Daños', 'Salud Mental Comunitaria', 'Orientación Familiar', 'Abordaje de Consumos']
  },
  {
    id: 'hosp-sequeiros',
    nombre: 'Hospital Dr. Néstor Sequeiros',
    tipo: 'Salud Mental y Consumos',
    localidad: 'San Salvador de Jujuy',
    zona: 'Centro / Santibáñez',
    direccion: 'Av. Santibáñez 1400',
    telefono: '(0388) 424-4061',
    telefonoLlamada: '03884244061',
    guardia24hs: true,
    servicios: ['Guardia de Salud Mental 24 hs', 'Internación Breve', 'Consultorios Externos', 'Abordaje de Adicciones', 'Psicología y Psiquiatría']
  },
  {
    id: 'caps-san-pedrito',
    nombre: 'CAPS San Pedrito',
    tipo: 'CAPS',
    localidad: 'San Salvador de Jujuy',
    zona: 'Barrio San Pedrito',
    direccion: 'Almirante Brown y Gobernador Tello',
    telefono: '(0388) 425-1044',
    telefonoLlamada: '03884251044',
    guardia24hs: false,
    servicios: ['Atención Primaria', 'Medicina General', 'Enfermería', 'Salud Comunitaria', 'Vacunación', 'Farmacia']
  },
  {
    id: 'caps-coronel-arias',
    nombre: 'CAPS Coronel Arias',
    tipo: 'CAPS',
    localidad: 'San Salvador de Jujuy',
    zona: 'Barrio Coronel Arias',
    direccion: 'Monteagudo esq. República del Líbano',
    telefono: '(0388) 425-2311',
    telefonoLlamada: '03884252311',
    guardia24hs: false,
    servicios: ['Medicina Familiar', 'Pediatría', 'Obstetricia', 'Enfermería', 'Apoyo Psicosocial']
  },
  {
    id: 'caps-malvinas',
    nombre: 'CAPS Malvinas Argentinas',
    tipo: 'CAPS',
    localidad: 'San Salvador de Jujuy',
    zona: 'Barrio Malvinas',
    direccion: 'Av. Sajama esq. Cabo Quispe',
    telefono: '(0388) 425-6789',
    telefonoLlamada: '03884256789',
    guardia24hs: false,
    servicios: ['Atención Primaria', 'Clínica Médica', 'Trabajo Social', 'Salud Integral']
  },
  {
    id: 'caps-12-octubre',
    nombre: 'CAPS 12 de Octubre',
    tipo: 'CAPS',
    localidad: 'San Salvador de Jujuy',
    zona: 'Barrio 12 de Octubre',
    direccion: 'Calle 9 de Julio esq. Pampa',
    telefono: '(0388) 425-4422',
    telefonoLlamada: '03884254422',
    guardia24hs: false,
    servicios: ['Consultorios Barriales', 'Enfermería', 'Promoción de la Salud', 'Nutrición']
  },
  {
    id: 'hosp-soria',
    nombre: 'Hospital Pablo Soria',
    tipo: 'Hospital',
    localidad: 'San Salvador de Jujuy',
    zona: 'Centro',
    direccion: 'Gral. Güemes 1345',
    telefono: '(0388) 422-1256 / 422-1257',
    telefonoLlamada: '03884221256',
    guardia24hs: true,
    servicios: ['Guardia Central 24 hs', 'Trauma y Emergencias', 'Cirugía', 'Terapia Intensiva', 'Hospital de Alta Complejidad']
  },
  {
    id: 'hosp-san-roque',
    nombre: 'Hospital San Roque',
    tipo: 'Hospital',
    localidad: 'San Salvador de Jujuy',
    zona: 'Centro',
    direccion: 'San Martín 330',
    telefono: '(0388) 422-1300',
    telefonoLlamada: '03884221300',
    guardia24hs: true,
    servicios: ['Infectología', 'Clínica Médica Especializada', 'Neumonología', 'Diagnóstico']
  },
  {
    id: 'hosp-materno',
    nombre: 'Hospital Materno Infantil Dr. Héctor Quintana',
    tipo: 'Hospital',
    localidad: 'San Salvador de Jujuy',
    zona: 'Los Perales / Chijra',
    direccion: 'José Hernández 624',
    telefono: '(0388) 424-5000',
    telefonoLlamada: '03884245000',
    guardia24hs: true,
    servicios: ['Guardia Pediátrica 24 hs', 'Maternidad', 'Neonatología', 'Salud Infanto-Juvenil']
  },
  {
    id: 'cepla-forestal',
    nombre: 'DIAT / CePLA Alto Comedero',
    tipo: 'Salud Mental y Consumos',
    localidad: 'San Salvador de Jujuy',
    zona: 'Alto Comedero',
    direccion: 'B° Forestal - Alto Comedero',
    telefono: '(0388) 405-3211',
    telefonoLlamada: '03884053211',
    guardia24hs: false,
    servicios: ['Centro de Día', 'Abordaje Comunitario de Consumos', 'Talleres Terapéuticos', 'Acompañamiento']
  },
  {
    id: 'hosp-gallardo',
    nombre: 'Hospital Dr. Wenceslao Gallardo',
    tipo: 'Hospital',
    localidad: 'Palpalá',
    zona: 'Palpalá',
    direccion: 'Av. Río de la Plata s/n',
    telefono: '(0388) 427-1111',
    telefonoLlamada: '03884271111',
    guardia24hs: true,
    servicios: ['Guardia 24 hs', 'Clínica Médica', 'Pediatría', 'Maternidad']
  },
  {
    id: 'hosp-paterson',
    nombre: 'Hospital Dr. Guillermo Paterson',
    tipo: 'Hospital',
    localidad: 'San Pedro de Jujuy',
    zona: 'San Pedro',
    direccion: 'Alberdi 350',
    telefono: '(03888) 42-0050',
    telefonoLlamada: '03888420050',
    guardia24hs: true,
    servicios: ['Guardia General', 'Internación', 'Salud Mental Regional', 'Especialidades']
  }
];

export const INFO_INSTITUCIONAL = {
  nombre: 'Casas Esquina Libertad',
  lemaPrincipal: 'PREVENIR TAMBIÉN ES CUIDAR',
  bajada: 'Consumos Problemáticos y Salud Mental Popular: Informarnos, hablar y pedir ayuda a tiempo también es una forma de cuidarnos.',
  lemaComunitario: 'Nadie se salva solo/a',
  lemaAbordaje: 'El abordaje es colectivo y comunitario',
  lemaRedes: 'No estás solo ni sola',
  direccion: 'Párroco Marshke Nº 1588',
  barrio: 'Barrio San Pedrito',
  titularNombre: 'Gustavo Lepori',
  titularRol: 'Titular / Referente Casa Esquina Libertad',
  whatsappTitular: '+54 9 3884 76-3412',
  whatsappRaw: '5493884763412',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61577700470534',
  facebookNombre: 'Casas Esquina Libertad',
  instagramUrl: 'https://www.instagram.com/casasesquinalibertad_jujuy/',
  instagramHandle: '@casasesquinalibertad_jujuy',
  telefonoSaludMental: '0800 888 4767',
  horarioSaludMental: 'Atención gratuita 24 hs',
  telefonoEmergencias: '107',
  emergenciasNombre: 'Emergencias (SAME)',
  mensajeCierre: 'Si algo te preocupa, hablalo con una persona de confianza o acercate al dispositivo comunitario. Pedir ayuda también es prevenir.',
  definicionConsumos: 'Son situaciones donde el consumo de una sustancia o conducta comienza a afectar la salud, los vínculos y el bienestar cotidiano.',
  contextoTexto: 'No aislamos a la persona: entendemos el consumo en su contexto (Sustancia - Persona - Contexto).',
  notaPrevenir: 'Prevenir es hablar, informarnos y cuidar los vínculos a tiempo.'
};

export const PILARES_ACOMPANAMIENTO: PilarAcompanamiento[] = [
  {
    id: 'primera-escucha',
    title: 'La Primera Escucha:',
    subtitle: 'Recepción singular e integral',
    description: 'Un espacio central de recepción, singular e integral. Escuchamos sin juzgar, con empatía y habilitando la palabra del sujeto.',
    colorTheme: 'yellow',
    iconType: 'escucha'
  },
  {
    id: 'reduccion-danos',
    title: 'Reducción de Daños:',
    subtitle: 'Estrategia humanizadora',
    description: 'Una estrategia humanizadora que busca disminuir riesgos sin exigir la abstinencia como condición previa. Respetamos los saberes, tiempos y decisiones de cada persona.',
    colorTheme: 'cyan',
    iconType: 'danos'
  },
  {
    id: 'recomponer-proyectos',
    title: 'Recomponer Proyectos de Vida:',
    subtitle: 'Vínculos, entusiasmo y herramientas',
    description: 'Generamos vínculos, entusiasmo y herramientas para que las personas puedan reinscribirse en el mundo con dignidad y derechos.',
    colorTheme: 'pink',
    iconType: 'proyectos'
  }
];

export const MAPA_REDES_NODOS: NodoRed[] = [
  {
    id: 'familia',
    label: 'Familia y afectos',
    color: '#f97316',
    bgClass: 'bg-[#fb923c]',
    borderClass: 'border-[#ea580c]',
    textClass: 'text-black',
    iconType: 'familia',
    description: 'Madres, padres, parejas, hermanos, personas significativas del entorno familiar.',
    comoAporta: 'Brindan contención afectiva básica, abrigo cotidiano y sostén en los momentos de mayor vulnerabilidad.'
  },
  {
    id: 'escuela-clubes',
    label: 'Escuela / Clubes',
    color: '#0ea5e9',
    bgClass: 'bg-[#38bdf8]',
    borderClass: 'border-[#0284c7]',
    textClass: 'text-black',
    iconType: 'escuela',
    description: 'Centros educativos, clubes de barrio, canchas, bibliotecas y espacios formativos.',
    comoAporta: 'Espacios de pertenencia social, juego, aprendizaje y construcción de proyectos fuera del consumo.'
  },
  {
    id: 'casa-esquina',
    label: 'Casa Esquina Libertad',
    color: '#e02128',
    bgClass: 'bg-[#ef4444]',
    borderClass: 'border-[#b91c1c]',
    textClass: 'text-white',
    iconType: 'casa',
    description: 'Dispositivo comunitario de salud mental y abordaje de consumos en Barrio San Pedrito.',
    comoAporta: 'Primera escucha sin juzgar, reducción de daños, orientación y acompañamiento integral.'
  },
  {
    id: 'caps-hospital',
    label: 'CAPS y Hospital',
    color: '#22c55e',
    bgClass: 'bg-[#4ade80]',
    borderClass: 'border-[#16a34a]',
    textClass: 'text-black',
    iconType: 'caps',
    description: 'Centros de Atención Primaria de la Salud (CAPS), salas barriales y hospitales públicos.',
    comoAporta: 'Atención clínica, cuidado de la salud física, desintoxicación y seguimiento interdisciplinario.'
  },
  {
    id: 'amigos-vecinos',
    label: 'Amigos y vecinos',
    color: '#a855f7',
    bgClass: 'bg-[#c084fc]',
    borderClass: 'border-[#9333ea]',
    textClass: 'text-black',
    iconType: 'amigos',
    description: 'Amistades del barrio, vecinos de la cuadra, grupos de pares y referentes barriales.',
    comoAporta: 'Cuidado cotidiano en la esquina, alerta ante situaciones de riesgo y empatía entre pares.'
  }
];

export const ELEMENTOS_TRIADA: ElementoTriada[] = [
  {
    id: 'sustancia',
    title: 'Sustancia',
    question: '¿Qué se consume?',
    description: 'El tipo de sustancia o conducta determinada, la frecuencia, la cantidad y los efectos físicos y psicológicos que produce en el organismo.'
  },
  {
    id: 'persona',
    title: 'Persona',
    question: '¿Quién consume?',
    description: 'Su historia de vida, sus emociones, dolores, vivencias individuales, recursos personales y momento anímico por el que está atravesando.'
  },
  {
    id: 'contexto',
    title: 'Contexto',
    question: '¿Dónde y cómo se vive?',
    description: 'El barrio, las relaciones familiares, la situación laboral o económica, la presencia de redes de apoyo y las condiciones cotidianas.'
  }
];

export const SENALES_ALERTA: SenalAlerta[] = [
  {
    id: 'senal-1',
    number: 1,
    text: 'Cambios importantes en el comportamiento o hábitos cotidianos.',
    detail: 'Modificaciones repentinas en el sueño, la alimentación, el estado de ánimo o el cuidado personal habitual.',
    iconName: 'alert'
  },
  {
    id: 'senal-2',
    number: 2,
    text: 'Aislamiento o conflictos frecuentes con el entorno.',
    detail: 'Alejarse de amistades de siempre, encerrarse o tener discusiones reiteradas con la familia o personas queridas.',
    iconName: 'users'
  },
  {
    id: 'senal-3',
    number: 3,
    text: 'Dificultades para sostener el estudio, el trabajo o los espacios habituales.',
    detail: 'Inasistencias reiteradas, falta de concentración o abandono de proyectos y rutinas que antes formaban parte del día a día.',
    iconName: 'briefcase'
  },
  {
    id: 'senal-4',
    number: 4,
    text: 'Cuando el consumo pasa a ocupar un lugar central en la vida.',
    detail: 'Pérdida de control sobre el consumo o sentir que las actividades, pensamientos y tiempos giran exclusivamente alrededor de este.',
    iconName: 'link'
  }
];

export const CLAVES_PREVENCION: ClavePrevencion[] = [
  {
    id: 'clave-1',
    number: 1,
    title: 'Hablar sobre lo que sentimos',
    description: 'Poner en palabras las angustias, miedos o presiones diarias. Hablar alivia el peso y abre caminos de contención.',
    iconName: 'message',
    bgClass: 'bg-[#ff7a70]',
    iconClass: 'text-white'
  },
  {
    id: 'clave-2',
    number: 2,
    title: 'Escuchar sin juzgar',
    description: 'Recibir al otro con respeto, sin reproches ni acusaciones. La empatía genera un espacio seguro para pedir auxilio.',
    iconName: 'ear',
    bgClass: 'bg-[#2ea89d]',
    iconClass: 'text-white'
  },
  {
    id: 'clave-3',
    number: 3,
    title: 'Promover espacios de encuentro, deporte y cultura comunitaria',
    description: 'Compartir momentos saludables que fortalezcan el sentido de pertenencia y el bienestar físico y emocional.',
    iconName: 'community',
    bgClass: 'bg-[#f59e0b]',
    iconClass: 'text-white'
  },
  {
    id: 'clave-4',
    number: 4,
    title: 'Fortalecer vínculos y redes de apoyo en el barrio',
    description: 'Construir comunidad entre vecinos, familias y organizaciones locales. Los lazos solidarios sostienen en momentos difíciles.',
    iconName: 'home',
    bgClass: 'bg-[#6366f1]',
    iconClass: 'text-white'
  },
  {
    id: 'clave-5',
    number: 5,
    title: 'Recordar que pedir ayuda no es una debilidad',
    description: 'Reconocer que no podemos solos y acudir a profesionales o personas de confianza es un acto de valentía y cuidado propio.',
    iconName: 'heart',
    bgClass: 'bg-[#38bdf8]',
    iconClass: 'text-white'
  }
];
