import React from "react";
import moment from "moment";
import { useDarkMode } from "../hooks/useDarkMode";
import { Temperature } from "./Temperature";

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
            <Temperature
              isTemperatureInCelsius={false}
              temperature={
                (fc.Temperature.Maximum.Value + fc.Temperature.Minimum.Value) /
                2
              }
            />
          </div>
        );
      })}
    </footer>
  );
};
