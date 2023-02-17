import React from "react";
import Nav from "../components/Nav";
import ReactPlayer from "react-player";





export default function Audio() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">AUDIO</h3>
          <p className="w-100 pt-3 page-description">exploration through sound <br></br><br></br>
          <i>ongoing</i></p>
        </div>

      </div>

      <div className="row mb-5">
        <div className="col-4"></div>
      <div className="col-8 d-flex flex align-items-end">
          <ReactPlayer className="audioplayer" url="https://soundcloud.com/mies-raadgever/water" />
         </div>
         </div>

         <div className="row mb-5 ">
        <div className="col-4"></div>
      <div className="col-8 d-flex flex align-items-end">
          <ReactPlayer className="audioplayer" url="
          https://soundcloud.com/mies-neeltje/sadgirls-mix-01" />
         </div>
         </div>
    </div>


  );
}
