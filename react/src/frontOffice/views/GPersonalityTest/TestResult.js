import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../../assets/images/discLogo.png";
import CarouselPersonalityTest from "./CarouselPersonalityTest";

import Header from "../../Layouts/Header";
import Navbar  from '../../Layouts/Navbar';

export default class PersonalityTest extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Helmet>
          <title>Personality Test Results</title>
        </Helmet>
        <Header />
        <div className="questionsTest" style={{ color: "black" }}>
          <div align="center">
            <br />
            <img src={logo} className="logoTest" alt="logo" />
          </div>
   
          <h2 style={{ fontWeight: "bold" }}>RESULTS of the DISC Test </h2>

          <div className="options-container">
            <h5 style={{textAlign:'left'}}>
              <h1 style={{color:'red',}}> RED!</h1>
              Thank you for taking the test, Your personality color is RED !
              Having red as your favorite color identifies you as extroverted and optimistic,
              courageous and confident. You are action oriented and physically active
            </h5>
          </div>
          <div className="options-container">
            <CarouselPersonalityTest />
          </div>

          <div className="button-container">
            <button>
              <Link style={{ color: "white" }} to="/Elearning">
                {" "}
                E-learning{" "}
              </Link>
            </button>
            <button>
              <Link style={{ color: "white" }} to="/">
                {" "}
                Quit{" "}
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}
