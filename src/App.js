import React from "react";
import NavBar from "./Components/NavBar";
import { MuiThemeProvider, Paper, Container, Grid } from "@material-ui/core";
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
      <Grid container spacing={2} direction="column" justify="center">
        <Grid item>
          <IntroView />
        </Grid>
        <Grid item >
          <Container maxWidth="lg">
            <AboutView />
          </Container>
        </Grid>
        <Grid item>
          <Container  maxWidth="lg">
            <Paper>Hello World 3</Paper>
          </Container>
        </Grid>
      </Grid>
      <ActionButton />
    </MuiThemeProvider>
  );
}
