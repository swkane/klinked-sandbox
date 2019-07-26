import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";

export const NavBarContainer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

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

  return matches ? (
    <MobileNavBar navItems={navItems} />
  ) : (
    <NavBar navItems={navItems} />
  );
};
