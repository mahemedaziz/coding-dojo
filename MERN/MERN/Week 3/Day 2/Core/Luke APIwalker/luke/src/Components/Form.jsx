import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Forms = () => {
  const [number, setNumber] = useState(0);
  const [planet, setPlanet] = useState("");

  const nav = useNavigate();

  const GetStar = (e) => {
    e.preventDefault();
    // setNumber("");
    // setPlanet("");
    if (planet && number) {
      nav(`/${planet}/${number}`); // Corrected navigation path
    } else {
      // Handle the case where the user has not filled out the form correctly
      alert("Please select a category and enter an ID");
    }
  };

  return (
    <div className="container">
      {JSON.stringify(planet)}
      {JSON.stringify(number)}
      <form onSubmit={GetStar}>
        <fieldset>
          <Form.Group className="mb-5">
            <Form.Label htmlFor="">ID :</Form.Label>
            <Form.Control
              type="number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="">Search for :</Form.Label>
            <Form.Select
              value={planet}
              onChange={(e) => setPlanet(e.target.value)}
            >
              <option>----------</option>
              <option>planets</option>
              <option>people</option>
              <option>starships</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </fieldset>
      </form>
    </div>
  );
};

export default Forms;
