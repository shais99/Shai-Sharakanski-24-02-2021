import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import weatherService from "../services/weatherService";
import { setSearchTerm } from "../store/actions/weatherActions";
import { SearchResultsList } from "./SearchResultsList";
import { UserMsg } from "./general/UserMsg";
import { useDarkMode } from "../hooks/useDarkMode";

export const Search = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useDarkMode();
  const debounceTimeout = useRef();
  const searchTerm = useSelector((state) => state.weather.searchTerm);
  const [searchResults, setSearchResults] = useState(null);
  const [userMsg, setUserMsg] = useState("");

  async function handleChange(q) {
    if (!q) {
      setSearchResults(null);
      return;
    }
    const loadedResults = await weatherService.getBySearchTerm(q);
    if (loadedResults?.length > 0) {
      setSearchResults(loadedResults);
    } else {
      setUserMsg(`Nothing found for "${q}"`);
    }
  }

  function debounce(value, callback, wait) {
    dispatch(setSearchTerm(value));
    return () => {
      clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => callback(), wait);
    };
  }

  return (
    <>
      {userMsg && <UserMsg msg={userMsg} />}
      <div className="container">
        <form className={`search-form ${isDarkMode ? "dark" : ""}`}>
          <input
            type="text"
            placeholder="Search a location..."
            value={searchTerm}
            className="input"
            onChange={function (ev) {
              const value = ev.target.value;
              return debounce(value, () => handleChange(value), 500)();
            }}
          />
        </form>
        {searchResults?.length > 0 && (
          <SearchResultsList
            data={searchResults}
            clearSearchResults={() => setSearchResults(null)}
          />
        )}
      </div>
    </>
  );
};
