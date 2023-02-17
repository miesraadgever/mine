import React from "react";
import Nav from "../components/Nav";

export default function Doek() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">AGAIN AGAIN AGAIN</h3>

          <p className="w-100 pt-3 page-description">
            exploratie van tekenkunst en haar relatie met het lichaam <br></br>
            <br></br> model<i> helen cheng</i>  <br></br> concept en realisatie<i> neeltje de jong</i><br></br>
            <br></br>
            <i>4.2021</i>
          </p>
        </div>

        <div className="col-8">
          <video
            className="w-100"
            autoPlay
            muted
            controls
            loop
            src={require("../assets/AGAIN/video.mov")}
          ></video>
        </div>
      </div>

      <div className="row d-flex justify-content-around align-items-center pt-5">
        <div className="col-6">
          <img
            className="w-100"
            src={require("../assets/AGAIN/blurred.jpg")}
            alt="broek2"
          />
        </div>
        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/AGAIN/close-up front.jpg")}
            alt="broek3"
          />
          
        </div>
      </div>


      <div className="row">
        <div className="col-2"></div>
        <div className="col-4 mt-5 pt-5">
          <img
            className="w-100"
            src={require("../assets/AGAIN/detail-mirror.jpg")}
            alt="broek3"
          />
        </div>
        <div className="col-2"></div>
        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/AGAIN/full.jpg")}
            alt="broek3"
          />
        </div>
      </div>

    
    </div>
  );
}
