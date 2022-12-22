import { ThemeProvider } from "styled-components"
import { light } from "./../styles/theme"
import GlobalStyles from "../styles/globalStyles"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
