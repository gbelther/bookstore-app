import { createContext, ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';

interface IThemeContext {
  theme: DefaultTheme;
}

interface IThemeContextProvider {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
  return (
    <ThemeContext.Provider value={{ theme: theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
