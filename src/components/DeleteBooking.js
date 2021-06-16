import React, {Component } from "react";

class DeleteBooking extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gasBookingId: '',
            gasBookingIdError:""
        }
        }

        changeHandler = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        
        

        validate = () => {
            const re = /^[0-9\b]+$/;
            let gasBookingIdError=""
            if(!re.test(this.state.gasBookingId))
            {
                gasBookingIdError = 'Gas Booking Id can only contain digits'
            }
            if(gasBookingIdError){
                this.setState({gasBookingIdError})
                return false
            }
            return true
        }
        delete = (event) => {
            this.setState({gasBookingIdError: ""})
            event.preventDefault()
            const isValid = this.validate()
            if(isValid)
            { 
                fetch('http://localhost:8080/gasbooking/deletebooking/'+this.state.gasBookingId,
                {
                    method: "DELETE",
                }).then(response => {
                    console.log('response',response.ok);
                    if(response.ok==false)
                    alert("Oops! Something went wrong. Please make sure to provide your correct details")
                    else
                    alert("Booking Cancelled Successfully")
                })
                .catch(error => {
                    console.log(error);
                })
            }
         

        }
render(){
    const {
        gasBookingId
         } = this.state
    return(
        <div>
        <form onSubmit={this.delete}>
            <h3>Cancel Booking</h3>
             
            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter Gas Booking Id"
                    name="gasBookingId"
                    value={gasBookingId} onChange={this.changeHandler} required/>
            </div>
            <div style={{ color: 'red' }} >{this.state.gasBookingIdError}</div>
            <br/>
            
            <button type="submit" className="btn btn-dark btn-lg btn-block">Cancel</button>
            <b className="text-danger" id="error"></b>
        </form>
        </div>
    );
}
}

export default DeleteBooking;