import React, { useState } from 'react'


const PersonCard = (props) => {
    console.log(props.data);
    const {data} = props;

    const [num , setNum] = useState(0)
    const IncrementNum = () => {
      setNum (num + 1 )
    }

   
  return (
    <fieldset>
        <legend>PersonCard</legend>
        <h1>{data.lastName}, {data.firstName}</h1>
        <p>Age: {data.age + num}</p>
        <p>Hair Color: {data.hairColor}</p>
        <button onClick={() => IncrementNum() }>Birthday Button for {data.lastName} {data.firstName}</button>
    </fieldset>
  )
}

export default PersonCard