import { FAVORITES_STORAGE_KEY } from "../data/constants";
import httpService from "./httpService";

const weatherService = {
  getBySearchTerm,
  getCurrentWeather,
  getFiveDailyForecasts,
  favoritesSaveToStorage,
};

export default weatherService;

async function getCurrentWeather(locationKey) {
  return await httpService.get(
    `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`
  );
}

async function getFiveDailyForecasts(locationKey) {
  return await httpService.get(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`
  );
}

async function getBySearchTerm(searchTerm) {
  return await httpService.get(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`,
    null,
    `&q=${searchTerm}`
  );
}

function favoritesSaveToStorage(favorites) {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
}
