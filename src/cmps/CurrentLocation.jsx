import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDarkMode } from "../hooks/useDarkMode";
import { favoritesToggle } from "../store/actions/weatherActions";
import { FiveDailyForecastsList } from "./FiveDailyForecastsList";
import { Temperature } from "./Temperature";

export const CurrentLocation = ({ currentWeather, fiveDailyForecasts }) => {
  const locationName = useSelector((state) => state.weather.locationName);
  const locationKey = useSelector((state) => state.weather.locationKey);
  const favorites = useSelector((state) => state.weather.favorites);
  const { isDarkMode } = useDarkMode();
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

  const celsiusTemperature = currentWeather.Temperature.Metric.Value;
  return (
    <section
      className={`current-location-container container ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <header className="flex align-center">
        <div className="name-temperature flex column">
          <span className="location-name">{locationName}</span>
          <Temperature
            isTemperatureInCelsius={true}
            temperature={celsiusTemperature}
          />
        </div>
        <div>
          <button
            className="btn primary flex align-center justify-center"
            onClick={onClickAddToFavorites}
          >
            <img
              src={
                isInFavorites()
                  ? "/assets/img/like_filled.svg"
                  : "/assets/img/like.svg"
              }
              alt=""
            />
            {isInFavorites() ? `Remove from favorites` : "Add to Favorites"}
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
