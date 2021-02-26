import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setLocationKey,
  setLocationName,
  setSearchTerm,
} from "../store/actions/weatherActions";

export const FavoritesList = ({ favorites }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  function onClickLocation(location) {
    dispatch(setSearchTerm(location.name));
    dispatch(setLocationName(location.name));
    dispatch(setLocationKey(location.key));

    history.replace("/");
  }

  return (
    <section className="favorites-list flex wrap">
      {favorites.map((f) => {
        return (
          <div
            className="location flex column align-center"
            onClick={() => onClickLocation(f)}
            key={f.key}
          >
            <h3 className="name">{f.name}</h3>
            <p className="temperature">{f.temperature}°C</p>
            <p>{f.weatherText}</p>
          </div>
        );
      })}
    </section>
  );
};
