import React, { useEffect, useRef, useState } from "react";

function HookTimer(){
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    
    useEffect(()=>{
        console.log(intervalRef)
        intervalRef.current = setInterval(()=>{
            setTimer(prevState =>prevState + 1)
        },1000)
        return() =>{
            clearInterval(intervalRef.current)
        }
    },[])
    return(
        <div>
            <h3>Hook Timer : {timer}</h3>
            <button onClick={()=>{clearInterval(intervalRef.current)}}>Clear Hook Interval</button>
        </div>
    )
}
export default HookTimer;