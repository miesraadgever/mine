import React, { useState } from "react";
import ImageData from "./ImageData";
import "../styling/App.scss";

const Project = () => {
  const data = ImageData;

  return (
    <div className="project">
      {data.map((values) => {
        const { id, title, date, image, link } = values;
        return (
          <div className="project col-2 mt-5 mb-0">
            <figure>
              <a href={link} className={"link"}>
                <img className="project__image" src={image} loading={"lazy"}></img>
                <div className="caption">
                  <p className="project__title">{title}</p>
                  <p className="project__date">{date}</p>
                </div>
              </a>
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
