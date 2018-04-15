import React from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import Tooltip from "material-ui/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const Icons = {
  Delete: {
    icon: <DeleteIcon />
  },
  Add: {
    icon: <AddIcon />
  },
  Back: {
    icon: <KeyboardBackspaceIcon />
  },
  Next: {
    icon: <NavigateNextIcon />
  },
  Edit: {
    icon: <EditIcon />
  }
};

const Icon = props => {
  return (
    <Tooltip title={props.type}>
      <IconButton aria-label={props.type} onClick={props.onClick}>
        {Icons[props.type].icon}
      </IconButton>
    </Tooltip>
  );
};

Icon.propTypes = {
  onClick: PropTypes.func
};

export default Icon;
