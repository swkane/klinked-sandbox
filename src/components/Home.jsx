import React from "react";
import { makeStyles } from "@material-ui/styles";
import SideBar from "./SideBar";
import StudentCardList from './StudentCardList';
import Hero from './Hero';

const useStyles = makeStyles(theme => ({
  root: {
    "& .content":{
      display: 'flex',
      flexDirection: 'row'
    },
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Hero/>
        <div className="content">
          <SideBar />
          <StudentCardList/>
        </div>
      </div>
    </React.Fragment>
  );
}
