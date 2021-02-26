import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoritesToggle } from "../store/actions/weatherActions";
import { FiveDailyForecastsList } from "./FiveDailyForecastsList";

export const CurrentLocation = ({ currentWeather, fiveDailyForecasts }) => {
  const locationName = useSelector((state) => state.weather.locationName);
  const locationKey = useSelector((state) => state.weather.locationKey);
  const favorites = useSelector((state) => state.weather.favorites);
  const dispatch = useDispatch();

  function onClickAddToFavorites() {
    const location = {
      key: locationKey,
      name: locationName,
    };
    dispatch(favoritesToggle(location));
  }

  function isInFavorites() {
    return favorites.some((f) => f.key === locationKey);
  }

  return (
    <section className="current-location-container container">
      <header className="flex align-center space-between">
        <div className="flex column align-start">
          <span className="location-name">{locationName}</span>
          <span>{currentWeather.Temperature.Metric.Value} °C</span>
        </div>
        <div>
          <button className="btn primary" onClick={onClickAddToFavorites}>
            {isInFavorites() ? "Remove from favorites" : "Add to Favorites"}
          </button>
        </div>
      </header>
      <main className="flex justify-center align-center">
        <h2>{currentWeather.WeatherText}</h2>
      </main>
      <FiveDailyForecastsList data={fiveDailyForecasts} />
    </section>
  );
};
