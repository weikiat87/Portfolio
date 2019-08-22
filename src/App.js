import React from "react";
import NavBar from "./Components/NavBar";
import { MuiThemeProvider, Paper, Container } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import IntroView from "./Components/IntroView";
import AboutView from "./Components/AboutView";
import ActionButton from "./Components/ActionButton";
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#774413"
    },
    secondary: {
      main: "#134777"
    },
    background: {
      default: "#eeeeee"
    }
  },
  overrides: {
    MuiSvgIcon: {
      colorAction: {
        color: "rgba(255,255,255,0.54)"
      }
    },
    MuiFab: {
      root: {
        position: "absolute",
        bottom: "2rem",
        right: "2rem"
      }
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
          color: "white"
        }}
      />
      <IntroView />
      <ActionButton />
      <Container fixed>
        <AboutView />
        <Paper>Hello World 3</Paper>
      </Container>
    </MuiThemeProvider>
  );
}
