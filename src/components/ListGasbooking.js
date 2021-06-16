
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
import NavbarAdmin from './NavbarAdmin';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function ListGasBooking() {
    let initialItem = [];
    let [gasbooking, setGasbooking] = useState(initialItem);
     let [btngasbooking,setBtngasbooking]=useState(0);
  const classes = useStyles();
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



  return (
    <div>
    <NavbarAdmin/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">Gas Booking Id</TableCell>
            <TableCell align="right">customerId</TableCell>
            <TableCell align="right">Booking Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Ammount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gasbooking.map((item) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="left">{item.gasBookingId}</TableCell>
              <TableCell align="left">{item.customerId}</TableCell>
              <TableCell align="left">{item.bookingDate}</TableCell>
              <TableCell align="left">{item.status}</TableCell>
              <TableCell align="left">{item.bill}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}