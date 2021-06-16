import React, { Component } from "react";
import axios from "axios";
import AccountService from '../services/AccountService';


export class ViewCustomers extends Component


{
    constructor (props){
        super(props)

        this.state={
            post : []
        }
    }
componentDidMount (){

      axios.get('http://localhost:8080/admin/viewcylinder')
      .then(response => {
          console.log(response)
          this.setState({post: response.data})
      })
      .catch(error =>{
          console.log(error)
      } )
}
   render(){
  
       return (
           <div>
                list
           </div>
       )
   }
}

export default ViewCustomers