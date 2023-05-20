
import React from 'react';
import { Form, FormGroup,Input, Label } from "reactstrap"
import {useState} from 'react';
import { useDispatch } from "react-redux";
import {GoogleLogin} from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import {signin , signup} from '../../actions/auth';
import styles from './Auth.module.css';
import EasyMLLogo from '../EasyMLLogo/EasyMLLogo';
import { Link } from 'react-router-dom';

function Auth() {
    const initialFormData = {fname:'' , lname :'' , email:'' ,password:''}

    const dispatch= useDispatch();
    const navigate = useNavigate();
    const [isSingup , setIsSingup] = useState(false);
    const [formData , setFormData] = useState( initialFormData);
    const switchMode = () =>{
        setIsSingup ((prevIsSingup)=> ! prevIsSingup) 
    }


    const googleSuccess = async(res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try{
            dispatch({type : 'AUTH' , data:{result,token}});
            navigate("/");

        }catch (error){
            console.log(error)
        }
    }
    const googleFailure = (error) =>{
        console.log(error)
        console.log('Google sign in was unsuccessful. Try again later')
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSingup) {
            dispatch(signup(formData,navigate));
        } else {
            dispatch(signin(formData,navigate));
        }

    }
    
    const handleChange = (e) => {
        setFormData({...formData , [e.target.name] : e.target.value})

    } 
  return (
    <>
        <div className={styles.Auth}>
            <div className="container text-center">
                <div className="row p-2">
                    <div className="col-sm-5">
                        <Link  to='/' className={styles.linkToHome}>
                            <EasyMLLogo />
                        </Link>
                    </div>
                    <div className="col-sm-7">
                        <span className={styles.youDHA}>
                            <button className={styles.buttonSwitch} onClick={switchMode}>
                                <p className='mr-1 mb-4'>
                                    {isSingup ? "Already have account?" : "Don't have an account?"} 
                                    <span className='font-weight-bold text-dark'>
                                        {isSingup ? " Sign In" : " Sign Up"}
                                    </span>
                                </p>
                            </button>
                        </span>
                        <Form inline className={styles.form} onSubmit={handleSubmit}>
                            <br/>
                            <GoogleLogin 
                                clientId="921643871406-poe6m66rb9ptgvgh6qhjep9pb8tthsad.apps.googleusercontent.com"
                                render={(renderProps)=>(
                                    <div className={styles.BtnConnectWG}>
                                        <button 
                                            className={styles.btnConnectWG} 
                                            onClick={renderProps.onClick} 
                                            disabled={renderProps.disabled} 
                                            variant="contained" 
                                        >  
                                            {isSingup ?  "Sign with google" : "Connect with google"}
                                        </button>
                                    </div>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiesPolicy="single_host_origin"
                            />

                            <br/>
                            <h6 className="hr">or</h6>   
                            {isSingup && 
                            <>
                            <FormGroup floating>
                                <Input id="fname" name="fname" placeholder="First Name"  type="text"  className={styles.TextFieldInput} onChange={handleChange}/>
                                <Label for="fname" style={{color:"#99879D"}}> First Name </Label>
                            </FormGroup> 
                            <FormGroup floating>
                                <Input id="lname" name="lname" placeholder="Last Name"  type="text"  className={styles.TextFieldInput} onChange={handleChange}/>
                                <Label for="lname" style={{color:"#99879D"}}> Last Name </Label>
                            </FormGroup> 
                            </>}
                        
                            <FormGroup className={styles.formGroup} floating>
                                <Input id="email" name="email" placeholder="Email"  type="email"  className={styles.TextFieldInput} onChange={handleChange}/>
                                <Label for="email" style={{color:"#99879D"}}> Email</Label>
                            </FormGroup> 
                            <FormGroup floating>
                                <Input id="password" name="password" placeholder="Password"  type="password"  className={styles.TextFieldInput} onChange={handleChange}/>
                                <Label for="password" style={{color:"#99879D"}}> Password </Label>
                            </FormGroup>
                            <input style={{backgroundColor:'#4285F4' , color:"white"}} type='submit' value= {isSingup ? 'Sign up' : 'Sign in'} className="btn btn-block"/>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Auth
