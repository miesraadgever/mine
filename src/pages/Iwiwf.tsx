import React from "react";
import Nav from "../components/Nav";

export default function Doek() {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">I WISH I WAS FREE</h3>

          <p className="w-100 pt-3 page-description">
            expirimentatie met video, ingescanned beeld en tekeningen<br></br><br></br>
            concept en realisatie <i>mies raadgever</i><br></br>
            audio: water - mies raadgever
            <br></br>
            <br></br>
            <i>12.2020</i>
          </p>
        </div>

        <div className="col-8">
        {/* <video
            className="video w-100"
            autoPlay
            muted
            controls
            loop
            src={require("../assets/IWIWF/video2.mp4")}
          ></video> */}
        </div>
      </div>

      <div className="row d-flex justify-content-around align-items-center pt-5">
        <div className="col-6">
          
        </div>
        <div className="col-4">
         </div>
      </div>

      <div className="row d-flex p-5 justify-content-around">
        <div className="col-4">
         </div> 
        </div>

        <div className="col-4">
        </div>
      </div>
   
  );
}
