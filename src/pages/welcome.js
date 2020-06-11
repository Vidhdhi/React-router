import React, {Component}from "react";

class welcome extends React.Component {
   constructor(props){
    super(props);
  this.state={name:"sharma"}
   }
  
 render(){
    return (
<div>
<h1>heloo{this.state.name}</h1>
</div>
 )
 } 
}  
 export default welcome;