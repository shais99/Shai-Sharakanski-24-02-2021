import React from "react";
import { useDispatch } from "react-redux";
import { useDarkMode } from "../hooks/useDarkMode";
import {
  setLocationKey,
  setLocationName,
  setSearchTerm,
} from "../store/actions/weatherActions";

export const SearchResultsList = ({ data, clearSearchResults }) => {
  const dispatch = useDispatch();
  const { isDarkMode } = useDarkMode();

  function onClickSearchResult(location) {
    dispatch(setLocationName(location.LocalizedName));
    dispatch(setLocationKey(location.Key));
    dispatch(setSearchTerm(location.LocalizedName));
    clearSearchResults();
  }

  return (
    <div className={`search-results-container ${isDarkMode ? "dark" : ""}`}>
      {data.map((sr, idx) => {
        return (
          <div
            key={`${sr.Key}//${idx}`}
            className="result"
            onClick={() => onClickSearchResult(sr)}
          >
            {sr.LocalizedName}
          </div>
        );
      })}
    </div>
  );
};
