import styles from "./Dashboard.module.scss";

type Props = {
  theme: string;
};

export function Dashboard({ theme }: Props) {
  const lead = require("../../images/lead-illustration.png");
  return (
    <div className={styles.dashboard}>
      <div className={styles.column}>
        <h1 className={styles.title}>Научиться учиться</h1>
        <p className={styles.subtitle}>
          Какие современные и эффективные подходы к обучению вы можете
          использовать в своей жизни?
        </p>
        <button className={styles.button}>Узнать</button>
      </div>
      <img src={lead} alt="Asking question illustration"></img>
    </div>
  );
}
