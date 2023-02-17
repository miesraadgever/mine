import React from "react";
import Nav from "../components/Nav";

export default function Blauwdruk() {
  return   <div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-4 ps-5 pt-5">
      <h3 className="page-head">BLAUWDRUK</h3>

      <p className="w-100 pt-3 page-description">
      installatie 'persoonlijke blauwdruk' in opdracht van BLAUWDRUK033<br></br> 
     <br></br>
     concept en realisatie <i> mies raadgever </i>   
        <br></br><br></br>
        <i>8.2020</i>
      </p>
    </div>

    <div className="col-8 mb-5">
    <img
            className="w-100"
            src={require("../assets/BLAUWDRUK/overview.jpeg")}
            alt="overview"
          />
    </div>
  </div>

  <div className="row d-flex justify-content-around pt-5 mt-5">
    <div className="col-4">
    <img
            className="w-100"
            src={require("../assets/BLAUWDRUK/men.jpeg")}
            alt="men"
          />
    </div>
    <div className="col-4">
    <img
            className="w-100"
            src={require("../assets/BLAUWDRUK/nature.jpeg")}
            alt="men"
          />
    </div>
    <div className="col-4">
    <img
            className="w-100"
            src={require("../assets/BLAUWDRUK/big.jpeg")}
            alt="men"
          />
    </div>
  </div>
</div>;
}
