import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [Pokemon, setPokemon] = useState([]);

  // Vanilla Javascript
  const FetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        return response.json();
        //do something
      })
      .then((JsonResponse) => {
        console.log(JsonResponse);
        setPokemon(JsonResponse.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={FetchPokemon}>Fetch Pokemon</button>
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
