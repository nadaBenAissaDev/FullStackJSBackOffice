import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import PDF from './PDF';
import { addCv } from '../../../actions/cv';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const PostCv = ({ addCv},props) => {
    // let history = useHistory();

    const skills = [
        {title: 'C#', id: 1},
        {title: 'C++', id: 2},
        {title: '.net', id: 3},
        {title: 'angular', id: 4},
    ]
    
    const[cv,setCv]=useState({
        phone:'',
        linkedin:'',
        about:'',
        university: '',
        universityYear:'',
        universityLoc: '',
        school:'',
        schoolYear:'',
        schoolLoc:'',
        educExptitle: '',
        educExpyear: '',
        educExpdescription: '',
        educExptitleTwo: '',
        educExpyearTwo: '',
        educExpdescriptionTwo: '',

        techExptitle: '',
        techExpinstOrg: '',
        techExpyear: '',
        techExpdescription: '',
        techExplocation: '',

        techExptitleTwo: '',
        techExpinstOrgTwo: '',
        techExpyearTwo: '',
        techExpdescriptionTwo: '',
        techExplocationTwo: '',

        langname: '',
        langlevel: '',

        langnameTwo: '',
        langlevelTwo: '',
        skills: '',
        postSubmited: false
    })
    const jobId= props.jobId;
    const {phone,
        linkedin,
        about,
        university,
        universityYear,
        universityLoc,
        school,
        schoolYear,
        schoolLoc,
        educExptitle,
        educExpyear,
        educExpdescription,
        educExptitleTwo,
        educExpyearTwo,
        educExpdescriptionTwo,
        techExptitle,
        techExpinstOrg,
        techExpyear,
        techExpdescription,
        techExplocation,
        techExptitleTwo,
        techExpinstOrgTwo,
        techExpyearTwo,
        techExpdescriptionTwo,
        techExplocationTwo,

        langname,
        langlevel,

        langnameTwo,
        langlevelTwo,
        
        } = cv;

    // const [options] = useState(skills);
    const onSubmit = async e =>{
        console.log(cv)
        e.preventDefault();
        setCv({...cv, postSubmited: true })
        addCv({
        phone,
        linkedin,
        about,
        university,
        universityYear,
        universityLoc,
        school,
        schoolYear,
        schoolLoc,
        educExptitle,
        educExpyear,
        educExpdescription,
        educExptitleTwo,
        educExpyearTwo,
        educExpdescriptionTwo,
        techExptitle,
        techExpinstOrg,
        techExpyear,
        techExpdescription,
        techExplocation,
        techExptitleTwo,
        techExpinstOrgTwo,
        techExpyearTwo,
        techExpdescriptionTwo,
        techExplocationTwo,

        langname,
        langlevel,

        langnameTwo,
        langlevelTwo,
        skills,
        jobId
        });

     }
    return (
        <>{ cv.postSubmited === false ?
          <div className="col-lg-8 mx-auto text-center mt-5">
            <h1>
                Let's generate your Resume !
            </h1>
            <p>Please provide your information wherever necessary!</p>
            <hr/>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={e => onSubmit(e)}>
                    <h3>Personnal Info</h3>
                        <div className="row col-lg-10 mx-auto">
                            <div className="col-lg-3 text-left">
                                <label>First Name*</label>
                                <input type="text" className="form-control"
                                 value={cv.firstname}  placeholder="firstName" onChange={e=> setCv({...cv, firstname: e.target.value})}></input>
                            </div>
                            <div className="col-lg-3 text-left">
                                <label>Last Name*</label>
                                <input type="text" className="form-control"
                                value={cv.lastname}  placeholder="lastName" onChange={e=> setCv({...cv, lastname: e.target.value})}></input>
                            </div>
                            <div className="col-lg-3 text-left">
                                <label>Email*</label>
                                <input type="email" className="form-control" 
                                value={cv.email}  placeholder="Email" onChange={e=> setCv({...cv, email: e.target.value})}
                                ></input>
                            </div>
                            <div className="col-lg-3 text-left">
                                <label>Mobile phone*</label>
                                <input type="phone" className="form-control"
                                value={cv.phone}  placeholder="Mobile phone" onChange={e=> setCv({...cv, phone: e.target.value})}
                                ></input>
                            </div>
                            <div className="col-lg-12 text-left">
                                <label>Linkedin*</label>
                                <input type="text" className="form-control" 
                                value={cv.linkedin}  placeholder="LinkedIn" onChange={e=> setCv({...cv, linkedin: e.target.value})} ></input>
                            </div>
                            <div className="col-lg-12 text-left">
                                <label>About You *</label>
                                <textarea rows="3" type="text" className="form-control" 
                                value={cv.about}  placeholder="About you" onChange={e=> setCv({...cv, about: e.target.value})}
                                 ></textarea>
                            </div>     
                        </div>
                    <br/>
                    <hr/>
                     <h3>Education</h3>    
                        <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3>
                            ✅ 1
                            </h3>
                       </div>
                        <div className="col-lg-8 text-left">
                                <label>University*</label>
                                <input type="text" className="form-control" 
                                value={cv.university}  placeholder="University" onChange={e=> setCv({...cv, university: e.target.value})}
                                ></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Year*</label>
                                <input type="date" className="form-control"
                                value={cv.universityYear}  placeholder="University" onChange={e=> setCv({...cv, universityYear: e.target.value})}
                                ></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Location</label>
                                <input type="text" className="form-control" 
                                value={cv.universityLoc}  placeholder="University" onChange={e=> setCv({...cv, universityLoc: e.target.value})}
                                ></input>
                        </div>
                        </div>
                        <br/>
                        <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3>
                            ✅ 2
                            </h3>
                       </div>
                        <div className="col-lg-8 text-left">
                                <label>School*</label>
                                <input type="text" className="form-control"
                                value={cv.school}  placeholder="School" 
                                onChange={e=> setCv({...cv, school: e.target.value})}
                                ></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Year*</label>
                                <input type="date" className="form-control" 
                                value={cv.schoolYear} onChange={e=> setCv({...cv, schoolYear: e.target.value})}
                                ></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Location</label>
                                <input type="text" className="form-control" 
                                value={cv.schoolLoc}  placeholder="School location" 
                                onChange={e=> setCv({...cv, schoolLoc: e.target.value})}
                                ></input>
                        </div>
                        </div>
                    <br/>
                    <hr/>
                     <h3>Technical Experience</h3>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3>
                            ✅ 1
                            </h3>
                       </div>
                        <div className="col-lg-4 text-left">
                                <label>Title*</label>
                                <input type="text" className="form-control" 
                               value={cv.techExptitle}  placeholder="Title" 
                               onChange={e=> setCv({...cv, techExptitle: e.target.value})}                                
                                ></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Intitute/Organisation*</label>
                                <input type="text" className="form-control"                                 
                                value={cv.techExpinstOrg}  placeholder="Institute/Organisation" 
                                onChange={e=> setCv({...cv, techExpinstOrg: e.target.value})}                                                                
                                ></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Year*</label>
                                <input type="date" className="form-control" 
                                value={cv.techExpyear} onChange={e=> setCv({...cv, techExpyear: e.target.value})}                                                                
                                ></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Location*</label>
                                <input type="text" className="form-control"
                                value={cv.techExplocation}  placeholder="Location" 
                                onChange={e=> setCv({...cv, techExplocation: e.target.value})}                                                                
                                ></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Description*</label>
                                <textarea rows="3" type="text" className="form-control"
                                value={cv.techExpdescription}  placeholder="Description" 
                                onChange={e=> setCv({...cv, techExpdescription: e.target.value})}                                                                
                                ></textarea>
                        </div>
                        </div>
                        <br/>
                        <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3>
                            ✅ 2
                            </h3>
                       </div>
                        <div className="col-lg-4 text-left">
                                <label>Title*</label>
                                <input type="text" className="form-control"
                                value={cv.techExptitleTwo}  placeholder="Title" 
                                onChange={e=> setCv({...cv, techExptitleTwo: e.target.value})}                                                                
                                ></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Intitute/Organisation*</label>
                                <input type="text" className="form-control"
                                value={cv.techExpinstOrgTwo}  placeholder="Intitute/Organisation" 
                                onChange={e=> setCv({...cv, techExpinstOrgTwo: e.target.value})}                                                                
                                ></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Year*</label>
                                <input type="date" className="form-control"
                                value={cv.techExpyearTwo}  placeholder="Year" 
                                onChange={e=> setCv({...cv, techExpyearTwo: e.target.value})}                                                                
                                ></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Location*</label>
                                <input type="text" className="form-control"
                                value={cv.techExplocationTwo}  placeholder="Year" 
                                onChange={e=> setCv({...cv, techExplocationTwo: e.target.value})}                                                                
                                ></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Description*</label>
                                <textarea rows="3" type="text" className="form-control"
                                value={cv.techExpdescriptionTwo}  placeholder="Description" 
                                onChange={e=> setCv({...cv, techExpdescriptionTwo: e.target.value})}                                                                
                                ></textarea>
                        </div>
                        </div>
                    <br/>
                    <hr/>
                    <h3>Educational Experience</h3>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3>
                            ✅ 1
                            </h3>
                       </div>
                        <div className="col-lg-8 text-left">
                                <label>Project title*</label>
                                <input type="text" className="form-control"
                                value={cv.educExptitle}  placeholder="Project title" 
                                onChange={e=> setCv({...cv, educExptitle: e.target.value})}                                                                
                                ></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Year*</label>
                                <input type="date" className="form-control"
                                value={cv.educExpyear} onChange={e=> setCv({...cv, educExpyear: e.target.value})}                                                                
                                ></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Description*</label>
                                <textarea rows="3" type="text" className="form-control"
                                value={cv.educExpdescription}  placeholder="Project description" 
                                onChange={e=> setCv({...cv, educExpdescription: e.target.value})}                                                                
                                ></textarea>
                        </div>
                        </div>
                        <br/>
                        <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3>
                            ✅ 2
                            </h3>
                       </div>
                        <div className="col-lg-8 text-left">
                                <label>Project title*</label>
                                <input type="text" className="form-control"
                                value={cv.educExptitleTwo}  placeholder="Project title" 
                                onChange={e=> setCv({...cv, educExptitleTwo: e.target.value})}                                                                
                                ></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Year*</label>
                                <input type="date" className="form-control"
                                value={cv.educExpyearTwo}  placeholder="Project description" 
                                onChange={e=> setCv({...cv, educExpyearTwo: e.target.value})}                                                                
                                ></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Description*</label>
                                <textarea rows="3" type="text" className="form-control"
                                value={cv.educExpdescriptionTwo}  placeholder="Project title" 
                                onChange={e=> setCv({...cv, educExpdescriptionTwo: e.target.value})}                                                                
                                ></textarea>
                        </div>
                        </div>
                    <br/>
                    <hr/>
                    <h3>Language</h3>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3>
                            ✅ 1
                            </h3>
                       </div>
                        <div className="col-lg-6 text-left">
                                <label>Name*</label>
                                <select className="form-control" 
                                value={cv.langname} onChange={e=> setCv({...cv, langname: e.target.value})} >
                                    <option>French</option>
                                    <option selected>English</option>
                                </select>
                        </div>
                        <div className="col-lg-6 text-left">
                                <label>Level*</label>
                                <select type="text" className="form-control" 
                                value={cv.langlevel} onChange={e=> setCv({...cv, langlevel: e.target.value})}>
                                    <option selected>B2</option>
                                    <option>C1</option>
                                    <option>C2</option>
                                    <option selected>_</option>
                                </select>
                        </div>
                        </div>
                        <br/>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3>
                            ✅ 2
                            </h3>
                       </div>
                        <div className="col-lg-6 text-left">
                                <label>Name*</label>
                                <select className="form-control" 
                                value={cv.langnameTwo} 
                                onChange={e=> setCv({...cv, langnameTwo: e.target.value})}>
                                    <option selected>French</option>
                                    <option>English</option>
                                </select>
                        </div>
                        <div className="col-lg-6 text-left">
                                <label>Level*</label>
                                <select type="text" className="form-control" value={cv.langlevelTwo} 
                                onChange={e=> setCv({...cv, langlevelTwo: e.target.value})}                                                                >
                                    <option selected>B2</option>
                                    <option>C1</option>
                                    <option>C2</option>
                                </select>
                        </div>
                        </div>
                    <hr/>
                     <h3>Skills</h3>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                                <label>skills*</label>
                                <input type="text"className="form-control"
                                ></input>
                        </div>
                    </div>
                    {/* <div className="row col-lg-10 mx-auto">
                        <MultiSelect options={options} displayvalue="title" />
                    </div> */}
                    <br/><hr/>
                    <div className="row col-lg-10 mx-auto">
                            <button className="btn btn-primary btn-block">Create</button>
                    </div> 
                    </form>
                    <br/>
                    <a href="#" className="card-link">Card link</a>
                </div>
                </div>
        </div>
      : 
      <PDF 
      phone={cv.phone} about={cv.about} linkedin={cv.linkedin} university={cv.university} universityYear={cv.universityYear}
      universityLoc={cv.universityLoc} school={cv.school} schoolLoc={cv.schoolLoc} schoolYear={cv.schoolYear} 
      educExpyear={cv.educExpyear} educExpdescription={cv.educExpdescription} educExptitleTwo={cv.educExptitleTwo} 
      educExpyearTwo={cv.educExpyearTwo} educExpdescriptionTwo={cv.educExpdescriptionTwo} techExptitle={cv.techExptitle} 
      techExpinstOrg={cv.techExpinstOrg} techExpyear={cv.techExpyear} techExpdescription={cv.techExpdescription} 
      techExplocation={cv.techExplocation} techExptitleTwo={cv.techExptitleTwo} techExpinstOrgTwo={cv.techExpinstOrgTwo} 
      techExpyearTwo={cv.techExpyearTwo} techExpdescriptionTwo={cv.techExpdescriptionTwo} techExplocationTwo={cv.techExplocationTwo}
      langname={cv.langname} langlevel={cv.langlevel} langnameTwo={cv.langnameTwo} langlevelTwo={cv.langlevelTwo} skills={skills}
      
      />
  
}
          
        </>
        );
};

//for redux actions
PostCv.propTypes= {
    addCv: PropTypes.func.isRequired,
  };
  
  export default connect(null, {addCv}) (PostCv);