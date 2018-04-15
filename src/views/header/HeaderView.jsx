import React from "react";
import { Header } from "../../components";
import AppContext from "../../provider/AppContext";

const getIconType = context => {
  return context.selectedView === 0 ? "Add" : "Back";
};
const onIconClick = (type, context) => {
  if (type === "Back") {
    context.setSelectedView(0);
  }
  if (type === "Add") {
    context.setFormData({
      id: -1,
      title: "",
      slug: "",
      description: "",
      time: 0,
      graphic: {
        alt: "",
        src: ""
      },
      language: "en",
      skill: "intermediate",
      lessons_count: 0
    });
    context.setDialogType("Add");
    context.setShowAddEditDialog(true);
  }
};
const HeaderView = props => {
  return (
    <AppContext.Consumer>
      {context => (
        <Header
          type={getIconType(context)}
          iconClick={type => onIconClick(type, context)}
        />
      )}
    </AppContext.Consumer>
  );
};

export default HeaderView;
