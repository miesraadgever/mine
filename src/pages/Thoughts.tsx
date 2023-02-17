import React from "react";
import { useState } from "react";
import Nav from "../components/Nav";
import Modal from 'react-bootstrap/Modal';
import { TransformWrapper, TransformComponent } from '@pronestor/react-zoom-pan-pinch';

export default function Thoughts() {

 const [show, setShow] = useState(false);

 const handleClose = () => {
  setShow(false);
 }
  return <div>
      <Nav />

      <div className="row">
        <div className="d-flex flex-column col-4 ps-5 pt-5">
          <h3 className="page-head">HERE MY THOUGHTS...</h3>
          <p className="w-100 pt-3 page-description">muur van gedachten<br></br><br></br> 
            uittreksels notitieboek van <i>neeltje de jong</i> als aanloop op ‘she ‘otw’
            <br></br><br></br><i>6.2022</i></p>
        </div>

        <div className="col-8">
          <img
            onClick={() => setShow(true)} 
            className="video w-100"
            src={require("../assets/THOUGHTS/wall.jpg")}
            alt={"wall"}
          ></img>
        </div>
      </div>


    
    <Modal show={show} onHide={handleClose} dialogClassName="modal-body">
    <TransformWrapper>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body >
            <TransformComponent>
        <img
            className="image-modal w-100"
            src={require("../assets/THOUGHTS/wall.jpg")}
            alt={"wall"}
          ></img>
          </TransformComponent>
        </Modal.Body>
        </TransformWrapper>
      </Modal>


  </div>;
}
