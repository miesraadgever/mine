import React from "react";
import Nav from "../components/Nav";

export default function Mesh() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">IHAHOAS '1992</h3>

          <p className="w-100 pt-3 page-description">
            mesh top <br></br>
            <br></br>
            prijs op aanvraag<br></br>
            <br></br>
            ontwerp en realisatie <i>mies raadgever & neeltje de jong</i>
            <br></br>
            <br></br>
            <i>11.2020</i>
          </p>
        </div>

        <div className="col-6 align-items-end">
          <img
            className="w-100"
            src={require("../assets/MESH/zee.jpg")}
            alt="broek2"
          />
        </div>
      </div>

      <div className="row d-flex justify-content-around align-items-center pt-5">
        <div className="col-6"></div>

        <div className="col-4"></div>
      </div>

      <div className="row d-flex p-5 justify-content-around">
        <div className="col-4"></div>

        <div className="col-4"></div>
      </div>
    </div>
  );
}
