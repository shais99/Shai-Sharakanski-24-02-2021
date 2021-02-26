export function setFavorites(favorites) {
  return async (dispatch) => {
    dispatch({ type: "SET_FAVORITES", favorites });
  };
}

export function setSearchTerm(searchTerm) {
  return (dispatch) => {
    dispatch({ type: "SET_SEARCH_TERM", searchTerm });
  };
}

export function setLocationKey(locationKey) {
  return (dispatch) => {
    dispatch({ type: "SET_CURRENT_LOCATION_KEY", locationKey });
  };
}

export function setLocationName(locationName) {
  return (dispatch) => {
    dispatch({ type: "SET_LOCATION_NAME", locationName });
  };
}

export function favoritesToggle(location) {
  return (dispatch) => {
    dispatch({ type: "FAVORITES_TOGGLE", location });
  };
}
