import React, { useState, useMemo} from "react";


function Counter(){
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);


    const incrementOne = () =>{
        console.log("From increment one")
        setCountOne( countOne + 1);
    }
    const incrementTwo = () =>{
        console.log("From increment two")
        setCountTwo(countTwo + 1);
    }

    const isEven = useMemo(()=>{
        console.log("is even.")
        let i = 0;
        while(i < 1000000000) i++
        return countOne % 2 === 0
    },[countOne])
    return(
        <div>
            <p>Count One : {countOne}
            <span> {isEven? "Even":"Odd"}</span>
            </p>
            
            <button onClick={incrementOne}>Increment One</button>
            <p>Count Two : {countTwo}</p>
            <button onClick={incrementTwo}>Increment Two</button>
        </div>
    )
}
export default Counter;