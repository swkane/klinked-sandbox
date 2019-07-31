import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import colors from "./themes/Colors";

//creates default theme to be used with material UI components
const theme = createMuiTheme({
  typography: {
    fontFamily:
      "Avenir, proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif"
  },
  palette: {
    primary: {
      main: "#043464",
      ...colors
    },
    secondary: {
      main: "#fff"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 869,
      lg: 1280,
      xl: 1920
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
