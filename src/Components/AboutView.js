import React from "react";
import PropTypes from "prop-types";
import { Paper, Grid, Typography, Avatar } from "@material-ui/core";
function AboutView(props) {
  return (
    <Paper draggable="true">
      <Grid container spacing={1} direction="row" justify="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h6">
            About Me..
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Avatar alt="Wei Kiat" src="/images/avatar_image.jpg"  sizes="50"/>
        </Grid>
        <Grid item xs={6}>
          <Typography align="center" variant="body1">
            Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing 
            Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing 
            Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing 
            Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing 
            Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing 

          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

AboutView.propTypes = {};

export default AboutView;
