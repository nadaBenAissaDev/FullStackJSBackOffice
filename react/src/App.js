import "./App.css";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Elearning from "./frontOffice/views/Elearning";
import Candidates from "./frontOffice/views/Candidates";
import DetailJob from "./frontOffice/views/GJob/DetailJob";
//import Navbar  from './frontOffice/Layouts/Navbar';<Navbar/>
//import Footer from 'frontOffice/Layouts/Footer';   <Footer/>
import Login from "frontOffice/views/GUser/Login";
import Register from "frontOffice/views/GUser/Register";
import BrowseJobs from "frontOffice/views/GJob/BrowseJobs";
import Admin from "backend/views/examples/UsersList";
//import Header from 'frontOffice/Layouts/Header';  <Header/>
//import Sidebar from 'frontOffice/Layouts/Sidebar';                        <Sidebar/>
//redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";

//Cv
import PDF from "frontOffice/views/GCv/PDF";
// CHATBOT
import Chatbot from 'frontOffice/views/chatbot/Message';

//import './backend/assets/css/argon-dashboard-react.css';
//import PostJob from 'frontOffice/views/PostJob';
//import Sidebar from 'frontOffice/Layouts/Sidebar'; <Sidebar/>
//import homeQuiz from 'frontOffice/views/homeQuiz';

//Skills test

import QuizInstructions from "./frontOffice/views/GSquiz/QuizInstructions";
import play from "./frontOffice/views/GSquiz/play";
import profile from "./frontOffice/views/Profile";
import QuizSummary from "./frontOffice/views/GSquiz/QuizSummary";
import Test from "./frontOffice/views/GSquiz/Test";
import demoInstructions from "./frontOffice/views/GSquiz/demoinstruction";
import updateprofile from "./frontOffice/views/UpdateProfile";

/////////////////////////

// Personality Test
import PersonalityTest from "frontOffice/views/GPersonalityTest/PersonalityTest";
import TestInstructions from "frontOffice/views/GPersonalityTest/TestInstructions";
import TestResult from "frontOffice/views/GPersonalityTest/TestResult";


import Layout from "./frontOffice/Layouts/Layout";
import Home from "./frontOffice/views/Home";
import Blog from "./frontOffice/views/Blog";
import BlogSingle from "./frontOffice/views/BlogSingle";
//import Navbar  from './frontOffice/Layouts/Navbar';<Navbar/>
//import Footer from 'frontOffice/Layouts/Footer';<Footer/>
import Navbar from "frontOffice/Layouts/Navbar";
//import Header from 'frontOffice/Layouts/Header';  <Header/>
//import Sidebar from 'frontOffice/Layouts/Sidebar';                        <Sidebar/>
//redux
import { loadUser } from "./actions/auth";
//chouchou
import NewReclamation from "frontOffice/views/GReclamation/NewReclamation";
//import Reclamations from 'frontOffice/views/Reclamations';
import Reclamations from "frontOffice/views/GReclamation/Reclamations";
import calendar from "frontOffice/views/GCalendar/calendar";
import chat from "frontOffice/views/Gchat/chat";

import notfound from "frontOffice/views/notFound";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); //component didMount
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Fragment>
           
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/Home" component={Home}></Route>
                  <Route exact path="/Elearning" component={Elearning}></Route>
                  <Route exact path="/Profile" component={profile}></Route>

                  <Route
                    exact
                    strict
                    path="/BrowseJob"
                    component={BrowseJobs}
                  ></Route>
                  <Route
                    exact
                    path="/Candidates"
                    component={Candidates}
                  ></Route>
                  <Route exact path="/Blog" component={Blog}></Route>
                  <Route
                    exact
                    path="/BlogSingle"
                    component={BlogSingle}
                  ></Route>
                  <Route exact path="/Login" component={Login}></Route>
                  <Route exact path="/Register" component={Register}></Route>
                  <Route exact path="/admin" component={Admin}></Route>
                  <Route
                    exact
                    path="/DetailJob/:id"
                    component={DetailJob}
                  ></Route>
                  <Route
                    exact
                    path="/Reclamation"
                    component={NewReclamation}
                  ></Route>
                  <Route
                    exact
                    path="/Reclamations"
                    component={Reclamations}
                  ></Route>
                  <Route exact path="/chat" component={chat}></Route>
                  {/* Quiz */}

                  <Route
                    exact
                    path="/quizSummary"
                    component={QuizSummary}
                  ></Route>
                  <Route
                    exact
                    path="/play/instructions"
                    component={QuizInstructions}
                  ></Route>
                  <Route exact path="/demo/quiz" component={play}></Route>
                  <Route
                    exact
                    path="/demo/instructions"
                    component={demoInstructions}
                  ></Route>
                  <Route exact path="/Profile" component={profile}></Route>
                  <Route
                    exact
                    path="/update-profile"
                    component={updateprofile}
                  ></Route>

                  {localStorage.getItem("takeTest") === "true" &&
                    localStorage.getItem("times") === "1" && (
                      <Route exact path="/take-test" component={Test} />
                    )}

                  {/* Personality Test */}
                  <Route
                    exact
                    path="/personalityTest/instructions"
                    component={TestInstructions}
                  ></Route>
                  <Route
                    exact
                    path="/personalityTest/takeTest"
                    component={PersonalityTest}
                  ></Route>
                  <Route exact path="/calendar" component={calendar}></Route>
                  <Route
                    exact
                    path="/personalityTest/testResult"
                    component={TestResult}
                  ></Route>
                  <Route
                    exact
                    path="/PDF"
                    component={PDF}
                  ></Route>
                  <Route 
                    component={notfound}
                  ></Route>
                  {/* Chatbot */}
                  <Route exact path="/Chatbot" component={Chatbot}></Route>
                  {localStorage.getItem("takeTest") === "true" &&
                               localStorage.getItem("times") === "1" && (
                                 <Route exact path="/take-test" component={Test} /> )}
                </Switch>
              </div>
            </div>
          </Fragment>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
