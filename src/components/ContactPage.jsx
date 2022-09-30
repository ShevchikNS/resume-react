import React from 'react'
import './ContactPage.css'
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const ContactPage = () => {
    const navigate = useNavigate();

    return (
        <div className="ContactPage" id="Contact">
            <h1>Contact Me!</h1>
            <form
                className="ContactForm"
                action="https://formsubmit.co/shevchikkola@gmail.com"
                method="POST"
            >
                <div className="PersonInfo">
                    <input type="hidden" name="_subject" value="New mail from Portfolio page!"/>
                    <TextField type="text" name="name" placeholder="Your name" required/>
                    <TextField type="email" name="email" placeholder="Email Address" required/>
                    <input type="hidden" name="_next" value="https://thank-page.vercel.app/"/>
                    <input type="hidden" name="_captcha" value="false"/>
                </div>

                <div className="TextArea">
                    <TextField type="text" name="message" placeholder="Your message" required />
                    <Button type="submit" >Submit</Button>

                </div>
            </form>
        </div>
    )
        ;
};

export default ContactPage;