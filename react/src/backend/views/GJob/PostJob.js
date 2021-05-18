import React, {useState} from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
  Button
} from "reactstrap";
import { addJob } from '../../../actions/job';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom' ;
import axios from 'axios';
// core components
import UserHeader from "backend/components/Headers/UserHeader.js";

const PostJob =({ addJob })=>  {
  const [formData, setFormData] = useState({
    title: '', 
    experience: '',
    studyLevel: '',
    salary: '',
    description: '',
    contractType: '',
    location: '',
    requirements: [
      { "text": "Anglais"},
      { "text": "Français"}
  ],
    skills: [
      {"title": "Symfony4"},
      {"title": "Symfony3"},
      {"title": "Angular"}
    ] 
   });
   const {title,description,studyLevel,experience,location,salary,contractType,requirements,skills} = formData;
   const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value}); //using onChange for every field
  //validation

  const onSubmit = async e =>{
    e.preventDefault();
    //console.log(formData)
    addJob(
      {title,description,studyLevel,experience,location,salary,contractType,requirements,skills});
  };
    //console.log(formData);
   /* onSubmit={e => {
      e.preventDefault();
      addJob({ formData });
      setFormData('');
    }} */
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Add Job</h3>
                <div className="col text-right">
                  <Button color="danger" size="sm">
                    <Link
                      to="/admin/ListJobs"
                      style={{ color: "white" }}
                    >
                      Cancel
                    </Link>
                  </Button>
                  </div>
              </CardHeader>
              <form className="container" 
              onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                  <label><strong>Title</strong></label>
                  <input type="text" className="form-control" name="title" placeholder="Title..." value={title} onChange={e=> onChange(e)}/>
                  </div>
                  <div className="form-group">
                  <label><strong>Location</strong></label>
                  <input type="text" className="form-control" name="location" placeholder="Kap IT Tunisia Rue Ghar el Melh Tunis Tunisia, Tunis, 1053, Tunisia." value={location} onChange={e=> onChange(e)}/>
                  </div>
                <div className="form-group">
                <label><strong>Salary</strong></label>
                  <input type="number" className="form-control" name="salary" placeholder="eg: 2500 dt" value={salary} onChange={e=> onChange(e)}/>
                </div>
                <div className="form-group">
                <label><strong>Study Level</strong></label>
                  <input type="text" className="form-control" name="experience" placeholder="eg: engineer (bac+5)" value={experience} onChange={e=> onChange(e)}/>
                </div>
                <div className="form-group">
                <label><strong>Experience</strong></label>
                  <input type="text" className="form-control" name="studyLevel" placeholder="eg: 2-4 years" value={studyLevel} onChange={e=> onChange(e)}/>
                </div>
                <label><strong>contract Type</strong></label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
                       value={contractType} onChange={e=> onChange(e)} name="contractType">
                <option selected>CDI</option>
                <option value="Full-Time">Full-Time</option>
                <option value="SIVP">SIVP</option>
                <option value="Freelance">Freelance</option>
                <option value="Traineeship">Traineeship</option>
                </select>
                <div className="form-group">
                <label><strong>Description</strong></label>
                <div className="md-form">
                <i className="fas fa-pencil-alt prefix"></i>
                <textarea id="form10" className="md-textarea form-control" rows="3"
                 name="description" value={description} onChange={e=> onChange(e)}></textarea>
              </div>
                </div>
                <div className="form-group">
                <label><strong>Requirements</strong></label>
                <div className="md-form">
                <i className="fas fa-pencil-alt prefix"></i>
                <textarea id="form10" className="md-textarea form-control" rows="3" 
               ></textarea>
              </div>
                </div>

 <button type="submit" className="btn btn-primary btn-block" >ADD</button>
                  <br/><br/>
        </form>

            </Card>
          </div>
        </Row>
        </Container>
      </>
    );
  };
  
//for redux actions
PostJob.propTypes= {
  addJob: PropTypes.func.isRequired,
};

export default connect(null, {addJob}) (PostJob);

// import React from "react";
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
//   UncontrolledTooltip,
// } from "reactstrap";
// import {Link} from 'react-router-dom' ;

// // core components
// import UserHeader from "backend/components/Headers/UserHeader.js";
// import { data } from "jquery";

// class PostJob extends React.Component {
//   render() {
//     return (
//       <>
//         <UserHeader />
//         {/* Page content */}
//         <Container className="mt--7" fluid>
//         <Row>
//           <div className="col">
//             <Card className="shadow">
//               <CardHeader className="border-0">
//                 <h3 className="mb-0">Add Job</h3>
//               </CardHeader>
//               <form className="container">
//                 <div className="form-group">
//                   <label><strong>Title</strong></label>
//                   <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Title..."/>
//                 </div>
//                 <div className="form-group">
//                 <label><strong>Salary</strong></label>
//                   <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="eg: 2500 dt"/>
//                 </div>
//                 <div className="form-group">
//                 <label><strong>Study Lavel</strong></label>
//                   <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="eg: engineer (bac+5)"/>
//                 </div>
//                 <div className="form-group">
//                 <label><strong>Experience</strong></label>
//                   <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="eg: 2-4 years"/>
//                 </div>
//                 <div className="form-group">
//                 <label><strong>Description</strong></label>
//                 <div className="md-form">
//                 <i className="fas fa-pencil-alt prefix"></i>
//                 <textarea id="form10" className="md-textarea form-control" rows="3"></textarea>
//               </div>
//                 </div>
//                 <label><strong>Contract Type</strong></label>
//                 <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
//                 <option selected>CDI</option>
//                 <option value="1">Full-Time</option>
//                 <option value="2">SIVP</option>
//                 <option value="3">Freelance</option>
//                 <option value="3">Stage</option>
//                 </select>
//                 <div className="form-group">
//                 <label><strong>Requirements</strong></label>
//                 <div className="md-form">
//                 <i className="fas fa-pencil-alt prefix"></i>
//                 <textarea id="form10" class="md-textarea form-control" rows="3"></textarea>
//               </div>
//                 </div>
//                           <br/>
//                   <button type="submit" className="btn btn-outline-primary btn-block" >Create</button>
//                   <br/><br/>
//         </form>

//             </Card>
//           </div>
//         </Row>
//         </Container>
//       </>
//     );
//   };
  
//   }
  
// export default PostJob;