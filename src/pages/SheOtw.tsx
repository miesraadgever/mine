import React from "react";
import Nav from "../components/Nav";

export default function SheOtw() {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">SHE OF THE WATER</h3>

          <p className="w-100 pt-3 page-description">
            korte film, soundscape en subliminals [lyrics]
            <br></br>
            <br></br>
            volledige film te koop op dvd inclusief cd boekje op aanvraag
            <br></br>
            <br></br>
            originele teksten <i>neeltje de jong</i><br></br> concept, soundscape en
            realisatie <i>neeltje de jong</i><br></br> opnames en edit <i>deborah van
            putten</i> <br></br>
            <br></br>
            <i>6.2022</i>
          </p>
        </div>

        <div className="col-8">
          <video
            className="video w-100"
            autoPlay
            muted
            loop
            src={require("../assets/SHEOTW/sheotw-1.mp4")}
          ></video>
        </div>
      </div>
      <div className="row d-flex align-items-center pt-5 mt-5">
        <div className="col-4 ms-5">
          <img
            className="w-100"
            src={require("../assets/SHEOTW/sketch-1.jpeg")}
            alt="broek2"
          />
        </div>
        <div className="col-2"></div>
        <div className="col-3 pb-2">
          <img
            className="w-100"
            src={require("../assets/SHEOTW/remember.PNG")}
            alt="broek3"
          />
        </div>
      </div>
      <div className="row ms-5 ps-5 d-flex justify-content-start">
      <div className="col-2"></div>

        <div className="col-4 ms-5 ps-5">
          <img
            className="w-100"
            src={require("../assets/SHEOTW/notes-2.jpeg")}
            alt="broek3"
          />
        </div>
      </div>
      {/* <div className="row ms-5 pt-5 mt-5">
        <div className="col-4"></div>
        <div className="col-4 mb-3">
          <img
            className="w-100"
            src={require("../assets/SHEOTW/camerabeeld.jpg")}
            alt="broek3"
          />
      </div>
      </div> */}
      
    </div>
  );
}
