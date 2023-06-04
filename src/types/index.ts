
export type Theme = 'light' | 'dark';

export type Props = {
  theme: Theme;
};

export type ThemeStyles = {
  [key in Theme]: {
    color: string;
  };
};