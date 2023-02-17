import React from 'react';
import Nav from "../components/Nav";


export default function Streets() {
  return (
    <div>

    <Nav />
    
    <div className="row">
      <div className="d-flex flex-column col-4 ps-5 pt-5">
        <h3 className="page-head">ON THE STREETS</h3>
        <p className="w-100 pt-3 page-description">
       <i>ONGOING</i></p>

       <div>
          <img
            className="w-100 mt-5"
            src={require("../assets/STREETS/MN_streets.JPG")}
            alt={"wall"}
          ></img>

          </div>
      </div>
      <div className='col-2'></div>
      <div className='col-6'>
      <img
            className="w-100"
            src={require("../assets/STREETS/driehoek.JPG")}
            alt={"wall"}
          ></img>
      </div>
    </div>
    
    <div className="row mb-5">
    <div className="col-1"></div>
    <div className="col-4 d-flex flex">
    <img
            className="w-100"
            src={require("../assets/STREETS/trein.png")}
            alt={"wall"}
          ></img>
    </div>
       <div className="col-2"></div>
       <div className="col-3 ms-5 d-flex flex align-items-end">
          <img
            className="w-100"
            src={require("../assets/STREETS/stikkerknop uitgezoomd.jpg")}
            alt={"wall"}
          ></img>
       </div>
       </div>
    
      
    
      </div>
  );
}
