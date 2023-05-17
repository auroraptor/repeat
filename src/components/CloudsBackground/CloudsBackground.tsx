import styles from "./CloudsBackground.module.scss";

export function CloudsBackground() {
  return (
    <>
      <div className={styles.cloudContainer}>
        <div className={styles.line} />
        <div className={`${styles.cloudPart} ${styles.part1}`}></div>
        <div className={`${styles.cloudPart} ${styles.part2}`}></div>
        <div className={`${styles.cloudPart} ${styles.part3}`}></div>
        <div className={`${styles.cloudPart} ${styles.part4}`}></div>
        <div className={`${styles.cloudPart} ${styles.part5}`}></div>
      </div>
      <div className={styles.cloudContainer}>
        <div className={styles.lineRight} />
        <div
          className={`${styles.cloudPart} ${styles.cloudPartLeft} ${styles.part1left}`}
        ></div>
        <div
          className={`${styles.cloudPart} ${styles.cloudPartLeft} ${styles.part2left}`}
        ></div>
        <div
          className={`${styles.cloudPart} ${styles.cloudPartLeft} ${styles.part3left}`}
        ></div>
        <div
          className={`${styles.cloudPart} ${styles.cloudPartLeft} ${styles.part4left}`}
        ></div>
        <div
          className={`${styles.cloudPart} ${styles.cloudPartLeft} ${styles.part5left}`}
        ></div>
        <div
          className={`${styles.cloudPart} ${styles.cloudPartLeft} ${styles.part6left}`}
        ></div>
      </div>
    </>
  );
}
