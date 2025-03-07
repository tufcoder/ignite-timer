import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router";

import { Router } from "./components/Router";
import { CyclesContextProvider } from "./contexts/CyclesContextProvider";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
// import { Home } from "./Home";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
