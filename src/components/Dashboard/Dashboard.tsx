import { Link } from "react-router-dom";
import styles from "./Dashboard.module.scss";
import { Theme, Props } from "../../types";
import * as colors from "../../assets/colors";

type ThemeStyles = {
  [key in Theme]: {
    color: string;
  }
}

export function Dashboard({ theme }: Props) {
  const lead = require("../../images/lead-illustration.png");

  // Определение стилей для темы
  const themeStyles:ThemeStyles = {
    light: {
      color: colors.violet,
    },
    dark: {
      color: colors.white,
    },
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.column} style={themeStyles[theme]}>
        <h1 className={styles.title}>Научиться учиться</h1>
        <p className={styles.subtitle}>
          Какие современные и эффективные подходы к обучению вы можете
          использовать в своей жизни?
        </p>
        <Link
          to={"/"}
          className={styles.link}
          style={{ color: themeStyles[theme].color }}
        >
          Узнать
        </Link>
      </div>
      <img src={lead} alt="Asking question illustration"></img>
    </div>
  );
}
