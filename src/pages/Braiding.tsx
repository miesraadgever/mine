import React from "react";
import Nav from "../components/Nav";

export default function Braiding() {
  return <div><div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-4 ps-5 pt-5">
      <h3 className="page-head">BRAIDING IN SILENCE</h3>
      <p className="w-100 pt-3 page-description">
        vlechten als embodiment practice <br></br>
        'knowing with my body rather than with my mind'
        <br></br><br></br>
        uit de dagelijkse beoefening van <i>neeltje de jongs</i>
        <br></br><br></br>
        <i>12.2021</i>
      </p>
    </div>

    <div className="col-8">
          <video
            className="video w-100"
            autoPlay
            muted
            loop
            src={require("../assets/BRAIDING/vlechten stills`.mp4")}
          ></video>
        </div>

  </div>
  <div className="row mt-5"></div>

  <div className="row mb-5 pt-5 ms-5">
    <div className="col-5 me-5 ms-3 mt-5 pt-5">
    <img
            className="w-100"
            src={require("../assets/BRAIDING/text.jpeg")}
            alt={"wall"}
          ></img>
    </div>
    <div className="col-2"></div>
  <div className="col-4 d-flex flex align-items-end">
  <img
            className="w-100 ps-5 mt-3"
            src={require("../assets/BRAIDING/braidsnotitie.PNG")}
            alt={"wall"}
          ></img>
     </div>
     </div>

   





</div>;</div>;
}
