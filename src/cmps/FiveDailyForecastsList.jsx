import React from "react";
import moment from "moment";
import { convertFahrenheitToCelsius } from "../services/utilService";
import { useDarkMode } from "../hooks/useDarkMode";

export const FiveDailyForecastsList = ({ data }) => {
  const { isDarkMode } = useDarkMode();
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
              {convertFahrenheitToCelsius(
                (fc.Temperature.Maximum.Value + fc.Temperature.Minimum.Value) /
                  2
              )}{" "}
              °C
            </span>
          </div>
        );
      })}
    </footer>
  );
};
