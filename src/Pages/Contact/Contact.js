import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_g9rtgwo', form.current, 'user_SfGMV4qlhjoNGXB9vW0pe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div className="container-fluid bg-black text-white">

            <div className="d-flex flex-column justify-content-center align-items-center pt-5">
                <h1 className="text-warning">Contact Info</h1>
                <p><span className="text-warning">Email: </span>shakhawathossainmridha@gmail.com</p>
                <p><span className="text-warning">GitHub: </span>https://github.com/shakhawat07</p>
                <p><span className="text-warning">LinkedIn: </span>https://www.linkedin.com/in/shakhawat-hossain-mridha-4450b8219/</p>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <div className="d-flex justify-content-center align-items-center py-5 text-white">
                    <div className="d-flex flex-column justify-content-center">
                        <label>Name</label>
                        <input type="text" name="name" />
                        <label>Email</label>
                        <input type="email" name="email" />
                        <label>Subject</label>
                        <input type="text" name="subject" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input className="mt-3" type="submit" value="Send" />
                    </div>
                </div>

            </form>


        </div>
    );
};

export default Contact;