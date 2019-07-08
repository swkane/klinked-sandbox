import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Menu, MenuItem, Link, Popover } from "@material-ui/core";

import COLORS from "../themes/Colors";
import { BASE_HOMEPAGE } from "../constants";

const useStyles = makeStyles(theme => ({
  link: {
    color: "inherit",
    "&:hover": {
      color: COLORS.teal,
      textDecoration: "none"
    }
  },
  title: {
    padding: "0px 15px",
    fontSize: "16px",
    fontFamily: "inherit",
    fontWeight: "500"
  },
  popover: {
    pointerEvents: "none"
  },
  paperMenu: {
    backgroundColor: COLORS.darkBlue,
    color: COLORS.white
  },
  paperMenuItem: {
    margin: "0",
    "&:hover": {
      color: COLORS.teal
    }
  }
}));

export const NavBarItem = ({ navItem }) => {
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
    <React.Fragment>
      <Link className={classes.link} href={BASE_HOMEPAGE + "/apply"}>
        <Typography
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          variant="h6"
          className={classes.title}
        >
          {navItem.title}
        </Typography>
      </Link>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
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
        <Menu
          classes={{
            paper: classes.paperMenu
          }}
          anchorEl={anchorEl}
          open={open}
        >
          <div onMouseLeave={handlePopoverClose}>
            {navItem.menuItems.map(item => (
              <MenuItem
                className={classes.paperMenuItem}
                onClick={handlePopoverClose}
              >
                {item}
              </MenuItem>
            ))}
          </div>
        </Menu>
      </Popover>
    </React.Fragment>
  );
};
