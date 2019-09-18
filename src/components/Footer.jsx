import React from "react";
import Logo from "../assets/footer-logo.png"
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import facebook from '../assets/icons/Facebook.svg'
import instagram from '../assets/icons/Instagram.svg'
import linkedin from '../assets/icons/LinkedIn.svg'
import twitter from '../assets/icons/Twitter.svg'


const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.white,
      padding: '50px 150px',
      [theme.breakpoints.down('xs')]:{ padding: '50px'},
      '& .flexer':{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
      },
      '& img': {
          height: '200px'
      },
      '& .kenzieAcademy':{
        margin: '0px 10px 10px 10px',
            '& ul': {padding: '3px'},
            '& li':{
                listStyle: 'none',
                fontSize: '16px',
                textAlign: 'left',
                paddingBottom: '10px',
            },
      },
      '& b':{
        fontWeight: '900',
        fontSize: '16px',
      },
      '& .connect':{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          margin: '0px 10px 10px 10px',
          '& img': {
              height: '36px',
              color: 'white',
              padding: '5px'
          },
          '& b': {paddingBottom: '15px'},
          '& .address': {
              fontSize: '14px',
              textAlign: 'left',
          },
      },
      '& .email':{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          '& div': { paddingTop: '7px' },
          '& .emailInput': { width: '100%'},
          '& img':{ height: '200px'},
      },
    },
  }));

  const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
      [theme.breakpoints.down('sm')]: {
         width: '100%'
      }
    },
    input: {
      borderRadius: 2,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      marginRight: '10px',
      textTransform: 'none',
    },
  }))(InputBase);

  const SubscribeButton = withStyles(theme => ({
    root:{
        border: `solid 1px ${theme.palette.common.white}`,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        letterSpacing: '3px',
    }
}))(Button)


export default function Footer(){
      const classes = useStyles();
    
        return(
            <div className={classes.root}>
                <div className="flexer">
                    <img src={Logo} alt="kenzie logo"/>
                    <div className="kenzieAcademy">
                        <b>Kenzie Academy</b>
                        <ul>
                            <li>Team</li>
                            <li>Board</li>
                            <li>Careers</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div className="connect">
                        <b>Connect</b>
                        <div>
                            <img src={twitter} alt="twitter"/>
                            <img src={facebook} alt="facebook"/>
                            <img src={instagram} alt="instagram"/>
                            <img src={linkedin} alt="linkedin"/>
                        </div>
                        <div className="address">
                          Kenzie Academy, 47 South
                          <br/>
                          Meridian Street, Indianapois, IN,
                          <br/>
                          46204, United States
                          <br/> <br/>
                          info@kenzie.academy  
                        </div>
                    </div>
                    <div className="email">
                        <b>Email Subscription</b>
                        <div>
                        <BootstrapInput
                        placeholder="First Name"
                        />
                        <BootstrapInput
                        placeholder="Last Name"
                        />
                    </div>
                         <BootstrapInput
                        style={{MarginRight: '12px'}}
                        className="emailInput"
                        placeholder="Email Address"
                        />
                    <div>
                        <div> 
                            <SubscribeButton variant="outlined" color="secondary">Subscribe</SubscribeButton>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }