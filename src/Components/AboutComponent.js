import React from "react";
import PropTypes from "prop-types";
import { Container, Paper, Slide } from "@material-ui/core";
function AboutComponent(props) {
  return (
    <>
      <Slide direction="down" timeout={1000}>
        <Container>
          <Paper>HELLO WORLD</Paper>
        </Container>
      </Slide>
    </>
  );
}

AboutComponent.propTypes = {};

export default AboutComponent;
