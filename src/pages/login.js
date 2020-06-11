import React, {Component}from "react";

class login extends React.Component {
   constructor(props){
    super(props);
  this.state={name:"doli"}
   }
  
 render(){
    return (
<div>
<h1>heloo{this.state.name}</h1>

</div>
)
 }
 }   
export default login;