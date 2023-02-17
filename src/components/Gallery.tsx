import React, { FunctionComponent, useEffect, useState } from "react";
import ImageData from "./ImageData";
import "../styling/App.scss";
import { ALL } from "dns";



const Gallery = ({
}) => {
  const [tag, setTag] = useState("all");
  const [data, setData] = useState(ImageData);

  useEffect(() => {
   getProjects()
  }, [tag]);

  const getProjects = () => {
    setData(ImageData)
    if (tag !== "all")
    setData(ImageData.filter(data => data.tag === tag))
    
  };


  return (
    <>
    <div className="filter pe-5 pt-5">
            <div className="pe-5"><button onClick={()=>{ setTag("all") }}>ALLES</button></div>
            <div className="pe-5"><button onClick={()=>{ setTag("mine") }}>MI_NE</button></div>
            <div className="pe-5"><button onClick={()=>{ setTag("mies")}}>MIES</button></div>
            <div className="pe-5"><button onClick={()=>{ setTag("neeltje")}}>NEELTJE</button></div>
    </div>
    
  
    <div className="center">
     <div className="d-flex flex-wrap justify-content-center">
      {data.map((values) => {
        const { id, title, date, image, link } = values;
        return (
          <div className="project mt-5 mb-0">
            <figure>
              <a href={link} className={"link"}>
                <img className="project__image" src={image} loading={"lazy"} alt={title}></img>
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
   </div>
    
    </>
  );
}

export default Gallery;
