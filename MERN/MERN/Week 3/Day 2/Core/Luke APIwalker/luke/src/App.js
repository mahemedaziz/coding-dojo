import "./App.css";
import { Route, Routes } from "react-router-dom";
import Stars from "./Components/Stars";
import Forms from "./Components/Form";
import Error from "./Components/Error";

function App() {
  return (
    <fieldset className="App">
      <legend>App.js</legend>
      <h1>routing with Star Wars 🧑‍🎤🧑‍🎤</h1>
      <Forms></Forms>
      {/* <Stars></Stars> */}
      <Routes>
        <Route path="/:planet/:id" element={<Stars />} />

        <Route path="/error" element={<Error />} />
      </Routes>
    </fieldset>
  );
}

export default App;
