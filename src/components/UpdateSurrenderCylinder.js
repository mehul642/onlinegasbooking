import React, {Component } from "react";



class UpdateSurrenderCylinder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            surrenderId:'',
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

   

    update = (event) => {
        event.preventDefault()
        fetch('http://localhost:8080/surrendercylinder/update',
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
            surrenderId,
            surrenderDate,
        firstname,
        lastname,
        customerid,
            posts
             } = this.state


return(

    <div className="outer">
    <div className="inner">
        <div>
        <form onSubmit={this.update}>
            <h3>Update Surrender Cylinder</h3>
             
            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="Surrrender Cylinder Id"
                    name="surrenderId"
                    value={surrenderId} onChange={this.changeHandler} required/>
            </div>
            <br/>

            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="First Name"
                    name="firstname"
                    value={firstname} onChange={this.changeHandler} required/>
            </div>
            <br/>

            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="Last Name"
                    name="lastname"
                    value={lastname} onChange={this.changeHandler} required/>
            </div>
            <br/>

            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="Customer Id"
                    name="customerid"
                    value={customerid} onChange={this.changeHandler} required/>
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
    );
}
}

export default UpdateSurrenderCylinder;