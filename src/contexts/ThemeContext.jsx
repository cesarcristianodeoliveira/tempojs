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
      
    })
    useEffect(() => {
      const mode = localStorage.getItem("mode");
      if(mode !== null){
        setMode(mode === 'true');
      }
    }, []);

    return (
      <Context.Provider
        value={{
          theme,
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