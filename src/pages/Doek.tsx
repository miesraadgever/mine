import React from "react";
import Nav from "../components/Nav";

export default function Doek() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">DOEK</h3>

          <p className="w-100 pt-3 page-description">
            canvas 3x6 meter <br></br>
            <br></br>concept en realisatie <br></br><i>mies raadgever & neeltje de
            jong </i><br></br>illustratie <i> mies raadgever </i> <br></br>tekst <i>neeltje de
            jong</i>  <br></br> <br></br>
            <i>3.2021</i>
          </p>
        </div>

        <div className="col-8">
          <video
            className="w-100"
            autoPlay
            muted
            controls
            src={require("../assets/DOEK/editedmovie.mp4")}
          ></video>
        </div>
      </div>

      <div className="row d-flex justify-content-between align-items-center pt-5 ps-5">
        <div className="col-6">
          <img
            className="w-100"
            src={require("../assets/DOEK/fullup.jpeg")}
            alt="broek2"
          />
        </div>
        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/DOEK/muurdetail.jpg")}
            alt="broek3"
          />
        </div>
      </div>

      <div className="row d-flex">
        <div className="col-4"></div>
        <div className="col-3 pt-5 pb-5">
          <img
            className="w-100"
            src={require("../assets/DOEK/full.JPG")}
            alt="broek3"
          />
        </div>

        <div className="col-4 pe-2">
          <img
            className="w-100"
            src={require("../assets/DOEK/detailcamera.jpeg")}
            alt="broek3"
          />
        </div>
      </div>
    </div>
  );
}
