import React from "react";

export default (props)=>{
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 150 150" {...props}>
    <circle cx="50" cy="50" r="50"  fill="#FFF" />
    <circle cx="50" cy="50" r="40" stroke="#000" strokeWidth="4" fill="#FFF" />
    <line x1="80" y1="80" x2="130" y2="135" style={{stroke: "#FFF", strokeWidth: 22}} />
    <line x1="79" y1="79" x2="125" y2="130" style={{stroke: "#000", strokeWidth: 10}} />
    <line x1="50" y1="20" x2="50" y2="80" style={{stroke: "#000", strokeWidth: 5}} />
    <line x1="20" y1="50" x2="80" y2="50" style={{stroke: "#000", strokeWidth: 5}} />
    </svg> 
    )
}