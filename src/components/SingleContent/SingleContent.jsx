import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import Badge from "@mui/material/Badge";

function SingleContent({ id, title, poster, media_type, date, vote_average }) {
  return (
    <div className="media">
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
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
