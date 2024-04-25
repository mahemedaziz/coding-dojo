import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/Add.css";

const Create = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);

  const nav = useNavigate();

  const SubmitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/authors", {
        name: name,
      })
      .then((res) => {
        console.log("✅✅✅✅✅✅", res);
        nav("/");
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
      <Link to="/">Home </Link>
      <form onSubmit={SubmitHandle} className="form">
        {errors.map((err, i) => (
          <p key={i} style={{ color: "red" }}>
            {err}
          </p>
        ))}
        <div className="add">
          <label className="label-control">Name : </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="button">
          <Link to="/">
            <button className="btn-success">Cancel</button>
          </Link>

          <button className="btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
