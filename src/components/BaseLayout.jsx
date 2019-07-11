import React from "react";
import Footer from './Footer';
import NavBar from './NavBar'
import { BrowserRouter as Router } from 'react-router-dom';

export default function BaseLayout(props){
    return(
        <div>
            <Router>
                <NavBar/>
                {props.children}
                <Footer/>
            </Router>
        </div>
    )
}