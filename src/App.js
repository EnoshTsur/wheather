import React from "react";
import "./styles.css";
import useGet from "./hooks/useGet/useGet";
import { WEATHER_SERVICE, WEATHER_CIRCLE_SIZE, WEATHER_CIRCLE_POSITION } from "./constants/constants";
import { getTemperature } from "./common/utils";
import Loader from "./components/Loader/Loader";
import WeatherContext from "./context/weatherContext";
import Weather from "./components/Weather/Weather";

export default function App() {

  const { data, loading } = useGet(WEATHER_SERVICE);

  if (loading) {
    return (
      <Loader />
    )
  }

  const temperature = getTemperature(data);

  return (
    <div className="App">
      <WeatherContext.Provider value={{ temperature }}>
        <Weather
          circleSize={WEATHER_CIRCLE_SIZE}
          initialPosition={WEATHER_CIRCLE_POSITION}
        />
      </WeatherContext.Provider>
    </div>
  );
}