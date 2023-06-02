import styles from "./Star.module.scss";

type Props = {
  theme: string;
};

export function Star({ theme }: Props) {
  return (
    <div className={styles.star}>
    </div>
  );
}
