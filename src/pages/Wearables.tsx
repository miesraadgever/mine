import React from "react";
import Nav from "../components/Nav";

export default function Wearables() {
  return ( <div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-5 ps-5 pt-5">
      <h3 className="page-head">SADGIRL WEARABLES</h3>

      <p className="w-100 pt-3 page-description">
      sadgirlwearables; verschillende handgemaakte sieraden<br></br> 
      prijs op aanvraag <br></br>
     <br></br>
     concept en realisatie <i>neeltje de jong  </i>  
        <br></br><br></br>
        <i>11.2019</i>
      </p>
    </div>
    <div className="col-1"></div>

    <div className="col-6">
    <video
            className="w-80"
            autoPlay
            muted
            loop
            src={require("../assets/SADGIRLW/filmpje2.mov")}
          ></video>
    </div>
  </div>

  <div className="row d-flex pt-5">
    <div className="col-4">
    <img
            className="w-100"
            src={require("../assets/SADGIRLW/1.jpg")}
            alt="broek2"
          />
    </div>
    <div className="col-3"></div>
    <div className="col-4">
    <img
        className="w-100"
        src={require("../assets/SADGIRLW/5.jpg")}
        alt="broek2"
    />

<div className="row pt-5">
  <div className="col-8 pt-5">
  <img
      className="w-100 ps-5"
      src={require("../assets/SADGIRLW/3.jpg")}
      alt="broek2"
  />
</div>
</div>

</div>
</div>

  <div className="row pt-5">
    <div className="col-4"></div>
    <div className="col-2 pt-5">
    <video
          className="w-100"
          autoPlay
          muted
          loop
          src={require("../assets/SADGIRLW/filmpje1.mp4")}
    ></video>
    </div>
    

  </div>
</div>
  )
}
