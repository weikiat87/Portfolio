import React from "react";
import PropTypes from "prop-types";
import { Card, CardAction, Typography } from "@material-ui/core";

function LatestCard(props) {
  const { title, imageSrc } = props;
  return (
    <Card>
      <Typography variant="h6">{title}</Typography>
      <img
        src={imageSrc}
        style={{
          height: "auto",
          width: "100px",
          borderRadius: "20%"
        }}
      ></img>
    </Card>
  );
}

LatestCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.object
};

export default LatestCard;
