import React from "react";
import Nav from "../components/Nav";

export default function Embody() {
  return <div>

<Nav />

<div className="row">
  <div className="d-flex flex-column col-4 ps-5 pt-5">
    <h3 className="page-head">EMBODY; FEEL - COME BACK - DO NOT PERCEIVE ME</h3>
    <p className="w-100 pt-3 page-description">multi visuele installatie <br></br><br></br>

  concept en realisatie <i>lieke steen & neeltje de jong</i>  <br></br><br></br>

   <i>10.2021</i></p>
  </div>

  <div className="col-8">
          <video
            className="video w-100"
            autoPlay
            muted
            loop
            src={require("../assets/EMBODY/filmpje.mp4")}
          ></video>
        </div>

</div>

<div className="row mb-5">
  <div className="col-6 mt-5 pt-5">
  <img
            className="w-100"
            src={require("../assets/EMBODY/collage.jpg")}
            alt={"wall"}
          ></img>

  </div>
  <div className="col-2"></div>
<div className="col-4 mt-5 pt-5 d-flex flex align-items-end">
          <img
            className="w-100"
            src={require("../assets/EMBODY/kleintv.jpg")}
            alt={"wall"}
          ></img>
   </div>
   </div>

   <div className="row mb-5 ">
  <div className="col-4"></div>
<div className="col-8 d-flex flex align-items-end">
   </div>
   </div>

  </div>;
}
