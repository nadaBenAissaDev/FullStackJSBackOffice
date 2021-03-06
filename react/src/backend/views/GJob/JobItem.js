import React, { useState } from 'react';
// reactstrap components
import {
    Badge,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media
  } from "reactstrap";
  import {Link,useHistory } from 'react-router-dom' ;
  import PropTypes from 'prop-types';
  import { connect } from 'react-redux';
  import {deactivateJob} from '../../../actions/job';
  import {activateJob} from '../../../actions/job';
  import {deleteJob} from '../../../actions/job';
  // import {Button, ButtonToolBar} from 'react-bootstrap';
  import Popup from './Popup';
import PostJob from './PostJob';
import JobItemDetails from './JobItemDetails';

const JobItem = ({
    job: { _id, nbrApplied, title, location, description, salary, studyLevel, experience,activate, contractType, company, user, likes, comments, requirements, createdAt, skills  }
,deactivateJob, activateJob, deleteJob}) => {
  const history = useHistory();
  const [openPopup, setOpenPopup] = useState(false);
  
  const deactivate = async id =>{
    deactivateJob(id);
  }  
  const actJob = (id) => {
    activateJob(id);
  }
  const Delete = (id) => {
    deleteJob(id);
  }

    return (
        <>
          <tr>
          <th scope="row">
                      <Media className="align-items-center">
                       
                        <Media>
                          <span className="mb-0 text-sm">
                          {title}
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>{salary} dt</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        {contractType}
                      </Badge>
                    </td>      
                    <td>
                    {location}
                    </td>
                    <td>
                        {activate === 1 ? <p>✔</p>: <p>x</p>}
                    
                    </td>
                 <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem onClick= {() =>setOpenPopup(true)}>
                            <Link>Details</Link>
                          </DropdownItem>
                          <DropdownItem onClick={() => Delete(_id)}><Link>Delete</Link></DropdownItem>
                          {activate ===1 ? <DropdownItem><Link to="/admin/Ranking"> Ranking </Link></DropdownItem>: <p></p>}
                          {activate === 1 ? <DropdownItem onClick={() => deactivate(_id)}><Link>Deactivate</Link></DropdownItem>
                          :
                          <DropdownItem onClick={() => actJob(_id)}><Link>Activate</Link></DropdownItem>}
                                          
                        </DropdownMenu>
                        <Popup 
                      title ="Job Details"
                      detail = "Would you like to see more details?"
                      id = {_id}
                      openPopup ={openPopup} 
                      setOpenPopup={setOpenPopup}>
                      </Popup>
                      </UncontrolledDropdown>
            
                    </td>
          </tr>           
        </>
    );
};
JobItem.propTypes = {
    job: PropTypes.object.isRequired,
    deactivateJob: PropTypes.func.isRequired,
    deleteJob: PropTypes.func.isRequired,
    activateJob: PropTypes.func.isRequired
    //auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
   //auth: state.auth
});
export default connect(mapStateToProps, {deactivateJob, activateJob, deleteJob}) (JobItem);