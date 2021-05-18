import React, { useState } from "react";
// reactstrap components
import { Button, Card, CardHeader, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import {API_BASE_URL} from 'actions/types'
import axios from "axios";

function AddPersonalityTest({ history }) {
  const [question, setQuestion] = useState("");
  const [optionA, setoptionA] = useState({text:"",value:""});
  const [optionB, setoptionB] = useState({text:"",value:""});
  const [optionC, setoptionC] = useState({text:"",value:""});
  const [optionD, setoptionD] = useState({text:"",value:""});



  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(API_BASE_URL + "/PersonalityTest/add", {
        question,
        optionA,
        optionB,
        optionC,
        optionD
      })
      .then((response) => {
        alert("Test question added");
        history.push("/admin/personalityTestList");
      })
      .catch((err) => {
        alert(err.response.data.msg);
        setQuestion("");
        setoptionA({text:"",value:""}); 
        setoptionB({text:"",value:""});
        setoptionC({text:"",value:""});
        setoptionD({text:"",value:""});
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
                <h3 className="mb-0">Add Question</h3>
              </CardHeader>
              <form className="container" onSubmit={submitHandler}>
                <div className="form-group">
                  <br />

                  <div className="form-group col-md-12">
                    <label>
                      <strong>Question</strong>
                    </label>
                    <div className="md-form">
                      <textarea
                        id="form10"
                        className="md-textarea form-control"
                        rows="3"
                        placeholder="Write your question here.."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* COLORS */}
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
                      value={optionA.text}
                      onChange={(e) => setoptionA({ ...optionA, text:e.target.value})}
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
                      value={optionA.value}
                      onChange={(e) => setoptionA({ ...optionA, value:e.target.value})}
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
                      value={optionB.text}
                      onChange={(e) => setoptionB({ ...optionB, text:e.target.value})}
                    />
                  </td>
                  <td className="col-md-4">
                    <label>
                      <strong>Color B</strong>
                    </label>
                    <select
                      className="custom-select "
                      id="inlineFormCustomSelectPref"
                      value={optionB.value}
                      onChange={(e) => setoptionB({ ...optionB, value:e.target.value})}
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
                      value={optionC.text}
                      onChange={(e) => setoptionC({ ...optionC, text:e.target.value})}
                    />
                  </td>
                  <td className="col-md-4">
                    <label>
                      <strong>Color C</strong>
                    </label>
                    <select
                      className="custom-select "
                      id="inlineFormCustomSelectPref"
                      value={optionC.value}
                      onChange={(e) => setoptionC({ ...optionC, value:e.target.value})}
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
                      value={optionD.text}
                      onChange={(e) => setoptionD({ ...optionD, text:e.target.value})}
                    />
                  </td>
                  <td className="col-md-4">
                    <label>
                      <strong>Color D</strong>
                    </label>
                    <select
                      className="custom-select "
                      id="inlineFormCustomSelectPref"
                      value={optionD.value}
                      onChange={(e) => setoptionD({ ...optionD, value:e.target.value})}
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

export default AddPersonalityTest;






























// import React, { useState } from "react";
// // reactstrap components
// import { Button, Card, CardHeader, Container, Row } from "reactstrap";
// import { Link } from "react-router-dom";

// import axios from "axios";
// import { Component } from "react";

// export default class AddPersonalityTest extends Component{

//   constructor(props){
//     super(props)
//     this.state =  {
//       question: '',
//       optionA: {text:'',value:''},
//       optionB: {text:'',value:''},
//       optionC: {text:'',value:''},
//       optionD: {text:'',value:''},
//     }
//   }

//   handleChange = ((e)=>{
//     const { name, value} = e.target;
//     this.setState({
//       ...this.state,
//       [name]: value
//     })
//   });


//    onSubmit = (e) => {
//     e.preventDefault();
//     const { question,optionA,optionB,optionC,optionD } = this.state
//     const data = {
//       question: question,
//       optionA: optionA,
//       optionB: optionB,
//       optionC: optionC,
//       optionD: optionD
//     } 
//       console.log(data)

//     // axios
//     //   
//     //     question,
//     //     optionA,
//     //     optionB,
//     //     optionC,
//     //     optionD
//     //   })
//     //   .then((response) => {
//     //     alert("Test question added");
//     //     history.push("/admin/personalityTestList");
//     //   })
//     //   .catch((err) => {
//     //     alert(err.response.data.msg);
//     //     setQuestion("");
//     //     setoptionA({text:"",value:""});
//     //     setoptionB({text:"",value:""});
//     //     setoptionC({text:"",value:""});
//     //     setoptionD({text:"",value:""});
//     //   });
//   };

//   render(){
//   return (
//     <>
//       <div
//         className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
//         style={{
//           minHeight: "300px",
//           backgroundSize: "cover",
//           backgroundPosition: "center top",
//         }}
//       >
//         {/* Mask */}
//         <span className="mask bg-gradient-green" />
//         {/* Header container */}
//         <Container className="d-flex align-items-center" fluid>
//           <div> </div>
//         </Container>
//       </div>

//       <Container className="mt--7" fluid>
//         <Row>
//           <div className="col">
//             <Card className="shadow">
//               <CardHeader className="border-0">
//                 <h3 className="mb-0">Add Question</h3>
//               </CardHeader>
//               <form className="container" onSubmit={this.onSubmit}>
//                 <div className="form-group">
//                   <br />

//                   <div className="form-group col-md-12">
//                     <label>
//                       <strong>Question</strong>
//                     </label>
//                     <div className="md-form">
//                       <textarea
//                         id="form10"
//                         className="md-textarea form-control"
//                         rows="3"
//                         placeholder="Write your question here.."
//                         value={this.state.question}
//                         onChange={this.handleChange}
//                       ></textarea>
//                     </div>
//                   </div>
//                 </div>

//                 {/* COLORS */}
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
//                       value={...this.state.optionA.text}
//                       onChange={this.handleChange}
//                       // value={optionA.text0}
//                       // onChange={(e) => setoptionA({ ...optionA, text:e.target.value})}
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
//                       onChange={this.handleChange}
//                       // value={optionA.value}
//                       // onChange={(e) => setoptionA({ ...optionA, value:e.target.value})}
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
//                       // value={optionB.text}
//                       // onChange={(e) => setoptionB({ ...optionB, text:e.target.value})}
//                       value={this.state.optionB.text}
//                       onChange={this.handleChange}
//                     />
//                   </td>
//                   <td className="col-md-4">
//                     <label>
//                       <strong>Color B</strong>
//                     </label>
//                     <select
//                       className="custom-select "
//                       id="inlineFormCustomSelectPref"
//                       // value={optionB.value}
//                       // onChange={(e) => setoptionB({ ...optionB, value:e.target.value})}
//                       value={this.state.optionB.value}
//                       onChange={this.handleChange}
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
//                       onChange={this.handleChange}
//                       // value={optionC.text}
//                       // onChange={(e) => setoptionC({ ...optionC, text:e.target.value})}
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
//                       onChange={this.handleChange}
//                       // value={optionC.value}
//                       // onChange={(e) => setoptionC({ ...optionC, value:e.target.value})}
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
//                       onChange={this.handleChange}
//                       // value={optionD.text}
//                       // onChange={(e) => setoptionD({ ...optionD, text:e.target.value})}
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
//                       onChange={this.handleChange}
//                       // value={optionD.value}
//                       // onChange={(e) => setoptionD({ ...optionD, value:e.target.value})}
//                     >
//                       <option value="Red">Red</option>
//                       <option value="Yellow">Yellow</option>
//                       <option value="Green">Green</option>
//                       <option value="Blue">Blue</option>
//                     </select>
//                   </td>
//                 </Row>

//                 <Row className="form-group col-md-12"></Row>

//                 <div className="form-group">
//                   <Button
//                     className="btn btn-block col-md-2 "
//                     color="primary"
//                     type="submit"
//                     value="Create Exercise Log"
//                   >
//                     Add
//                   </Button>
//                 </div>

//                 <Button className="btn btn-block col-md-2 " color="danger">
//                   <Link
//                     to="/admin/personalityTestList"
//                     style={{ color: "white" }}
//                   >
//                     Cancel
//                   </Link>
//                 </Button>

//                 <br />
//                 <br />
//               </form>
//             </Card>
//           </div>
//         </Row>
//       </Container>
//     </>
//   );

// }
// }










