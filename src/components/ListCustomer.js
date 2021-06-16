
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




export default function ListCustomer() {
  let initialItem = [];
  let [cylinder, setCustomers] = useState(initialItem);
   let [btncustomers,setBtncustomers]=useState(0);
  const classes = useStyles();

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


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">Customer Id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">Mobile Number</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cylinder.map((item) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="left">{item.customerId}</TableCell>
              <TableCell align="left">{item.firstName}</TableCell>
              <TableCell align="left">{item.lastName}</TableCell>
              <TableCell align="left">{item.address}</TableCell>
              <TableCell align="left">{item.username}</TableCell>
              <TableCell align="left">{item.mobileNumber}</TableCell>
              <TableCell align="left">{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}