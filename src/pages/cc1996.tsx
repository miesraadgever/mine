import React from "react";
import Nav from "../components/Nav";

function cc1996() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">CC1996 & FDLAC'1992</h3>

          <p className="w-100 pt-3 page-description">
            i.e. patchwork jeans , sketchbook jeans <br></br>
            prijs op aanvraag <br></br>
            <br></br>
            ontwerp en realisatie <i> mies raadgever & neeltje de jong</i> <br></br>
            <br></br>
            <i>1.2021</i>
          </p>
        </div>

        <div className="col-8">
          <img
            className="w-100"
            src={require("../assets/MN_CC1996/MN_CC1996-1.png")}
            alt="broek1"
          />
        </div>
      </div>

      <div className="row d-flex justify-content-around pt-5">
        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/MN_CC1996/MN_CC1996-2.jpg")}
            alt="broek2"
          />
        </div>
        <div className="col-4">
          <img
            className="w-100"
            src={require("../assets/MN_CC1996/MN_CC1996-3.png")}
            alt="broek3"
          />
        </div>
      </div>

      {/* <div className="row d-flex col-4 justify-content-center">
        <div>
          <img
            className="w-50"
            src={require("../assets/MN_CC1996/MN_CC1996-4.png")}
            alt="broek2"
          />
        </div>
      </div> */}
    </div>
  );
}

export default cc1996;
