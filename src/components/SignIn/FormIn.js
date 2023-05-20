import React from 'react';
import Button from "./Button"
import { Form, FormGroup,Input, Label } from "reactstrap"
function FormIn() {
  return (
      <>




           
    <Form inline style={{display:"block" , margin:"20px"}}>
    <button style={{backgroundColor:'#4285F4' , color:"white"}}  className="btn btn-block"> Connect with Google</button>
    <br/>
    <h6 className="hr">or</h6>   
    
        <FormGroup floating>
            <Input id="Email" name="email" placeholder="Email"  type="email"  style={{backgroundColor:"#FBEEFF" ,border:"none" }}/>
            <Label for="Email" style={{color:"#99879D"}}> Email</Label>
        </FormGroup> 
        <FormGroup floating>
            <Input id="Password" name="password" placeholder="Password"  type="password"  style={{backgroundColor:"#FBEEFF" ,border:"none" }}/>
            <Label for="Password" style={{color:"#99879D"}}> Password </Label>
        </FormGroup>
        <input style={{backgroundColor:'#4285F4' , color:"white"}} type='submit' value='Sing In' className="btn btn-block"/>
    
  </Form>
      </>

   


)
}

export default FormIn
