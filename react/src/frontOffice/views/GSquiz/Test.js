import React, { useEffect ,useState} from "react";
import Timer from "./Timer";
import SingleQuestion from "./SingleQuestion";
import axios from "axios";
import Header from '../../Layouts/Header';
import Navbar  from '../../Layouts/Navbar';
import {API_BASE_URL} from 'actions/types'
import "./componentsStyles/Test.css";
const jwt = require('jsonwebtoken');
function Test({ history }) {

  const [email, setEmail] = useState("");
  useEffect(() => {
  const jwt = localStorage.getItem('user');
  var user=''
      if(jwt) {
      user = JSON.parse(jwt)
      console.log(user.email)

      setEmail(user.email)
     // console.log(email)
      }
    const times = parseInt(localStorage.getItem("times"));
    if (times !== 1) {
      alert("Test is invalid now!");
      history.push("/");
    }
    localStorage.setItem("times", times + 1);
  }, [history]);

  const questions = JSON.parse(localStorage.getItem("questions"));
  //const email = JSON.parse(localStorage.getItem("email"));
 //console.log(email);
  const submitHandler = (e) => {
    e.preventDefault();
    if (window.confirm("Submit the test?")) calcResult();
  };
  function calcResult() {
    const ansArray = [];
    for (let i = 0; i < questions.length; ++i) {
      ansArray.push({
        _id: questions[i]._id,
        answer: parseInt(localStorage.getItem(`ans${i + 1}`)),
      });
      console.log(ansArray);
    }
    console.log(ansArray);
    axios
      .post(API_BASE_URL + "/api/result/submitTest", {email, questions: ansArray })
      .then((response) => {
        console.log(response);
        alert(response.data.msg);
       // localStorage.clear();
       var myItem = localStorage.getItem('token');
       var myItem1 = localStorage.getItem('user');
       localStorage.clear();
      localStorage.setItem('token',myItem);
      localStorage.setItem('user',myItem1);
      //  window.localStorage.removeItem("questions");
      //  window.localStorage.removeItem("ans1");
      //  window.localStorage.removeItem("takeTest");
      //  window.localStorage.removeItem("times");
        history.replace("/");
      })
      .catch((err) => {
        alert(err);
        var myItem = localStorage.getItem('token');
        var myItem1 = localStorage.getItem('user');
        localStorage.clear();
       localStorage.setItem('token',myItem);
       localStorage.setItem('user',myItem1);
        history.replace("/");
      });
  }

  return (
    <>
    <Navbar />
    <Header/>
    <div className="questions">
      <Timer  calcResult={calcResult} count={questions.length} />
      <form className="Real-Test" onSubmit={submitHandler}>
        {questions.map((question, index) => {
          return (
            <SingleQuestion
              question={question}
              index={index + 1}
              key={index + 1}
            />
          );
        })}
        <button  style={{marginTop:'2rem'}}type="submit">Submit the test!</button>
      </form>
    </div>
    </>
  );
}

export default Test;
