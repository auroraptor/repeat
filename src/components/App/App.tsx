import { useState} from 'react';
import { ThemeSelect } from '../ThemeSelect/ThemeSelect';
import styles from './App.module.scss';

function App() {
  const [theme, setTheme] = useState("day");

  function handleThemeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setTheme(e.target.value);
  }

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <h1 className={styles.title}>Научиться учиться</h1>
      <ThemeSelect onChange={handleThemeChange} />
    </div>
  );
}

export default App;
