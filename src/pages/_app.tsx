import { ThemeContextProvider } from 'contexts/ThemeContext';
import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeContextProvider>
  );
}
export default MyApp;
