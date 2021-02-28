import React from "react";
import moment from "moment";
import { convertFahrenheitToCelsius } from "../services/utilService";
import { useDarkMode } from "../hooks/useDarkMode";
import { useTemperature } from "../hooks/useTemperature";

export const FiveDailyForecastsList = ({ data }) => {
  const { isDarkMode } = useDarkMode();
  const { isCelsius } = useTemperature();

  return (
    <footer className="">
      {data.map((fc, idx) => {
        return (
          <div
            key={`${fc.Date}//${idx}`}
            className={`forecast flex column ${isDarkMode ? "dark" : ""}`}
          >
            <span>{moment(fc.Date).format("ddd")}</span>
            <span>
              {isCelsius
                ? convertFahrenheitToCelsius(
                    (fc.Temperature.Maximum.Value +
                      fc.Temperature.Minimum.Value) /
                      2
                  )
                : (fc.Temperature.Maximum.Value +
                    fc.Temperature.Minimum.Value) /
                  2}
              <sup>°{isCelsius ? "C" : "F"}</sup>
            </span>
          </div>
        );
      })}
    </footer>
  );
};
