// import search from "../../images/search.svg";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { Props } from "../../types";

export function NavBar({ theme }: Props) {
  return (
   <nav className={`${styles.nav}`}>
    <Link to="/" className={`${styles.link} ${styles[theme]}`}>Главные проблемы</Link>
    <Link to="/" className={`${styles.link} ${styles[theme]}`}>Принципы обучения</Link>
    <Link to="/" className={`${styles.link} ${styles[theme]}`}>Метод Фейнмана</Link>
    <Link to="/" className={`${styles.link} ${styles[theme]}`}>Цифры и факты</Link>
    <Link to="/" className={`${styles.link} ${styles[theme]}`}>Полезная информация</Link>
   </nav>
  );
}

