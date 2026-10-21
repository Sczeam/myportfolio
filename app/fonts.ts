import { Instrument_Sans, Martian_Mono } from 'next/font/google';

// Instrument Sans: display and text. The width axis gives the condensed display cut.
export const sans = Instrument_Sans({ subsets: ['latin'], axes: ['wdth'], variable: '--font-sans', display: 'swap' });

// Martian Mono: machine output only (the job log, timings, status chips).
export const mono = Martian_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });
