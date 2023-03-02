import styles from "./Dashboard.module.scss";

type Props = {
  theme: string;
};

export function Dashboard({ theme }: Props) {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Научиться учиться</h1>
      <p className={styles.subtitle}>
        Какие современные и эффективные подходы к обучению вы можете
        использовать в своей жизни?
      </p>
    </div>
  );
}
