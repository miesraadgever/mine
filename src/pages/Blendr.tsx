import React from "react";
import Nav from "../components/Nav";

export default function Blendr() {
  return <div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-4 ps-5 pt-5">
      <h3 className="page-head">BLENDR</h3>

      <p className="w-100 pt-3 page-description">
      exploratie in blendr<br></br> 
     <br></br>
     concept en realisatie <i>mies raadgever </i>    
        <br></br><br></br>
        <i>2.2021</i>
      </p>
    </div>

    <div className="col-8">
    <img
        className="w-100"
        src={require("../assets/BLENDR/1.jpg")}
        alt="broek2"
    />
    </div>
  </div>

  <div className="row d-flex align-items-center justify-content-around pt-5">
    <div className="col-4 ">
    <img
        className="w-100"
        src={require("../assets/BLENDR/2.jpg")}
        alt="broek2"
    />
    </div>
    <div className="col-4">
    <img
        className="w-100"
        src={require("../assets/BLENDR/3.jpg")}
        alt="broek2"
    />
    </div>
  </div>
</div>;
}
