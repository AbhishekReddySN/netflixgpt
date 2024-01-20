import React from "react";
import { useSelector } from "react-redux";
import useTrailerVedio from "../hooks/useTrailerVedio";

const VideoBackGround = ({ movieId }) => {
  const trailerVedio = useSelector((store) => store.movies?.trailerVedio?.key);
  useTrailerVedio(movieId);
  return (
    <div className="w-full">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVedio +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
