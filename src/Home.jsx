import React from "react";
import "./index.css";

import Common from "./Common";
import web from "../src/images/img_6.gif";
const Home=()=>{
    return(
        <>
   <Common name='Grow Your Bussiness with' imgsrc={web} n
       visit="/service"
       btnname="Get Started"/>
        </>
    );

};
export default Home;