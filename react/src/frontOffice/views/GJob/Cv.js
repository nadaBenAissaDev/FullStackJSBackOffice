import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import PDF from './PDF';
const Cv = (props) => {
    let history = useHistory();
    const [personnalInfo,setpersonnalInfo]= useState({
        firstname: '',
        lastname:'',
        email: '',
        phone:'',
        linkedin:'',
        about:''
    });

    const [education,seteducation]= useState({
        university: '',
        universityYear:'',
        universityLoc: '',
        school:'',
        schoolYear:'',
        schoolLoc:'',
    });
    
    const onSubmit = async e =>{
        e.preventDefault();
        //console.log(personnalInfo, education)
                //new doc
        // var doc= new jsPDF('p','pt');
        // //add text
        // doc.text(20,20,'This is default text');
        // //set font pdf document
        // doc.setFont('courier');
        // //set font type
        // // doc.setFontType('normal');
        // doc.text(20,30,personnalInfo.lastname);
        // //save pdf
        // doc.save("nada.pdf");
        history.push({
            pathname: '/PDF',
            state: personnalInfo.firstname
            
          })

    }
    // const nada=[];
    // nada.push({})

    //jspdf generator function
    // const jsPdfGenerator =()=>{
    //     alert("nada");
    //     // //new doc
    //     // var doc= new jsPDF('p','pt');
    //     // //add text
    //     // doc.text(20,20,'This is default text');
    //     // //set font pdf document
    //     // doc.setFont('courier');
    //     // //set font type
    //     // // doc.setFontType('normal');
    //     // doc.text(20,30,'cccccc');
    //     // //save pdf
    //     // doc.save("nada.pdf");
    // }
    return (
        <>
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
                                 value={personnalInfo.firstname}  placeholder="firstName" onChange={e=> setpersonnalInfo({...personnalInfo, firstname: e.target.value})} required></input>
                            </div>
                            <div className="col-lg-3 text-left">
                                <label>Last Name*</label>
                                <input type="text" className="form-control"
                                value={personnalInfo.lastname}  placeholder="lastName" onChange={e=> setpersonnalInfo({...personnalInfo, lastname: e.target.value})} required></input>
                            </div>
                            <div className="col-lg-3 text-left">
                                <label>Email*</label>
                                <input type="email" className="form-control" 
                                value={personnalInfo.email}  placeholder="Email" onChange={e=> setpersonnalInfo({...personnalInfo, email: e.target.value})}
                                required></input>
                            </div>
                            <div className="col-lg-3 text-left">
                                <label>Mobile phone*</label>
                                <input type="phone" className="form-control"
                                value={personnalInfo.phone}  placeholder="Mobile phone" onChange={e=> setpersonnalInfo({...personnalInfo, phone: e.target.value})}
                                required></input>
                            </div>
                            <div className="col-lg-12 text-left">
                                <label>Linkedin*</label>
                                <input type="text" className="form-control" 
                                value={personnalInfo.linkedin}  placeholder="LinkedIn" onChange={e=> setpersonnalInfo({...personnalInfo, linkedin: e.target.value})} required></input>
                            </div>
                            <div className="col-lg-12 text-left">
                                <label>About You *</label>
                                <textarea rows="3" type="text" className="form-control" 
                                value={personnalInfo.about}  placeholder="About you" onChange={e=> setpersonnalInfo({...personnalInfo, about: e.target.value})}
                                required ></textarea>
                            </div>     
                        </div>
                    <br/>
                    <hr/>
                    {/* <h3>Education</h3>    
                        <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3>
                            ✅ 1
                            </h3>
                       </div>
                        <div className="col-lg-8 text-left">
                                <label>University*</label>
                                <input type="text" className="form-control" 
                                value={education.university}  placeholder="University" onChange={e=> seteducation({...education, university: e.target.value})}
                                required></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Year*</label>
                                <input type="date" className="form-control"
                                value={education.universityYear}  placeholder="University" onChange={e=> seteducation({...education, universityYear: e.target.value})}
                                required></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Location</label>
                                <input type="text" className="form-control" 
                                value={education.universityLoc}  placeholder="University" onChange={e=> seteducation({...education, universityLoc: e.target.value})}
                                required></input>
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
                                value={education.school}  placeholder="School" onChange={e=> seteducation({...education, school: e.target.value})}
                                required></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Year*</label>
                                <input type="date" className="form-control" 
                                value={education.schoolYear} onChange={e=> seteducation({...education, schoolYear: e.target.value})}
                                required></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Location</label>
                                <input type="text" className="form-control" 
                                value={education.schoolLoc}  placeholder="School location" onChange={e=> seteducation({...education, schoolLoc: e.target.value})}
                                required></input>
                        </div>
                        </div>
                    <br/>
                    <hr/> */}
                    {/* <h3>Technical Experience</h3>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3>
                            ✅ 1
                            </h3>
                       </div>
                        <div className="col-lg-4 text-left">
                                <label>Title*</label>
                                <input type="text" className="form-control" 
                                name="techExpTitle" value={techExpTitle}  placeholder="Title" onChange={e=> onChange(e)}
                                required></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Intitute/Organisation*</label>
                                <input type="text" className="form-control" 
                                name="techExpOrg" value={techExpOrg}  placeholder="Institute/Organisation" onChange={e=> onChange(e)}
                                required></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Year*</label>
                                <input type="date" name="name" className="form-control" 
                                name="techExpYear" value={techExpYear}  placeholder="Year" onChange={e=> onChange(e)}
                                required></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Location*</label>
                                <input type="text" className="form-control"
                                name="techExpLoc" value={techExpLoc}  placeholder="Location" onChange={e=> onChange(e)}
                                required></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Description*</label>
                                <textarea rows="3" type="text" className="form-control"
                                name="techExpDesc" value={techExpDesc}  placeholder="Description" onChange={e=> onChange(e)}                                 
                                required></textarea>
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
                                name="techExpTitleTwo" value={techExpTitleTwo}  placeholder="Institute/Organisation" onChange={e=> onChange(e)}
                                required></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Intitute/Organisation*</label>
                                <input type="text" className="form-control"
                                name="techExpOrgTwo" value={techExpOrgTwo}  placeholder="Institute/Organisation" onChange={e=> onChange(e)} 
                                required></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Year*</label>
                                <input type="date" className="form-control"
                                name="techExpYearTwo" value={techExpYearTwo} onChange={e=> onChange(e)}  
                                required></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Location*</label>
                                <input type="text" className="form-control"
                                name="techExpLocTwo" value={techExpLocTwo}  placeholder="Institute/Organisation" onChange={e=> onChange(e)}                                  
                                required></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Description*</label>
                                <textarea rows="3" type="text" className="form-control"
                                name="techExpDescTwo" value={techExpDescTwo}  placeholder="Description.." onChange={e=> onChange(e)}                                  
                                required></textarea>
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
                                name="educExpTitle" value={educExpTitle}  placeholder="Project title" onChange={e=> onChange(e)}                                  
                                required></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Year*</label>
                                <input type="date" className="form-control"
                                name="educExpYear" value={educExpYear} onChange={e=> onChange(e)}                                  
                                required></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Description*</label>
                                <textarea rows="3" type="text" className="form-control"
                                name="educExpDesc" value={educExpDesc}  placeholder="Description.." onChange={e=> onChange(e)}                                  
                                required></textarea>
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
                                name="educExpTitleTwo" value={educExpTitleTwo}  placeholder="Project title" onChange={e=> onChange(e)}                                  
                                required></input>
                        </div>
                        <div className="col-lg-4 text-left">
                                <label>Year*</label>
                                <input type="text" className="form-control"
                                name="educExpTitleTwo" value={educExpTitleTwo}  placeholder="Project title" onChange={e=> onChange(e)}                                  
                                required></input>
                        </div>
                        <div className="col-lg-12 text-left">
                                <label>Description*</label>
                                <textarea rows="3" type="text" className="form-control"
                                name="educExpTitleTwo" value={educExpTitleTwo}  placeholder="Project title" onChange={e=> onChange(e)}                                  
                                required></textarea>
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
                                <select className="form-control" name="langName" value={langName} onChange={e=> onChange(e)}>
                                    <option>French</option>
                                    <option selected>English</option>
                                </select>
                        </div>
                        <div className="col-lg-6 text-left">
                                <label>Level*</label>
                                <select type="text" className="form-control" name="langLevel" value={langLevel} onChange={e=> onChange(e)}>
                                    <option selected>B2</option>
                                    <option>C1</option>
                                    <option>C2</option>
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
                                <select className="form-control" name="langNameTwo" value={langNameTwo} onChange={e=> onChange(e)}>
                                    <option selected>French</option>
                                    <option>English</option>
                                </select>
                        </div>
                        <div className="col-lg-6 text-left">
                                <label>Level*</label>
                                <select type="text" className="form-control" name="langLevelTwo" value={langLevelTwo} onChange={e=> onChange(e)}>
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
                                <input type="text" name="name" className="form-control" required></input>
                        </div>
                    </div> */}
                    <br/><hr/>
                    <div className="row col-lg-10 mx-auto">
                            <button className="btn btn-primary btn-block">Create</button>
                    </div> 
                    </form>
                    <br/>
                    <a href="#" className="card-link">Card link</a>
                    {/* <a className="card-link" onClick={()=>jsPdfGenerator}>Download Your CV</a> */}
                    {/* <button onClick={()=>jsPdfGenerator} className="btn btn-primary">create</button> */}
                    <button className="btn btn-primary">create</button>
                    {/* <PDF title={personnalInfo.firstname}/> */}
                </div>
                </div>
        </div>
        <div >
            <div className="container col-lg-8 mx-auto text-center">
                {/* <div className="card animated">
                <div className="card-body">
                    <h3 className="card-title">Personnal info</h3>
                    <hr/>
                </div>
                <form>

                </form>
                </div> */}
            </div>
        </div>
        </>
        );
};

export default Cv;