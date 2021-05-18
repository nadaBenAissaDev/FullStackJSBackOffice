import React from 'react'
import Navbar from "../Layouts/Navbar";
import Header from "../Layouts/Header";
import { Link } from "react-router-dom";
import {
   
  Button
    
  } from "reactstrap";
export default function notfound(history) {
   
    
    return (
        <>
        <Header/>
        <Navbar />
        <div>
            <img alt="HR virtual assistant" className="rounded mx-auto d-block" style={{marginTop:"2rem"}} src={
                          require("../assets/images/404-not-found.png")
                    .default
                        } />
             <div class="container bg-light"style={{marginTop:"2rem", marginBottom:"2rem"}}>
        <div class="col-md-12 text-center">
            <Button size="sm"><Link to="/">Go back Home</Link></Button> 
            </div>
            </div>
        </div>
        </>
    )
}