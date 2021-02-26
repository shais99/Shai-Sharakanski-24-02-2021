import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import weatherService from "../services/weatherService";
import { Loader } from "../cmps/general/Loader";
import { FavoritesList } from "../cmps/FavoritesList";

export const Favorites = () => {
  const favoritesBase = useSelector((state) => state.weather.favorites);
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
    <section className="favorites-container container">
      <div className="title flex align-center">
        <img src="/assets/img/star.svg" alt="" />
        <h2>Favorites</h2>
      </div>
      <FavoritesList favorites={favorites} />
    </section>
  );
};
