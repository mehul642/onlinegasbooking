
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import ReactDOM from 'react-dom'; 
import NavbarAdmin from './NavbarAdmin'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




export default function SurrenderList() {
  let initialItem = [];
  let [surrender, setCustomers] = useState(initialItem);
   let [btncustomers,setBtncustomers]=useState(0);
  const classes = useStyles();

  useEffect(() => {
    
    const URL = `http://localhost:8080/surrendercylinder/view`;
    axios
      .get(URL)
      .then((response) => {
       setCustomers(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  },[btncustomers],[]);


  return (
      <div>
          <NavbarAdmin/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">Surrender Id</TableCell>
          <TableCell align="right">Surrender Date</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Customer Id</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {surrender.map((item) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="left">{item.surrenderId}</TableCell>
              <TableCell align="left">{item.surrenderDate}</TableCell>
              <TableCell align="left">{item.firstname}</TableCell>
              <TableCell align="left">{item.lastname}</TableCell>
              <TableCell align="left">{item.customerid}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}