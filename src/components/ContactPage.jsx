import React from 'react'
import './ContactPage.css'
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
// import {useNavigate} from "react-router-dom";

const ContactPage = () => {
    // const navigate = useNavigate();

    return (
        <div className="ContactPage" id="Contact">
            <h1>Contact Me!</h1>
            <form
                className= "ContactForm"
                action="https://formsubmit.co/shevchikkola@gmail.com"
                method="POST"
                >
                <div className= "PersonInfo">
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        required
                        sx = {{
                            color: "black",
                            borderColor: "black",
                            fontVariant: "all-small-caps"
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        required
                        sx = {{
                            color: "black",
                            borderColor: "black",
                            fontVariant: "all-small-caps"
                        }}
                    />
                </div>
                <div className= "TextArea">
                    <TextField
                        id="outlined-basic"
                        label="Your message"
                        variant="outlined"
                        multiline
                        required
                        sx = {{
                            color: "black",
                            borderColor: "black",
                            fontVariant: "all-small-caps"
                        }}
                    />
                    <Button
                        type = "submit"
                        variant="outlined"
                        multiline
                        sx = {{
                            color: "black",
                            borderColor: "black",
                            fontVariant: "all-small-caps"
                        }}
                        // onClick={() => navigate("/ThankYou")}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactPage;