import React from "react";
import Nav from "../components/Nav";

export default function Nostalgia() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">NOSTALGIA</h3>

          <p className="w-100 pt-3 page-description">
            beelden van shoot nostalgia collectie
            <br></br>alle items: prijs op aanvraag <br></br>
            <br></br>concept, styling en nabewerking <i>mies raadgever & neeltje de
            jong </i><br></br>fotografie <i>lisanne van der werve </i><br></br>modellen <i>loek
            hennipman & noa iesberts</i> <br></br>
            <br></br>
            <i>1.2021</i>
          </p>
        </div>

        <div className="col-8">
          <video
            className="w-100"
            autoPlay
            muted
            controls
            src={require("../assets/N_U/nostalgia.mp4")}
          ></video>
        </div>
      </div>

      <div className="row d-flex justify-content-around align-items-center pt-5">
        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/N_U/beamerblauw.jpg")}
            alt="broek2"
          />
        </div>
        <div className="col-6">
          <img
            className="w-100"
            src={require("../assets/N_U/beamer1.jpg")}
            alt="broek3"
          />
        </div>
      </div>

      {/* <div className="row d-flex pt-5 justify-content-center">
        <div className="col-8">
          <img
            className="w-100"
            src={require("../assets/NWAAD/grid2.jpg")}
            alt="broek3"
          />
        </div>
      </div> */}

      {/* <div className="row d-flex p-5 justify-content-around">
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
      </div> */}
    </div>
  );
}
