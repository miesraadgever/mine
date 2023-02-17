import React from 'react'
import Nav from '../components/Nav'

export default function Sketches() {
  return (
    <div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-4 ps-5 pt-5">
      <h3 className="page-head">SKETCHES..</h3>

      <p className="w-100 pt-3 page-description">
       
        <i>ONGOING</i>
        <br></br>
        <br></br>
        <i>mies raadgever</i>
      </p>
    </div>

    <div className="col-8">
     
    </div>
  </div>

  <div className="row d-flex justify-content-around mt-5 mb-5">
    <div className="col-3">
    <img
        className="w-100"
        src={require("../assets/SKETCHES/01.jpg")}
        alt="movement"
      />
    </div>
    <div className="col-3">
    <img
        className="w-100"
        src={require("../assets/SKETCHES/02.jpg")}
        alt="movement"
      />
    </div>
    <div className="col-3">
    <img
        className="w-100"
        src={require("../assets/SKETCHES/doodle.jpg")}
        alt="movement"
      />
    </div>
  </div>

  <div className="row d-flex justify-content-around mt-5 mb-5">
    <div className="col-3">
    <img
        className="w-100"
        src={require("../assets/SKETCHES/scan.jpg")}
        alt="movement"
      />
    </div>
    <div className="col-3">
  
    </div>
    <div className="col-3">
    
    </div>
  </div>
</div>
  )
}
