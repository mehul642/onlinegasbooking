import React, {Component } from "react";
import axios from 'axios';
import surrendercylinder from './Services/surrendercylinder'
import './login.css'
import Navbar from './Navbar'

class SurrenderCylinder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            
            surrenderDate: '',
            firstname:'',
            lastname: '',
            customerid :''
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        surrendercylinder.addUser(this.state)
            .then(response => {
                console.log(response);
                alert("Cylinder Added Successfully")
            })
            .catch(error => {
                console.log(error);
            })

    }

    render(){

        const {
        surrenderDate,
        firstname,
        lastname,
        customerid } = this.state

return(
    <div>
        <Navbar />

    <div className="outer">
    <div className="inner">
        <div>
        <form onSubmit={this.submitHandler}>
            <h3> Surrender Cylinder</h3>

            <div className="form-group">
                <label> Surrender Date</label>
                <input type="text" 
                    className="form-control" 
                    placeholder="Surrender Date"
                    name="surrenderDate"
                    value={surrenderDate} onChange={this.changeHandler} required/>
            </div>
            <br/>
            <div className="form-group">
                <label>First Name</label>
                <input type="text" 
                    className="form-control" 
                    placeholder="First Name"
                    name="firstname"
                    value={firstname} onChange={this.changeHandler} />
            </div>
            <br/>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" 
                    className="form-control" 
                    placeholder="Last Name" 
                    name="lastname"
                    value={lastname} onChange={this.changeHandler}/>
            </div>
            <br/>
            <div className="form-group">
                <label>Customer Id</label>
                <input type="text" 
                    className="form-control"
                    placeholder="Customer Id" 
                    name="customerid"
                    value={customerid} onChange={this.changeHandler}/>
            </div>
            <br/>
            <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
            <b className="text-danger" id="error"></b>
        </form>
        
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        </div>
        </div>
    );
}
}

export default SurrenderCylinder;