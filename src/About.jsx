import React from "react";
import "./index.css";
import web from "../src/images/img_6.gif";
// import { NavLink } from "react-router-dom";
import Common from "./Common";
const About=()=>{
    return(
        <>
       <Common 
       name="Welcome to About Page"
       imgsrc={web}
       visit="/contact"
       btnname="Contact Now"/>
        </>
    );

};
export default About;