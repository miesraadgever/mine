import React, { FunctionComponent, useState } from "react";
import VideoData from "./VideoData";

interface Props {
  video: string;
}

const Video: FunctionComponent<Props> = ({ video }) => {
  return (
    <div className="video">
      <video
        className="video"
        playsInline
        autoPlay
        controls
        src={require(video)}
      ></video>
    </div>
  );
};

export default Video;
