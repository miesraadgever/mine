import React from "react";
import Nav from "../components/Nav";
export default function Glitteren() {
  return <div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-5 ps-5 pt-5">
      <h3 className="page-head">GLITTEREN</h3>

      <p className="w-100 pt-3 page-description">
      exploratie, expressie  <br></br> 
      <br></br>
      modellen <i>loek hennipman, martinus papilaja & niels matitawaer</i><br></br>
        
        concept en realisatie <i>neeltje de jong</i>
    
        <br></br><br></br>
        <i>5.2021</i>
      </p>

      <div className="col-8 pt-5">
          <img
            className="w-100"
            src={require("../assets/GLITTEREN/loekcloseup.jpeg")}
            alt="broek3"
          />
      </div>
    </div>

    <div className="col-2"></div>
    <div className="col-5">
          <img
            className="w-100"
            src={require("../assets/GLITTEREN/action2.jpg")}
            alt="broek3"
          />
    </div>
    </div>

    <div className="row mt-5">
    <div className="col-2"></div>
      <div className="col-4 mb-2">
          <img
            className="w-100"
            src={require("../assets/GLITTEREN/action.jpg")}
            alt="broek3"
          />
       </div>
      <div className="col-3"></div>
       <div className="col-2 mt-5 pt-5 pe-5">
       <img
            className="w-100"
            src={require("../assets/GLITTEREN/andre.jpg")}
            alt="broek3"
          />
       </div>
    </div>
</div>;
}
