import React, {Component } from "react";
import NavbarAdmin from './NavbarAdmin';


class UpdateCylinder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cylinderId: '',
            type:'',
            weight:'',
             strapColor:'',
            price :'',
            

        }
    }


   

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

   

    update = (event) => {
        event.preventDefault()
        fetch('http://localhost:8080/cylinder/update',
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
        alert("Cylinder Updated Successfully")
    })
    .catch(error => {
        console.log(error);
    })

    }

   

    render(){

        const {
            cylinderId,
            type,
            weight,
            strapColor,
            price,
            posts
             } = this.state


return(
<div>
        <NavbarAdmin/>
    <div className="outer">
    <div className="inner">
        <div>
        <form onSubmit={this.update}>
            <h3>Update Cylinder</h3>
             
            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="Cylinder Id"
                    name="cylinderId"
                    value={cylinderId} onChange={this.changeHandler} required/>
            </div>
            <br/>

            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="Type"
                    name="type"
                    value={type} onChange={this.changeHandler} required/>
            </div>
            <br/>

            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="Weight"
                    name="weight"
                    value={weight} onChange={this.changeHandler} required/>
            </div>
            <br/>

            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="strapColor"
                    name="strapColor"
                    value={strapColor} onChange={this.changeHandler} required/>
            </div>
            <br/>

            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="Price"
                    name="price"
                    value={price} onChange={this.changeHandler} required/>
            </div>
            <br/>

           
            <button type="submit" name="bill" className="btn btn-dark btn-lg btn-block">Update</button>
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

export default UpdateCylinder;