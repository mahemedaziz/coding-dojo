import "./App.css";

import { useState } from "react";
import Tabs from "./Components/Tabs";
function App() {
  const [tabs, setTabs] = useState([
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
  ]);
  return (
    <fieldset className="App">
      <legend> App.jsx</legend>
      <Tabs tabs={tabs} />
    </fieldset>
  );
}

export default App;
