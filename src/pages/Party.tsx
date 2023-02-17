import React from 'react'
import Nav from '../components/Nav';

export default function Party() {
  return (
    <div>

<Nav />

<div className="row">
  <div className="d-flex flex-column col-4 ps-5 pt-5">
    <h3 className="page-head">PRETTIEST GIRL OF THE PARTY</h3>
    <p className="w-100 pt-3 page-description">sadgirlwearables; jurk van vintage zijde
<br></br><br></br>concept en realisatie <i>neeltje de jong</i>
<br></br><br></br>
<i>9.2021</i></p>
  </div>
  <div className='col-3'></div>
      <div className='col-4'>
      <img
            className="w-100"
            src={require("../assets/PARTY/full.jpg")}
            alt={"wall"}
          ></img>
      </div>

</div>

<div className="row mb-5">
  <div className='col-1'></div>
  <div className="col-4">
      <img
            className="w-100"
            src={require("../assets/PARTY/onderkant.jpg")}
            alt={"wall"}
          ></img>
   
   </div>
   <div className='col-3'></div>
   <div className="col-2 mt-5 pt-5">
      <img
            className="w-100 mt-5"
            src={require("../assets/PARTY/rug.jpg")}
            alt={"wall"}
          ></img>
   
   </div>
   </div>

   <div className="row mb-5 ">
  <div className="col-4"></div>
<div className="col-8 d-flex flex align-items-end">
   </div>
   </div>


</div>
  )
}
