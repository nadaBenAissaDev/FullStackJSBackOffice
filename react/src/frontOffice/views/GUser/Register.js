import React, { useState } from 'react';
import { Link, Redirect,useHistory, BrowserRouter as Router, Route } from "react-router-dom";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bg from '../../assets/images/bg_1.jpg';
import NavbarLogReg from 'frontOffice/Layouts/NavbarLogReg';
//redux
import { register } from '../../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';

const Register = ({register, isAuth}) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password2: '',
      firstnameError: '',
      lastnameError: '',
      emailError: '',
      passwordError: '',
      password2Error:'',
      // verifyRecap: false
    });
    const[recap,setRecap]=useState({
      valRecap: true
    });
     const {firstname,lastname,email,password,password2} = formData;
     const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value}); //using onChange for every field
    
    //verify if the recapcha is checked
    const verifyCallback=(response)=>{
        if(response){
          //  setRecap({...recap, valRecap: true})
          //  console.log(recap)
          //  if(recap.valRecap === true)
              return true;           
        }
        return false;
    }
    const recapchaLoaded=()=>{
        console.log("recaptcha successfully loaded");
    }
    const validateForm=()=>{
      let firstnameError = '';
      let lastnameError = '';
      let emailError= '';
      let passwordError= '';
      let password2Error='';

      if(!formData.firstname){
        firstnameError = "First name can not be blank!"
      }
      if(!formData.lastname){
        lastnameError = "Last name can not be blank!"
      }

      if(formData.password < 5) {
        passwordError = 'Password more than 5 letter!'
      }
      // else if(!formData.password.includes('[a..z]')){
      //   passwordError = 'Password includes letters!'
      // }

      if (formData.password != formData.password2){
        password2Error = 'Confirm password should be confirm with password!'
      }

       if(!formData.email.includes('@')){
        emailError = 'Invalid Email';
      }
      if(emailError || firstnameError || lastnameError || passwordError || password2Error){
        //if not valid remove data and set to erro
        setFormData({...formData, emailError, email: "", firstnameError, firstname: "", 
        lastnameError, lastname: "", passwordError, password: "", password2Error, password2:""});
        return false;
      }
      return true;
    }
    const onSubmit = async e =>{
        e.preventDefault();
        const isValidForm = validateForm();
        // const isValidRecap = verifyCallback();
        if (isValidForm && recap.valRecap === false){
          alert("Please verify that you are a human");
        }
        else if (isValidForm && recap.valRecap === true){
          alert("success")
          console.log(formData);
          register({firstname,lastname, email,password});   
        }      
    }
      //Redirect if registed
  if(isAuth){
    history.push('/BrowseJob');
  }
      return (
        <>
        
        <div className="limiter">
        <NavbarLogReg/>

        <div className="container-login100" style={{ backgroundImage: `url(${bg})`}}>      
          <div className="wrap-login100">
            <form className="login100-form validate-form" 
            onSubmit={e => onSubmit(e)}>
    
              <span className="login100-form-title p-b-34 p-t-27">
                Welcome!
              </span>
              <br/><br/>
              <div className="wrap-input100 validate-input" data-validate = "Enter first name">
                <input className="input100" type="text" name="firstname" value={firstname} 
                placeholder="First Name" onChange={e=> onChange(e)}/>
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
              </div>
              {formData.firstnameError ?<div style={{color: "orange", fontSize: 14}}>{formData.firstnameError}</div>
              : null }

              <div className="wrap-input100 validate-input" data-validate = "Enter last name">
                <input className="input100" type="text" name="lastname" value={lastname}  
                placeholder="Last Name" onChange={e=> onChange(e)}/>
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
              </div>
              {formData.lastnameError ?<div style={{color: "orange", fontSize: 14}}>{formData.lastnameError}</div>
                : null}

              <div className="wrap-input100 validate-input" data-validate = "Enter Email">
                <input className="input100" type="text" name="email" placeholder="Email" value={email} onChange={e=> onChange(e)}/>
                <span className="focus-input100" data-placeholder="&#xf159;"></span>
              </div>
              {formData.emailError ?<div style={{color: "orange", fontSize: 14}}>{formData.emailError}</div>
              : null }<div className="wrap-input100 validate-input" data-validate="Enter password">
                <input className="input100" type="password" name="password" placeholder="Password" value={password} onChange={e=> onChange(e)}/>
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>
              {formData.passwordError ?<div style={{color: "orange", fontSize: 14}}>{formData.passwordError}</div>
              : null }<div className="wrap-input100 validate-input" data-validate="Enter password">
                <input className="input100" type="password" name="password2" placeholder="Confirm Password" value={password2} onChange={e=> onChange(e)}/>
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>
              {formData.password2Error ?<div style={{color: "orange", fontSize: 14}}>{formData.password2Error}</div>
                : null}
              
             <br/>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  SIGN UP
                </button>
              </div>
              <br/>
              <div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
              <Recaptcha
                sitekey="6LeEz7caAAAAAMveEusK2V6AWnDcuXXcXIfUy5AH
                "
                render="explicit"
                onloadCallback={recapchaLoaded}
                verifyCallback={verifyCallback}
              />
              </div>
              <br/>
            </form>
          </div>
          <br></br>
        </div>

      </div>
        </>
      

      );
    };
//for redux actions
Register.propTypes= {
  register: PropTypes.func.isRequired,
  isAuth: PropTypes.bool
};
const mapStateToProps = state => (
  {
    isAuth: state.auth.isAuthenticated
  }
);
export default connect(mapStateToProps, {register}) (Register);
