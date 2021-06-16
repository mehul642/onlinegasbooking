import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';  
import InsertBooking from './InsertBooking';
import Navbar from './Navbar'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export default function BookGas() {
  const classes = useStyles();
  const [customer, setCustomer] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/customer/getcustomer/101')
    .then(res => {
      console.log(res)
      setCustomer(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])
 
  return (
    <div>
      <Navbar/>
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
        <div className={classes.root}>
        <InsertBooking/>
    </div>
        </Paper>
      </main>
    </React.Fragment>
    </div>
  );
}