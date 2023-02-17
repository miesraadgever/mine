import React from "react";
import Nav from "../components/Nav";

export default function TornMaybe() {
  return  <div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-4 ps-5 pt-5">
      <h3 className="page-head">TORN... MAYBE</h3>

      <p className="w-100 pt-3 page-description">
      sadgirlwearables; cropped hoodie
              <br></br> <br></br>
        concept en realisatie <i>neeltje de jong </i>
        in samenwerking met <i>chloé pérès-labourdette</i><br></br>
        <br></br>
        <i>5.2021</i>
      </p>
      <div>
      <img
        className="w-100 mt-5"
        src={require("../assets/TORNMAYBE/zittend.jpg")}
        alt={"wall"}
    ></img>
      </div>
    </div>
    <div className="col-2"></div>

    <div className="col-6">
    <img
        className="w-100"
        src={require("../assets/TORNMAYBE/semi.jpg")}
        alt={"wall"}
    ></img>
    </div>
  </div>

</div>;
}
