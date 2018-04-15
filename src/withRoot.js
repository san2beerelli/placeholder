import React from "react";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import CssBaseline from "material-ui/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#F5F5F5",
      main: "#9E9E9E",
      dark: "#616161"
    },
    secondary: {
      light: "#FFC107",
      main: "#FFC107",
      dark: "#FFC107"
    }
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
