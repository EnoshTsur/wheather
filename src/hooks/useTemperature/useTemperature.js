import React from "react";
import match from "../../common/match";
import { between, lessThen } from "../../common/utils";
import WeatherContext from "../../context/weatherContext";

export default function useTemerature() {

    const { temperature } = React.useContext(WeatherContext);

    const temperatureBackground = match(temperature)
        .when(lessThen(10), 'blue')
        .when(between([10, 20]), 'green')
        .when(between([20, 30]), 'yellow')
        .orElse('red');

    const [hoverStyle, setHoverStyle] = React.useState({
        backgroundColor: temperatureBackground,
        border: `2px solid ${temperatureBackground}`
    });

    const onMouseEnterHandler = () => {
        setHoverStyle((preStyle) => ({
            ...preStyle,
            backgroundColor: 'transparent',
        }));
    }

    const onMouseLeaveHandler = () => {
        setHoverStyle((preStyle) => ({
            ...preStyle,
            backgroundColor: temperatureBackground,
        }));
    }

    return {
        hoverStyle,
        onMouseEnterHandler,
        onMouseLeaveHandler,
    }
}