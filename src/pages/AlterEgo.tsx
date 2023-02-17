import React from "react";
import Nav from "../components/Nav";

export default function Doek() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">SORROW REVOLUTION</h3>

          <p className="w-100 pt-3 page-description">
            vrije expressie; top en rok <br></br>prijs op aanvraag
            <br></br> <br></br>top in samenwerking met<i>alexandra polakova</i> 
            <br></br>rok in samenwerking met  <i>niels matitawaer</i>  <br></br>concept,
            ontwerp, uitvoering <i>neeltje de jong</i> <br></br>
            <br></br>
            <i>3.2021</i>
          </p>
        </div>
        <div className="col-3"></div>
        <div className="col-5">
          <img
            className="w-100"
            src={require("../assets/ALTEREGO-S/movement.jpg")}
            alt="movement"
          />
        </div>
      </div>

      <div className="row d-flex justify-content-around align-items-center pt-5">
        <div className="col-6">
          <img
            className="w-100 "
            src={require("../assets/ALTEREGO-S/detail-2.jpg")}
            alt="detail"
          />
        </div>
        <div className="col-4">
        <video
            autoPlay
            loop
            muted
            src={require("../assets/ALTEREGO-S/full.mp4")}
          ></video>
        </div>
      </div>

      <div className="row d-flex p-5 justify-content-around">
        <div className="col-3">
        <video
            autoPlay
            loop
            muted
            src={require("../assets/ALTEREGO-S/drawing.mp4")}
          ></video>
        </div>

        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/ALTEREGO-S/collage-in.jpg")}
            alt="collage"
          />
        </div>
      </div>
    </div>
  );
}
