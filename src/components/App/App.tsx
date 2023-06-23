import { useState } from "react";
import { Header } from "../Header/Header";
import { ThemeSelect } from "../ThemeSelect/ThemeSelect";
import { Dashboard } from "../Dashboard/Dashboard";
import { NavBar } from "../NavBar/NavBar";
import styles from "./App.module.scss";
import { Theme } from "../../types";
import { CloudsBackground } from "../CloudsBackground/CloudsBackground";
import { Star } from "../Star/Star";
import { ThemeContext, ThemeContextType } from "../../contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const logo = require(`../../images/logo_empty_${theme}.svg`);

  function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.checked ? "dark" : "light");
  }

  const themeContext: ThemeContextType = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <main className={`${styles.page} ${styles[theme]}`}>
        <section className={`${styles.app} ${styles[theme]}`}>
          <Header logo={logo} theme={theme}></Header>
          <Dashboard theme={theme}></Dashboard>
          <NavBar theme={theme}></NavBar>
          <ThemeSelect onChange={handleThemeChange} />
        </section>
        <CloudsBackground></CloudsBackground>
        <Star theme={theme}></Star>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
