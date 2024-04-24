import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import List from "../src/components/List";
import Show from "../src/components/Show";
import Create from "../src/components/Create";
import Edit from "../src/components/Edit";

function App() {
  return (
    <div className="App">
      <h1> Products</h1>
      <Link to="/">ALL Products </Link>
      <br />
      <Link to="/products/create">Create Products </Link>

      <Routes>
        {/* DAXHBOARD */}
        <Route path="/" element={<List />} />
        {/* READ ONE */}
        <Route path="/products/:id" element={<Show />} />
        {/* CREATE */}
        <Route path="/products/create" element={<Create />} />
        {/* UPDATE */}
        <Route path="/products/:id/update" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
