import React from 'react';
import { Button } from './Button';
import './Admin.css';
import { Link } from 'react-router-dom';
import NavbarAdmin  from  './NavbarAdmin';

function Pricing() {
  return (
      <div> 
          <NavbarAdmin />
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Admin Management</h1>
          <div className='pricing__container'>
            <Link to='/managecylinder' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <h2>Manage Cylinder</h2>
                <h3> </h3>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngeAU-juj9L8McKL9XhcfgjDFY-mCtoVLFw&usqp=CAU' } height="250px" width="250px" alt="boohoo" className="img-responsive"/>
                <h3>Update the cylinders in your Database</h3>
              </div>
            </Link>
            <Link to='/viewgasbooking' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <h2>View All Bookings</h2>
                <h3> </h3>
                <img src={'https://media.istockphoto.com/vectors/cartoon-confused-gas-cylinder-character-vector-id1002557918?k=6&m=1002557918&s=612x612&w=0&h=pPzA-CgtSaxW6Bk0Ik27N09xVTTevFeTgdiGz48lXGo=' } height="250px" width="250px" alt="boohoo" className="img-responsive"/>
                <h3>Get all the Bookings of Customer</h3>
              </div>
            </Link>
            <Link to='/viewcustomer' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <h2>View All Customer</h2>
                <h3> </h3>
                <img src={'https://hs-marketing.imgix.net/images/uploads/customer-service-software-hero.png?ixlib=gatsby-transform-url-1.0.2&fit=crop&ar=1.777%3A1&auto=format%2Ccompress' } height="250px" width="250px" alt="boohoo" className="img-responsive"/>
                <h3>Get All your customer by heading over here.</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
}
export default Pricing;