import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom';  



function CylinderList() {
  let initialItem = [];
  let [gasbooking, setGasbooking] = useState(initialItem);
   let [btngasbooking,setBtngasbooking]=useState(0);
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
    
    const URL = `http://localhost:8080/admin/viewgas`;
    axios
      .get(URL)
      .then((response) => {
        setGasbooking(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  },[btngasbooking],[]);


  function handleBtnClick()
  {
    
    setBtngasbooking(1);
  }   
  
  
  
  
  
  return (
    <div style={formStyle} >
      <p>Gas Booking List</p>
<h1 style={mystyle}>Item Details</h1>
<div className="form-group">
       
        <button onClick={handleBtnClick} className='btn btn-success mt-2'>Get Details</button>
      </div>
      <table  className="table table-hover table-striped border-dark">
        <thead>
          <tr className="table-dark">
        
            <th>Gas Booking Id</th>
            <th>customerId</th>
            <th>Booking Date</th>
            <th>Status</th>
            <th>Ammount</th>
            
            
            
          </tr>
          </thead>
          <tbody>
            {cylinder.map((item) => (
              <tr>
              
                <td>{item.gasBookingId}</td>
                <td>{item.customerId}</td>
                <td>{item.bookingDate}</td>
                <td>{item.status}</td>
                <td>{item.bill}</td>
              
                
               
                 </tr>
            ))}
          </tbody>
        
      </table>
    </div>
  );
}

export default CylinderList;