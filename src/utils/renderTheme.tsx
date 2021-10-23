import { render, RenderResult } from '@testing-library/react';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { ReactNode } from 'react';

export const renderTheme = (children: ReactNode): RenderResult => {
  return render(<ThemeContextProvider>{children}</ThemeContextProvider>);
};
