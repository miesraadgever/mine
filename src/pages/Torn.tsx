import React from "react";
import Nav from "../components/Nav";

export default function torn() {
  return  <div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-4 ps-5 pt-5">
      <h3 className="page-head">TORN TORN TORN, AS IS LIFE</h3>

      <p className="w-100 pt-3 page-description">
      sadgirlwearables; dubbellaags gescheurde jeans 
        <br></br> <br></br>
        concept en realisatie <i>neeltje de jong</i><br></br>
        <br></br>
        <i>5.2021</i>
      </p>
    </div>
  <div className="col-2"></div>
    <div className="col-6">
    <img
        className="w-100"
        src={require("../assets/TORNLIFE/1.jpg")}
        alt={"wall"}
    ></img>
    </div>
  </div>

  <div className="row d-flex justify-content-around pt-5">
    <div className="col-4 mb-3">
    <img
        className="w-100"
        src={require("../assets/TORNLIFE/zijkant.jpg")}
        alt={"wall"}
    ></img>
    </div>
    <div className="col-4">
    <img
        className="w-100"
        src={require("../assets/TORNLIFE/zijkant2.jpg")}
        alt={"wall"}
    ></img>
    </div>
  </div>
</div>
}
