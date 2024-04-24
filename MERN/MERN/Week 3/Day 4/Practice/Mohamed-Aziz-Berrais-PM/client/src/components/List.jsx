import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const [products, setProducts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteProduct = (ProductID) => {
    axios
      .delete("http://localhost:5000/api/products/" + ProductID)
      .then((res) => {
        console.log(products);
        const Filtredproducts = products.filter((oneProduct) => {
          return oneProduct._id !== ProductID;
        });
        setProducts(Filtredproducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {products.map((c, i) => {
        return (
          <div key={c._id}>
            <Link to={"/products/" + c._id}>
              <h2>{c.title}</h2>
            </Link>
            <h2>{c.price}</h2>
            <p>{c.description}</p>
            <Link to={`/products/${c._id}/update`}>Update</Link>
            <hr />
            <button
              onClick={() => {
                deleteProduct(c._id);
              }}
            >
              Delete
            </button>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default List;
