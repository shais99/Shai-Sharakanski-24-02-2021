import {
  DARKMODE_STORAGE_KEY,
  FAVORITES_STORAGE_KEY,
} from "../../data/constants";
import weatherService from "../../services/weatherService";

let favorites = [];
if (localStorage[FAVORITES_STORAGE_KEY])
  favorites = JSON.parse(localStorage[FAVORITES_STORAGE_KEY]);

let isDarkMode = false;
if (localStorage[DARKMODE_STORAGE_KEY])
  isDarkMode = JSON.parse(localStorage[DARKMODE_STORAGE_KEY]);

const initialState = {
  favorites,
  searchTerm: "",
  msg: "",
  locationKey: "",
  locationName: "",
  isDarkMode,
  isDarkModeSoundPlayed: false,
};

export default function f(state = initialState, action = {}) {
  switch (action.type) {
    case "SET_FAVORITES":
      return {
        ...state,
        favorites: action.favorites,
      };
    case "SET_MSG":
      return {
        ...state,
        msg: action.msg,
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case "SET_CURRENT_LOCATION_KEY":
      return {
        ...state,
        locationKey: action.locationKey,
      };
    case "SET_LOCATION_NAME":
      return {
        ...state,
        locationName: action.locationName,
      };
    case "FAVORITES_TOGGLE":
      const { location } = action;
      const favoritesCopy = [...state.favorites];
      const locationIdx = favoritesCopy.findIndex(
        (f) => f.key === location.key
      );
      if (locationIdx === -1) {
        favoritesCopy.push(location);
      } else {
        favoritesCopy.splice(locationIdx, 1);
      }
      weatherService.favoritesSaveToStorage(favoritesCopy);
      return {
        ...state,
        favorites: favoritesCopy,
      };
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case "SET_DARK_MODE_SOUND_PLAYED":
      return {
        ...state,
        isDarkModeSoundPlayed: true,
      };
    default:
      return state;
  }
}
