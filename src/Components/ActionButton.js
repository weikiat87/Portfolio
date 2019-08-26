import React from "react";
import { Fab, SvgIcon, Tooltip } from "@material-ui/core";
import { ReactComponent as Mail } from "../images/mail.svg";

function ActionButton() {
  return (
    <Tooltip title="Send me an Email!" placement="left">
      <Fab color="primary" component="a" href={"mailto:lwk-dev@pm.me?subject=Enquiry About Wei Kiat"} aria-label="mail" style={{ position: "fixed" }}>
        <SvgIcon>
          <Mail />
        </SvgIcon>
      </Fab>
    </Tooltip>
  );
}

export default ActionButton;
