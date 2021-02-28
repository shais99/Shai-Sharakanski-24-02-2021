import { PREFERENCES_KEY, FAVORITES_STORAGE_KEY } from "../data/constants";
import httpService from "./httpService";

const BASE_URL = "http://dataservice.accuweather.com";

const weatherService = {
  getBySearchTerm,
  getCurrentWeather,
  getFiveDailyForecasts,
  favoritesSaveToStorage,
  getLocationByCoordinates,
  preferencesSaveToStorage,
};

export default weatherService;

async function getCurrentWeather(locationKey) {
  return await httpService.get(
    `${BASE_URL}/currentconditions/v1/${locationKey}`
  );
}

async function getFiveDailyForecasts(locationKey) {
  return await httpService.get(
    `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}`
  );
}

async function getBySearchTerm(searchTerm) {
  return await httpService.get(
    `${BASE_URL}/locations/v1/cities/autocomplete`,
    `&q=${searchTerm}`
  );
}

async function getLocationByCoordinates(coordinates) {
  return await httpService.get(
    `${BASE_URL}/locations/v1/cities/geoposition/search`,
    `&q=${coordinates.lat},${coordinates.lng}`
  );
}

function favoritesSaveToStorage(favorites) {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
}

function preferencesSaveToStorage(preferences) {
  localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
}
