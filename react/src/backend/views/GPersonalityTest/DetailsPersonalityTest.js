import React, { useState } from "react";
// reactstrap components
import { Button, Card, CardHeader, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import {API_BASE_URL} from 'actions/types'
import axios from "axios";
import { Component } from "react";

export default class DetailsPersonalityTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalitytest: {},

      // question: "",
      // optionA: { text: "", value: "" },
      // optionB: { text: "", value: "" },
      // optionC: { text: "", value: "" },
      // optionD: { text: "", value: "" },
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(API_BASE_URL + `/PersonalityTest/${id}`)
      .then((res) => {
        if (res.data) {
          this.setState({
            personalitytest: res.data.personalitytest,
            // question: res.data.question,
            // optionA: res.data.optionA,
            // optionB: res.data.optionB,
            // optionC: res.data.optionC,
            // optionD: res.data.optionD,
          });
          console.log(
            " pt", this.state.personalitytest,
            // this.state.question,
            // this.state.optionA,
            // this.state.optionB,
            // this.state.optionC,
            // this.state.optionD
          );
          // axios.put(`/update/${id}`, res.data).then((res) => {
          //   if (res.data) {
          //     console.log("Personality Test Question Updated");
          //     this.setState({
          //       question: "",
          //       optionA: { text: "", value: "" },
          //       optionB: { text: "", value: "" },
          //       optionC: { text: "", value: "" },
          //       optionD: { text: "", value: "" },
          //     })
          //   }
          // });
        }
      });
  }




  render() {
    const {
      question,
      optionA,
      optionB,
      optionC,
      optionD,
    } = this.state.personalitytest;

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
                  <h3 className="mb-0">Edit Question</h3>
                </CardHeader>
                <form className="container" onSubmit={this.submitHandler}>
                  <div className="form-group">
                    <br />

                    <div className="form-group col-md-12">
                      <label>
                        <strong>Question</strong>
                      </label>
                      <div className="md-form">
                        <input
                          type="text"
                          required
                          className="form-control"
                          value={question}
                          //value={this.state.question}
                          //onChange={this.onChangeQuestion}
                        />
                      </div>
                    </div>
                  </div>
                  <Row className="form-group col-md-12">
                    <td className="col-md-6">
                      <label>
                        <strong>Option A</strong>
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id=""
                        name="text"
                        value={optionA}
                        // value={this.state.optionA.text}
                        // onChange={this.onChangeOptionA(...this.state.optionA)}
                      />
                    </td>
                    <td className="col-md-4">
                      <label>
                        <strong>Color A</strong>
                      </label>
                      <select
                        className="custom-select "
                        id="inlineFormCustomSelectPref"
                        name="value"
                        value={optionA}
                        // value={this.state.optionA.value}
                        // onChange={this.onChangeOptionA(...this.state.optionA)}
                      >
                        <option value="Red">Red</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                      </select>
                    </td>
                  </Row>
                  <Row className="form-group col-md-12">
                    <td className="col-md-6">
                      <label>
                        <strong>Option B</strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="  "
                        // value={this.state.optionB.text}
                        // onChange={this.onChangeOptionB(...this.state.optionB)}
                      />
                    </td>
                    <td className="col-md-4">
                      <label>
                        <strong>Color B</strong>
                      </label>
                      <select
                        className="custom-select "
                        id="inlineFormCustomSelectPref"
                        // value={this.state.optionB.value}
                        // onChange={this.onChangeOptionB(...this.state.optionB)}
                      >
                        <option value="Red">Red</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                      </select>
                    </td>
                  </Row>

                  <Row className="form-group col-md-12">
                    <td className="col-md-6">
                      <label>
                        <strong>Option C</strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="  "
                        // value={this.state.optionC.text}
                        // onChange={this.onChangeOptionC(...this.state.optionC)}
                      />
                    </td>
                    <td className="col-md-4">
                      <label>
                        <strong>Color C</strong>
                      </label>
                      <select
                        className="custom-select "
                        id="inlineFormCustomSelectPref"
                        // value={this.state.optionC.value}
                        // onChange={this.onChangeOptionC(...this.state.optionC)}
                      >
                        <option value="Red">Red</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                      </select>
                    </td>
                  </Row>

                  <Row className="form-group col-md-12">
                    <td className="col-md-6">
                      <label>
                        <strong>Option D</strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="  "
                        // value={this.state.optionD.text}
                        // onChange={this.onChangeOptionD(...this.state.optionD)}
                      />
                    </td>
                    <td className="col-md-4">
                      <label>
                        <strong>Color D</strong>
                      </label>
                      <select
                        className="custom-select "
                        id="inlineFormCustomSelectPref"
                        // value={this.state.optionD.value}
                        // onChange={this.onChangeOptionD(...this.state.optionD)}
                      >
                        <option value="Red">Red</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                      </select>
                    </td>
                  </Row>

                  <Row className="form-group col-md-12"></Row>

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
                      to="/admin/personalityTestList"
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
}

// import React, { useState } from "react";
// // reactstrap components
// import { Button, Card, CardHeader, Container, Row } from "reactstrap";
// import { Link } from "react-router-dom";

// import axios from "axios";
// import { Component } from "react";

// export default class DetailsPersonalityTest extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeQuestion = this.onChangeQuestion.bind(this);
//     this.onChangeOptionA = this.onChangeOptionA.bind(this);
//     this.onChangeOptionB = this.onChangeOptionB.bind(this);
//     this.onChangeOptionC = this.onChangeOptionC.bind(this);
//     this.onChangeOptionD = this.onChangeOptionD.bind(this);
//     this.submitHandler = this.submitHandler.bind(this);

//     this.state = {
//       question: "",
//       optionA: { text: "", value: "" },
//       optionB: { text: "", value: "" },
//       optionC: { text: "", value: "" },
//       optionD: { text: "", value: "" },
//     };
//   }

//   componentDidMount() {
//     axios
//     
//       .then((response) => {
//         this.setState({
//           id: response.data.id,
//           question: response.data.question,
//           optionA: response.data.optionA,
//           optionB: response.data.optionB,
//           optionC: response.data.optionC,
//           optionD: response.data.optionD,
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//    
//   }

//   onChangeQuestion(e) {
//     this.setState({
//       question: e.target.value,
//     });
//   }

//   // onChangeOptionA(e) {
//   //   this.setState({
//   //     optionA: { text: e.target.value, value: e.target.value },
//   //   });
//   // }
//   // onChangeOptionB(e) {
//   //   this.setState({
//   //     optionB: { text: e.target.value, value: e.target.value },
//   //   });
//   // }
//   // onChangeOptionC(e) {
//   //   this.setState({
//   //     optionC: { text: e.target.value, value: e.target.value },
//   //   });
//   // }
//   // onChangeOptionD(e) {
//   //   this.setState({
//   //     optionD: { text: e.target.value, value: e.target.value },
//   //   });
//   // }

//   submitHandler(e) {
//     e.preventDefault();

//     const personalitytests = {
//       question: this.state.question,
//       optionA: this.state.optionA,
//       optionB: this.state.optionB,
//       optionC: this.state.optionC,
//       optionD: this.state.optionD,
//     }

//     console.log(personalitytests);

//       .then(res => console.log(res.data));

//     window.location = '/admin/personalityTestList';
//   }

//   render() {
//     return (
//       <>
//         <div
//           className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
//           style={{
//             minHeight: "300px",
//             backgroundSize: "cover",
//             backgroundPosition: "center top",
//           }}
//         >
//           {/* Mask */}
//           <span className="mask bg-gradient-orange" />
//           {/* Header container */}
//           <Container className="d-flex align-items-center" fluid>
//             <div> </div>
//           </Container>
//         </div>

//         <Container className="mt--7" fluid>
//           <Row>
//             <div className="col">
//               <Card className="shadow">
//                 <CardHeader className="border-0">
//                   <h3 className="mb-0">Edit Question</h3>
//                 </CardHeader>
//                 <form className="container" onSubmit={this.submitHandler}>
//                   <div className="form-group">
//                     <br />

//                     <div className="form-group col-md-12">
//                       <label>
//                         <strong>Question</strong>
//                       </label>
//                       <div className="md-form">
//                       <input  type="text"
//                         required
//                         className="form-control"
//                         value={this.state.question}
//                         onChange={this.onChangeQuestion}
//                         />
//                       </div>
//                     </div>
//                   </div>

// {/*

//                 <Row className="form-group col-md-12">
//                   <td className="col-md-6">
//                     <label>
//                       <strong>Option A</strong>
//                     </label>

//                     <input
//                       type="text"
//                       className="form-control"
//                       id=""
//                       name="text"
//                       value={this.state.optionA.text}
//                       onChange={this.onChangeOptionA(...this.state.optionA)}
//                     />

//                   </td>
//                   <td className="col-md-4">
//                     <label>
//                       <strong>Color A</strong>
//                     </label>
//                     <select
//                       className="custom-select "
//                       id="inlineFormCustomSelectPref"
//                       name="value"
//                       value={this.state.optionA.value}
//                       onChange={this.onChangeOptionA(...this.state.optionA)}
//                     >
//                       <option value="Red">Red</option>
//                       <option value="Yellow">Yellow</option>
//                       <option value="Green">Green</option>
//                       <option value="Blue">Blue</option>
//                     </select>
//                   </td>
//                 </Row>
//                 <Row className="form-group col-md-12">
//                   <td className="col-md-6">
//                     <label>
//                       <strong>Option B</strong>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="  "
//                       value={this.state.optionB.text}
//                       onChange={this.onChangeOptionB(...this.state.optionB)}
//                     />
//                   </td>
//                   <td className="col-md-4">
//                     <label>
//                       <strong>Color B</strong>
//                     </label>
//                     <select
//                       className="custom-select "
//                       id="inlineFormCustomSelectPref"
//                       value={this.state.optionB.value}
//                       onChange={this.onChangeOptionB(...this.state.optionB)}
//                     >
//                       <option value="Red">Red</option>
//                       <option value="Yellow">Yellow</option>
//                       <option value="Green">Green</option>
//                       <option value="Blue">Blue</option>
//                     </select>
//                   </td>
//                 </Row>

//                 <Row className="form-group col-md-12">
//                   <td className="col-md-6">
//                     <label>
//                       <strong>Option C</strong>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="  "
//                       value={this.state.optionC.text}
//                       onChange={this.onChangeOptionC(...this.state.optionC)}
//                     />
//                   </td>
//                   <td className="col-md-4">
//                     <label>
//                       <strong>Color C</strong>
//                     </label>
//                     <select
//                       className="custom-select "
//                       id="inlineFormCustomSelectPref"
//                       value={this.state.optionC.value}
//                       onChange={this.onChangeOptionC(...this.state.optionC)}
//                     >
//                       <option value="Red">Red</option>
//                       <option value="Yellow">Yellow</option>
//                       <option value="Green">Green</option>
//                       <option value="Blue">Blue</option>
//                     </select>
//                   </td>
//                 </Row>

//                 <Row className="form-group col-md-12">
//                   <td className="col-md-6">
//                     <label>
//                       <strong>Option D</strong>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="  "
//                       value={this.state.optionD.text}
//                       onChange={this.onChangeOptionD(...this.state.optionD)}
//                     />
//                   </td>
//                   <td className="col-md-4">
//                     <label>
//                       <strong>Color D</strong>
//                     </label>
//                     <select
//                       className="custom-select "
//                       id="inlineFormCustomSelectPref"
//                       value={this.state.optionD.value}
//                       onChange={this.onChangeOptionD(...this.state.optionD)}
//                     >
//                       <option value="Red">Red</option>
//                       <option value="Yellow">Yellow</option>
//                       <option value="Green">Green</option>
//                       <option value="Blue">Blue</option>
//                     </select>
//                   </td>
//                 </Row>

//  */}

//                   <Row className="form-group col-md-12"></Row>

//                   <div className="form-group">
//                     <Button
//                       className="btn btn-block col-md-2 "
//                       color="primary"
//                       type="submit"
//                       value="Create Exercise Log"
//                     >
//                       Add
//                     </Button>
//                   </div>

//                   <Button className="btn btn-block col-md-2 " color="danger">
//                     <Link
//                       to="/admin/personalityTestList"
//                       style={{ color: "white" }}
//                     >
//                       Cancel
//                     </Link>
//                   </Button>

//                   <br />
//                   <br />
//                 </form>
//               </Card>
//             </div>
//           </Row>
//         </Container>
//       </>
//     );
//   }
// }
