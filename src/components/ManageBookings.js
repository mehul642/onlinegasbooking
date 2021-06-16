import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteBooking from './DeleteBooking';
import UpdateBooking from './UpdateBooking';
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

function getStepContent(step) {
  switch (step) {
    case 0:
      return <UpdateBooking/>;
    case 1:
      return <DeleteBooking/>;
    default:
      throw new Error('Unknown step');
  }
}

export default function ManageBookings() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleExisting = () => {
    setActiveStep(0);
  };

  const handleNew = () => {
    setActiveStep(1);
  };

  return (
    <React.Fragment>
      <Navbar/>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
        <div className={classes.root}>
        <React.Fragment>
        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        <Button  onClick={handleExisting}>Update Booking</Button>
        <Button  onClick={handleNew}>Cancel a Booking</Button>
      </ButtonGroup>
      </React.Fragment>
        {getStepContent(activeStep)}
    </div>
        </Paper>
      </main>
    </React.Fragment>
  );
}