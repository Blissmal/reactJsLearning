import React, { useState, useEffect } from "react";

function Effect(){

    const [count, setCount] = useState()

    const addCount = () => {
        setCount(c => c + 1)
    }
    useEffect(() => {
        document.title(`count ${count}`)
    }, [count])

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
        </>
    )
}
export default Effect