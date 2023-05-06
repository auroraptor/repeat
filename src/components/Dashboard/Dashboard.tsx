import { Link } from "react-router-dom";
import styles from "./Dashboard.module.scss";
import { Theme, Props } from "../../types";

type ThemeStyles = {
  [key in Theme]: {
    color: string;
  };
};

export function Dashboard({ theme }: Props) {
  const lead = require("../../images/lead-illustration.png");

  // Определение стилей для темы
  const themeStyles: ThemeStyles = {
    light: {
      color: "rgba(121, 63, 180, 1)",
    },
    dark: {
      color: "rgba(255, 255, 255, 1)",
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
          className={`${styles.link} ${styles[theme]}`}
          style={{ color: themeStyles[theme].color }}
          onClick={() => alert('👩🏼‍🏫 📚 👩🏼‍🎓')}
        >
          Узнать
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.9669 13.6668L6.38415 2.08949C4.58733 1.17066 2.42297 2.47743 2.42297 4.49885V27.6534C2.42297 29.6748 4.56691 31.002 6.38415 30.0627L28.9669 18.4855C30.9271 17.485 30.9271 14.6673 28.9669 13.6668Z"
              fill={themeStyles[theme].color}
              stroke={themeStyles[theme].color}
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
      <img src={lead} alt="Asking question illustration"></img>
    </div>
  );
}
