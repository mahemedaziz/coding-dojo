import "./App.css";
import ListOfTasks from "./Components/ListOfTasks";
// import Types from "./Components/Types";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <fieldset className="App">
      <legend> App.jsx</legend>
      <ListOfTasks tasks={tasks} setTasks={setTasks} />
      {/* <Types /> */}
    </fieldset>
  );
}

export default App;
