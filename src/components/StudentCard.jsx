import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Avatar } from "@material-ui/core";

import educationIcon from "../assets/icon-education_gray.svg";
import locationIcon from "../assets/icon-location_gray.svg";
import jobIcon from "../assets/icon-work_gray.svg";

const useStyles = makeStyles(theme => ({
  card: {
    boxSizing: "border-box",
    height: "202px",
    width: "932px",
    borderRadius: "3px",
    backgroundColor: "#FFF",
    border: "2px solid #1C3869",
    boxShadow: "0 0 50px 0 rgba(0,0,0,0.25)",
    paddingTop: "25px",
    paddingLeft: "25px",
    paddingRight: "25px",
    display: "flex",
    postion: "relative"
  },
  avatar: {
    boxSizing: "border-box",
    height: "152.26px",
    width: "153px",
    border: "4px solid white",
    boxShadow: "0 0 0 2px #1C3869"
  },
  name: {
    height: "29.86px",
    color: "#30334A",
    fontSize: "22px",
    fontWeight: "600",
    letterSpacing: "0.53px",
    lineHeight: "30px"
  },
  title: {
    height: "24.88px",
    color: "#30334A",
    fontSize: "18px",
    letterSpacing: "0.44px",
    lineHeight: "25px"
  },
  education: {
    height: "24.88px",
    width: "507px",
    color: "#8E91A4",
    fontSize: "18px",
    letterSpacing: "0.44px",
    lineHeight: "25px",
    marginBottom: "10px"
  },
  job: {
    height: "24.88px",
    color: "#8E91A4",
    fontSize: "18px",
    letterSpacing: "0.44px",
    lineHeight: "25px"
  },
  quote: {
    height: "25px",
    color: "#8E91A4",
    fontSize: "18px",
    fontStyle: "oblique",
    lineHeight: "25px",
    textAlign: "right",
    textOverflow: "ellipsis",
    paddingRight: "18px"
  },
  location: {
    height: "25px",
    color: "#8E91A4",
    fontSize: "18px",
    fontWeight: "900",
    letterSpacing: "0.44px",
    lineHeight: "25px",
    textAlign: "right"
  },
  wrapperContainer: {
    display: "flex",
    width: "90%",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  topContainer: {
    display: "flex",
    paddingLeft: "25px",
    width: "100%"
  },
  upperLeft: {
    textAlign: "left"
  },
  upperRight: {
    display: "flex",
    textAlign: "right",
    marginLeft: "auto",
    marginRight: "25px",
    right: "25px",
    zIndex: "1",
    whiteSpace: "nowrap"
  },
  lowerContainer: {
    paddingBottom: "20px",
    textAlign: "left",
    paddingLeft: "25px",
    width: "100%",
    whiteSpace: "nowrap"
  },
  icon: {
    width: "20px",
    height: "20px",
    float: "left",
    marginRight: "8px"
  }
}));

export default function StudentCard(props) {
  const classes = useStyles();
  const {
    first_name,
    last_name,
    city,
    state,
    image,
    class_name,
    prior_education
  } = props.user;
  return (
    <Card className={classes.card}>
      <Avatar className={classes.avatar} src={image}></Avatar>
      <div className={classes.wrapperContainer}>
        <div className={classes.topContainer}>
          <div className={classes.upperLeft}>
            <div className={classes.name}>
              {first_name} {last_name}
            </div>
            <div className={classes.title}>{class_name}</div>
          </div>
          <div className={classes.upperRight}>
            {/* <div className={classes.quote}>"Jump on life and hang on!"</div> */}
            {city && (
              <React.Fragment>
                <img
                  src={locationIcon}
                  className={classes.icon}
                  alt="location"
                />
                <div className={classes.location}>
                  {city}, {state}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
        <div className={classes.lowerContainer}>
          <img src={educationIcon} className={classes.icon} alt="education" />
          <div className={classes.education}>
            Certificate in Fullstack Development, {prior_education}
          </div>
          <img src={jobIcon} className={classes.icon} alt="job" />
          <div className={classes.job}>Kenzie Coach, Sales Rep.</div>
        </div>
      </div>
    </Card>
  );
}
