import React from "react";
import Nav from "../components/Nav";

export default function Droom() {
  return<div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-3 ps-5 pt-5">
      <h3 className="page-head">DROOM ARCHIEF</h3>

      <p className="w-100 pt-3 page-description">
    mini licht installatie, waterverf en handwerk op bourette zijde<br></br><br></br>
        concept en realisatie <i>neeltje de jong</i><br></br><br></br>
        <i>2.2018</i>
      </p>
    </div>

    <div className="col-3">
    <video
          className="w-100"
          autoPlay
          muted
          loop
          src={require("../assets/DROOM/1.mp4")}
    ></video>
    </div>

    <div className="col-3">
    <video
          className="w-100"
          autoPlay
          muted
          loop
          src={require("../assets/DROOM/2.mp4")}
    ></video>
    </div>

    <div className="col-3">
    <video
          className="w-100"
          autoPlay
          muted
          loop
          src={require("../assets/DROOM/3.mp4")}
    ></video>
    </div>
  </div>

  </div>;;
}
