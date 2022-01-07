import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { routes } from "./routes";
import { useRoutes } from "react-router";
import theme from "./theme";

function App(): JSX.Element {
  const routing = useRoutes(routes);
  return <ThemeProvider theme={theme}>{routing}</ThemeProvider>;
}

export default App;
