import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";
import { Typography } from "@material-ui/core";

class TypedComponent extends PureComponent {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
	this.typed = new Typed(this.el, options);
	
    this.typed.start();
  }

  

  componentWillUnmount() {
    this.typed.destroy();
  }
  render() {
	const { variant, align } = this.props;
    return (
      <Typography variant={variant} align={align}>
        <span ref={el => (this.el = el)} />
      </Typography>
    );
  }
}

TypedComponent.propTypes = {
  strings: PropTypes.array.isRequired,
  align: PropTypes.string,
  variant: PropTypes.string
};

export default TypedComponent;
