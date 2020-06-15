import React, {Component}from "react";
import FullWidthGrid from "./signup";
import Publiclayout from "../components/Layouts/publiclayouts";
import { Button } from "@material-ui/core";
class login extends React.Component {
   constructor(props){
    super(props);
  this.state={name:"doli"}
   }
  
 render(){
    return (

<Publiclayout>
<Button variant="contained" color="primary">hello bae</Button>


</Publiclayout>


)
 }
 }   
export default login;