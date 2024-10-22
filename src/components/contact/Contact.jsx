// import React from "react";
// import { getImageUrl } from "../../utils";
// import styles from "./Contact.module.css";

// function Contact() {
//   return (
//     <footer id="contact" className={styles.container}>
//       <div className={styles.text}>
//         <h2>Contact</h2>
//         <p>Feel free to reach out !</p>
//       </div>
//       <form action="submit" className={styles.formContainer}>
//   <input type="text" placeholder="Name" className={styles.inputName} />
//   <input type="email" placeholder="Email" className={styles.inputEmail} />
//   <textarea placeholder="Your message" className={styles.textArea}></textarea>
//   <button className={styles.formButton} type="submit">Submit</button>
// </form>
      
//     </footer>
//   );
// }
// export default Contact;

import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  // State to track input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    // Validate if all fields are filled
    if (name && email && message) {
      alert('Thank you for reaching out!...  We will get back to you shortly...');
      
      // Reset input fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Something went wrong. Please fill out all the fields.');
    }
  };

  return (
    <footer id="contact" className={styles.container}>
      
      
      <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.text}>
        <h2>Contact me</h2>
        <p>Feel free to reach out!</p>
      </div>
        <input
          type="text"
          placeholder="Name"
          className={styles.inputName}
          value={name} // Set the input value from state
          onChange={(e) => setName(e.target.value)} // Update state on change
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.inputEmail}
          value={email} // Set the input value from state
          onChange={(e) => setEmail(e.target.value)} // Update state on change
        />
        <textarea
          placeholder="Your message"
          className={styles.textArea}
          value={message} // Set the textarea value from state
          onChange={(e) => setMessage(e.target.value)} // Update state on change
        ></textarea>
        <button className={styles.formButton} type="submit">
          Submit
        </button>
      </form>
    </footer>
  );
}

export default Contact;
