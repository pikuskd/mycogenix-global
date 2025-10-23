// src/ThemeProvider.js
import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Create Context to toggle mode
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const AppThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#2E7D32',
            light: '#4CAF50',
            dark: '#1B5E20',
          },
          secondary: {
            main: '#FF6F00',
            light: '#FF9800',
            dark: '#E65100',
          },
          background: {
            default: mode === 'light' ? '#F5F5F5' : '#121212',
            paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
          },
          text: {
            primary: mode === 'light' ? '#1B1B1B' : '#FFFFFF',
            secondary: mode === 'light' ? '#555' : '#CCC',
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
          },
          h2: {
            fontWeight: 600,
            fontSize: '2.5rem',
          },
          h3: {
            fontWeight: 500,
            fontSize: '2rem',
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 25,
                textTransform: 'none',
                fontWeight: 600,
                padding: '12px 30px',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
