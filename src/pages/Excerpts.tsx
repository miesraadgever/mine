import React from "react";
import Nav from "../components/Nav";

export default function Excerpts() {
  return <div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-4 ps-5 pt-5">
      <h3 className="page-head">EXCERPTS OF CONNECTION</h3>

      <p className="w-100 pt-3 page-description">
      performers <i>maya nitzan & david bienvenue</i> <br></br> 
      muziek sample ‘running around’ - buddy ross
      <br></br>
        <br></br>
        concept en realisatie <i>neeltje de jong</i>
        <br></br><br></br>
        <i>1.2021</i>
      </p>
    </div>

    <div className="col-8">
    <img
        className="w-100"
        src={require("../assets/EXCERPTS/stoel.jpg")}
        alt="movement"
      />
    </div>
  </div>

  <div className="row d-flex justify-content-around pt-5">
    <div className="col-3">
    <img
        className="w-100"
        src={require("../assets/EXCERPTS/foto 1.png")}
        alt="movement"
      />
    </div>
    <div className="col-4">
    <img
        className="w-100"
        src={require("../assets/EXCERPTS/foto 2.jpg")}
        alt="movement"
      />
    </div>
  </div>

  <div className="row pt-5">
  <video
            className="video w-100"
            controls
            src={require("../assets/EXCERPTS/full.mp4")}
          ></video>
  </div>
</div>;
}
