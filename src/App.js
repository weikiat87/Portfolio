import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue, teal } from "@material-ui/core/colors";
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: blue
  }
});
export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider>
        <NavBar />
      </StylesProvider>
    </MuiThemeProvider>
  );
}
