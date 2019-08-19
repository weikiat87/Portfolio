import React, { useState } from "react";
//import PropTypes from "prop-types";
import TabContainer from "./TabContainer";
import IntroComponent from "./IntroComponent";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  AppBar,
  Tabs,
  Tab,
  useScrollTrigger,
  Toolbar,
  Paper
} from "@material-ui/core";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

export default function NavBar(props) {
  const [value, setValue] = useState(0);
  const [scrollTarget, setScrollTarget] = useState(undefined);

  const scrollToRef = useScrollTrigger({ target: scrollTarget });
  function handleOnChange(event, newValue) {
    setValue(newValue);
    console.log(newValue);
    //console.log(this.tabs.getSelectedIndex(this.tabs.props));
    //scrollToRef(newValue);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar variant="dense">
          <Tabs
            value={value}
            onChange={handleOnChange}
            //ref = {ref => (this.tabs = ref)}
            indicatorColor="secondary"
            centered
            variant="fullWidth"
          >
            <Tab label="Home" />
            <Tab label="Portfolio" />
            <Tab label="Contact Me" />
          </Tabs>
        </AppBar>
      </ElevationScroll>
      <Toolbar variant="dense" />

      <IntroComponent />
      <TabContainer>
        <Paper>Hello World 2</Paper>
      </TabContainer>
      <TabContainer>
        <Paper>Hello World 3</Paper>
      </TabContainer>
    </React.Fragment>
  );
}
