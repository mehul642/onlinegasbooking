import React, {Component } from "react";
import signup from './Services/signup'
import Navbarlogin from './Navbarlogin';




class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            firstNameError: '',
            lastName: '',
            lastNameError: '',
            address: '',
            addressError: '',
            username: '',
            usernameError: '',
            password: '',
            passwordError: '',
            mobileNumber: '',
            mobileNumberError: '',
            email: '',
            emailError: ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    validate = () => {
        const re = /^[A-z\b]+$/;
        const re1 = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        // const re2 = /^[7|8|9][\\d]{9}+$/;
        const reg = /^[0]?[789]\d{9}$/;

        let firstNameError = "", lastNameError = "", addressError = "", usernameError = "", passwordError = "", mobileNumberError = "", emailError = ""

        if (!re.test(this.state.firstName)) {
            firstNameError = 'Enter only alphabet'
        }

        if (this.state.firstName.length < 3) {
            firstNameError = 'minimum length of first name is 3'
        }
        if (firstNameError) {
            this.setState({ firstNameError })
            return false
        }
        if (!re.test(this.state.lastName)) {
            lastNameError = "Enter only alphabet"
        }

        if (this.state.lastName.length < 3) {
            lastNameError = 'minimum length of last name is 3'
        }
        if (lastNameError) {
            this.setState({ lastNameError })
            return false
        }
        if (this.state.address.length < 8) {
            addressError = 'minimum length is 8'
        }
        if (addressError) {
            this.setState({ addressError })
            return false
        }
        if (!re.test(this.state.username)) {
            usernameError = 'username should be string'
        }
        if (this.state.username.length < 4) {
            usernameError = 'minimum username length should be 4'
        }
        if (usernameError) {
            this.setState({ usernameError })
            return false
        }
        if (this.state.password.length < 4) {
            passwordError = 'minimum password length should be 4'
        }
        if (passwordError) {
            this.setState({ passwordError })
            return false
        }
        if (!reg.test(this.state.mobileNumber)) {
            mobileNumberError = 'Enter valid mobile number'
        }
        if (mobileNumberError) {
            this.setState({ mobileNumberError })
            return false
        }
        if (!re1.test(this.state.email)) {
            emailError = 'Enter valid email'
        }
        if (emailError) {
            this.setState({ emailError })
            return false
        }




        return true
    }

    submitHandler = (event) => {
        this.setState({ firstNameError: "" })
        this.setState({ lastNameError: "" })
        this.setState({ addressError: "" })
        this.setState({ usernameError: "" })
        this.setState({ passwordError: "" })
        this.setState({ mobileNumberError: "" })
        this.setState({ emailError: "" })

        event.preventDefault()
        console.log(this.state)
        const isValid = this.validate()
        if (isValid) {
            signup.addUser(this.state)
                .then(response => {
                    console.log(response);
                    alert("User Added Successfully")
                })
                .catch(error => {
                    console.log(error);
                })

        }
    }
    render() {

        const { firstName, lastName, address, username, password, mobileNumber, email } = this.state

        return (
<div>
    <Navbarlogin/>
<div className="outer">
    <div className="inner">
            <div>
                <form onSubmit={this.submitHandler}>
                    <h3>Create A New Account</h3>

                    <div className="form-group">
                        {/* <label>First Name</label> */}
                        <input type="text"
                            className="form-control"
                            placeholder="Enter First-Name"
                            name="firstName"
                            value={firstName} onChange={this.changeHandler} required />
                    </div>
                    <div style={{ color: 'red' }} >{this.state.firstNameError}</div>
                    <br />
                    <div className="form-group">
                        {/* <label>Last name</label> */}
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Last-Name"
                            name="lastName"
                            value={lastName} onChange={this.changeHandler} required />
                    </div>
                    <div style={{ color: 'red' }} >{this.state.lastNameError}</div>
                    <br />
                    <div className="form-group">
                        {/* <label>Address</label> */}
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Address"
                            name="address"
                            value={address} onChange={this.changeHandler} required />
                    </div>
                    <div style={{ color: 'red' }} >{this.state.addressError}</div>
                    <br />
                    <div className="form-group">
                        {/* <label>Username</label> */}
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Username"
                            name="username"
                            value={username} onChange={this.changeHandler} required />
                    </div>
                    <div style={{ color: 'red' }} >{this.state.usernameError}</div>
                    <br />
                    <div className="form-group">
                        {/* <label>Password</label> */}
                        <input type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            name="password"
                            value={password} onChange={this.changeHandler} required />
                    </div>
                    <div style={{ color: 'red' }} >{this.state.passwordError}</div>
                    <br />
                    <div className="form-group">
                        {/* <label>Mobile Number</label> */}
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Mobile Number"
                            name="mobileNumber"
                            value={mobileNumber} onChange={this.changeHandler} required />
                    </div>
                    <div style={{ color: 'red' }} >{this.state.mobileNumberError}</div>
                    <br />
                    <div className="form-group">
                        {/* <label>Email</label> */}
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Email"
                            name="email"
                            value={email} onChange={this.changeHandler} required />
                    </div>
                    <div style={{ color: 'red' }} >{this.state.emailError}</div>
                    <br />
                    <button type="submit" className="btn btn-dark btn-lg btn-block">SignUp</button>
                    <b className="text-danger" id="error"></b>
                    <p className="forgot-password text-right h5">
                        Already Registered  <a href="/sign-in" >Log-in?</a>
                    </p>
                </form>
            </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>
</div>
        );
    }
}

export default SignUp;