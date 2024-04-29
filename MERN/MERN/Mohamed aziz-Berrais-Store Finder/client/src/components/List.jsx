import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const [stores, setStores] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/stores")
      .then((res) => {
        console.log(res.data);
        setStores(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteStore = (StoreID) => {
    axios
      .delete("http://localhost:8000/api/stores/" + StoreID)
      .then((res) => {
        console.log(stores);
        const Filtredstores = stores.filter((oneStore) => {
          return oneStore._id !== StoreID;
        });
        setStores(Filtredstores);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="liste">
      <div className="Header">
        <h1> Store Finder</h1>
      </div>
      <div className="title">Find stores in your area!</div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Store</th>
            <th>Store Number</th>
            <th>Open</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((c, i) => (
            <tr key={c._id}>
              <td>
                <Link to={`/stores/${c._id}`}>{c.name}</Link>
              </td>
              <td>{c.number}</td>
              <td>{c.open ? "True" : "False"}</td>
              <td>
                {c.open ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteStore(c._id);
                    }}
                  >
                    Delete
                  </button>
                ) : (
                  ""
                )}
                {/* <button
                  className="btn btn-primary"
                  onClick={() => nav(`/stores/${c._id}/update`)}
                >
                  Edit
                </button> */}
                {/* <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteStore(c._id);
                  }}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {
        <Link to="/stores/add">
          <button className="btn btn-success">Can't find your store ?</button>
        </Link>
      }
    </div>
  );
};

export default List;
