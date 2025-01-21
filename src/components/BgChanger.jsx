import React, { useState } from "react";
import Button from "./commons/Button";

const BgChanger = () => {
  const [bgColor, setBgColor] = useState("white");

  const colorOptions = [
    "red",
    "yellow",
    "blue",
    "green",
    "orange",
    "olive",
    "gray",
    "pink",
    "purple",
    "lavender",
    "white",
    "black",
  ];

  return (
    <div
      className="h-screen flex items-end justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="bg-white p-2 m-5 fixed rounded-2xl flex flex-wrap gap-2">
        {colorOptions.map((color) => (
          <Button
            key={color}
            type="button"
            backgroundColor={color}
            onClick={() => setBgColor(color)}
            value={color.toUpperCase()}
            className="rounded-2xl w-24 border text-gray-100"
          />
        ))}
      </div>
    </div>
  );
};

export default BgChanger;
