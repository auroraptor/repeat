type Props = {
    onChange: React.ChangeEventHandler<HTMLSelectElement>
  };

export function ThemeSelect({onChange}: Props) {
  return (
    <select onChange={onChange}>
      <option value="day">День</option>
      <option value="night">Ночь</option>
    </select>
  );
}
