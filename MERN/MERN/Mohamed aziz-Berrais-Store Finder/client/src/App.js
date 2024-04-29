import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import List from "../src/components/List";
import Show from "../src/components/Show";
import Create from "../src/components/Create";
import Edit from "../src/components/Edit";

function App() {
  return (
    <div className="">
      {/* <Link to="/">ALL Stores </Link>
      <br />
      <Link to="/stores/add">Add an Store </Link> */}

      <Routes>
        {/* DAXHBOARD */}
        <Route path="/" element={<List />} />
        {/* READ ONE */}
        <Route path="/stores/:id" element={<Show />} />
        {/* CREATE */}
        <Route path="/stores/add" element={<Create />} />
        {/* UPDATE */}
        <Route path="/stores/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
