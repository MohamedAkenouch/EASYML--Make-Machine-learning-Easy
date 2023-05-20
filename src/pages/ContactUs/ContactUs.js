import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { sendMail } from '../../actions/sendMail';
import { Form, FormGroup,Input, Label } from "reactstrap";
import styles from './ContactUs.module.css';
import HeaderLite from '../../components/HeaderLite/HeaderLite';
import Footer from '../../components/Footer/Footer';
import axios from 'axios'



function ContactUs() {

    const initialFormData = {to:'' , subject :'' , text:''};

    const dispatch= useDispatch();
    const navigate = useNavigate();
    const [mailData , setMailData] = useState( initialFormData);

    // const submitEmail = async (e) => {
    //     e.preventDefault();
    //     console.log({ mailData });
    //     const response = await fetch("http://localhost:5000/send-mail", {
    //       method: "POST",
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //       body: JSON.stringify({ mailData }),
    //     })
    //       .then((res) => res.json())
    //       .then(() => {
    //         setMailData({
    //           to: "",
    //           subject: "",
    //           text: "",
    //         });
    //       });

    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ mailData });
        // const response = await fetch("http://localhost:5000/send-mail", {
        //   method: "POST",
        //   headers: {
        //     "Content-type": "application/json",
        //   },
        //   body: JSON.stringify({ mailData }),
        // })
        //   .then((res) => res.json())
        //   .then(async (res) => {
        //     const resData = await res;
        //     console.log(resData);
        //     if (resData.status === "success") {
        //       alert("Message Sent");
        //     } else if (resData.status === "fail") {
        //       alert("Message failed to send");
        //     }
        //   })
        //   .then(() => {
        //     setMailData({
        //       to: "",
        //       subject: "",
        //       text: "",
        //     });
        //   });
        axios(
          {
            method: 'post',
            url: "https://easyml-app.herokuapp.com/send-mail",
            headers: {
              "Content-type": "application/json",
            },
            data: {
              to: mailData.to,
              subject: mailData.subject,
              text: mailData.text
            }
          }
        )
        navigate("/");
    }
    
    const handleChange = (e) => {
        setMailData({...mailData , [e.target.name] : e.target.value})
    }

    return (

        <>
            <HeaderLite />
            <div className="container-md p-3">
                <Form inline className={styles.form + " mt-2"} onSubmit={handleSubmit}>
                    <FormGroup floating>
                        <Input id="fname" name="to" placeholder="Email"  type="email"  className={styles.TextFieldInput} onChange={handleChange}/>
                        <Label for="fname" style={{color:"#99879D"}}> To </Label>
                    </FormGroup> 
                    <FormGroup floating>
                        <Input id="lname" name="subject" placeholder="Subject"  type="text"  className={styles.TextFieldInput} onChange={handleChange}/>
                        <Label for="lname" style={{color:"#99879D"}}> Subject </Label>
                    </FormGroup>
                
                    <FormGroup className={styles.formGroup} floating>
                        <Input id="email" name="text" placeholder="Message" type="text"  className={styles.TextFieldInput} onChange={handleChange}/>
                        <Label for="email" style={{color:"#99879D"}}> Message</Label>
                    </FormGroup>
                    <input style={{backgroundColor:'#4285F4' , color:"white"}} type='submit' value= {'Send Mail'} className="btn btn-block"/>
                </Form>  
            </div>

            <Footer />
        </>
            
    )
}

export default ContactUs
