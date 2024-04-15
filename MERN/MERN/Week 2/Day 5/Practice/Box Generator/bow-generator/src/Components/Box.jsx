import React, { useState } from "react";
import "./Box.css";

const Box = (props) => {
  const { data } = props;

  const [color, setColor] = useState("");
  const [height, setHeight] = useState("");
  const [width, setwidth] = useState("");
  const [boxes, setBoxes] = useState([]);

  const createBox = (e) => {
    e.preventDefault();
    setColor("");
    setHeight("");
    setwidth("");
    setBoxes([...boxes, { color, height, width }]);
    // const newColor = { color };
    // setColor("");
  };

  return (
    <fieldset>
      <legend>Box.jsx</legend>
      <form onSubmit={createBox}>
        <label>Color</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <label htmlFor="">Height</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <label htmlFor="">Width</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setwidth(e.target.value)}
        />

        <button type="submit" value="createBox">
          Add
        </button>
      </form>
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="box"
            style={{
              backgroundColor: box.color,
              width: box.width + "px",
              height: box.height + "px",
            }}
          ></div>
        ))}
      </div>
    </fieldset>
  );
};

export default Box;
