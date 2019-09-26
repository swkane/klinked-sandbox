import React from "react";
import { makeStyles } from "@material-ui/styles";
import SideBar from "./SideBar";
import StudentCardList from "./StudentCardList";
import Hero from "./Hero";

const useStyles = makeStyles(theme => ({
  root: {
    "& .content": {
      display: "flex",
      flexDirection: "row"
    }
  }
}));

export default function Home() {
  // This Component uses hooks, if you would like a introduction / refresher to hooks please read the following resources:
  // https://reactjs.org/docs/hooks-intro.html
  // https://reactjs.org/docs/hooks-state.html
  // https://reactjs.org/docs/hooks-effect.html
  // https://codeburst.io/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd

  const [checked, setChecked] = React.useState([
    "UX Designer",
    "Software Engineer"
  ]);

  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Hero />
        <div className="content">
          <SideBar checked={checked} setChecked={setChecked} />
          <StudentCardList checked={checked} />
        </div>
      </div>
    </React.Fragment>
  );
}
