import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { Props } from "../../types";
import { ReactComponent as InfoIcon } from "../../images/info.svg";

export function NavBar({ theme }: Props) {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <nav className={`${styles.nav}`}>
      <Link to="/" className={`${styles.link} ${styles[theme]}`}>
        Главные проблемы
      </Link>
      <Link to="/" className={`${styles.link} ${styles[theme]}`}>
        Принципы обучения
      </Link>
      <Link to="/" className={`${styles.link} ${styles[theme]}`}>
        Метод Фейнмана
      </Link>
      <Link to="/" className={`${styles.link} ${styles[theme]}`}>
        Цифры и факты
      </Link>
      <button
        className={`${styles[theme]} ${styles.button}`}
        onClick={() => setSubmenuOpen(!submenuOpen)}
      >
        Полезная информация <InfoIcon className={`${styles.icon}`} />
        {submenuOpen && (
          <div className={styles.submenu}>
            <Link to="/" className={styles.submenu__link}>Один полезный линк</Link>
            <Link to="/" className={styles.submenu__link}>Другой полезный линк</Link>
          </div>
        )}
      </button>
    </nav>
  );
}
