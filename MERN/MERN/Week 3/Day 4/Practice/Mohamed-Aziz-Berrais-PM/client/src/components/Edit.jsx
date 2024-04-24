import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/" + id)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const UpdateHandler = (e) => {
    e.preventDefault();

    const newObj = {
      title,
      price,
      description,
    };
    axios
      .patch(`http://localhost:5000/api/products/${id}`, newObj)
      .then((res) => {
        console.log(res);
        nav("/products/" + res.data._id);
      })
      .catch((err) => {
        console.log(err.response.data.errors.title);
        const serverErrors = err.response.data.errors;
        if (serverErrors.title) {
          setTitleError(serverErrors.title.message);
        } else {
          setTitleError("");
        }
        if (serverErrors.price) {
          setPriceError(serverErrors.price.message);
        } else {
          setPriceError("");
        }
        if (serverErrors.description) {
          setDescriptionError(serverErrors.description.message);
        } else {
          setDescriptionError("");
        }
      });
  };

  return (
    <div>
      <form onSubmit={UpdateHandler}>
        {titleError && <p style={{ color: "red" }}>{titleError}</p>}
        title :{" "}
        <input
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        {priceError && <p style={{ color: "red" }}>{priceError}</p>}
        price :{" "}
        <input
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
        <br />
        {descriptionError && <p style={{ color: "red" }}>{descriptionError}</p>}
        description :{" "}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        <br />
        <br />
        <button>Create Product</button>
      </form>
    </div>
  );
};

export default Edit;
