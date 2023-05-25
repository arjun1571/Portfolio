import React , { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5bon1es', 'template_84d5uia', form.current, 'e0EOVApd2SACK6J81')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className='mb-20'>
            <h1 className='text-center font-bold text-4xl mt-20'>Conatact Me</h1>
            <div className='mt-20'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="User_name" /><br />
                    <label>Email</label>
                    <input type="email" name="User_email" /><br />
                    <label>Message</label>
                    <textarea name="message" />
                    <input className='btn btn-primary' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;