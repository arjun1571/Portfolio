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
        <div className='mb-20' >
            <h1 className='text-center font-bold text-4xl mt-20'>Conatact Me</h1>
            <div className='mt-20  bg-base-300 p-20 rounded-xl'>
                <form ref={form} onSubmit={sendEmail} className=' text-center'>
                    <div className=''>
                    <label className=''>Name</label> <br />
                    <input type="text" name="User_name" placeholder='Enter Your Name' className='input input-bordered w-full max-w-3xl' /><br />
                    </div>
                    <div className=''>
                    <label>Email</label><br />
                    <input className='input input-bordered w-full max-w-3xl' placeholder='Enter Your Email' type="email" name="User_email" /><br />
                    </div>
                    <div className=' '>
                    <label>Message</label><br />
                    <textarea className='input input-bordered w-full max-w-3xl h-24' placeholder='Message' name="message" /><br />
                    <input className='input input-bordered w-full max-w-3xl btn btn-primary ' type="submit" value="SUBMIT" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;