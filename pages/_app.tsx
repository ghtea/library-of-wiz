import type { AppProps } from 'next/app'
import theme from 'theme';
import { ThemeProvider} from "theme-ui";

import 'normalize.css';
import './fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
