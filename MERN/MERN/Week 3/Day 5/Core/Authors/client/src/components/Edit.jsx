import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/authors/" + id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const UpdateHandle = (e) => {
    e.preventDefault();
    axios
      .patch("http://localhost:5000/api/authors/" + id, {
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
      <form onSubmit={UpdateHandle}>
        {errors.map((err, i) => (
          <p key={i} style={{ color: "red" }}>
            {err}
          </p>
        ))}
        <label className="label-control">Name : </label>
        <input
          value={name}
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

export default Edit;
