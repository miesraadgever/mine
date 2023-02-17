import React from "react";
import Nav from "../components/Nav";

export default function Doek() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">DINGEN DIE IK NIET VERGEET</h3>

          <p className="w-100 pt-3 page-description">
            visuele installatie ter ondersteuning van live uitvoering 'dingen
            die ik niet vergeet' <br></br>
            <br></br>
            concept <i>igor herder & mies raadgever</i> <br></br>audio <i>igor herder</i>
            <br></br>visuals en realisatie<i> mies raadgever </i><br></br>
            <br></br>
            <i>11.2021</i>
          </p>
        </div>

        <div className="col-8">
        <video
            className="video w-100"
            autoPlay
            muted
            loop
            controls
            src={require("../assets/VERGEET/vergetenoptestaan.mp4")}
          ></video>
        </div>
      </div>

      <div className="row m-5 p-5"></div>

      <div className="row">
        <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="col-6">
          <img
            className="w-100"
            src={require("../assets/VERGEET/aankondiging.png")}
            alt="broek2"
          />
        </div>

        </div>


      </div>

     
    </div>
  );
}
