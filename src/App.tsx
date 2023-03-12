import { ThemeProvider } from "styled-components";
import { Header, Profile } from "./components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Profile />
      <h1>Vite + React</h1>

      <GlobalStyle />
    </ThemeProvider>
  );
}
