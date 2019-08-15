import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";

export default function App() {
  const theme = {

  }
  return (
    <MuiThemeProvider >
      <StylesProvider>
        <NavBar />
      </StylesProvider>
    </MuiThemeProvider>
  );
}