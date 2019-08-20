import React from "react";
import NavBar from "./Components/NavBar";
import { MuiThemeProvider, Paper } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import TabContainer from "./Components/TabContainer";
import IntroComponent from "./Components/IntroComponent";
import AboutComponent from "./Components/AboutComponent";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#774413"
    },
    secondary: {
      main: "#134777"
    }
  }
});
export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <NavBar />
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
