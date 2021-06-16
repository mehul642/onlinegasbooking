import React, {Component } from "react";
import axios from 'axios';
import moment from "moment";

class UpdateBooking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customerId: '',
            customerIdError:"",
            gasBookingId:'',
            gasBookingIdError:"",
            cylinderId:'select',
            cylinderIdError:"",
            bookingDate: moment().format("YYYY-MM-DD"),
            bill :'',
            posts:[]

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
        let customerIdError="",cylinderIdError="",gasBookingIdError=""
        if(!re.test(this.state.customerId))
        {
            customerIdError = 'Customer Id can only contain digits'
        }
        
        if(customerIdError){
            this.setState({customerIdError})
            return false
        }

        if(!re.test(this.state.gasBookingId))
        {
            gasBookingIdError = 'Gas Booking Id can only contain digits'
        }
        
        if(gasBookingIdError){
            this.setState({gasBookingIdError})
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

    update = (event) => {
        this.setState({customerIdError: ""})
            this.setState({gasBookingIdError: ""})
            this.setState({cylinderIdError: ""})
        event.preventDefault()
        const isValid = this.validate()
        if(isValid)
        {
        fetch('http://localhost:8080/gasbooking/updatebooking',
    {
        method: "PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(this.state)
    }) .then(response => {
        console.log('response',response.ok);
        if(response.ok==false)
        alert("Oops! Something went wrong. Please make sure to provide your correct details")
        else
        alert("Booking Updated Successfully, Note that there might be a delay in delivering your cylinder because you made some changes to your booking!")
    })
    .catch(error => {
        console.log(error);
    })
        }
    }

   

    render(){

        const {
            customerId,
            gasBookingId,
            cylinderId,
            bill,
            posts
             } = this.state


return(

        
        <div>
        <form onSubmit={this.update}>
            <h3>Update Booking</h3>
             
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
                <input type="text" 
                    className="form-control" 
                    placeholder="Gas Booking Id"
                    name="gasBookingId"
                    value={gasBookingId} onChange={this.changeHandler} required/>
            </div>
            <div style={{ color: 'red' }} >{this.state.gasBookingIdError}</div>
            <br/>

            <div className="form-group">
            <label>
           Choose cylinder type
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
            <button type="submit" name="bill" className="btn btn-dark btn-lg btn-block">Update</button>
            <b className="text-danger" id="error"></b>
        </form>
        </div>
        
        
    );
}
}

export default UpdateBooking;