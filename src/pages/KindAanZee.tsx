import React from "react";
import Nav from "../components/Nav";

function kindaanzee() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">KIND AAN ZEE</h3>

          <p className="w-100 pt-3 page-description">
            art directie voor kind aan zee event <br></br>
            <br></br>algeheel concept <i>igor herder & mies raadgever</i><br></br>
            performance concept <i>beeke van wingaarden</i><br></br>
            styling performers <i>neeltje de jong</i> <br></br>audio <i>igor herder & noah
              eamon hassler-forest </i><br></br>
            <br></br>
            <i>6.2021</i>
          </p>
        </div>
        <div className="d-flex col-3"></div>
        <div className="d-flex col-4">
        <img
            className="w-100"
            src={require("../assets/KINDAANZEE/kindaanzee.png")}
            alt="tvs"
          />
        </div>
      
      </div>

      <div className="row d-flex justify-content-around pt-5">
        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/KINDAANZEE/bed.jpeg")}
            alt="bed"
          />
        </div>
        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/KINDAANZEE/bed.jpeg")}
            alt="bed"
          />
        </div>
      </div>
    </div>
  );
}

export default kindaanzee;
