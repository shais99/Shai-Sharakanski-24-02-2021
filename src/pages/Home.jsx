import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CurrentLocation } from "../cmps/CurrentLocation";
import { Search } from "../cmps/Search";
import { Loader } from "../cmps/general/Loader";
import weatherService from "../services/weatherService";

export const Home = () => {
  const locationKey = useSelector((state) => state.weather.locationKey);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [fiveDailyForecasts, setFiveDailyForecasts] = useState(null);

  useEffect(() => {
    loadCurrentWeather();
    loadFiveDailyForecasts();

    async function loadCurrentWeather() {
      const loadedCurrentWeather = await weatherService.getCurrentWeather(
        locationKey
      );
      setCurrentWeather(loadedCurrentWeather[0]);
    }
    async function loadFiveDailyForecasts() {
      const loadedFiveDailyForecasts = await weatherService.getFiveDailyForecasts(
        locationKey
      );
      setFiveDailyForecasts(loadedFiveDailyForecasts.DailyForecasts);
    }
  }, [locationKey]);

  if (!currentWeather || !fiveDailyForecasts) return <Loader />;
  return (
    <section className="home-container">
      <Search />
      <CurrentLocation
        currentWeather={currentWeather}
        fiveDailyForecasts={fiveDailyForecasts}
      />
    </section>
  );
};
