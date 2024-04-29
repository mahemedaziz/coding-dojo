import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [errors, setErrors] = useState([]);

  const nav = useNavigate();

  const SubmitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/teams", {
        name: name,
        position: position,
      })
      .then((res) => {
        console.log("✅✅✅✅✅✅", res);
        nav("/players/list");
      })
      .catch((err) => {
        // console.log(err);
        const errorRes = err.response.data.errors;
        const errArray = [];
        for (const key of Object.keys(errorRes)) {
          errArray.push(errorRes[key].message);
        }
        setErrors(errArray);
        console.log(setErrors);
      });
  };

  return (
    <div className="linke">
      <Link to="/players/list">List </Link>
      <Link to="/">Ass Player </Link>
      <form onSubmit={SubmitHandle} className="form">
        {errors.map((err, i) => (
          <p key={i} style={{ color: "red" }}>
            {err}
          </p>
        ))}
        <div className="add">
          <label className="label-control">Player Name : </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="add">
          <label className="label-control">Preferred Position : </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          />
        </div>

        <div className="button">
          <button className="btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
