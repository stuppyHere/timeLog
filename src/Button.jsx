import React , {useState } from "react";

function Button({nameForButton="UnNamed",userFuntion}){
    return(<button onClick={userFuntion}>{nameForButton}</button>)
}

export default Button