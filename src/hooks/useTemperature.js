import { useDispatch, useSelector } from "react-redux";
import { setPreferences } from "../store/actions/weatherActions";
import weatherService from "../services/weatherService";

export function useTemperature() {
  const dispatch = useDispatch();
  const preferences = useSelector((state) => state.weather.preferences);

  function toggleCelsius() {
    const preferencesCopy = { ...preferences };
    preferencesCopy.isCelsius = !preferencesCopy.isCelsius;
    weatherService.preferencesSaveToStorage(preferencesCopy);
    dispatch(setPreferences(preferencesCopy));
  }

  return { isCelsius: preferences.isCelsius, toggleCelsius };
}
