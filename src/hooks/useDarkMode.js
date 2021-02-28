import { useDispatch, useSelector } from "react-redux";
import {
  setPreferences,
  setDarkModeSoundPlayed,
} from "../store/actions/weatherActions";
import lightningMP3 from "../sound/lightning.mp3";
import weatherService from "../services/weatherService";
import { useEffect } from "react";

export function useDarkMode() {
  const dispatch = useDispatch();
  const preferences = useSelector((state) => state.weather.preferences);
  const isDarkModeSoundPlayed = useSelector(
    (state) => state.weather.isDarkModeSoundPlayed
  );

  useEffect(() => {
    if (preferences.isDarkMode && !isDarkModeSoundPlayed) {
      const lightningSound = new Audio(lightningMP3);
      lightningSound
        .play()
        .then(() => {
          dispatch(setDarkModeSoundPlayed());
        })
        .catch(() => {});
    }
  }, [preferences.isDarkMode, isDarkModeSoundPlayed, dispatch]);

  function toggleDarkMode() {
    const preferencesCopy = { ...preferences };
    preferencesCopy.isDarkMode = !preferencesCopy.isDarkMode;
    weatherService.preferencesSaveToStorage(preferencesCopy);
    dispatch(setPreferences(preferencesCopy));
  }

  return { isDarkMode: preferences.isDarkMode, toggleDarkMode };
}
