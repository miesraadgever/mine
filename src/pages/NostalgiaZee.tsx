import React from 'react'
import Nav from '../components/Nav'

export default function NostalgiaZee() {
  return (
    <div>
    <Nav />

    <div className="row">
      <div className="d-flex flex-column col-4 ps-5 pt-5">
        <h3 className="page-head">NOSTALGIA SHOOT: ZEE</h3>
  
        <p className="w-100 pt-3 page-description">
        beelden nostalgia sfeerimpressie <br></br> 
        <br></br>
          concept en realisatie <i>mies raadgever & neeltje de jong </i>         <br></br><br></br>
          <i>12.2020</i>
        </p>
      </div>
  
      <div className="col-8">
      <video
            className="w-100"
            autoPlay
            muted
            controls
            src={require("../assets/NOSTALGIAZEE/edit.mp4")}
          ></video>
      </div>
    </div>
  
    <div className="row d-flex justify-content-around pt-5">
      <div className="col-3">
      
      </div>
      <div className="col-4">
      
      </div>
    </div>
  
    <div className="row pt-5">
    </div>
  </div>

  )
}
