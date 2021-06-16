
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


export default function ListCylinder() {
  let initialItem = [];
  let [cylinder, setCylinder] = useState(initialItem);
   let [btncylinder,setBtncylinder]=useState(0);
  const classes = useStyles();
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


  return (
    <div>
    <NavbarAdmin/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">Cylinder Id</TableCell>
            <TableCell align="right">Cylinder Type</TableCell>
            <TableCell align="right">Cylinder Weight</TableCell>
            <TableCell align="right">Cylinder Strap Color</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cylinder.map((item) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="left">{item.cylinderId}</TableCell>
              <TableCell align="left">{item.type}</TableCell>
              <TableCell align="left">{item.weight}</TableCell>
              <TableCell align="left">{item.strapColor}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}