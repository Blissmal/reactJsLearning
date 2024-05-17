
import React, { useState } from 'react';

function Card(){
    const [name, setName] = useState();
    const [age, setAge] = useState(0);

    const updateName = () => {
        setName("Blissmal")
    }
    const increamentAge = () => {
        setAge(age + 1)
    }
    return(
        
        <>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={increamentAge}>Increament Age</button>
        </>
    );
}

export default Card