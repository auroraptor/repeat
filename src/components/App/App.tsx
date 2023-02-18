import { useState} from 'react';
import { Header } from '../Header/Header';
import { ThemeSelect } from '../ThemeSelect/ThemeSelect';
import styles from './App.module.scss';

function App() {
  const [theme, setTheme] = useState("day");
  const logo = require(`../../images/logo_empty_${theme}.svg`);

  function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.checked ? "night" : "day");
  }

  return (
    <section className={`${styles.app} ${styles[theme]}`}>
      <Header logo={logo}></Header>
      <h1 className={styles.title}>Научиться учиться</h1>
      <ThemeSelect onChange={handleThemeChange} />
    </section>
  );
}

export default App;
