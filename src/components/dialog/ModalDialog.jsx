import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from "material-ui/Dialog";

const ModalDialog = props => {
  const { dialogType, onActionClick, ...other } = props;
  const dialogTitle = dialogType === "Edit" ? "Edit Course" : "Add Course";
  return (
    <Dialog {...other}>
      <DialogTitle id="confirmation-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => onActionClick("cancel")}>
          Cancel
        </Button>
        <Button color="primary" onClick={() => onActionClick("save")}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ModalDialog.defaultProps = {
  dialogType: "Add Course"
};

ModalDialog.propTypes = {
  onActionClick: PropTypes.func,
  dialogType: PropTypes.string
};
export default ModalDialog;
