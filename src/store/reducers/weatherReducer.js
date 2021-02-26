import { FAVORITES_STORAGE_KEY } from "../../data/constants";
import weatherService from "../../services/weatherService";

let favorites = [];
if (localStorage[FAVORITES_STORAGE_KEY])
  favorites = JSON.parse(localStorage[FAVORITES_STORAGE_KEY]);

const initialState = {
  favorites,
  searchTerm: "Tel Aviv",
  msg: "",
  locationKey: "215854",
  locationName: "Tel Aviv",
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
    default:
      return state;
  }
}