import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        from_name: "",
        reply_to: "",
        message: ""
    });
    const { from_name, reply_to, message } = formData;

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        formData["to_name"] = "Olawale Raji";

        const YOUR_SERVICE_ID = "service_rb8mrlq";
        const YOUR_TEMPLATE_ID = "template_licfxi1";
        const YOUR_PUBLIC_KEY = "-sfBJKfao4Mv-t_e8";

        // Sending the mail
        emailjs
            .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, YOUR_PUBLIC_KEY)
            .then(
                () => {
                    console.log("Email Sent");
                },
                (error) => {
                    console.log(JSON.stringify(error));
                }
            );

        console.log(formData);

        setFormData({
            from_name: "",
            reply_to: "",
            message: ""
        })
    };

    return (
        <div className='form-body'>


            <div className="contact-container">
                <h1>Email US</h1>
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="from_name"
                            value={from_name}
                            onChange={onChange}
                            id="from_name"
                            placeholder="Enter Fullname"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="reply_to"
                            value={reply_to}
                            onChange={onChange}
                            id="reply_to"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            name="message"
                            value={message}
                            onChange={onChange}
                            id="message"
                            placeholder="Enter Message"
                        ></textarea>
                    </div>
                    <button type="submit" id="button" className="btn btn-block">
                        Submit
                    </button>
                </form>
            </div>
        </div>

    );
}
