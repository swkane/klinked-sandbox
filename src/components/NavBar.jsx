import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Link,
  Popover
} from "@material-ui/core";

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
  },
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <img className={classes.logo} src={IMAGES.logo} alt="logo" />
        <Toolbar>
          <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            variant="h6"
            className={classes.title}
          >
            Programs
          </Typography>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
            onMouseLeave={handlePopoverClose}
          >
            <Menu anchorEl={anchorEl} open={open}>
              <div onMouseLeave={handlePopoverClose}>
                <MenuItem onClick={handlePopoverClose}>
                  Software Engineering
                </MenuItem>
                <MenuItem onClick={handlePopoverClose}>UX Engineering</MenuItem>
                <MenuItem onClick={handlePopoverClose}>
                  Digital Marketing
                </MenuItem>
                <MenuItem onClick={handlePopoverClose}>Kenzie Free</MenuItem>
              </div>
            </Menu>
          </Popover>
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
