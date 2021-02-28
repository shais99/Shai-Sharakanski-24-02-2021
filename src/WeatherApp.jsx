import { MainRoutes } from "./cmps/MainRoutes";
import { Navbar } from "./cmps/Navbar";
import { Preferences } from "./cmps/Preferences";
import { useDarkMode } from "./hooks/useDarkMode";
import "./style/global.scss";

function WeaterApp() {
  const { isDarkMode } = useDarkMode();
  return (
    <main className={`app-container ${isDarkMode ? "dark" : ""}`}>
      <Navbar />
      <Preferences />
      <MainRoutes />
    </main>
  );
}

export default WeaterApp;
