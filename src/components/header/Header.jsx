import React from "react";
import withRoot from "../../withRoot";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Icon from "../button/Icon";
import Grid from "material-ui/Grid";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {}
});

const renderIcon = (props, type) => {
  if (type !== "Add") {
    return (
      <Link to="/">
        <Icon type={type} onClick={() => props.iconClick(type)} />
      </Link>
    );
  }
  return <Icon type={type} onClick={() => props.iconClick(type)} />;
};
const Header = props => {
  const { type } = props;
  const justifyType = type === "Add" ? "flex-end" : "flex-start";
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Grid container justify={justifyType}>
          {renderIcon(props, type)}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  type: "Add"
};
Header.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string,
  iconClick: PropTypes.func
};

export default withRoot(withStyles(styles)(Header));
