import React, {Component } from "react";
import axios from 'axios';
import insertcylinder from './Services/Insertcylinder'
import './login.css'
import NavbarAdmin from './NavbarAdmin';
import { Link } from "react-router-dom";

class InsertCylinder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            
            type: '',
            weight:'',
            strapColor: '',
            price :''
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
        insertcylinder.addUser(this.state)
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
        type,
        weight,
        strapColor,
        price  } = this.state

return(

    <div>
    <NavbarAdmin/>
    <div className="outer">
    <div className="inner">
        <div>
        <form onSubmit={this.submitHandler}>
            <h3>Insert Cylinder</h3>

            <div className="form-group">
                <label>Type of Cylinder</label>
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter Type"
                    name="type"
                    value={type} onChange={this.changeHandler} required/>
            </div>
            <br/>
            <div className="form-group">
                <label>Weight</label>
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter Weight"
                    name="weight"
                    value={weight} onChange={this.changeHandler} />
            </div>
            <br/>
            <div className="form-group">
                <label>Strap Color</label>
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter strap color" 
                    name="strapColor"
                    value={strapColor} onChange={this.changeHandler}/>
            </div>
            <br/>
            <div className="form-group">
                <label>Price</label>
                <input type="text" 
                    className="form-control"
                    placeholder="Enter Price" 
                    name="price"
                    value={price} onChange={this.changeHandler}/>
            </div>
            <br/>
            <button  type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
            
             <Link to='/viewcylinder'>
            <button  align="center"  className="btn btn-dark btn-lg btn-block">view</button>
            </Link>
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

export default InsertCylinder;