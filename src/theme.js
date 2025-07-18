// src/theme.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00ffff',
    },
    background: {
      default: '#f9f9f9',
      paper: '#ffffff',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ffff',
    },
    background: {
      default: '#0f0f0f',
      paper: '#1c1c1e',
    },
  },
});
