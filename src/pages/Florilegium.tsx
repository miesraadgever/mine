import React from "react";
import Nav from "../components/Nav";

export default function Florilegium() {
  return  <div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-4 ps-5 pt-5">
      <h3 className="page-head">FLORILEGIUM</h3>

      <p className="w-100 pt-3 page-description">
      teksten onttrokken uit het album ‘blonde’ van frank ocean<br></br><br></br>
        concept en realisatie <i>neeltje de jong</i><br></br><br></br>
        <i>2.2019</i>
      </p>
    </div>

    <div className="col-4">
    <img
            className="w-100"
            src={require("../assets/FLORILEGIUM/1.jpeg")}
            alt="1"
          />
    </div>

    <div className="col-4">
    <img
            className="w-100"
            src={require("../assets/FLORILEGIUM/2.jpeg")}
            alt="1"
          />
    </div>
  </div>

  <div className="row d-flex pt-5">
    <div className="col-4">
    </div>
    <div className="col-8">
    <img
            className="w-100"
            src={require("../assets/FLORILEGIUM/3.jpeg")}
            alt="2"
          />
     </div>
  </div>


  <div className="row d-flex pt-5">
    <div className="col-4">
    </div>
    <div className="col-4">
    <img
            className="w-100"
            src={require("../assets/FLORILEGIUM/4.jpeg")}
            alt="2"
          />
     </div>

     <div className="col-4">
    <img
            className="w-100"
            src={require("../assets/FLORILEGIUM/5.jpeg")}
            alt="2"
          />
     </div>
  </div>


  <div className="row d-flex pt-5">
    <div className="col-4">
    </div>
    <div className="col-8">
    <img
            className="w-100"
            src={require("../assets/FLORILEGIUM/6.jpeg")}
            alt="2"
          />
     </div>
  </div>
  </div>;
}
