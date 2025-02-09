'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

import { Theme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#1769aa',
    },
    secondary: {
      main: '#f44336',
      light: 'rgba(0, 185, 0, 1)'
    },
  },
});

export default theme;
