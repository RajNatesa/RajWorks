import React from "react";
import tracks from "./tracks.jpg";
import sweatshirts from "./sweatshirts.jpg";
import hoodies from "./hoodies.jpg";

function SportsImages({ items }) {
  const images = { tracks, sweatshirts, hoodies };
  return <img alt="images" src={images[items]} style={{ width: 200 + "px" }} />;
}

export default SportsImages;
