import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Show = () => {
  // const [Product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/" + id)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const deleteProduct = (ProductID) => {
    axios
      .delete("http://localhost:5000/api/products/" + ProductID)
      .then((res) => {
        console.log(products);
        const Filtredproducts = products.filter((oneProduct) => {
          return oneProduct._id !== ProductID;
        });
        setProducts(Filtredproducts);
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        nav("/"); // Rediriger vers la page principale une fois la suppression terminée
      });
  };

  return (
    <div className="container">
      <h3>Name : {products.title}</h3>
      <h4>price : {products.price}</h4>
      <p>Independent : {products.description}</p>
      <button onClick={() => nav("/")} className="btn btn-secondary">
        {" "}
        Home
      </button>
      <button
        className="btn btn-primary"
        onClick={() => nav(`/products/${products._id}/update`)}
      >
        Edit
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteProduct(products._id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Show;
