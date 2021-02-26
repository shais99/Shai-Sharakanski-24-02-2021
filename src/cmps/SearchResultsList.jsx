import React from "react";
import { useDispatch } from "react-redux";
import {
  setLocationKey,
  setLocationName,
  setSearchTerm,
} from "../store/actions/weatherActions";

export const SearchResultsList = ({ data, clearSearchResults }) => {
  const dispatch = useDispatch();

  function onClickSearchResult(location) {
    dispatch(setLocationName(location.LocalizedName));
    dispatch(setLocationKey(location.Key));
    dispatch(setSearchTerm(location.LocalizedName));
    clearSearchResults();
  }

  return (
    <div className="search-results-container">
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
