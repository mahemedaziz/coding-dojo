import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Show = () => {
  const [stores, setStores] = useState([]);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/stores/" + id)
      .then((res) => {
        console.log(res.data);
        setStores(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="Header">
        <h1> Store Finder</h1>
      </div>
      <Link to="/">
        <p className="">go back home</p>
      </Link>
      {/* <br />
      <Link to="/stores/add">Add an Store </Link> */}
      <h2> {stores.name}</h2>
      <h2>Store Number {stores.number}</h2>

      <h3>{stores.open ? "Open" : "Close"}</h3>
      <br />

      <button
        className="btn btn-primary"
        onClick={() => nav(`/stores/edit/${stores._id}`)}
      >
        Edit Store Details
      </button>
    </div>
  );
};

export default Show;
