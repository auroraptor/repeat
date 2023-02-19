// import search from "../../images/search.svg";
import styles from "./Search.module.scss";

type Props = {
  theme: string;
};

export function Search({ theme }: Props) {
  const search = require(`../../images/search_${theme}.svg`);
  return (
    <>
      <img src={search} alt="Search icon" className={styles.search}></img>
    </>
  );
}
