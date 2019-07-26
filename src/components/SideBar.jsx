//React
import React from 'react'

//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/InputBase';
import Place from '@material-ui/icons/Place';
import Button from '@material-ui/core/Button';
import Email from '@material-ui/icons/Email'

//Themes, Colors, Icons
import Colors from '../themes/Colors';
//import MapMarker from '../assets/icons/maps-and-flags.svg'

const useStyles = makeStyles(theme => ({
      root:{
        width: '300px',
        height: '1000px',
        backgroundColor: Colors.white,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        borderRight: '2px solid rgba(204,204,204,0.5)',


    },
    jobFilter:{
        paddingRight: '50%',
        paddingTop: '50px',
        justifyContent: 'space-evenly',
        fontFamily: 'Avenir',
        fontSize: '22px',
        fontWeight: '900',
        lineHeight: '30px',
  },
    listItem: {
        paddingTop: '12%',
        paddingLeft:'8%',
        paddingBottom: '10px',
        height: '20px',
        width: '280px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
  },
    button_text: {
        marginTop: '40px',
        backgroundColor: "#1C3869"
  },
    header: {
        height: '35px',
        color: '#30334A',
        fontFamily: 'Avenir',
        fontSize: '22px',
        fontWeight: '900',
        lineHeight: '30px',
        justifyContent: 'center',
        alignItems: 'center',
  },
    wrapper: {
        padding: '1%',
        display: 'flex',
        flexDirection: 'column',
    },
    list_text: {
        font_family: 'Avenir',
        height: '24px',
        fontSize: '5px',
  },
    checkbox: {
        boxSizing: 'border-box',
        height: '16px',
        width: '16px',
        borderRadius: '1.5px',
        border: '1px solid',
        borderColor: Colors.chambray
  },
    input:{
        boxSizing: 'border-box',
        height: '34px',
        width: '213px',
        borderRadius: '1.5px',
        backgroundColor: '#FFF',
        border: '1px solid #30334A',
    },
    location:{
        paddingRight:'48%',
        color: '#30334A',
        fontFamily: 'Avenir',
        fontSize: '22px',
        fontWeight: '900',
        lineHeight: '30px',
    },
    locationHeader:{
      paddingRight: '15%'

    }
}));

export default function SideBar() {
        const classes = useStyles()
        const [checked, setChecked] = React.useState([0]);

        const handleToggle = value => () => {
            const currentIndex = checked.indexOf(value);
            const newChecked = [...checked];
        
            if (currentIndex === -1) {
              newChecked.push(value);
            } else {
              newChecked.splice(currentIndex, 1);
            }
            setChecked(newChecked);
          };

        return (
          <div className={classes.root}>
          <CssBaseline />
                <div className={classes.wrapper} />
                <div className={classes.jobFilter}>
                <h1 className={classes.header}>
                    Job Roles
                </h1>
                    </div>
                    <List className={classes.list}>
                        {['Full-Stack Engineer', 'Front-End', 'Back-End', 'UX Engineer', 'UX Designer', 'UI Engineer', 'Digital Marketer'].map(value => {
                            const labelId = `checkbox-list-secondary-label-${value}`;
                            return (
                                <ListItem className={classes.listItem} key={value} role={undefined} button onClick={handleToggle(value)}>
                                  <ListItemIcon>
                                    <Checkbox
                                      checked={checked.indexOf(value) !== -1}
                                      tabIndex={-1}
                                      disableRipple={true}
                                      inputProps={{ 'aria-labelledby': labelId }}
                                      className={classes.checkbox}/>
                                  </ListItemIcon>
                                  <ListItemText className={classes.list_text} id={labelId} primary={`${value}`} />
                                <ListItemSecondaryAction/>
                              </ListItem>
                            );
                        })}
                    </List>
                <div className={classes.jobFilter}>
                <h1 className={classes.header}>
                    Job Type
                </h1>
                    </div>
                    <List className={classes.list}>
                        {['Full Time', 'Part Time', 'Apprenticeship', 'Internship'].map(value => {
                            const labelId = `checkbox-list-secondary-label-${value}`;
                            return (
                              <ListItem className={classes.listItem} key={value} role={undefined} button onClick={handleToggle(value)}>
                                  <ListItemIcon>
                                    <Checkbox
                                      checked={checked.indexOf(value) !== -1}
                                      tabIndex={-1}
                                      disableRipple
                                      inputProps={{ 'Avenir': labelId }}
                                      className={classes.checkbox}
                                      />
                                    </ListItemIcon>
                                  <ListItemText  className={classes.list_text} id={labelId} primary={`${value}`} />
                                <ListItemSecondaryAction/>
                              </ListItem>
                            );
                        })}
                    </List>
                <div className={classes.locationHeader}>
                <h1 className={classes.location}>
                    Location
                </h1>   
                    {console.log(<Place/>)}
                    <InputBase
                      className={classes.input}
                      placeholder={ 'Indianapolis'}
                      
                      inputProps={{ 'Avenir': 'Indianapolis...'}}
                    />
                  </div>
                <Button variant="contained" color="primary" className={classes.button_text}>
                  <Email />
                  Contact Kenzie Staff
                </Button>
            </div>
        )
    }