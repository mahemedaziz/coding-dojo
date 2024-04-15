import React, { useState } from "react";

const fruits = ["banana", "pineapple", "peach", "apple"];

const FruitForm = () => {
  const [selectedFruit, setSelectedFruit] = useState("");
  const [isTasty, setIsTasty] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (selectedFruit) {
      console.log(
        "The " + selectedFruit + " is" + (isTasty ? "" : " not") + " tasty!"
      );
    } else {
      console.log("No fruit selected.");
    }
  }
  return (
    <fieldset className="App">
      <legend> Types </legend>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedFruit}
          onChange={(e) => setSelectedFruit(e.target.value)}
        >
          <option value="">Please select a fruit</option>
          {fruits.map((fruit, idx) => (
            <option key={idx} value={fruit}>
              {fruit}
            </option>
          ))}
        </select>
        <label>
          <input
            type="checkbox"
            checked={isTasty}
            onChange={(e) => setIsTasty(e.target.checked)}
          />{" "}
          Is it tasty?
        </label>
        <button>Take a bite!</button>
      </form>
    </fieldset>
  );
};

export default FruitForm;
