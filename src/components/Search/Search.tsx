// import search from "../../images/search.svg";
import styles from "./Search.module.scss";

type Props = {
  theme: string;
};

export function Search({ theme }: Props) {
  const search = require(`../../images/search_${theme}.svg`);
  return (
    <div className={styles.search}>
      <img src={search} alt="Search icon" className={styles.icon}></img>
      <form>
        <input className={`${styles.input} ${styles[theme]}`}></input>
      </form>
    </div>
  );
}
