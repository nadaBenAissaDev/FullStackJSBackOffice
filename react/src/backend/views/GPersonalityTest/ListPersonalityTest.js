import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Pagination from "./pagination.js";
import axios from "axios";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {API_BASE_URL} from 'actions/types'
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

const Question = (props) => (
  <tr>
    <td>
    <a href={`/admin/personalityTestDetail/${props.question._id}`}  >{props.question.question}</a>   
    </td>
    <td>{props.question.optionA.map((op) => op.text)}</td>
    <td>{props.question.optionB.map((op) => op.text)}</td>
    <td>{props.question.optionC.map((op) => op.text)}</td>
    <td>{props.question.optionD.map((op) => op.text)}</td>
    <td>{props.question.dateCreated}</td>

    <td>
      <Button color="primary" size="sm">
        {
          <Link to={"/admin/personalityTestDetail/"+props.question._id}
          question ={props.question.question}
          style={{ color: "white" }}
          >
            Details
          </Link>
        }
      </Button>
    </td>

    <td>
      <Button
        color="danger"
        type="button"
        size={"sm"}
        onClick={() => {
          props.deleteQuestion(props.question._id);
        }}
      >
        Delete
      </Button>
    </td>
    <td></td>
  </tr>
);

export default class ListQuestions extends Component {
  constructor(props) {
    super(props);

    this.deleteQuestion = this.deleteQuestion.bind(this);

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
      .get(API_BASE_URL + "/PersonalityTest/")
      .then((response) => {
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteQuestion(id) {
    axios
      .delete(API_BASE_URL + "/PersonalityTest/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      questions: this.state.questions.filter((el) => el._id !== id),
    });
  }

  detailQuestion(id) {
    console.log(id);
    axios
      .get(API_BASE_URL + "/PersonalityTest/" + id)
      .then((response) => {
        console.log(response.data);

        this.setState({
          id : response.data._id,
          question : response.data.question,
          optionA : response.data.optionA,
          optionB : response.data.optionB,
          optionC : response.data.optionC,
          optionD : response.data.optionD,
        })
        
      });

  
  }

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
  //arch

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
                  <h3 className="mb-0">Questions List</h3>

                  <div className="col text-right">
                    <Button color="success" size="sm">
                      <Link
                        to="/admin/addPersonalityTest"
                        style={{ color: "white" }}
                      >
                        Add
                      </Link>
                    </Button>
                  </div>
                </CardHeader>

                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead">
                    <tr>
                      <th scope="col">Question</th>
                      <th scope="col">Option A</th>
                      <th scope="col">Option B</th>
                      <th scope="col">Option C</th>
                      <th scope="col">Option D</th>
                      <th scope="col">Date Creation</th>
                      <th scope="col">Update</th>
                      <th scope="col">Delete</th>
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
