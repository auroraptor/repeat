import { Search } from "../Search/Search";
import styles from "./Header.module.scss";

export function Header({logo, theme}) {

  return (
    <header className={styles.header}>
        <img src={logo} alt="Logo" />
        <Search theme={theme}/>
    </header>
  );
}
