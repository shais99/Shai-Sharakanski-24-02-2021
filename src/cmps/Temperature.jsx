import React from "react";
import { useSelector } from "react-redux";
import {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
} from "../services/utilService";

export const Temperature = ({ temperature, isTemperatureInCelsius }) => {
  const isCelsius = useSelector((state) => state.weather.preferences.isCelsius);

  function getTemperatureWithFormat() {
    if (isTemperatureInCelsius) {
      if (isCelsius) {
        return temperature.toFixed(1);
      } else {
        return convertCelsiusToFahrenheit(temperature).toFixed(1);
      }
    } else {
      if (isCelsius) {
        return convertFahrenheitToCelsius(temperature).toFixed(1);
      } else {
        return temperature.toFixed(1);
      }
    }
  }

  return (
    <span>
      {getTemperatureWithFormat()}
      <sup>°{isCelsius ? "C" : "F"}</sup>
    </span>
  );
};
