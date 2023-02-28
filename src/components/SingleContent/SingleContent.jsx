import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";

function SingleContent({ id, title, poster, media_type, date, vote_average }) {
  return (
    <div className="media">
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
        <span className="subTitle"> {date}</span>
      </span>
    </div>
  );
}

export default SingleContent;
