import React from 'react';

const UploadCv = (props) => {
  return (
    <div>
    </div>
  );
};

export default UploadCv;
// import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// // reactstrap components
// import {
//   Card,
//   CardHeader,
//   CardFooter,
//   Pagination,
//   PaginationItem,
//   PaginationLink,
//   Container,
//   Row,
//   Button,
// } from "reactstrap";
// // core components
// import Header from "backend/components/Headers/Header.js";

// const UploadCv = () => {
//   const [msg, setMsg] = useState({
//     text: "",
//     reponse: [],
//   });
//   const { text } = msg;
//   const onChange = (e) => setMsg({ ...msg, [e.target.name]:e.target.value });
//   // console.log(msg);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     console.log(msg);

//     if (msg.text != "") {
//       console.log(msg);
//       axios
//         //.post("http://127.0.0.1:5000/imgtocsv", { text: msg.text }) //server link + send data
//         .post("http://127.0.0.1:5000/imgtocsv", {
//           text: "C:/Users/LENOVO/Desktop/cv.jpg",
//         }) //server link + send data
//         // .then(res=>console.log(res)) ////display response
//         .then((res) => {
//           //push the response in the array chat
//           let c = msg.reponse;
//           c.push({ from: "Input", message: msg.text }); //msg fron the user
//           c.push({ from: "Output", message: res.data }); //msg fron chatbot
//           this.setState({ msg: "", reponse: c });
//           console.log(msg);
//           //overflow
//           // let interval = window.setInterval(function () {
//           //   var element = document.getElementById("chatId");
//           //   element.scrollTop = element.height;
//           //   window.clearInterval(interval);
//           // }, 1000);
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   return (
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
//                 <div className="col text-right">
//                   <Button
//                     style={{ backgroundColor: "orange" }}
//                     href="#pablo"
//                     onClick={(e) => e.preventDefault()}
//                     size="sm"
//                   >
//                     <Link to="/admin/addHr" style={{ color: "white" }}>
//                       Add HR
//                     </Link>
//                   </Button>
//                   {/* <input
//                       type="file"
//                       id=""
//                       value={msg.text}
//                       onChange={(e) => this.handleChange({...msg, text: e.target.value})}
//                       /> */}

//                   <form className="container" onSubmit={(e) => onSubmit(e)}>
//                     {/* <input type="text" className="form-control"
//                                  value={msg.text}  placeholder="msg" onChange={e=> setMsg({...msg, text: e.target.value})}>
//                       </input> */}
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="text"
//                       placeholder="choose the Cv"
//                       value={msg.text}
//                       onChange={(e) => onChange(e)}
//                     />

//                     <Button
//                       style={{ backgroundColor: "green" }}
//                       // onClick={() => save }
//                       size="sm"
//                     >
//                       Send
//                     </Button>
//                   </form>

//                   <div>{msg.reponse.map((op) => op.message)}</div>






//                 </div>

                
//                 {/* search bar */}
//               </CardHeader>

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
//   );
// };

// export default UploadCv;