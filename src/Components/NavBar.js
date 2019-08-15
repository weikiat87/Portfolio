import React from "react";
import PropTypes from "prop-types";


import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { AppBar } from "@material-ui/core";

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  function handleOnChange(event,newValue)  {
    setValue(newValue);
  };

  return (
    <AppBar>
      <Tabs
        value={value}
        onChange={handleOnChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab label="Home" />
        <Tab label="Portfolio" />
        <Tab label="Contact Me" />
      </Tabs>
      
    </AppBar>
  );
}
