import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentLocation } from "../cmps/CurrentLocation";
import { Search } from "../cmps/Search";
import { Loader } from "../cmps/general/Loader";
import weatherService from "../services/weatherService";
import {
  setLocationKey,
  setLocationName,
  setSearchTerm,
} from "../store/actions/weatherActions";
import { UserMsg } from "../cmps/general/UserMsg";

export const Home = () => {
  const dispatch = useDispatch();
  const locationKey = useSelector((state) => state.weather.locationKey);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [fiveDailyForecasts, setFiveDailyForecasts] = useState(null);
  const [userMsg, setUserMsg] = useState("");

  useEffect(() => {
    if (!locationKey) {
      loadLocationByCoordinates();

      async function loadLocationByCoordinates() {
        let locationKey = "215854"; // Tel Aviv LocationKey
        let locationName = "Tel Aviv"; // Defualt Location
        let searchTerm = "Tel Aviv"; // Default Search Term

        const coordinates = await new Promise((res) => {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              res({ lat: pos.coords.latitude, lng: pos.coords.longitude });
            },
            () => {
              res({ lat: null, lng: null });
            }
          );
        });

        if (coordinates.lat && coordinates.lng) {
          try {
            const location = await weatherService.getLocationByCoordinates(
              coordinates
            );
            locationKey = location.Key;
            locationName = location.EnglishName;
            searchTerm = location.EnglishName;
          } catch (_) {
            setUserMsg("Network error, please try again later.");
          }
        }
        dispatch(setLocationKey(locationKey));
        dispatch(setLocationName(locationName));
        dispatch(setSearchTerm(searchTerm));
      }
    } else {
      loadCurrentWeather();
      loadFiveDailyForecasts();

      async function loadCurrentWeather() {
        try {
          const loadedCurrentWeather = await weatherService.getCurrentWeather(
            locationKey
          );
          setCurrentWeather(loadedCurrentWeather[0]);
        } catch (_) {
          setUserMsg("Network error, please try again later.");
        }
      }
      async function loadFiveDailyForecasts() {
        try {
          const loadedFiveDailyForecasts = await weatherService.getFiveDailyForecasts(
            locationKey
          );
          setFiveDailyForecasts(loadedFiveDailyForecasts.DailyForecasts);
        } catch (_) {
          setUserMsg("Network error, please try again later.");
        }
      }
    }
  }, [locationKey, dispatch]);

  if (!currentWeather || !fiveDailyForecasts) {
    return (
      <>
        {userMsg && <UserMsg msg={userMsg} />}
        <Loader />
      </>
    );
  }
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
