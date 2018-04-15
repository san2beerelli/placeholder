import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import withRoot from "../../withRoot";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import { Icon } from "../index";
import Grid from "material-ui/Grid";

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  highlight: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.dark
  },
  spacer: {},
  actions: {
    color: theme.palette.text.secondary
  },
  title: {}
});

const ListToolbar = props => {
  const { numSelected, classes, onIconClick } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography color="inherit" variant="subheading">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography variant="title">Courses</Typography>
      )}
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Grid container>
            {numSelected === 1 ? (
              <Icon type="Edit" onClick={() => onIconClick("Edit")} />
            ) : null}
            <Icon type="Delete" onClick={() => onIconClick("Delete")} />
          </Grid>
        ) : null}
      </div>
    </Toolbar>
  );
};

ListToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onIconClick: PropTypes.func
};

export default withRoot(withStyles(toolbarStyles)(ListToolbar));
