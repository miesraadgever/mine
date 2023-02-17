import React, { useState } from "react";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";

function Home() {



  return (
      <div>
        <Nav />
        <div className="video">
          <video
            className="video w-100 h-50"
            playsInline
            autoPlay
            loop
            src={require("../assets/HOME/edithomepage012023.mp4")}
          ></video>
        </div>
        <div>
        </div>
        <Gallery />
      </div>
  
  );
}

export default Home;