import type { AppProps } from 'next/app'
import 'normalize.css';
import './fonts.css';
import theme from 'theme';
import { ThemeProvider} from "theme-ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
