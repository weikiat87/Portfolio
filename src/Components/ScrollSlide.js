import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Slide } from "@material-ui/core";

function ScrollSlide(props) {
  const [height, setHeight] = useState(0);
  const { onSlide } = props;

  function determineUserScrollDepth() {
    const scrollValue =
      document.documentElement.scrollTop || document.body.scrollTop;
    setHeight(scrollValue);

    if(onSlide != null)
    {
      onSlide(height);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", determineUserScrollDepth);
    return () => {
      window.removeEventListener("scroll", determineUserScrollDepth);
    };
  });

  return <Slide in={height >= props.slideHeight}>{props.children}</Slide>;
}
ScrollSlide.propTypes = {
  slideHeight: PropTypes.number.isRequired,
  onSlide: PropTypes.func
};

export default ScrollSlide;
