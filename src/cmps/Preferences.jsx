import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useTemperature } from "../hooks/useTemperature";
import { Toggler } from "./general/Toggler";

export const Preferences = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  const { toggleCelsius, isCelsius } = useTemperature();

  // function handleTemperatureChange() {
  //   toggleCelsius()
  // }

  return (
    <section
      className={`preferences-container container flex align-center ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <h4 className="title">Preferences</h4>
      <div className="flex align-center wrap">
        <Toggler
          isChecked={isDarkMode}
          handleChange={toggleDarkMode}
          title="Dark mode"
        />
        <div className="temperature">
          <label>
            <input
              type="radio"
              name="temperatureFormat"
              checked={isCelsius}
              onChange={toggleCelsius}
            />
            <span>Celsius</span>
          </label>
          <label>
            <input
              type="radio"
              name="temperatureFormat"
              checked={!isCelsius}
              onChange={toggleCelsius}
            />
            <span>Fahrenheit</span>
          </label>
        </div>
      </div>
    </section>
  );
};
