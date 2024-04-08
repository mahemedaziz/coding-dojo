import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  const persons =[
    {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
    {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
    {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
    {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
  ]

  
  return (
    
    <fieldset>
      <legend>App.js</legend>
      <h1>Person List</h1>
      {persons.map((person,index) => (
        <PersonCard key = {index} data = {person}/>
      ))}
      
      
    </fieldset> 
    
  );
}

export default App;
