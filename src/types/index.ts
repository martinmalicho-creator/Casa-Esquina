export type NavigationTab =
  | 'inicio'
  | 'forma-acompanar'
  | 'que-son'
  | 'senales'
  | 'mapa-redes'
  | 'guia-salud'
  | 'donde-acudir';

export interface CentroSalud {
  id: string;
  nombre: string;
  tipo: 'Hospital' | 'CAPS' | 'Salud Mental y Consumos' | 'Dispositivo Comunitario';
  localidad: string;
  zona: string;
  direccion: string;
  telefono: string;
  telefonoLlamada: string;
  guardia24hs?: boolean;
  servicios: string[];
}

export interface PilarAcompanamiento {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  colorTheme: 'yellow' | 'cyan' | 'pink';
  iconType: 'escucha' | 'danos' | 'proyectos';
}

export interface NodoRed {
  id: string;
  label: string;
  color: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  iconType: 'familia' | 'escuela' | 'casa' | 'caps' | 'amigos';
  description: string;
  comoAporta: string;
}

export interface SenalAlerta {
  id: string;
  number: number;
  text: string;
  detail: string;
  iconName: 'alert' | 'users' | 'briefcase' | 'link';
}

export interface ClavePrevencion {
  id: string;
  number: number;
  title: string;
  description: string;
  iconName: 'message' | 'ear' | 'community' | 'home' | 'heart';
  bgClass: string;
  iconClass: string;
}

export interface ElementoTriada {
  id: string;
  title: string;
  question: string;
  description: string;
}
