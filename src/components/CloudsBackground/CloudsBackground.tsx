import styles from "./CloudsBackground.module.scss";

export function CloudsBackground() {
    return (
      <div className={styles.cloudContainer}>
        <div className={styles.line}/>
        <div className={`${styles.cloudPart} ${styles.part1}`}></div>
        <div className={`${styles.cloudPart} ${styles.part2}`}></div>
        <div className={`${styles.cloudPart} ${styles.part3}`}></div>
        <div className={`${styles.cloudPart} ${styles.part4}`}></div>
        <div className={`${styles.cloudPart} ${styles.part5}`}></div>
      </div>
    );
  }
  
