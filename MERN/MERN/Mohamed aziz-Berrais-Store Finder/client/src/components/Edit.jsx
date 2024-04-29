import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/stores/" + id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setNumber(res.data.number);
        setOpen(res.data.open);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const UpdateHandle = (e) => {
    e.preventDefault();
    axios
      .patch("http://localhost:8000/api/stores/" + id, {
        name: name,
        number: number,
        open: open,
      })
      .then((res) => {
        console.log("✅✅✅✅✅✅", res);
        nav("/");
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
      <form onSubmit={UpdateHandle} className="form">
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
        <button className="btn btn-success">Edit Store</button>
      </form>
    </div>
  );
};

export default Edit;
