import React from 'react'
import Nav from '../components/Nav'

export default function A0() {
  return (<div>
    <Nav />
  
    <div className="row">
      <div className="d-flex flex-column col-4 ps-5 pt-5">
        <h3 className="page-head">A0</h3>
  
        <p className="w-100 pt-3 page-description">
       A0 poster voor publieke expositie A0 Amersfoort<br></br> 
       <br></br>
       concept en realisatie <i>mies raadgever  </i>  
          <br></br><br></br>
          <i>5.2020</i>
        </p>
      </div>
  
      <div className="col-8">
      <img
            className="w-100"
            src={require("../assets/A0/plakken.JPG")}
            alt="plakken"
          />
      </div>
    </div>
  
    <div className="row d-flex justify-content-around pt-5">
      <div className="col-4">
      <img
            className="w-100"
            src={require("../assets/A0/M_MIESA0.png")}
            alt="ontwerp"
          />
      </div>
      <div className="col-4">
       
      </div>
    </div>
  </div>
  )
}
