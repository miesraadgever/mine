import React from 'react'
import Nav from "../components/Nav";

function Holetrap() {
    return (
  <div>
  <Nav />

  <div className="row">
    <div className="d-flex flex-column col-4 ps-5 pt-5">
      <h3 className="page-head">THE HOLE TRAP</h3>

      <p className="w-100 pt-3 page-description">
        graphic novel, digitale print op papier <br></br>
        inzien: <a href="https://issuu.com/miesraadgever/docs/the_hole_trap_versie_voor_issu?utm_medium=referral&utm_source=miesraadgever.nl" target="_blank">klik hier </a>
        <br></br>
        <br></br>
        concept en realisatie <i> mies
        raadgever </i> <br></br>
        <br></br>
        <br></br>
        <br></br>
        <i>2.2019</i>
      </p>
    </div>

    <div className="col-8 pb-5">
    <img
        className="w-100"
        src={require("../assets/HOLETRAP/book.jpeg")}
        alt="book"
      />
    </div>
  </div>

  <div className="row d-flex justify-content-between align-items-center pt-5">
    <div className="col-5 m-5">
      <img
        className="w-100"
        src={require("../assets/HOLETRAP/drawing2.jpeg")}
        alt="broek2"
      />
    </div>
    <div className="col-4 pe-0">
      <img
        className="w-100"
        src={require("../assets/HOLETRAP/drawing3.jpeg")}
        alt="broek3"
      />
    </div>
  </div>

  <div className="row d-flex pt-5 pb-5 mt-5 justify-content-center">
    <div className="col-8">
      <img
        className="w-100"
        src={require("../assets/HOLETRAP/drawing1.jpeg")}
        alt="broek3"
      />
    </div>
  </div>

  
</div>
    )
}

export default Holetrap;
