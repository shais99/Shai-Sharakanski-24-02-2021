import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import {
  setLocationKey,
  setLocationName,
  setSearchTerm,
} from "../store/actions/weatherActions";
import { Temperature } from "./Temperature";

export const FavoritesList = ({ favorites }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isDarkMode } = useDarkMode();

  function onClickLocation(location) {
    dispatch(setSearchTerm(location.name));
    dispatch(setLocationName(location.name));
    dispatch(setLocationKey(location.key));

    history.replace("/");
  }

  return (
    <section className="favorites-list flex wrap">
      {favorites.map((f) => {
        return (
          <div
            className={`location ${isDarkMode ? "dark" : ""}`}
            onClick={() => onClickLocation(f)}
            key={f.key}
          >
            <h3 className="name">{f.name}</h3>
            <p className="temperature">
              <Temperature
                isTemperatureInCelsius={true}
                temperature={f.temperature}
              />
            </p>
            <p>{f.weatherText}</p>
          </div>
        );
      })}
    </section>
  );
};
