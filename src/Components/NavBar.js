import React from "react";
import { ReactComponent as Github } from "../github-brands.svg";
import { ReactComponent as Linkedin } from "../linkedin-brands.svg";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  useScrollTrigger,
  Toolbar,
  IconButton,
  SvgIcon,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  transparent:{
    backgroundColor: "transparent",
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  socialButton: {
    marginLeft: "auto"
  }
}));

function ElevationScroll(props) {
  const { children, window, changeColorOnScroll } = props;
 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });
  if(trigger)
  {
  }else{
    console.log("Not transparent");
  }
  return React.cloneElement(children, {
    elevation: trigger ? 10 : 0
  });
}

export default function NavBar(props) {
  const styles = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar variant="dense" className={styles.transparent}>
          <Toolbar variant="dense">
            <Typography className={styles.menuButton} variant="h6">
              Home
            </Typography>
            <div className={styles.socialButton}>
              <IconButton
                href="https://www.github.com/weikiat87"
                target="_blank"
              >
                <SvgIcon color="action">
                  <Github />
                </SvgIcon>
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/weikiat-leong/"
                target="_blank"
              >
                <SvgIcon color="action">
                  <Linkedin />
                </SvgIcon>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
