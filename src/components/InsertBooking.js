import React, {Component } from "react";
import axios from 'axios';
import moment from "moment";
import insertbooking from "./Services/insertbooking";
import "./login.css"


class InsertBooking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customerId: '',
            customerIdError:"",
            cylinderId:'select',
            cylinderIdError:"",
            bookingDate: moment().format("YYYY-MM-DD"),
            bill :'',
            posts:[],
            cust: []

        }
    }


    componentDidMount(){
        axios.get('http://localhost:8080/cylinder/view')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
        
    }


    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    changeHandlerCylinder = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            console.log('calling bill ', this.setBill())})   
    }

    setBill(){
        const sd = this.state.posts
        {sd.map(post => (
             post.cylinderId == this.state.cylinderId ? this.setState({
                bill : post.price},() => {
                    console.log('callback ', this.state.bill)
                }
                ) : 0
            ))}
        
    }

    validate = () => {
        const re = /^[0-9\b]+$/;
        let customerIdError="",cylinderIdError=""
        if(!re.test(this.state.customerId))
        {
            customerIdError = 'Customer Id can only contain digits'
        }
        
        if(customerIdError){
            this.setState({customerIdError})
            return false
        }

        if(this.state.cylinderId === "select")
        {
            cylinderIdError = 'Please select a Cylinder'
        }

        if(cylinderIdError){
            this.setState({cylinderIdError})
            return false
        }
        return true
    }

    submitHandler = (event) => {
        this.setState({customerIdError: ""})
        this.setState({cylinderIdError: ""})
        event.preventDefault()
        console.log(this.state)
        const isValid = this.validate()
            if(isValid)
            {
        insertbooking.addUser(this.state)
            .then(response => {
                console.log(response.data.gasBookingId);
                if(response.ok==false)
                alert("Oops! Something went wrong. Please make sure to provide your correct details")
                else
                alert("Booking Added Successfully,Your Gas Booking Id is "+response.data.gasBookingId+". Please make a note of this!")
            })
            .catch(error => {
                console.log(error);
            })
        }

    }

   

    render(){

        const {
            customerId,
            cylinderId,
            bill,
            posts
             } = this.state


return(

        
        <div>
        <form onSubmit={this.submitHandler}>
            <h3>Book Cylinder</h3>
             
            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="Customer Id"
                    name="customerId"
                    value={customerId} onChange={this.changeHandler} required/>
            </div>
            <div style={{ color: 'red' }} >{this.state.customerIdError}</div>
            <br/>
            <div className="form-group">
            <label>
           Choose cylinder type:
          <select name="cylinderId" value={cylinderId} onChange={this.changeHandlerCylinder} required>
          <option value="select">--SELECT--</option>
          {posts.map(post => (
              
           <option value={post.cylinderId}> {post.type} Weight:{post.weight }Kgs Price:{ post.price }Rs</option>
    ))}
          </select>
        </label>
            </div>
            <div style={{ color: 'red' }} >{this.state.cylinderIdError}</div>
            <br/>
            <button type="submit" name="bill" className="btn btn-dark btn-lg btn-block">Book Now</button>
            <b className="text-danger" id="error"></b>
        </form>
        </div>
        
        
    );
}
}

export default InsertBooking;