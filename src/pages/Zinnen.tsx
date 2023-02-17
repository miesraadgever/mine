import React from "react";
import Nav from "../components/Nav";

export default function Zinnen() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">ZINNEN IN EEN ALLEDAAGSE WAAS</h3>

          <p className="w-100 pt-3 page-description">
          concept <i>igor herder & mies raadgever</i> <br></br>
            <br></br>
            audio en tekst <i>igor herder</i> <br></br>visuals en realisatie <i>mies raadgever</i> <br></br>
            <br></br>
            <i>9.2021</i>
          </p>
        </div>

        <div className="col-8">
        <video
            className="video w-100"
            autoPlay
            muted
            loop
            controls
            src={require("../assets/ZINNEN/filmpje3.mp4")}
          ></video>
        </div>
      </div>

      <div className="row mt-5 pt-5">
        <div className="col-2"></div>
        <div className="col-3 mt-5">
        <img
            className="w-100"
            src={require("../assets/ZINNEN/ingezoomd.png")}
            alt="broek2"
          />
        </div>
        <div className="col-2"></div>
        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/ZINNEN/cutout.png")}
            alt="broek2"
          />
        </div>

      </div>

     
    </div>
  );
}
