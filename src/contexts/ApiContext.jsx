import React, { createContext, useState, useEffect, useContext } from 'react';

import api from '../services/api';

const Context = createContext();

export const ApiContext = ({ children }) => {  

    const [weather, setWeather] = useState([])
    const [today, setToday] = useState('')
    const [tomorrow, setTomorrow] = useState('')
    const [thenDays, setThenDays] = useState('')

    useEffect(() => {
        api.get('')
        .then(response => {
            setTimeout(() => {
                setWeather(response.data.results);
                
                setToday(response.data.results.forecast[0])

                setTomorrow(response.data.results.forecast[1])

                setThenDays(response.data.results.forecast)
            }, 750)
        })
        .catch(err => {
            console.log(err);
        });
    }, [])

    return (
        <Context.Provider
        value={{
            weather,
            today,
            tomorrow,
            thenDays
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useApiContext = () => useContext(Context);