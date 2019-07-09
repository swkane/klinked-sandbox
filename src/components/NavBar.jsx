import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  makeStyles,
  useMediaQuery,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link
} from "@material-ui/core";

import IMAGES from "../themes/Images";
import COLORS from "../themes/Colors";
import { BASE_HOMEPAGE } from "../constants";
import { NavBarItem } from "./NavItem";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: COLORS.white,
    color: COLORS.darkBlue,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  callToAction: {
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
  link: {
    color: "inherit",
    "&:hover": {
      color: COLORS.teal,
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

const NavBarContainer = () => {
  const theme = useTheme();
  console.log(theme);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  console.log({ matches });

  return matches ? <div>small</div> : <NavBar />;
};

export default function NavBar() {
  const classes = useStyles();

  const navItems = [
    {
      title: "Programs",
      path: "/software-engineering",
      menuItems: [
        { text: "Software Engineering", path: "/software-engineering" },
        { text: "UX Engineering", path: "/ux-engineer" },
        { text: "Digital Marketing", path: "/digital-marketing" },
        {
          text: "Kenzie Free",
          path: "https://online.kenzie.academy",
          external: true
        }
      ]
    },
    {
      title: "About",
      path: "/about-kenzie-academy",
      menuItems: [
        { text: "About Kenzie", path: "/about-kenzie-academy" },
        { text: "Student Stories", path: "/students" },
        { text: "Employers", path: "/employers" },
        { text: "Mentors", path: "/mentors" },
        {
          text: "Butler Kenzie Joint Certificates",
          path: "/butler-kenzie-joint-certificates"
        },
        { text: "FAQ", path: "/faq" }
      ]
    },
    {
      title: "Admissions",
      path: "/criteria",
      menuItems: [
        { text: "Criteria", path: "/criteria" },
        { text: "Program Cost", path: "/program-cost" },
        { text: "Scholarships", path: "/scholarships" },
        { text: "Earn and Learn", path: "/earn-and-learn" },
        { text: "Degree Pathways", path: "/degree-pathways" }
      ]
    },
    {
      title: "Connect",
      path: "/events",
      menuItems: [
        { text: "Events", path: "/events" },
        { text: "Press", path: "/news" },
        { text: "Contact Us", path: "/connect-with-kenzie" }
      ]
    }
  ];

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <img className={classes.logo} src={IMAGES.logo} alt="logo" />
        <Toolbar>
          {navItems.map(navItem => (
            <NavBarItem navItem={navItem} />
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
