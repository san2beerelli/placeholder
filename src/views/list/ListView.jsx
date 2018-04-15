import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { List } from "../../components";
import AppContext from "../../provider/AppContext";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    width: "100%"
  }
});

class ListView extends Component {
  onToolClickHandler(type, selected, context) {
    if (type === "Edit") {
      context.setFormData(selected);
      context.setDialogType(type);
      context.setShowAddEditDialog(true);
    } else if (type === "Delete") {
      context.deleteCourses(selected);
    }
  }
  onNextButtonClickHandler(selected, context) {
    context.setFormData(selected);
    context.setSelectedView(1);
  }
  render() {
    const { classes } = this.props;
    return (
      <AppContext.Consumer>
        {context => (
          <div className={classes.root}>
            <List
              getListData={context.getCourses}
              listData={context.courses}
              nextButtonClick={selected =>
                this.onNextButtonClickHandler(selected, context)
              }
              onToolClick={(type, selected) =>
                this.onToolClickHandler(type, selected, context)
              }
            />
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

ListView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListView);
