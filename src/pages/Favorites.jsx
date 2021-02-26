import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import weatherService from "../services/weatherService";
import { Loader } from "../cmps/general/Loader";
import { FavoritesList } from "../cmps/FavoritesList";
import { useDarkMode } from "../hooks/useDarkMode";

export const Favorites = () => {
  const favoritesBase = useSelector((state) => state.weather.favorites);
  const { isDarkMode } = useDarkMode();
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    loadFavoritesWithTemperature();

    async function loadFavoritesWithTemperature() {
      const favoritesWithTemperature = [];
      for (let i = 0; i < favoritesBase.length; i++) {
        let locationCopy = { ...favoritesBase[i] };
        const currentWeather = await weatherService.getCurrentWeather(
          locationCopy.key
        );
        locationCopy = {
          ...locationCopy,
          temperature: currentWeather[0].Temperature.Metric.Value,
          weatherText: currentWeather[0].WeatherText,
        };
        favoritesWithTemperature.push(locationCopy);
      }
      setFavorites(favoritesWithTemperature);
    }
  }, [favoritesBase]);

  if (!favorites) return <Loader />;
  return (
    <section
      className={`favorites-container container ${isDarkMode ? "dark" : ""}`}
    >
      <div className="title flex align-center">
        <img src="/assets/img/star.svg" alt="" />
        <h2>Favorites</h2>
      </div>
      {favorites.length > 0 && <FavoritesList favorites={favorites} />}
      {favorites.length === 0 && <h3>You don't have any favorites yet.</h3>}
    </section>
  );
};
