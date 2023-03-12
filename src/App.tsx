import { ThemeProvider } from "styled-components";
import { Header } from "./components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <h1>Vite + React</h1>

      <GlobalStyle />
    </ThemeProvider>
  );
}
