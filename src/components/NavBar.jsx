import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import IMAGES from "../themes/Images";
import COLORS from "../themes/Colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: COLORS.white,
    color: COLORS.darkBlue
  },
  menuButton: {},
  title: {
    flexGrow: 1
  },
  logo: {
    width: "50px",
    height: "50px"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <img className={classes.logo} src={IMAGES.logo} alt="logo" />

          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Apply Now</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
