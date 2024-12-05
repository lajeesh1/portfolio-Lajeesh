
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    // Ensure form is only submitted once
    if (name && email && message) {
      toast.success("Thank you! We will get back to you shortly..", { autoClose: 2000 }); 
      setName('');
      setEmail('');
      setMessage('');
    } else {
      toast.error("Please fill out all fields.", { autoClose: 2000 });
    }
  };

  return (
    <footer id="contact" className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.text}>
          <h2>Contact Me</h2>
          <p>Feel free to reach out!</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          className={styles.inputName}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.inputEmail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          className={styles.textArea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className={styles.formButton} type="submit">
          Submit
        </button>
        <ToastContainer
        position="top-center"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
  style={{ fontSize: '16px' , padding:'3px', color:'black'}}
/>

      </form>
      <div className={styles.bottomBar} >
        <p>Created by Lajeesh</p>
      </div>
    </footer>
  );
}

export default Contact;
