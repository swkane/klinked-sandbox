import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Github from '../assets/icons/github_blue.svg';
import Linkedin from '../assets/icons/linkedin_blue.svg';
import Behance from '../assets/icons/behance_blue.svg';
import Location from '../assets/icons/location_gray.svg';
import Work from '../assets/icons/work_gray.svg';
import Education from '../assets/icons/education_gray.svg';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        margin: '40px',
        '& .profileColumn':{
            margin: '10px 30px 0px 0px',
        },
        '& .backButton':{
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.primary.main,
            fontSize: '25px',
            fontWeight: 'bold',
        },
       '& .blueFlex':{
           display: 'flex',
           alignItems: 'center',
           color: theme.palette.primary.main,
           fontSize: '23px',
           '& p': {
               paddingLeft: '15px',
               margin: '12px',
           },
       },
       '& .profileImg':{
           display: 'flex',
           borderRadius: '50%',
           border: `solid ${theme.palette.primary.main} 2px`,
           background: 'white',
           padding: '5px',
           margin: '40px 5px',
       },
       '& .bioColumn':{
            width: '100%',
            marginLeft: '25px',
            textAlign: 'left',
       },
       '& .header':{
            display: 'flex',
            justifyContent: 'space-between',
       },
       '& .name':{
            color: theme.palette.primary.martinique,
            fontSize: '36px',
            fontWeight: 'bold',
       },
       '& .title':{
        color: theme.palette.primary.martinique,
        fontSize: '28px',
        marginBottom: '50px',
   },
       '& .location':{
            color: theme.palette.primary.kenzieGrey,
            fontSize: '28px',
            textAlign: 'left',
            fontWeight: 'bold',
       },
       '& .info':{
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'flex-start',
           color: theme.palette.primary.kenzieGrey,
           fontSize: '28px',
           '& p':{
               margin: '50px 0px'
           },
       },
       '& .skills':{
            color: theme.palette.primary.martinique,
            '& b':{
                fontWeight: 'bold'
            },   
       }
    }
}))

const ContactButton = withStyles({
    root:{
        borderRadius: '2px',
        display: 'flex',
        fontSize: '20px',
        margin: '40px 0px',
    }
})(Button)

export default function ProfilePage(){
    const classes = useStyles();

    return(
        <div class={classes.root}>

            <div class='profileColumn'>
                <div class='backButton'>
                    <i class="material-icons">keyboard_arrow_left</i>
                    Back
                </div>
                <img class='profileImg' src='https://via.placeholder.com/240' alt="headshot"/>
           
                <div class="blueFlex">
                    <img style={{height:'40px'}} src={Github} alt="github"/> 
                    <p>Github</p>
                </div>
                <div class="blueFlex">
                    <img style={{height:'40px'}} src={Linkedin} alt="linkedin"/> 
                    <p>Linkedin</p>
                </div>
                <div class="blueFlex">
                    <img style={{height:'25px'}} src={Behance} alt="behance"/> 
                    <p>Behance</p>
                </div>
            <ContactButton size="large" variant="contained" color="primary">
            <i style={{paddingRight: '10px', fontSize: '25px'}}  class="material-icons">mail_outline</i>
                Contact Me
            </ContactButton>
            </div>


            <div class='bioColumn'>
                <div class="header">
                    <div>
                        <div class="name">Name</div>
                        <div class="title">Title</div>
                    </div>

                    <div class="location">Location <img style={{height: '30px'}} src={Location} alt="location"/> </div>
                </div>
                <div class="info">
                    <div><img style={{height: '30px', paddingRight: '15px'}} src={Work} alt="work"/>Current Job</div>
                    <div><img style={{height: '30px', paddingRight: '15px'}} src={Education} alt="education" />Certifications / Degrees</div>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <div class="skills">
                    <div><b>Top Skills:</b> list them here</div>
                    <div><b>Other Tricks:</b> list sub-skills here</div>
                    </div>
                </div>
            </div>

        </div>
    )
}