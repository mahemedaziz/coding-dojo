import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Pokemon, setPokemon] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon")
  //     .then((res) => {
  //       //! -- axios wraps the res in it's own .data key
  //       console.log(res.data.results);
  //       setPokemon(res.data.results); // we know from the prev console log that this IS an Array of Data
  //     })
  //     .catch((err) => {
  //       console.log("❌❌❌❌❌❌", err);
  //     });
  // }, []);

  // Fetching data with Axios
  const AxiosPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        //! -- axios wraps the res in it's own .data key
        console.log(res.data.results);
        setPokemon(res.data.results); // we know from the prev console log that this IS an Array of Data
      })
      .catch((err) => {
        console.log("❌❌❌❌❌❌", err);
      });
  };

  return (
    <div className="App">
      <button onClick={AxiosPokemon}>Fetch Pokemon</button>
      <hr />
      {Pokemon.map((pokemon, id) => (
        <ul key={pokemon.id}>
          <li>{pokemon.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
