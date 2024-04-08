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
      
      <PersonCard data = {persons}/>
    </fieldset> 
    
  );
}

export default App;
