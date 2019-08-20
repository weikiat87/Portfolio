import React from "react";
import { Box, Typography, Slide } from "@material-ui/core";
import TypedComponent from "./TypedComponent";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
  text: {
    position: "absolute",
    top: "35%",
    left: "50%",
    transform: "translate(-50%,-35%)",
    textAlign: "center",
    color: theme.palette.primary.contrastText,
    textShadow: "2px 2px 5px #aaaaaa"
  },
  wrapper:{
    position:"relative",
    display:"block",
    backgroundImage:"url(/images/intro-bg.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh"
  }
}));

function IntroComponent() {
  const styles = useStyle();
  return (
    <>
      <Slide direction="down" in={true}>
        <Box className={styles.wrapper}>
          <Box className={styles.text}>
            <Typography variant="h1">
              I am a
            </Typography>
            <TypedComponent
              strings={["Web Developer", "AI Developer", "Games Developer"]}
              variant="h2"
            />
          </Box>
        </Box>
      </Slide>
    </>
  );
}

export default IntroComponent;
