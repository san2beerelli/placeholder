import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class Fab extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Button variant="fab" className={classes.fab} color="primary">
        <AddIcon />
      </Button>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Fab);
