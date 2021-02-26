import React from "react";
import moment from "moment";
import { convertFahrenheitToCelsius } from "../services/utilService";

export const FiveDailyForecastsList = ({ data }) => {
  return (
    <footer className="flex justify-center wrap">
      {data.map((fc, idx) => {
        return (
          <div key={`${fc.Date}//${idx}`} className="forecast flex column">
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
