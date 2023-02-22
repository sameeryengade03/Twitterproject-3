
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";
export default function LikeButton({className}) {
 const [show , setShow] = useState(false)
    function colorRed() {
        if(show=== true ){
            setShow(false)
        }else{
            setShow(true)
        }
    }

    return (
        <>
        <BsFillHeartFill className={className} onClick={colorRed} style={show ? {color : "red"} :{color : "grey"}} />
        </>
    )
}