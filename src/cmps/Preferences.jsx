import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useTemperature } from "../hooks/useTemperature";
import { Toggler } from "./general/Toggler";

export const Preferences = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  const { toggleCelsius, isCelsius } = useTemperature();

  return (
    <section
      className={`preferences-container container flex ${
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
        <Toggler
          isChecked={isCelsius}
          handleChange={toggleCelsius}
          title="Celsius / Fahrenheit"
        />
      </div>
    </section>
  );
};
