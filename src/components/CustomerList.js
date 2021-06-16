import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom';  



function CustomerList() {
  let initialItem = [];
  let [customers, setCustomers] = useState(initialItem);
   let [btncustomers,setBtncustomers]=useState(0);
   const formStyle = {
    backgroundColor: "#FFFAFA",
    padding: "15px"
  };
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  
  useEffect(() => {
    
    const URL = `http://localhost:8080/admin/viewcustomers`;
    axios
      .get(URL)
      .then((response) => {
       setCustomers(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  },[btncustomers],[]);


  function handleBtnClick()
  {
    
      setBtncustomers(1);
  }   
  
  
  
  
  
  return (
    <div style={formStyle} >
      <p>Customer</p>
<h1 style={mystyle}>Item Details</h1>
<div className="form-group">
       
        <button onClick={handleBtnClick} className='btn btn-success mt-2'>Get Details</button>
      </div>
      <table  className="table table-hover table-striped border-dark">
        <thead>
          <tr className="table-dark">
        
            <th>Customer Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>UserName</th>
            <th>Mobile Number</th>
            <th>Email</th>
            
            
          </tr>
          </thead>
          <tbody>
            {customers.map((item) => (
              <tr>
              
                <td>{item.customerId}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.address}</td>
                <td>{item.username}</td>
                <td>{item.mobileNumber}</td>
                <td>{item.email}</td>
                
               
                 </tr>
            ))}
          </tbody>
        
      </table>
    </div>
  );
}

export default CustomerList;