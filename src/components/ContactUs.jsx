// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); 

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    )
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thanks for reaching out. I’ll get back to you soon!',
        confirmButtonText: 'Close',
      });
      form.current.reset();
    })
    .catch((error) => {
      console.error('FAILED...', error.text);
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Something went wrong. Please try again later.',
        confirmButtonText: 'Close',
      });
    })
    .finally(() => {
      setIsLoading(false); 
    });
  };

  return (
    <>
    <div id="Contact" className="container py-5">
      <h2 className="text-center mb-4 text-white">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label" style={{ color: "hsla(271, 100%, 50%, 1)" }}>Name</label>
          <input
            type="text"
            name="from_name"
            className="form-control"
            placeholder="Your Name"
            required
            style={{ backgroundColor: "rgba(248, 249, 250, 0.9)" }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" style={{ color: "hsla(271, 100%, 50%, 1)" }}>Email</label>
          <input
            type="email"
            name="from_email"
            className="form-control"
            placeholder="Your Email"
            required
            style={{ backgroundColor: "rgba(248, 249, 250, 0.9)" }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" style={{ color: "hsla(271, 100%, 50%, 1)" }}>Message</label>
          <textarea
            name="message"
            rows="5"
            className="form-control"
            placeholder="Your Message"
            required
            style={{ backgroundColor: "rgba(248, 249, 250, 0.81)" }}
          ></textarea>
        </div>

        <div className="d-grid" style={{
          background: "linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)",
          borderRadius: "12px"
        }}>
          <button
            type="submit"
            className="btn btn-primary rounded"
            style={{
              background: "linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)",
              border: "none"
            }}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
    </>
  );  
};

export default ContactUs;
