//React
import React from "react";

//Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
// import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Email from "@material-ui/icons/Email";

//Themes, Colors, Icons
import Colors from "../themes/Colors";
//import MapMarker from '../assets/icons/maps-and-flags.svg'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: "40px",
    width: "300px",
    height: "1000px",
    backgroundColor: Colors.white,
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    boxSizing: "border-box",
    borderRight: "2px solid rgba(204,204,204,0.5)"
  },
  jobFilter: {
    paddingTop: "20px",
    justifyContent: "space-evenly",
    fontSize: "22px",
    lineHeight: "30px",
    fontWeight: "700"
  },
  listItem: {
    paddingTop: "10%",
    paddingBottom: "10px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    fontSize: "18px"
  },
  button_text: {
    marginTop: "40px",
    backgroundColor: "#1C3869",
    textTransform: "capitalize",
    fontSize: "18px",
    fontWeight: "normal"
  },
  wrapper: {
    padding: "1%",
    display: "flex",
    flexDirection: "column"
  },
  checkbox: {
    boxSizing: "border-box",
    height: "16px",
    width: "16px",
    borderRadius: "1px"
  },
  icon: {
    minWidth: "30px"
  },
  input: {
    boxSizing: "border-box",
    height: "34px",
    width: "220px",
    borderRadius: "1.5px",
    backgroundColor: "#FFF",
    border: "1px solid #30334A"
  },
  locationHeader: {
    paddingTop: "20px",
    textAlign: "left"
  },
  location: {
    color: "#30334A",
    fontSize: "22px",
    lineHeight: "30px"
  }
}));

export default function SideBar({ checked, setChecked }) {
  const classes = useStyles();
  // const [checked, setChecked] = React.useState([
  //   "UX Designer",
  //   "Software Engineer"
  // ]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    // setFilter(value);
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper} />
      <div className={classes.jobFilter}>Job Roles</div>
      <List className={classes.list}>
        {["Software Engineer", "UX Designer"].map(value => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              className={classes.listItem}
              key={value}
              role={undefined}
              button
              onClick={handleToggle(value)}
              disableGutters
            >
              <ListItemIcon classes={{ root: classes.icon }}>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  color="default"
                  disableRipple={true}
                  inputProps={{ "aria-labelledby": labelId }}
                  className={classes.checkbox}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={`${value}`}
                disableTypography
              />
              <ListItemSecondaryAction />
            </ListItem>
          );
        })}
      </List>
      {/* <div className={classes.jobFilter}>Job Type</div>
      <List className={classes.list}>
        {["Full Time", "Part Time", "Apprenticeship", "Internship"].map(
          value => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                className={classes.listItem}
                key={value}
                role={undefined}
                button
                onClick={handleToggle(value)}
                disableGutters
              >
                <ListItemIcon classes={{ root: classes.icon }}>
                  <Checkbox
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    className={classes.checkbox}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={`${value}`}
                  disableTypography
                />
                <ListItemSecondaryAction />
              </ListItem>
            );
          }
        )}
      </List>
      <div className={classes.locationHeader}>
        <h1 className={classes.location}>Location</h1>
        <InputBase className={classes.input} placeholder={" Indianapolis..."} />
      </div> */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button_text}
      >
        <Email style={{ paddingRight: "8px" }} />
        Contact Kenzie Staff
      </Button>
    </div>
  );
}
