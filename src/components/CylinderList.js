import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom';  



function CylinderList() {
  let initialItem = [];
  let [cylinder, setCylinder] = useState(initialItem);
   let [btncylinder,setBtncylinder]=useState(0);
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
    
    const URL = `http://localhost:8080/admin/viewcylinder`;
    axios
      .get(URL)
      .then((response) => {
       setCylinder(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  },[btncylinder],[]);


  function handleBtnClick()
  {
    
      setBtncylinder(1);
  }   
  
  
  
  
  
  return (
    <div style={formStyle} >
      <p>Cylinder List</p>
<h1 style={mystyle}>Item Details</h1>
<div className="form-group">
       
        <button onClick={handleBtnClick} className='btn btn-success mt-2'>Get Details</button>
      </div>
      <table  className="table table-hover table-striped border-dark">
        <thead>
          <tr className="table-dark">
        
            <th>Cylinder Id</th>
            <th>Type</th>
            <th>Weight</th>
            <th>Strap Color</th>
            <th>Price</th>
            
            
            
          </tr>
          </thead>
          <tbody>
            {cylinder.map((item) => (
              <tr>
              
                <td>{item.cylinderId}</td>
                <td>{item.type}</td>
                <td>{item.weight}</td>
                <td>{item.strapColor}</td>
                <td>{item.price}</td>
              
                
               
                 </tr>
            ))}
          </tbody>
        
      </table>
    </div>
  );
}

export default CylinderList;