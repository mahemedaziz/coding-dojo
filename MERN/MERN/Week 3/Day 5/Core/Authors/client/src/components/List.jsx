import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/List.css";

const List = () => {
  const [authors, setAuthors] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/authors")
      .then((res) => {
        console.log(res.data);
        setAuthors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteAuthor = (AuthorID) => {
    axios
      .delete("http://localhost:5000/api/authors/" + AuthorID)
      .then((res) => {
        console.log(authors);
        const Filtredauthors = authors.filter((oneAuthor) => {
          return oneAuthor._id !== AuthorID;
        });
        setAuthors(Filtredauthors);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="linke">
      <Link to="/authors/new">Add an author </Link>
      <p className="under">We have quoted by :</p>
      <table id="customers">
        <thead>
          <th>Author</th>
          <th>Actions availlable</th>
        </thead>
        <tbody>
          {authors.map((c, i) => (
            <tr key={c._id}>
              <td>
                <Link to={`/authors/${c._id}`}>{c.name}</Link>
              </td>
              <td>
                <button
                  className="btn"
                  onClick={() => nav(`/authors/${c._id}/edit`)}
                >
                  Edit
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  className="btn"
                  onClick={() => {
                    deleteAuthor(c._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
