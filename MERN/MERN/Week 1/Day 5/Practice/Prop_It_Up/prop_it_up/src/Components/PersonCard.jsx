import React from 'react'


const PersonCard = (props) => {
    console.log(props.data);
    const {data} = props;
   
  return (
    <fieldset>
        <legend>PersonCard</legend>
        {
            data.map((person) => {
                return <div>
                <h1>{person.lastName}, {person.firstName}</h1>
                <p>Age: {person.age}</p>
                <p>Hair Color: {person.hairColor}</p>
                </div>

            })
        }
        

    </fieldset>
  )
}

export default PersonCard