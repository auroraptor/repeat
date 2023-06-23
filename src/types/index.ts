
export type Theme = string;

export type Props = {
  theme: Theme;
};

export type ThemeStyles = {
  [key in Theme]: {
    color: string;
  };
};