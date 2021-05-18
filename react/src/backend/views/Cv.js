import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Row,
  Button,
} from "reactstrap";
// core components
import Header from "backend/components/Headers/Header.js";

const Cv = () => {
  const [msg, setMsg] = useState({
    text: "",
    reponse: [],
  });

  const { text } = msg;

  const onChange = (e) => setMsg({ ...msg, [e.target.name]: e.target.value });

  console.log(msg);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(msg);

    if (msg.text != "") {
      console.log(msg);
      axios
        //.post("http://127.0.0.1:5000/imgtocsv", { text: msg.text }) //server link + send data
        .post("http://127.0.0.1:5000/imgtocsv", {
          text: msg.text,
        }) //server link + send data
        // .then(res=>console.log(res)) ////display response
        .then((res) => {
          //push the response in the array chat
          let c = msg.reponse;
          c.push({ from: "Input", message: msg.text }); //msg fron the user
          c.push({ from: "Output", message: res.data }); //msg fron chatbot
          this.setState({ msg: msg.text, reponse: c });
          console.log(msg);
          //overflow
          // let interval = window.setInterval(function () {
          //   var element = document.getElementById("chatId");
          //   element.scrollTop = element.height;
          //   window.clearInterval(interval);
          // }, 1000);
        })
        .catch((err) => console.log(err));
    }
  };

  // const save = () => {

  // };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">List of Cv's</h3>
                <br></br>
                {/* search bar */}
                <div className="col text-right">
                  {/* <input
                      type="file"
                      id=""
                      value={msg.text}
                      onChange={(e) => this.handleChange({...msg, text: e.target.value})}
                      /> */}
                  <form className="container" onSubmit={(e) => onSubmit(e)}>
                    {/* <input type="text" className="form-control"
                                 value={msg.text}  placeholder="msg" onChange={e=> setMsg({...msg, text: e.target.value})}>
                      </input> */}
                    <input
                      type="text"
                      className="form-control"
                      name="text"
                      placeholder="choose the Cv"
                      value={msg.text}
                      onChange={(e) => onChange(e)}
                    />

                    <br></br>

                    <Button
                      style={{ backgroundColor: "green" }}
                      // onClick={() => save }
                      size="sm"
                    >
                      Send
                    </Button>
                  </form>
                  <CardHeader>
                    <div>{msg.reponse.map((op) => op.message)}</div>
                  </CardHeader>
                </div>

                {/* search bar */}
              </CardHeader>

              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
      </Container>
    </>
  );
};

export default Cv;

// import React from "react";
// import { Link } from "react-router-dom";

// // reactstrap components
// import {
//   Badge,
//   Card,
//   CardHeader,
//   CardFooter,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   Media,
//   Pagination,
//   PaginationItem,
//   PaginationLink,
//   Progress,
//   Table,
//   Container,
//   Row,
//   Button,
// } from "reactstrap";
// // core components
// import Header from "backend/components/Headers/Header.js";

// export class UsersList extends React.Component {

//   state = {
//     msg: "",
//   };

//   handleChange = (e) => {
//     console.log(e.target.value);
//     this.setState({ msg: e.target.value });
//   };

//   handleSend = () => {
//     if (this.state.msg != "") {
//       axios
//         .post("http://127.0.0.1:5000/user", { msg: this.state.msg }) //server link + send data
//         // .then(res=>console.log(res)) ////display response
//         .then((res) => {
//           //push the response in the array chat
//           let c = this.state.chat;
//           c.push({ from: "User", message: this.state.msg }); //msg fron the user
//           this.setState({ msg: ""});
//           console.log(this.state);
//           // //overflow
//           // let interval = window.setInterval(function () {
//           //   var element = document.getElementById("chatId");
//           //   element.scrollTop = element.height;
//           //   window.clearInterval(interval);
//           // }, 1000);
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   render(){
//     return (
//     <>
//       <Header />
//       {/* Page content */}
//       <Container className="mt--7" fluid>
//         {/* Table */}
//         <Row>
//           <div className="col">
//             <Card className="shadow">
//               <CardHeader className="border-0">
//                 <h3 className="mb-0">List of Users</h3>
//                 {/* search bar */}
//                   <div className="col text-right">
//                       <Button
//                           style={{backgroundColor:'orange'}}
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                           size="sm" ><Link to="/admin/addHr" style={{color:'white'}} >Add HR</Link>
//                       </Button>

//                       {/* INPUT FILE */}
//                       <input
//                       type="file"
//                       id=""

//                       value={this.state.msg}
//                       onChange={(e) => this.handleChange(e)}

//                       // value={avatar}
//                       // onChange={(e) => setAvatar(e.target.value)}
//                       />
//                   </div>
//                 {/* search bar */}
//               </CardHeader>
//               <Table className="align-items-center table-flush" responsive>
//                 <thead className="thead-light">
//                   <tr>
//                     <th scope="col">FirstName</th>
//                     <th scope="col">LastName</th>
//                     <th scope="col">Role</th>
//                     <th scope="col">date</th>
//                     <th scope="col">avatar</th>
//                     <th scope="col" />
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <th scope="row">
//                       <Media className="align-items-center">
//                         <a
//                           className="avatar rounded-circle mr-3"
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <img
//                             alt="..."
//                             src={
//                               require("../../assets/img/theme/team-2-800x800.jpg")
//                                 .default
//                             }
//                           />
//                         </a>
//                         <Media>
//                           <span className="mb-0 text-sm">
//                             Salhi
//                           </span>
//                         </Media>
//                       </Media>
//                     </th>
//                     <td>Ichrak</td>
//                     <td>
//                       <Badge color="" className="badge-dot mr-4">
//                         <i className="bg-warning" />
//                         HR
//                       </Badge>
//                     </td>

//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2">60%</span>
//                         <div>
//                           <Progress
//                             max="100"
//                             value="60"
//                             barClassName="bg-danger"
//                           />
//                         </div>
//                       </div>
//                     </td>
//                     <td className="text-right">
//                       <Button color="danger"
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                         size="sm" >Deactivate</Button>
//                       <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu className="dropdown-menu-arrow" right>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             delete
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             approve
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             disapprove
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">
//                       <Media className="align-items-center">
//                         <a
//                           className="avatar rounded-circle mr-3"
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <img
//                             alt="..."
//                             src={
//                               require("../../assets/img/theme/team-1-800x800.jpg")
//                                 .default
//                             }
//                           />
//                         </a>
//                         <Media>
//                           <span className="mb-0 text-sm">
//                             Imen
//                           </span>
//                         </Media>
//                       </Media>
//                     </th>
//                     <td>El hakim</td>
//                     <td>
//                       <Badge color="" className="badge-dot">
//                         <i className="bg-success" />
//                         candidat
//                       </Badge>
//                     </td>

//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2">100%</span>
//                         <div>
//                           <Progress
//                             max="100"
//                             value="100"
//                             barClassName="bg-success"
//                           />
//                         </div>
//                       </div>
//                     </td>
//                     <td className="text-right">
//                       <Button color="danger"
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                         size="sm" >Deactivate</Button>
//                       <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu className="dropdown-menu-arrow" right>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             delete
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             approve
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             disapprove
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">
//                       <Media className="align-items-center">
//                         <a
//                           className="avatar rounded-circle mr-3"
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <img
//                             alt="..."
//                             src={
//                               require("../../assets/img/theme/team-1-800x800.jpg")
//                                 .default
//                             }
//                           />
//                         </a>
//                         <Media>
//                           <span className="mb-0 text-sm">nada  </span>
//                         </Media>
//                       </Media>
//                     </th>
//                     <td>hakim</td>
//                     <td>
//                       <Badge color="" className="badge-dot mr-4">
//                         <i className="bg-danger" />
//                         Hr
//                       </Badge>
//                     </td>

//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2">72%</span>
//                         <div>
//                           <Progress
//                             max="100"
//                             value="72"
//                             barClassName="bg-danger"
//                           />
//                         </div>
//                       </div>
//                     </td>
//                     <td className="text-right">
//                       <Button color="danger"
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                         size="sm" >Deactivate</Button>
//                       <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu className="dropdown-menu-arrow" right>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             delete
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             approve
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Something else here
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">
//                       <Media className="align-items-center">
//                         <a
//                           className="avatar rounded-circle mr-3"
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <img
//                             alt="..."
//                             src={
//                               require("../../assets/img/theme/team-2-800x800.jpg")
//                                 .default
//                             }
//                           />
//                         </a>
//                         <Media>
//                           <span className="mb-0 text-sm">
//                             najla
//                           </span>
//                         </Media>
//                       </Media>
//                     </th>
//                     <td> daoud</td>
//                     <td>
//                       <Badge color="" className="badge-dot">
//                         <i className="bg-info" />
//                         Hr
//                       </Badge>
//                     </td>

//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2">90%</span>
//                         <div>
//                           <Progress
//                             max="100"
//                             value="90"
//                             barClassName="bg-info"
//                           />
//                         </div>
//                       </div>
//                     </td>
//                     <td className="text-right">
//                       <Button color="danger"
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                         size="sm" >Deactivate</Button>
//                       <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu className="dropdown-menu-arrow" right>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             delete
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             approve
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Something else here
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">
//                       <Media className="align-items-center">
//                         <a
//                           className="avatar rounded-circle mr-3"
//                           href="#pablo"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <img
//                             alt="..."
//                             src={
//                               require("../../assets/img/theme/team-1-800x800.jpg").default
//                             }
//                           />
//                         </a>
//                         <Media>
//                           <span className="mb-0 text-sm">
//                             Ahmed
//                           </span>
//                         </Media>
//                       </Media>
//                     </th>
//                     <td>salhi</td>
//                     <td>
//                       <Badge color="" className="badge-dot mr-4">
//                         <i className="bg-success" />
//                         condidat
//                       </Badge>
//                     </td>

//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2">100%</span>
//                         <div>
//                           <Progress
//                             max="100"
//                             value="100"
//                             barClassName="bg-success"
//                           />
//                         </div>
//                       </div>
//                     </td>
//                     <td className="text-right">
//                       <Button color="danger"
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                         size="sm" >Deactivate</Button>
//                       <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu className="dropdown-menu-arrow" right>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             delete
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             approve
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Something else here
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//               <CardFooter className="py-4">
//                 <nav aria-label="...">
//                   <Pagination
//                     className="pagination justify-content-end mb-0"
//                     listClassName="justify-content-end mb-0"
//                   >
//                     <PaginationItem className="disabled">
//                       <PaginationLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                         tabIndex="-1"
//                       >
//                         <i className="fas fa-angle-left" />
//                         <span className="sr-only">Previous</span>
//                       </PaginationLink>
//                     </PaginationItem>
//                     <PaginationItem className="active">
//                       <PaginationLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         1
//                       </PaginationLink>
//                     </PaginationItem>
//                     <PaginationItem>
//                       <PaginationLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         2 <span className="sr-only">(current)</span>
//                       </PaginationLink>
//                     </PaginationItem>
//                     <PaginationItem>
//                       <PaginationLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         3
//                       </PaginationLink>
//                     </PaginationItem>
//                     <PaginationItem>
//                       <PaginationLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         <i className="fas fa-angle-right" />
//                         <span className="sr-only">Next</span>
//                       </PaginationLink>
//                     </PaginationItem>
//                   </Pagination>
//                 </nav>
//               </CardFooter>
//             </Card>
//           </div>
//         </Row>
//         {/* Dark table */}

//       </Container>
//     </>
//   );}
// };

// export default UsersList;
