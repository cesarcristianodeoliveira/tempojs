import React, { createContext, useState, useEffect, useContext } from 'react';

import { Loading } from '../components';

import api from '../services/api';

const Context = createContext();

export const ApiContext = ({ children }) => {  

    const [loading, setLoading] = useState(true)

    const [weather, setWeather] = useState([])
    const [today, setToday] = useState('')
    const [tomorrow, setTomorrow] = useState('')
    const [thenDays, setThenDays] = useState('')

    useEffect(() => {
        
        setLoading(true)

        api.get('')
        .then(response => {
            setWeather(response.data.results);
            
            setToday(response.data.results.forecast[0])

            setTomorrow(response.data.results.forecast[1])

            setThenDays(response.data.results.forecast)

            setLoading(false)
        })
        .catch(err => {
            console.log(err);
        });
    }, [])

    return (
        <Context.Provider
            value={{
                loading,
                weather,
                today,
                tomorrow,
                thenDays
            }}
        >
            {loading && weather.length ? <Loading /> : children}
        </Context.Provider>
    )
}

export const useApiContext = () => useContext(Context);