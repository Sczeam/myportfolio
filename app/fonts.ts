import { Archivo, Literata } from 'next/font/google';

// Archivo: spine lettering, display and UI. The width axis gives one family from condensed to normal.
export const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' });

// Literata: the reading voice, and every book title in italics.
export const literata = Literata({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-literata',
  display: 'swap',
});
