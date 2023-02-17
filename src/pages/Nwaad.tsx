import React from "react";
import Nav from "../components/Nav";
import Video from "../components/Video";

function Nwaad() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">NWAAD</h3>

          <p className="w-100 pt-3 page-description">
            installatie in opdracht van NWAA documentaire
            <br></br>
            <br></br>
            concept en realisatie <i>pepijn van de grift, lieke steen, mies
            raadgever neeltje de jong</i> <br></br>
            <br></br>technische ondersteuning <i>bart kipping</i>
            <br></br>
            <br></br>
            <i>4.2021</i>
          </p>
        </div>

        <div className="col-8 pb-5">
          <video
            className="video w-100"
            autoPlay
            muted
            loop
            src={require("../assets/NWAAD/IMG_9250.mp4")}
          ></video>
        </div>
      </div>

      <div className="row d-flex justify-content-between align-items-center pt-5">
        <div className="col-4 m-5">
          <img
            className="w-100"
            src={require("../assets/NWAAD/cellophane.jpg")}
            alt="broek2"
          />
        </div>
        <div className="col-6 pe-0">
          <img
            className="w-100"
            src={require("../assets/NWAAD/cellophane2.jpg")}
            alt="broek3"
          />
        </div>
      </div>

      <div className="row d-flex pt-5 justify-content-center">
        <div className="col-8">
          <img
            className="w-100"
            src={require("../assets/NWAAD/grid2.jpg")}
            alt="broek3"
          />
        </div>
      </div>

      <div className="row d-flex p-5 justify-content-around">
        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/NWAAD/detail.jpg")}
            alt="broek3"
          />
        </div>

        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/NWAAD/laptop.jpg")}
            alt="broek3"
          />
        </div>

        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/NWAAD/tv.jpg")}
            alt="broek3"
          />
        </div>
      </div>
    </div>
  );
}

export default Nwaad;
