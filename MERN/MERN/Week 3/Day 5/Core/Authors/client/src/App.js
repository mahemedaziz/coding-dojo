import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "../src/components/List";
import Show from "../src/components/Show";
import Create from "../src/components/Create";
import Edit from "../src/components/Edit";

function App() {
  return (
    <div className="App">
      <h1> Authors 📺 😎</h1>
      {/* <Link to="/">ALL Authors </Link>
      <br />
      <Link to="/authors/new">Create Movie </Link> */}

      <Routes>
        {/* DAXHBOARD */}
        <Route path="/" element={<List />} />
        {/* READ ONE */}
        <Route path="/authors/:id" element={<Show />} />
        {/* CREATE */}
        <Route path="/authors/new" element={<Create />} />
        {/* UPDATE */}
        <Route path="/authors/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
