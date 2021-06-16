import React from 'react';
import './GasBookingCard.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

function GasBookingCard() {
  return (
    <div>
      <Navbar/>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Gas Booking</h1>
          <div className='pricing__container'>
            <Link to='/newbooking' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <h2>Book your cylinder</h2>
                <h3> </h3>
                <img src={'https://content3.jdmagicbox.com/comp/tiruvallur/n2/9999pxx44.xx44.180630100847.b8n2/catalogue/the-vmc-gas-corporation-lpg-filling-plant-tiruvallur-lpg-gas-pipe-line-installation-services-mkddk5z5o8.jpg?clr=660000' } height="250px" width="250px" alt="boohoo" className="img-responsive"/>
                <h3>Book a gas cylinder now super fast and easy!</h3>
              </div>
            </Link>
            <Link to='/managebookings' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <h2>Manage Bookings</h2>
                <h3> </h3>
                <img src={'https://media.istockphoto.com/vectors/cartoon-confused-gas-cylinder-character-vector-id1002557918?k=6&m=1002557918&s=612x612&w=0&h=pPzA-CgtSaxW6Bk0Ik27N09xVTTevFeTgdiGz48lXGo=' } height="250px" width="250px" alt="boohoo" className="img-responsive"/>
                <h3>Need to make changes to your bookings? </h3>
              </div>
            </Link>
            <Link to='/insertsurrendercylinder' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <h2>Surrender a Cylinder</h2>
                <h3> </h3>
                <img src={'https://st.depositphotos.com/1003938/4170/v/600/depositphotos_41707821-stock-illustration-gas-cylinder-for-kitchen.jpg' } height="250px" width="250px" alt="boohoo" className="img-responsive"/>
                <h3>Surrender your cylinder by heading over here.</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
}
export default GasBookingCard;