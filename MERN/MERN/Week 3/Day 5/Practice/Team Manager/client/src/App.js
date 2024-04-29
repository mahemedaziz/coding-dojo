import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import List from "../src/components/List";
import Show from "../src/components/Show";
import Create from "../src/components/Create";
import Edit from "../src/components/Edit";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1>
          <Link to="/players/list">Manage Players </Link>
        </h1>
        <h1>
          <Link to="/status/game/1">Manage Player Status </Link>
        </h1>
      </div>

      <br />
      <Link to="/players/addplayer">Create Player </Link>
      <br />

      <hr />

      <Routes>
        {/* DAXHBOARD */}
        <Route path="/players/list" element={<List />} />
        {/* READ ONE */}
        <Route path="/status/game/:game" element={<Show />} />
        {/* CREATE */}
        <Route path="/players/addplayer" element={<Create />} />
        {/* UPDATE */}
        {/* <Route path="/players/:id/edit" element={<Edit />} /> */}
      </Routes>
    </div>
  );
}

export default App;
