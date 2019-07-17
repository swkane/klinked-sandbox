import React from "react";
import CoverImage from '../assets/cover.jpg'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${CoverImage})`,
        padding: '200px 0px',
        color: theme.palette.primary.white,
        backgroundSize: '100%',
        backgroundPosition: '0px 20%',
        backgroundRepeat: 'no-repeat',
        opacity: '0.8',
        textShadow: '0px 1px 2px #616368',
        '& .header':{
            fontSize: '60px',
            fontWeight: 'bold',
            margin: '5px',
        },
        '& .subHeader':{
            fontSize: '30px',
            margin: '5px',
        },
    }
}))

export default function Home(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <div className='header'>Kenzie Candidates</div>
        <div className='subHeader'>Make your next hire a Kenzie graduate.</div>
        </div>
    )
}