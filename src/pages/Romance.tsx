import React from "react";
import Nav from "../components/Nav";

export default function Romance() {
  return <div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-4 ps-5 pt-5">
      <h3 className="page-head">BLAADJES ROMANCE</h3>

      <p className="w-100 pt-3 page-description">
      waterverf op zijde<br></br><br></br>
        concept en realisatie <i>neeltje de jong</i><br></br><br></br>
        <i>11.2018</i>
      </p>
    </div>
    <div className="col-8">
    <img
      className="w-100"
      src={require("../assets/BLAADJES/1.jpg")}
      alt="1"
    />
    </div>
  </div>

  <div className="row pt-5">
    <div className="col-4"></div>
    <div className="col-4">
    <img
      className="w-100"
      src={require("../assets/BLAADJES/5.png")}
      alt="1"
    />
    </div>
  <div className="col-4">
    <img
      className="w-100"
      src={require("../assets/BLAADJES/6.png")}
      alt="1"
    />
  </div>
  </div>

  <div className="row pt-5">
    <div className="col-4"></div>
    <div className="col-4">
    
    </div>
  <div className="col-4">
    <img
      className="w-100"
      src={require("../assets/BLAADJES/7.png")}
      alt="1"
    />
  </div>
  </div>
</div>
}
