import React, { useEffect, useRef } from "react";

function FocusingInput(){
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return(
        <div>
            <input ref = {inputRef} type="text" placeholder="Enter somethings"/>
        </div>
    )
}
export default FocusingInput;