import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    Avatar,
    SvgIcon,
} from "@material-ui/core";
// import { ReactComponent as Icon } from "../assets/icon-education_gray.svg";


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
        postion: "relative",
    },
    avatar: {
        boxSizing: "border-box",
        height: "152.26px",
        width: "153px",
        border: "2px solid #1C3869",
    },
    name: {
        height: "29.86px",
        color: "#30334A",
        fontFamily: "Avenir",
        fontSize: "22px",
        fontWeight: "600",
        letterSpacing: "0.53px",
        lineHeight: "30px",
    },
    title: {
        height: "24.88px",
        color: "#30334A",
        fontFamily: "Avenir",
        fontSize: "18px",
        letterSpacing: "0.44px",
        lineHeight: "25px",
    },
    education: {
        height: "24.88px",
        width: "507px",
        color: "#8E91A4",
        fontFamily: "Avenir",
        fontSize: "18px",
        letterSpacing: "0.44px",
        lineHeight: "25px",
    },
    job: {
        height: "24.88px",
        color: "#8E91A4",
        fontFamily: "Avenir",
        fontSize: "18px",
        letterSpacing: "0.44px",
        lineHeight: "25px",
    },
    quote: {
        height: "25px",
        color: "#8E91A4",
        fontFamily: "Avenir",
        fontSize: "18px",
        fontStyle: "oblique",
        lineHeight: "25px",
        textAlign: "right",
        textOverflow: "ellipsis",
    },
    location: {
        height: "25px",
        color: "#8E91A4",
        fontFamily: "Avenir",
        fontSize: "18px",
        fontWeight: "900",
        letterSpacing: "0.44px",
        lineHeight: "25px",
        textAlign: "right",
        paddingLeft: "20px",
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
        width: "100%",
    },
    leftContainer: {
        textAlign: "left",
    },
    rightContainer: {
        display: "flex",
        textAlign: "right",
        marginLeft: "auto",
        marginRight: "25px",
        right: "25px",
        zIndex: "1",
        whiteSpace: "nowrap",
    },
    lowerContainer: {
        paddingBottom: "20px",
        textAlign: "left",
        paddingLeft: "25px",
    },
}));


export default function StudentCard() {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <Avatar className={classes.avatar} src="https://cdn.pixabay.com/photo/2017/10/10/00/49/female-2835524_960_720.jpg"></Avatar>
            <div className={classes.wrapperContainer}>
                <div className={classes.topContainer}>
                    <div className={classes.leftContainer}>
                        <div className={classes.name}>Katie Johnson</div>
                        <div className={classes.title}>Software Engineer</div>
                    </div>
                    <div className={classes.rightContainer}>
                        <div className={classes.quote}>"Jump on life and hang on!"</div>
                        <div className={classes.location}>Indianapolis, IN</div>
                    </div>          
                </div>
                <div className={classes.lowerContainer}>
                    <img src="../assets/icon-education_gray.svg" />
                    <div className={classes.education}>
                        Certificate in Fullstack Development, Associate in Business
                    </div>
                    <div className={classes.job}>Kenzie Coach, Sales Rep.</div>
                </div>
            </div>
        </Card>
    )
}