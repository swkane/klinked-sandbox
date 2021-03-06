import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Button, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";

import Github from "../assets/icons/github_blue.svg";
import Linkedin from "../assets/icons/linkedin_blue.svg";
import Behance from "../assets/icons/behance_blue.svg";
import Location from "../assets/icons/location_gray.svg";
// import Work from "../assets/icons/work_gray.svg";
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
    },
    "& .indicatorContainer": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%"
    }
  }
}));

const ContactButton = withStyles({
  root: {
    borderRadius: "2px",
    display: "flex",
    fontSize: "18px",
    margin: "40px 0px",
    textTransform: "capitalize"
  }
})(Button);

const ProfilePage = ({ student, isLoading }) => {
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
    behance_profie_link,
    profile_summary,
    primary_skills,
    secondary_skills,
    title
  } = student;

  const classes = useStyles();

  console.log(student);

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
        <a href="https://www.kenzie.academy/become-an-employer-partner">
          <ContactButton size="large" variant="contained" color="primary">
            Contact Kenzie Careers
          </ContactButton>
        </a>
      </div>

      {isLoading ? (
        <div className="indicatorContainer">
          <CircularProgress />
        </div>
      ) : (
        <div className="bioColumn">
          <div className="header">
            <div>
              <div className="name">{first_name + " " + last_name}</div>
              <div className="title">{title}</div>
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
                src={Education}
                alt="education"
              />
              {class_name}, {prior_education}
            </div>
            <p>{profile_summary}</p>
            <div className="skills">
              <div>
                <b>Primary Skills:</b> {primary_skills}
              </div>
              <div>
                <b>Secondary Skills:</b> {secondary_skills}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
