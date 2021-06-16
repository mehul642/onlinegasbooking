import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginService from './Services/login'
import './login.css'
import Navbarlogin from './Navbarlogin';


const validateForm = (errors) => {
    let valid = true;
    //Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };



class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loginres: "",
        username: "",
        password: "",
        rememberMe: false,
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
      this.loginUser = this.loginUser.bind(this);
    }
  
    handleChange(e) {
      e.preventDefault();
      const { name, value } = e.target;
      let errors = this.state.errors;
  
     
      this.setState({ errors, [name]: value });
    }
  
    handleCheckBoxChange = (event) => {
      const input = event.target;
      const value = input.type === "checkbox" ? input.checked : input.value;
      this.setState({ [input.name]: value });
    };
  
    componentDidMount() {
      const rememberMe = localStorage.getItem("rememberMe") === "true";
      const id = rememberMe ? localStorage.getItem("id") : "";
      this.setState({ id, rememberMe });
    }
  
    loginUser = (e) => {
      e.preventDefault();
  
      if(validateForm(this.state.errors)){
        sessionStorage.setItem("username", this.state.username);
        //sessionStorage.setItem("role", this.state.choice);
    
        localStorage.setItem("rememberMe", this.state.rememberMe);
        localStorage.setItem("username", this.state.rememberMe ? this.state.username : "");
    
        //if (1) {
          LoginService.loginUser(this.state.username, this.state.password).then(
            (res) => { 
              this.setState({ loginres: res.data });
              if (this.state.loginres === "Login Successful.") {
                this.props.history.push('/admin');
              } else {
                alert(this.state.loginres);
                window.location = "/sign-up";
              
              }
          }
        
          );

          
      
  
      }
        /*if (this.state.choice === "engineer") {
          LoginService.loginUser(this.state.id, this.state.password, 2).then(
            (res) => {
              this.setState({ loginres: res.data });
              if (this.state.loginres === "Login successfull") {
                this.props.history.push(`/homepage-engineer/${this.state.id}`);
              } else {
                alert(this.state.loginres);
                window.location.reload(false);
              }
            }
          );
        }
    
        if (this.state.choice === "admin") {
          LoginService.loginUser(this.state.id, this.state.password, 3).then(
            (res) => {
              this.setState({ loginres: res.data });
              if (this.state.loginres === "Login successfull") {
                this.props.history.push(`/homepage-admin/${this.state.id}`);
              } else {
                alert(this.state.loginres);
                window.location.reload(false);
              }
              console.log(this.state.loginres);
            }
          );
        }
      }*/
      /*else{
          alert("please enter correct credentials")
      }*/
      
    };
  
    /*register = (event) => {
      event.preventDefault();
      if (this.state.choice === "client") {
        this.props.history.push("/register-client");
      }
    };*/
  
    changeIdHandler = (event) => {
      this.setState({ id: event.target.value });
    };
  
    changePasswordHandler = (event) => {
      // this.showErrorPW();
      this.setState({ password: event.target.value });
    };
    changeChoiceHandler = (event) => {
      this.setState({ choice: event.target.value });
    };

    render() {
        const {errors} = this.state;
        return (
          <div>
<Navbarlogin/>
            <div className="outer">
            <div className="inner">
            <form onSubmit={this.loginUser} noValidate>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" 
                        name="username"
                    value={this.state.username}
                    onChange={this.handleChange}/>
                    
                </div>
                <br/>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                    
                </div>
                <br/>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" 
                        name="rememberMe"
                        checked={this.state.rememberMe}
                        onChange={this.handleCheckBoxChange}/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                {/* <p className="forgot-password text-right">
                    New Customer <a href="/sign-up">Sign up?</a>
                </p> */}
            </form>
            </div>
            <br/>
            <br/>
            <br/>
            </div>
            </div>
            );
        }
    }

    export default LoginPage;