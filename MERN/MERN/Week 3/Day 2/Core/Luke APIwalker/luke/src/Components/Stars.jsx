import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Stars = () => {
  const [data, setData] = useState();
  const nav = useNavigate();
  const { id, planet } = useParams();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${planet}/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        nav("/error");
      });
  }, [id, planet]);

  return (
    <fieldset>
      <legend>Stars</legend>
      {data && planet === "people" && (
        <>
          <h1>{data.name}</h1>
          <h3>Height : {data.height}</h3>
          <h3>Mass : {data.mass}</h3>
          <h3>Hair Color :{data.hair_color}</h3>
          <h3>Skin Color :{data.skin_color}</h3>
        </>
      )}
      {data && planet === "planets" && (
        <>
          <h1>{data.name}</h1>
          <h3>Climate : {data.climate}</h3>
          <h3>Terrain : {data.terrain}</h3>
          <h3>Surface Water : {data.surface_water}</h3>
          <h3>Population :{data.population}</h3>
        </>
      )}
      {data && planet === "starships" && (
        <>
          <h1>{data.name}</h1>
          <h3>Model : {data.model}</h3>
          <h3>Manufacturer :{data.manufacturer}</h3>
          <h3>Crew :{data.crew}</h3>
          <h3>Starship Class{data.starship_class}</h3>
        </>
      )}
    </fieldset>
  );
};

export default Stars;
