import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from 'react-to-pdf';
import DesignCvPDF from './DesignCvPDF';
const ref= React.createRef();

const PDF = (props) => {
    return (
        <>
        <div className="col-lg-11 mx-auto text-center mt-5" ref={ref}>
            <div className="card">
                <div className="card-body">
                <div id="doc2" className="yui-t7">
	                <div id="inner">
                        <div id="hd">
                            <div className="yui-gc">
                                <div className="yui-u first">
                                    <h1>Nada ben aissa</h1>
                                </div>

                                <div className="yui-u">
                                    <div className="contact-info">
                                        <h3><a href="mailto:name@yourdomain.com">name@yourdomain.com</a></h3>
                                        <h3>(+216){props.phone}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="bd">
                            <div id="yui-main">
                                <div className="yui-b">

                                    <div className="yui-gf">
                                        <div className="yui-u first">
                                            <h2>Profile</h2>
                                        </div>
                                        <div className="yui-u">
                                            <p className="enlarge">
                                                {props.about} 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="yui-gf">
                                    <div className="yui-gf last">
                                        <div className="yui-u first">
                                            <h2>Education</h2>
                                        </div>
                                        <div className="yui-u">
                                            <ul>
                                                <li>
                                                <h2>{props.university} | <strong>{props.universityYear}</strong></h2>
                                                </li>
                                                <h3>{props.universityLoc}</h3>
                                                <li>
                                                <h2>{props.school} | <strong>{props.schoolYear}</strong></h2>
                                                </li>
                                                <h3>{props.schoolLoc}</h3>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                    
                                    <div className="yui-gf">
                    
                                        <div className="yui-u first">
                                            <h2>Technical Experience</h2>
                                        </div>

                                        <div className="yui-u">

                                            <div>
                                                <h2>{props.techExptitle}</h2>
                                                <h3>{props.techExpyear}</h3>
                                                <h3>{props.techExpinstOrg}</h3>
                                                <h4>{props.techExplocation}</h4>
                                                <p>{props.techExpdescription}</p>
                                            </div>
                                                                                        
                                            <div className="jocvb">
                                                <h2>{props.techExptitleTwo}</h2>
                                                <h3>{props.techExpyearTwo}</h3>
                                                <h3>{props.techExpinstOrgTwo}</h3>
                                                <h4>{props.techExplocationTwo}</h4>
                                                <p>{props.techExpdescriptionTwo}</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="yui-gf">
                    
                                    <div className="yui-u first">
                                        <h2>Educationnal Experience</h2>
                                    </div>

                                    <div className="yui-u">

                                        <div>
                                            <h2>{props.educExptitle}</h2>
                                            <h3>{props.educExpyear}</h3>
                                            <h4>{props.techExplocation}</h4>
                                            <p>{props.educExpdescription}</p>
                                        </div>
                                                                                    
                                        <div className="jocvb">
                                            <h2>{props.techExptitleTwo}</h2>
                                            <h3>{props.educExpyearTwo}</h3>
                                            <h4>{props.techExplocationTwo}</h4>
                                            <p>{props.educExpdescriptionTwo}</p>
                                        </div>

                                    </div>
                                </div>
                        

                                    <div className="yui-gf">
                                        <div className="yui-u first">
                                            <h2>Language</h2>
                                        </div>
                                        <div className="yui-u">

                                        <div className="talent">
                                                    <h2>{props.langname}</h2>
                                                    <p>{props.langlevel}</p>
                                                </div>
                                                <div className="talent">
                                                    <h2>{props.langnameTwo}</h2>
                                                    <p>{props.langlevelTwo}</p>
                                                </div>

                                        </div>
                                    </div>

                                    <div className="yui-gf">
                                        <div className="yui-u first">
                                            <h2>Skills</h2>
                                        </div>
                                        <div className="yui-u">
                                            <ul className="talent">
                                                
                                                <li></li>
                                                <li>CSS</li>
                                                <li className="last">Javascript</li>
                                            </ul>

                                            <ul className="talent">
                                                <li>Jquery</li>
                                                <li>PHP</li>
                                                <li className="last">CVS / Subversion</li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>

                        <div id="ft">
                            <p>Jonathan Doe &mdash; <a href="mailto:name@yourdomain.com">name@yourdomain.com</a> &mdash; {props.phone}</p>
                        </div>

	                </div>

                </div>
                </div>
        </div>
        </div>
        <Pdf targetRef={ref} filename="CV.pdf">
            { ({toPdf}) => <Link
            onClick={toPdf}> Download your Resume</Link>  
              }
        </Pdf>
        </>
    );
};

// export default PDF;
// import React from 'react';

// const PDF = (props) => {
//     return (

//         <div>
//             <p>nada</p>
//             {props.firstname}
//         </div>
//     );
// };

 export default PDF;