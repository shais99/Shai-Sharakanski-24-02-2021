import { useDispatch, useSelector } from "react-redux";
import {
  darkModeToggle,
  setDarkModeSoundPlayed,
} from "../store/actions/weatherActions";
import lightningMP3 from "../sound/lightning.mp3";
import { useEffect } from "react";

export function useDarkMode() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.weather.isDarkMode);
  const isDarkModeSoundPlayed = useSelector(
    (state) => state.weather.isDarkModeSoundPlayed
  );

  useEffect(() => {
    if (isDarkMode && !isDarkModeSoundPlayed) {
      const lightningSound = new Audio(lightningMP3);
      lightningSound.play();
      dispatch(setDarkModeSoundPlayed());
    }
  }, [isDarkMode, isDarkModeSoundPlayed, dispatch]);

  function toggleDarkMode() {
    dispatch(darkModeToggle());
  }

  return { isDarkMode, toggleDarkMode };
}
