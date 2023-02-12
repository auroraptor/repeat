type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
  };

export function ThemeSelect({onChange}: Props) {
  return (
    <input onChange={onChange} type="checkbox"></input>
  );
}
