import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./css/Create.css";

const Create = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");

  const nav = useNavigate();
  const SubmitHandler = (e) => {
    e.preventDefault();
    const newObj = {
      name,
      number,
      open,
    };
    axios
      .post("http://localhost:8000/api/stores/", newObj)
      .then((res) => {
        console.log("✅✅✅✅✅✅", res);
        nav(`/stores/${res.data._id}`);
        // nav("/notes/" + res.data._id)
      })
      .catch((err) => {
        console.log(err.response.data.errors.title);
        const serverErrors = err.response.data.errors;
        if (serverErrors.name) {
          setNameError(serverErrors.name.message);
        } else {
          setNameError("");
        }
        if (serverErrors.number) {
          setNumberError(serverErrors.number.message);
        } else {
          setNumberError("");
        }
      });
  };

  return (
    <div>
      <div className="Header">
        <h1> Store Finder</h1>
      </div>
      <div>
        <Link to="/">
          <p className="">go back home</p>
        </Link>
      </div>
      <h3>Add a new store!</h3>
      <form onSubmit={SubmitHandler} className="form">
        <div className="add">
          <label className="label-control">Store Name</label>
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}

          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="add">
          <label className="label-control">Store Number</label>
          {numberError && <p style={{ color: "red" }}>{numberError}</p>}

          <input
            type="number"
            value={number}
            className="form-control"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
        <br />
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => {
            setOpen(e.target.checked);
          }}
        />
        &nbsp;&nbsp;
        <label className="label-control">open ?</label>
        <br />
        <br />
        <button className="btn btn-success">Add a new Store</button>
      </form>
    </div>
  );
};

export default Create;
