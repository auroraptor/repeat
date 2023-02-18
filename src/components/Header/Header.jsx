import styles from "./Header.module.scss";

export function Header({logo}) {

  return (
    <header className={styles.header}>
        <img src={logo} alt="Logo"></img>
    </header>
  );
}
