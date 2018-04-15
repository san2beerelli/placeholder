import React, { Component } from "react";
import AppContext from "./AppContext";
import { readCourses, saveCourses, removeCourses } from "../store/AppStore";

class AppProvider extends Component {
  state = {
    selectedView: 0,
    showAddEditDialog: false,
    dialogType: "Add",
    courses: [],
    formData: {
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
    },
    getCourses: (page, rowsPerPage) => {
      readCourses(page, rowsPerPage).then(data =>
        this.setState({ courses: data })
      );
    },
    deleteCourses: courseIds => {
      removeCourses(courseIds).then(data => this.state.getCourses(0, 10));
    },
    saveCourse: formData => {
      saveCourses(formData).then(data => this.state.getCourses(0, 10));
    },
    setSelectedView: view => {
      this.setState({ selectedView: view });
    },
    setShowAddEditDialog: show => {
      this.setState({ showAddEditDialog: show });
    },
    setDialogType: type => {
      this.setState({ dialogType: type });
    },
    setFormData: data => {
      this.setState({ formData: data });
    }
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
