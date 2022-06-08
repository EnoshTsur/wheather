import { createContext } from 'react'

const WeatherContext = createContext({
    temperature: null
});

export default WeatherContext;