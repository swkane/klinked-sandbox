import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import IMAGES from "../themes/Images";
import COLORS from "../themes/Colors";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: COLORS.white,
    color: COLORS.darkBlue,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    padding: "0px 15px",
    fontSize: "15px"
  },
  logo: {
    width: "50px",
    height: "50px",
    marginLeft: "75px"
  },
  verticalLine: {
    borderLeft: "1px solid lightgrey",
    height: "50px",
    marginLeft: "30px",
    marginRight: "30px"
  },
  menuButton: {
    marginRight: "55px",
    color: COLORS.white,
    backgroundColor: COLORS.darkBlue,
    padding: "10px 15px"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <img className={classes.logo} src={IMAGES.logo} alt="logo" />
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Programs
          </Typography>
          <Typography variant="h6" className={classes.title}>
            About
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Admissions
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Connect
          </Typography>
          <div className={classes.verticalLine} />
          <Button className={classes.menuButton} color="inherit">
            Apply Now
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
