import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import {API_BASE_URL} from "actions/types";
function AddTest({ history,/* token,*/ match: { params, url } }) {
  console.log(params);
  const maxQuestions =params.numberOfQuestions;
 // console.log(params.numberOfQuestions);
  const [numberOfQuestions, setNumberOfQuestions] = useState();
  const [validity, setValidity] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(API_BASE_URL + "/api/test/create", {
        numberOfQuestions: parseInt(numberOfQuestions),
        validity,
        /*token,*/
      })
      .then((response) => {
        alert(response.data.msg);
      history.push("/admin/listetest");
      })
      .catch((err) => {
        alert(err.response.data.msg);
        setNumberOfQuestions("");
        setValidity("");
      });
  };

  return (
    <div className="Add-Test">
      <h1>Add Test</h1>
      <h2>Number of questions available: {maxQuestions}</h2>
      <form className="Add-Test-Form" onSubmit={submitHandler}>
        <div>
          <label>Total Questions: </label>
          <input
            type="text"
            name="numberOfQuestions"
            value={numberOfQuestions}
            placeholder={`must be <= ${maxQuestions}`}
            required
            onChange={(e) => setNumberOfQuestions(e.target.value)}
          />
        </div>
        <div>
          <label>Valid till: </label>
          <input
            type="date"
            name="validity"
            value={validity}
            required
            onChange={(e) => setValidity(e.target.value)}
          />
        </div>

        <Button type="submit">Create the test</Button>
      </form>
    </div>
  );
}

export default AddTest;
