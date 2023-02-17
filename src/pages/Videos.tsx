import React from "react";
import Nav from "../components/Nav";

export default function Video() {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="col-3 ps-5 mt-3">
          <h3 className="page-head">VIDEO EDITS</h3>
          <p className="mt-3">camera's: canon powershot A495, nikon D3100</p>
          <a target="_blank" href="https://www.youtube.com/channel/UCuluRTjL7e99VyB24Qfbc8w">youtube: mi_ne movement</a>
        </div>
        <div className="col-1"></div>

        <div className="col-8 description">
          <p>070shake at melkweg amsterdam</p>

          <div className="">
          <div className="ratio ratio-16x9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2suaYMbqBtQ"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-3 ps-5">
          <h3 className="page-head"></h3>
        </div>
        <div className="col-1"></div>

        <div className="col-8 description">
          <p>summer 2022</p>

          <div className="">
          <div className="ratio ratio-16x9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ayPzXZ6Gg6M"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></div>
          </div>
        </div>
      </div>
    </div>
  );
}
