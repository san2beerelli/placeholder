import React, { Component } from "react";
import { ModalDialog } from "../../components";
import AppContext from "../../provider/AppContext";
import FormView from "./FormView";

class AddEditView extends Component {
  constructor(props) {
    super(props);
    this.formData = {};
  }
  onActionClickHandler(btn, context) {
    context.setShowAddEditDialog(false);
    if (btn === "save") {
      context.setFormData(this.formData);
      context.saveCourse(this.formData);
    }
  }
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <ModalDialog
            open={context.showAddEditDialog}
            dialogType={context.dialogType}
            onActionClick={btn => this.onActionClickHandler(btn, context)}
          >
            <FormView
              formData={context.formData}
              onFormUpdate={val => (this.formData = val)}
            />
          </ModalDialog>
        )}
      </AppContext.Consumer>
    );
  }
}

export default AddEditView;
