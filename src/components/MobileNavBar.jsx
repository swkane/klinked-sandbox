import React from "react";
import {
  useMediaQuery,
  makeStyles,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
  withStyles,
  ExpansionPanel as MuiExpansionPanel,
  ExpansionPanelSummary as MuiExpansionPanelSummary,
  ExpansionPanelDetails as MuiExpansionPanelDetails
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Menu from "@material-ui/icons/Menu";

import IMAGES from "../themes/Images";

import NavBar from "./NavBar";
import { BASE_HOMEPAGE } from "../constants";

const ExpansionPanel = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.darkBlue,
    boxShadow: "none",
    expanded: {}
  }
}))(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    color: "white",
    border: "none",
    margin: 0
  },
  expanded: {
    margin: 0
  }
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: "0 10px"
  }
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles(theme => ({
  callToAction: {
    color: theme.palette.primary.white,
    backgroundColor: theme.palette.primary.darkBlue,
    border: "2px solid white",
    padding: "8px 25px",
    textTransform: "capitalize",
    fontSize: "16px",
    fontFamily: "inherit",
    "&:hover": {
      backgroundColor: theme.palette.primary.white,
      color: theme.palette.primary.darkBlue
    }
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "inherit"
  },
  link: {
    color: "inherit",
    fontSize: "17px",
    fontWeight: "500",
    "&:hover": {
      color: theme.palette.primary.teal,
      textDecoration: "none"
    }
  },
  list: {
    backgroundColor: theme.palette.primary.darkBlue,
    width: "290px",
    height: "100%",
    color: "white",
    padding: "20px 10px",
    fontSize: "16px"
  },
  listItem: {
    padding: "0 5px"
  },
  logo: {
    width: "50px",
    height: "50px",
    marginLeft: "75px"
  },
  hamburgerMenu: {
    margin: "15px 15px"
  },
  title: {
    padding: "0px 15px",
    fontSize: "17px",
    fontWeight: "500"
  },
  subList: {
    color: "white",
    padding: 0
  }
}));

export default function MobileNavBar({ navItems }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [state, setState] = React.useState({
    drawer: false
  });

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, drawer: open });
  };

  return matches ? (
    <div className={classes.container}>
      <img className={classes.logo} src={IMAGES.logo} alt="logo" />
      <Menu className={classes.hamburgerMenu} onClick={toggleDrawer(true)} />
      <Drawer anchor="right" open={state.drawer} onClose={toggleDrawer(false)}>
        <List className={classes.list}>
          {navItems.map((item, i) => (
            <ListItem className={classes.listItem} key={i}>
              <ExpansionPanel>
                <ExpansionPanelSummary>
                  <Typography className={classes.link}>
                    {"+ " + item.title}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <List className={classes.subList}>
                    {item.menuItems.map((menuItem, j) => (
                      <Link
                        className={classes.link}
                        key={j}
                        href={BASE_HOMEPAGE + menuItem.path}
                      >
                        <ListItem>
                          <ListItemText primary={menuItem.text} />
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </ListItem>
          ))}
          <ListItem>
            <Link className={classes.link} href={BASE_HOMEPAGE + "/blog"}>
              <Typography variant="h6" className={classes.title}>
                Blog
              </Typography>
            </Link>
          </ListItem>
          <ListItem style={{ padding: "10px 25px" }}>
            <Link className={classes.link} href={BASE_HOMEPAGE + "/apply"}>
              <Button
                variant="contained"
                className={classes.callToAction}
                color="primary"
              >
                Apply Now
              </Button>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  ) : (
    <NavBar />
  );
}
