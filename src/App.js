import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppProvider from "./provider/AppProvider";
import ListView from "./views/list/ListView";
import CourseView from "./views/course/CourseView";
import HeaderView from "./views/header/HeaderView";
import AddEditView from "./views/addEdit/AddEditView";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <React.Fragment>
            <HeaderView />
            <Route exact path="/" component={ListView} />
            <Route path="/course" component={CourseView} />
            <AddEditView />
          </React.Fragment>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
