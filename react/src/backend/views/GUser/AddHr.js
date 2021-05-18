import React, { useState } from "react";
// reactstrap components
import { Button, Card, CardHeader, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import {API_BASE_URL} from 'actions/types'
import axios from "axios";

import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport'


const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth:{
      API_KEY:"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"
    }
  })
)
 

function AddHr({ history }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(API_BASE_URL + "/user/add", {
        firstname,
        lastname,
        email,
        avatar,
        password,
        company,
      })
      .then((response) => {
        transporter.sendMail({
          to:'imen.elhakim@esprit.tn',
          from: 'hrapplyroom@no-reply.com',
          subject: 'Congratulations! Your candidature has been approved.',
          text:'Congratulation !!!',
          html:'<h1>Congratc</h1>'   
        })
         alert("HR added");

        history.push("/admin/UsersList");
      })
      .catch((err) => {
        alert(err.response.data.msg);
        setFirstname("");
        setLastname("");
        setEmail("");
        setAvatar("");
        setPassword("");
        setCompany("");
      });
  };

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <div> </div>
        </Container>
      </div>

      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Add new HR</h3>
              </CardHeader>
              <form className="container" onSubmit={submitHandler}>
                <br></br>
                {/* COLORS */}
                <Row className="form-group col-md-12">
                  <td className="col-md-6">
                    <label>
                      <strong>Firstname</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      name="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </td>
                  <td className="col-md-6">
                    <label>
                      <strong>Lastname</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      name="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </td>
                </Row>

                <Row className="form-group col-md-12">
                  <td className="col-md-7">
                    <label>
                      <strong>Email</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      name="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                  <td className="col-md-5">
                    <label>
                      <strong>Avatar</strong>
                    </label>
                    <input
                      type="file"
                      id=""
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                  </td>
                </Row>

                <Row className="form-group col-md-12">
                  <td className="col-md-6">
                    <label>
                      <strong>Password</strong>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id=""
                      name="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                  <td className="col-md-6">
                    <label>
                      <strong>Company</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      name="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </td>
                </Row>

                <div className="form-group">
                  <Button
                    className="btn btn-block col-md-2 "
                    color="primary"
                    type="submit"
                    value="Create Exercise Log"
                  >
                    Add
                  </Button>
                </div>

                <Button className="btn btn-block col-md-2 " color="danger">
                  <Link
                    to="/admin/UsersList"
                    style={{ color: "white" }}
                  >
                    Cancel
                  </Link>
                </Button>

                <br />
                <br />
              </form>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default AddHr;
