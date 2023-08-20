import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../Hooks/useData";

export const SingleImage = ({ data }) => {
  const [bigImage, setBigImage] = useState();

  return (
    <div className="img-div">
      <div>
        <img className="big-img" src={bigImage ? bigImage : data[0]} />
      </div>
      <div className="images-nav">
        {data.slice(0, 4).map((img) => {
          return (
            <img
              className="img-nav"
              src={img}
              onClick={() => setBigImage(img)}
            />
          );
        })}
      </div>
    </div>
  );
};
