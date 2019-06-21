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
    fontSize: "16px",
    fontFamily: "inherit",
    fontWeight: "500"
  },
  logo: {
    width: "50px",
    height: "50px",
    marginLeft: "75px"
  },
  verticalLine: {
    borderLeft: "1px solid lightgrey",
    height: "40px",
    marginLeft: "25px",
    marginRight: "20px"
  },
  menuButton: {
    marginRight: "65px",
    color: COLORS.white,
    backgroundColor: COLORS.darkBlue,
    padding: "8px 25px",
    textTransform: "capitalize",
    fontSize: "16px",
    fontFamily: "inherit",
    "&:hover": {
      backgroundColor: COLORS.lightBlue
    }
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div>
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
          <Typography variant="h6" className={classes.title}>
            Blog
          </Typography>
          <div className={classes.verticalLine} />
          <Button
            variant="contained"
            className={classes.menuButton}
            color="primary"
          >
            Apply Now
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
