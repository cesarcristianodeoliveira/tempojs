import React, { createContext, useContext, useState, useEffect } from 'react';

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import { blue } from '@mui/material/colors';

const Context = createContext();

export const ThemeContext = ({ children }) => { 

    const [mode, setMode] = useState(localStorage.getItem("mode") ? localStorage.getItem("mode") : 'light') 
    const toggleMode = () => {
      localStorage.setItem("mode", !mode);
      setMode(!mode);
    }
    const theme = createTheme({
      palette: {
        mode: mode ? 'light' : 'dark',
        primary: {
          main: blue[600],
        }
      },
      transitions: {
        easing: {
          // This is the most common easing curve.
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          // Objects enter the screen at full velocity from off-screen and
          // slowly decelerate to a resting point.
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          // Objects leave the screen at full velocity. They do not decelerate when off-screen.
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          // The sharp curve is used by objects that may return to the screen at any time.
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
      },
    })
    useEffect(() => {
      const mode = localStorage.getItem("mode");
      if(mode !== null){
          setMode(mode === 'true')
      }
    }, []);

    return (
      <Context.Provider
        value={{
          theme,
          mode,
          toggleMode
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </Context.Provider>
    )
}

export const useThemeContext = () => useContext(Context);