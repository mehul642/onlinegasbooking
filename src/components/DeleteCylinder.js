import React, {Component } from "react";
import NavbarAdmin from './NavbarAdmin';

class DeleteCylinder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cylinderId:''
        }
        }

        changeHandler = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        
        

        
        delete = (event) => {
            event.preventDefault()
            
                fetch('http://localhost:8080/cylinder/'+this.state.cylinderId,
                {
                    method: "DELETE",
                }) .then(response => {
                    console.log('response',response.ok);
                    if(response.ok==false)
                    alert("Oops! Something went wrong. Please make sure to provide your correct details")
                    else
                    alert("Cylinder Delete Successfully")
                })
                .catch(error => {
                    console.log(error);
                })
            }
         

       
render(){
    const {
        cylinderId
         } = this.state
    return(
        <div>
        <NavbarAdmin/>
        <div className="outer">
    <div className="inner">
        <div>
        <form onSubmit={this.delete}>
            <h3>Delete Cylinder</h3>
             
            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter Cylinder Id"
                    name="cylinderId"
                    value={cylinderId} onChange={this.changeHandler} required/>
            </div>
           
            <br/>
            
            <button type="submit" className="btn btn-dark btn-lg btn-block">Delete</button>
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

export default DeleteCylinder;