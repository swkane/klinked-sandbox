import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Button, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import Github from "../assets/icons/github_blue.svg";
import Linkedin from "../assets/icons/linkedin_blue.svg";
import Behance from "../assets/icons/behance_blue.svg";
import Location from "../assets/icons/location_gray.svg";
import Work from "../assets/icons/work_gray.svg";
import Education from "../assets/icons/education_gray.svg";

// This Component uses hooks, if you would like a introduction / refresher to hooks please read the following resources:
// https://reactjs.org/docs/hooks-intro.html
// https://reactjs.org/docs/hooks-state.html
// https://reactjs.org/docs/hooks-effect.html
// https://codeburst.io/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: "40px",
    "& .profileColumn": {
      margin: "10px 30px 0px 0px"
    },
    "& .backButton": {
      display: "flex",
      alignItems: "center",
      color: theme.palette.primary.main,
      fontSize: "25px",
      fontWeight: "bold"
    },
    "& .blueFlex": {
      display: "flex",
      alignItems: "center",
      color: theme.palette.primary.main,
      fontSize: "23px",
      "& p": {
        paddingLeft: "15px",
        margin: "12px"
      }
    },
    "& .profileImg": {
      border: "8px solid white",
      boxShadow: "0 0 0 2px #1C3869",
      margin: "40px 5px",
      width: "240px",
      height: "240px"
    },
    "& .bioColumn": {
      width: "100%",
      marginLeft: "25px",
      textAlign: "left"
    },
    "& .header": {
      display: "flex",
      justifyContent: "space-between"
    },
    "& .name": {
      color: theme.palette.primary.martinique,
      fontSize: "36px",
      fontWeight: "bold"
    },
    "& .title": {
      color: theme.palette.primary.martinique,
      fontSize: "28px",
      marginBottom: "50px"
    },
    "& .location": {
      color: theme.palette.primary.kenzieGrey,
      fontSize: "28px",
      textAlign: "left",
      fontWeight: "bold"
    },
    "& .info": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      color: theme.palette.primary.kenzieGrey,
      fontSize: "28px",
      "& p": {
        margin: "50px 0px"
      }
    },
    "& .skills": {
      color: theme.palette.primary.martinique,
      "& b": {
        fontWeight: "bold"
      }
    },
    "& a": {
      textDecoration: "none",
      color: "inherit"
    }
  }
}));

const ContactButton = withStyles({
  root: {
    borderRadius: "2px",
    display: "flex",
    fontSize: "20px",
    margin: "40px 0px",
    textTransform: "capitalize"
  }
})(Button);

const ProfilePage = ({ student }) => {
  const {
    first_name,
    last_name,
    city,
    state,
    image,
    class_name,
    prior_education,
    github_profile_link,
    linkedin_profile_link,
    behance_profie_link
  } = student;

  const classes = useStyles();

  // console.log(student);

  return (
    <div className={classes.root}>
      <div className="profileColumn">
        <Link to="/">
          <div className="backButton">
            <i className="material-icons">keyboard_arrow_left</i>
            Back
          </div>
        </Link>
        <Avatar className="profileImg" src={image} />

        <div className="blueFlex">
          <img style={{ height: "40px" }} src={Github} alt="github" />
          <a href={github_profile_link}>
            <p>Github</p>
          </a>
        </div>
        <div className="blueFlex">
          <img style={{ height: "40px" }} src={Linkedin} alt="linkedin" />
          <a href={linkedin_profile_link}>
            <p>Linkedin</p>
          </a>
        </div>
        {behance_profie_link && (
          <div className="blueFlex">
            <img style={{ height: "25px" }} src={Behance} alt="behance" />
            <p>Behance</p>
          </div>
        )}
        <ContactButton size="large" variant="contained" color="primary">
          <i
            style={{ paddingRight: "10px", fontSize: "25px" }}
            className="material-icons"
          >
            mail_outline
          </i>
          Contact Me
        </ContactButton>
      </div>

      <div className="bioColumn">
        <div className="header">
          <div>
            <div className="name">{first_name + " " + last_name}</div>
            <div className="title">Title</div>
          </div>

          <div className="location">
            {city}, {state}
            <img
              style={{ height: "30px" }}
              src={Location}
              alt="location"
            />{" "}
          </div>
        </div>
        <div className="info">
          <div>
            <img
              style={{ height: "30px", paddingRight: "15px" }}
              src={Work}
              alt="work"
            />
            Current Job
          </div>
          <div>
            <img
              style={{ height: "30px", paddingRight: "15px" }}
              src={Education}
              alt="education"
            />
            {class_name}, {prior_education}
          </div>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div className="skills">
            <div>
              <b>Top Skills:</b> list them here
            </div>
            <div>
              <b>Other Tricks:</b> list sub-skills here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
