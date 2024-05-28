import React from "react";
import ReactDOM from "react-dom";
const js=<h1>Hii iiama a peace of jsx</h1>
const Ele=()=>{
    return <h1>Hello Iam a functional component</h1>
}
const Div=()=>(

    <div>{Ele()} {js}</div>
   
)
    

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Div/>);
