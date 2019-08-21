import React from "react";
import NavBar from "./Components/NavBar";
import { MuiThemeProvider, Paper } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import TabContainer from "./Components/TabContainer";
import IntroComponent from "./Components/IntroComponent";
import AboutComponent from "./Components/AboutComponent";
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#774413"
    },
    secondary: {
      main: "#134777"
    }
  }
});
theme = responsiveFontSizes(theme);
export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar
        changeColorOnScroll={{
          color: "white",
        }}
      />
      <IntroComponent />
      <TabContainer>
        <AboutComponent />
      </TabContainer>
      <TabContainer>
        <Paper>Hello World 3</Paper>
      </TabContainer>
    </MuiThemeProvider>
  );
}
