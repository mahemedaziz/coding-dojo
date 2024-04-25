import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <div>
      <Link to="/">Home </Link>
      <form onSubmit={SubmitHandle}>
        {errors.map((err, i) => (
          <p key={i} style={{ color: "red" }}>
            {err}
          </p>
        ))}
        <label className="label-control">Name : </label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <br />
        <Link to="/">
          <button className="btn btn-success">Cancel</button>
        </Link>
        <br />
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default Create;
