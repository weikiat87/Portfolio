import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import TypedComponent from "./TypedComponent";

const options = [];
function IntroComponent(props) {
  return (
    <React.Fragment>
      <Box>
        <img src="/images/intro-bg.jpg" width="100%" />
        <TypedComponent options={options} />
      </Box>
    </React.Fragment>
  );
}

IntroComponent.propTypes = {};

export default IntroComponent;
