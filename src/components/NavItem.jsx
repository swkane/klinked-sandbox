import React from "react";
import {
  makeStyles,
  ClickAwayListener,
  Typography,
  MenuList,
  MenuItem,
  Link,
  Popper,
  Grow,
  Paper
} from "@material-ui/core";

import { BASE_HOMEPAGE } from "../constants";

const useStyles = makeStyles(theme => ({
  link: {
    color: "inherit",
    "&:hover": {
      color: theme.palette.primary.teal,
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
  paper: {
    padding: theme.spacing(2)
  },
  paperMenu: {
    backgroundColor: theme.palette.primary.darkBlue,
    color: theme.palette.primary.white
  },
  paperMenuItem: {
    margin: "0",
    minHeight: 0,
    "&:hover": {
      color: theme.palette.primary.teal
    }
  }
}));

export const NavBarItem = ({ navItem }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <React.Fragment>
      <Link className={classes.link} href={BASE_HOMEPAGE + navItem.path}>
        <Typography
          className={classes.title}
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onMouseEnter={handleToggle}
          onMouseLeave={handleToggle}
        >
          {navItem.title}
        </Typography>
      </Link>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        onMouseEnter={handleToggle}
        onMouseLeave={handleToggle}
        transition
        disablePortal
        placement="bottom-start"
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper id="menu-list-grow">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList className={classes.paperMenu}>
                  {navItem.menuItems.map((item, i) => (
                    <Link
                      key={i}
                      className={classes.link}
                      href={
                        item.external ? item.path : BASE_HOMEPAGE + item.path
                      }
                    >
                      <MenuItem
                        className={classes.paperMenuItem}
                        onClick={handleClose}
                      >
                        {item.text}
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};
