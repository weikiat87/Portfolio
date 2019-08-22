import React from "react";
import { ReactComponent as Github } from "../github-brands.svg";
import { ReactComponent as Linkedin } from "../linkedin-brands.svg";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  useScrollTrigger,
  Toolbar,
  IconButton,
  SvgIcon,
  Tooltip
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  scrollTransparent: {
    backgroundColor: "rgba(0,0,0,0.0)"
  },
  scrollColor: {
    backgroundColor: theme.palette.primary
  },
  scrollTransition: {
    webkitTransition: "background-color .4s linear",
    mozTransition: "background-color .4s linear",
    oTransition: "background-color .4s linear",
    msTransition: "background-color .4s linear",
    transition: "background-color .4s linear"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  socialButton: {
    marginLeft: "auto"
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const styles = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
    target: window ? window() : undefined
  });
  if (trigger) {
    if (document.getElementsByTagName("header")[0] !== undefined) {
      document
        .getElementsByTagName("header")[0]
        .classList.replace(styles.scrollTransparent, styles.scrollColor);
    }
  } else {
    if (document.getElementsByTagName("header")[0] !== undefined) {
      document
        .getElementsByTagName("header")[0]
        .classList.replace(styles.scrollColor, styles.scrollTransparent);
    }
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
        <AppBar
          variant="dense"
          className={classNames(
            styles.scrollTransparent,
            styles.scrollTransition
          )}
        >
          <Toolbar variant="dense">
            <div className={styles.socialButton}>
              <Tooltip title="See my Github" >
                <IconButton
                  component="a"
                  href="https://www.github.com/weikiat87"
                  target="_blank"
                >
                  <SvgIcon color="action">
                    <Github />
                  </SvgIcon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Follow me on Linkedin">
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/weikiat-leong/"
                  target="_blank"
                >
                  <SvgIcon color="action">
                    <Linkedin />
                  </SvgIcon>
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
