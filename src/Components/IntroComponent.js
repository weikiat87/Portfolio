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
  img: {
    display:"block",
    boxShadow: "2px 10px 5px #aaaaaa"
  },
  wrapper:{
    position:"relative",
    display:"block"
  }
}));

function IntroComponent() {
  const styles = useStyle();
  return (
    <>
      <Slide direction="down" in={true}>
        <Box className={styles.wrapper}>
          <img
            alt=""
            src="/images/intro-bg.jpg"
            width="100%"
            className={styles.img}
          />
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
