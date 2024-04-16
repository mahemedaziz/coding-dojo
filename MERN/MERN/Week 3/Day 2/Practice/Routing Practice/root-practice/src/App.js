import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router"; //Top of App.js

const Home = (props) => {
  return <h1 style={{ color: "" }}>Welcome</h1>;
};
const DynamicComponent = () => {
  const { value } = useParams(); // Get the dynamic part of the URL
  const isNumber = isNaN(+value); // isNaN(+"35") si value est un nombre,
  // isNumber sera true, sinon, il sera false.

  return (
    <h1>{isNumber ? `The word is : ${value}` : `The number is : ${value}`}</h1>
  );
};

const ColoredWord = () => {
  const { word, textColor, bgColor } = useParams(); // Get the dynamic part of the URL

  const styles = {
    color: textColor,
    backgroundColor: bgColor,
  };

  return <h1 style={styles}>The word is : {word}</h1>;
};

// const Hello = (props) => {
//   const { hello } = useParams(); // matches our :city in our Routes

//   return <h1>The word is : {hello}</h1>;
// };

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:value" element={<DynamicComponent />} />
        <Route path="/:word/:textColor/:bgColor" element={<ColoredWord />} />
      </Routes>
    </div>
  );
}

export default App;
