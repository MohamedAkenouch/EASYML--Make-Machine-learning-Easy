
import Button from "../Button"
import React from 'react';
import { Form, FormGroup,Input, Label } from "reactstrap"
function FormUp() {
  return (
      <>




           
    <Form inline style={{display:"block" , margin:"20px"}}>
    <button style={{backgroundColor:'#4285F4' , color:"white"}}  className="btn btn-block"> Sign up with google</button>
    <br/>
    <h6 className="hr">or</h6>   
    {/*<Button color="#4285F4" textColor="white" title="Sing Up With Google" style={{display:"block"}}/>*/}
        <FormGroup floating>
            <Input id="Fname" name="fname" placeholder="First Name"  type="text"  style={{backgroundColor:"#FBEEFF" ,border:"none" }}/>
            <Label for="Fname" style={{color:"#99879D"}}> First Name </Label>
        </FormGroup> 
        <FormGroup floating>
            <Input id="Lname" name="lname" placeholder="Last Name"  type="text"  style={{backgroundColor:"#FBEEFF" ,border:"none" }}/>
            <Label for="Lname" style={{color:"#99879D"}}> Last Name </Label>
        </FormGroup> 
        <FormGroup floating>
            <Input id="Email" name="email" placeholder="Email"  type="email"  style={{backgroundColor:"#FBEEFF" ,border:"none" }}/>
            <Label for="Email" style={{color:"#99879D"}}> Email</Label>
        </FormGroup> 
        <FormGroup floating>
            <Input id="Password" name="password" placeholder="Password"  type="password"  style={{backgroundColor:"#FBEEFF" ,border:"none" }}/>
            <Label for="Password" style={{color:"#99879D"}}> Password </Label>
        </FormGroup>
        <input style={{backgroundColor:'#4285F4' , color:"white"}} type='submit' value='Sing Up' className="btn btn-block"/>
    
  </Form>
      </>

   

  


  
  


  )
}

export default FormUp
