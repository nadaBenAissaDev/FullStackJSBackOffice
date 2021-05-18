import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Pagination from "./pagination.js";
import axios from "axios";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {API_BASE_URL} from 'actions/types'
// //sendmail
// import sgMail from '@sendgrid/mail';
// const API_KEY = "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"
// sgMail.setApiKey(API_KEY)
// const message = {
//   to:'imen.elhakim@esprit.tn',
//   from: 'hrapplyroom@no-reply.com',
//   subject: 'Congratulations! Your candidature has been approved.',
//   text:'Congratulation !!!',
//   html:'<h1>Congratc</h1>'
// };



import { Component } from "react";
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Table,
  Container,
  Row,
} from "reactstrap";


 // deleteQuestion(id) {
  //   axios
  //     .then((response) => {
  //       console.log(response.data);
  //     });

  //   this.setState({
  //     questions: this.state.questions.filter((el) => el._id !== id),
  //   });
  // }



  


const Question = (props) => (
  <tr>
    <td>{props.question.userId}</td>
    <td>{props.question.result}</td>
    <td>{props.question.dateCreated}</td>

    <td>
      <Button
        color="primary"
        type="button"
        size={"sm"}
        // onClick={() => {
        //   sgMail.send(message);
        // }}
      >
        Send Mail
      </Button>
    </td>
    <td></td>
  </tr>
);

export default class ListQuestions extends Component {
  constructor(props) {
    super(props);

    //this.deleteQuestion = this.deleteQuestion.bind(this);

    //  this.handleChange = this.handleChange.bind(this)

    this.state = {
      questions: [],

      loading: false,
      currentPage: 0,
      postsPerPage: 2,
    };
  }

  componentDidMount() {
    axios
      .get(API_BASE_URL + "/PersonalityTestResults/")
      .then((response) => {
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // deleteQuestion(id) {
  //   axios
  //     .then((response) => {
  //       console.log(response.data);
  //     });

  //   this.setState({
  //     questions: this.state.questions.filter((el) => el._id !== id),
  //   });
  // }

  // detailQuestion(id) {
  //   console.log(id);
  //   axios
  //     .then((response) => {
  //       console.log(response.data);

  //       this.setState({
  //         id : response.data._id,
  //         question : response.data.question,
  //         optionA : response.data.optionA,
  //         optionB : response.data.optionB,
  //         optionC : response.data.optionC,
  //         optionD : response.data.optionD,
  //       })
        
  //     });

  
  // }

  questionList() {
    return this.state.questions.map((currentquestion) => {
      return (
        <Question
          question={currentquestion}
          deleteQuestion={this.deleteQuestion}
          key={currentquestion._id}
        />
      );
    });
  }

  render() {
    const currentPage = this.state.currentPage;
    const postsPerPage = this.state.postsPerPage;
    const loading = this.state.loading;

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = this.state.questions.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    // Change page
    const paginate = (pageNumber) => this.setState({ pageNumber });

    //archiv

    const { question } = this.props;

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

        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Results List</h3>
                </CardHeader>

                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead">
                    <tr>
                      <th scope="col">User</th>
                      <th scope="col">Result</th>
                      <th scope="col">Date</th>
                      <th scope="col">Send Mail</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>{this.questionList()}</tbody>
                </Table>

                <CardFooter>
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={this.state.questions.length}
                    paginate={paginate}
                  />
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
        </Container>
      </>
    );
  }
}
