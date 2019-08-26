import React from "react";
import { Paper, Box, Grid, Typography } from "@material-ui/core";
import AvatarImage from "../images/avatar_image.jpg";
import WebLogo from "../images/web-logo.svg";
import GameLogo from "../images/game-logo.svg";
import MlLogo from "../images/ml-logo.svg";


import ScrollSlide from "./ScrollSlide";
import { makeStyles } from "@material-ui/styles";
import LatestCard from "./LatestCard";

const useStyles = makeStyles(theme => ({
  figure: {
    display: "inline-block",
    textAlign: "center",
    margin: "5px" /* adjust as needed */
  }
}));

function AboutView() {
  const style = useStyles();
  return (
    <React.Fragment>
      <ScrollSlide slideHeight={200}>
        <Paper>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="space-between"
            alignContent="center"
            alignItems="flex-start"
          >
            <Grid item sm={4} lg={4}>
              <Box className={style.figure}>
                <img
                  src={AvatarImage}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    borderRadius: "20%"
                  }}
                  alt=""
                />
                <Typography variant="caption">
                  That's me
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={8} lg={8}>
              <Typography align="center" variant="h4">
                About Me
              </Typography>
              <Typography align="center" variant="body1">
                Hi there, I'm Wei Kiat and I'm a programmer who have worked in
                both games and on the web for a good portion of my career.
              </Typography>

              <Grid container direction="row" justify="space-evenly">
                <Grid item>
                  <LatestCard title="Web" imageSrc={WebLogo}></LatestCard>
                </Grid>
                <Grid item>
                <LatestCard title="Games" imageSrc={GameLogo}></LatestCard>
                </Grid>
                <Grid item>
                  <LatestCard title="ML" imageSrc={MlLogo}></LatestCard>
                </Grid>
              </Grid>
              <Typography align="center" variant="body1">
                Please feel free to look at my Portfolio and contact me if you
                have any queries about my skillsets.
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center" variant="body1">
                Testing Testing Testing Testing Testing Testing Testing Testing
                Testing Testing Testing Testing Testing Testing Testing Testing
                Testing Testing Testing Testing Testing Testing Testing Testing
                Testing Testing Testing Testing Testing Testing Testing Testing
                Testing Testing Testing Testing Testing Testing Testing Testing
                Testing Testing Testing Testing Testing Testing Testing Testing
                Testing Testing Testing Testing Testing Testing Testing Testing
                Testing Testing Testing Testing Testing Testing Testing Testing
                Testing Testing Testing Testing Testing Testing
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </ScrollSlide>
    </React.Fragment>
  );
}

AboutView.propTypes = {};

export default AboutView;
