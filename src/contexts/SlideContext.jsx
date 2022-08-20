import React, { createContext, useContext, useState } from 'react';

import { createTheme } from '@mui/material/styles';

import PropTypes from 'prop-types'

const Context = createContext();

export const SlideContext = ({ children }) => {  

  const theme = createTheme({
      palette: {
          primary: {
              main: '#FFF',
          },
      },
  });

  const [slideValue, setSlideValue] = useState(0);
  const handleSlideValue = (event, newValue) => {
    setSlideValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
        style={{ height: '100%' }}
      >
        {value === index && (
          <>
            {children}
          </>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  return (
    <Context.Provider
      value={{
        theme,
        slideValue,
        setSlideValue,
        handleSlideValue,
        TabPanel,
        a11yProps
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useSlideContext = () => useContext(Context);