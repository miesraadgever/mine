import React from 'react';
import Nav from '../components/Nav';

export default function InColor() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">IN COLOR</h3>

          <p className="w-100 pt-3 page-description">
           aquarel en stift op papier<br></br><br></br>
           concept en realisatie <i>mies raadgever</i>
            
            <i>4.2019</i>
          </p>
        </div>
        <div className='col-2'></div>
        <div className="col-6">
        <img
            className="w-100"
            src={require("../assets/INCOLOR/1.jpg")}
            alt="plakken"
          />
        </div>
      </div>

      <div className="row d-flex justify-content-around align-items-center pt-5 mt-5">
        <div className="col-5">
        <img
            className="w-100"
            src={require("../assets/INCOLOR/3.jpg")}
            alt="plakken"
          />
        </div>
        <div className="col-3">
        <img
            className="w-100"
            src={require("../assets/INCOLOR/2.jpg")}
            alt="plakken"
          />
         </div>
      </div>

      <div className='row pt-5 mt-5'></div>

      <div className="row d-flex p-5">
        <div className="col-4 pt-5 mt-5 ">
        <img
            className="w-100"
            src={require("../assets/INCOLOR/4.jpg")}
            alt="plakken"
        />
         </div> 
         <div className='col-2'></div>

         <div className="col-6">
        <img
            className="w-100"
            src={require("../assets/INCOLOR/5.jpg")}
            alt="plakken"
        />
        </div>
        </div>
        
      </div>
  )
}
