import React from "react";
import SportsImages from "./SportsImages";

function SportsWear() {
  const activewears = ["tracks", "sweatshirts", "hoodies"];

  const renderdActiveWears = activewears.map((clothes, index) => {
    return <SportsImages key={index} items={clothes} />;
  });
  return <>{renderdActiveWears}</>;
}

export default SportsWear;
