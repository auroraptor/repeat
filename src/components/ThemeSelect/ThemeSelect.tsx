import styles from "./ThemeSelect.module.scss";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function ThemeSelect({ onChange }: Props) {
  return (
    <div className={styles.checkbox}>
      <label className={styles.checkbox__label} tabIndex={-1}>
        <input
          onChange={onChange}
          type="checkbox"
          name="checked"
          id="checked"
          className={styles.checkbox__switch}
          aria-label="Cменить тему"
          tabIndex={-1}
        />
        <i className={styles.checkbox__container} tabIndex={-1}></i>
      </label>
    </div>
  );
}
