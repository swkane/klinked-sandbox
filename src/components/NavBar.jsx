//React
import React from "react";

import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link
} from "@material-ui/core";

import IMAGES from "../themes/Images";
import { BASE_HOMEPAGE } from "../constants";
import { NavBarItem } from "./NavItem";
// import StudentCard from "../components/StudentCard";

const useStyles = makeStyles(theme => ({
  appBar: {
    width: "100%",
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.primary.darkBlue,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  callToAction: {
    marginRight: "45px",
    color: theme.palette.primary.white,
    backgroundColor: theme.palette.primary.darkBlue,
    padding: "8px 25px",
    textTransform: "capitalize",
    fontSize: "16px",
    fontFamily: "inherit",
    "&:hover": {
      backgroundColor: theme.palette.primary.lightBlue
    }
  },
  link: {
    color: "inherit",
    "&:hover": {
      color: theme.palette.primary.teal,
      textDecoration: "none"
    }
  },
  logo: {
    width: "50px",
    height: "50px",
    marginLeft: "75px"
  },
  title: {
    padding: "0px 15px",
    fontSize: "16px",
    fontFamily: "inherit",
    fontWeight: "500"
  },
  verticalLine: {
    borderLeft: "1px solid lightgrey",
    height: "40px",
    marginLeft: "25px",
    marginRight: "20px"
  }
}));

export default function NavBar({ navItems }) {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <img className={classes.logo} src={IMAGES.logo} alt="logo" />
        <Toolbar>
          {navItems.map((navItem, i) => (
            <NavBarItem key={i} navItem={navItem} />
          ))}
          <Link className={classes.link} href={BASE_HOMEPAGE + "/blog"}>
            <Typography variant="h6" className={classes.title}>
              Blog
            </Typography>
          </Link>

          <div className={classes.verticalLine} />
          <Link className={classes.link} href={BASE_HOMEPAGE + "/apply"}>
            <Button
              variant="contained"
              className={classes.callToAction}
              color="primary"
            >
              Apply Now
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
