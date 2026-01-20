import React, { useRef} from "react"
import emailjs from "@emailjs/browser";
import "./contactus.css";
import MailboxAnimation from "./MailboxAnimation";

function ContactUs() {
const form = useRef();

const contact = (event) => {
 event.preventDefault();

 emailjs
   .sendForm(
       'service_1k628bc',
       'template_e942cbd',
       form.current,
       'RFX9PVJtrLuEWM9lW'
  )
  .then(() => {
    alert("Message sent successfully!");
    form.current.reset();
  })  
  .catch (() => {
        alert(
     "The email service is temporarily unavailable.  Please contact me directly on davidbirch4272@gmail.com"   
    );
    });
   };

  return (
    <div className="container__contactus">
        <div className="row__contactus">
        <h1 className="contact__us">Looking forward to Speaking With You!</h1>
        <div className="contact__wrapper">
        <div className="form__shell">
        <form ref={form} onSubmit={contact} className="contact__form">
        <div className="form__item">
          <label className="form__item--label">Name</label>
          <input className="input" name="user_name" type="text" required></input>
        </div>


        <div className="form__item">
          <label className="form__item--label">E-Mail</label>
          <input className="input" name="user_email" type="email" required></input>
        </div>

        <div className="form__item">
          <label className="form__item--label">Message</label>
          <textarea className="input" name="message" type="text" required></textarea>
        </div>  
        
        <button type="submit" id="contact__submit" className="form__submit">
        Send!
        </button>
          </form>
        </div>
       
        <figure className="picture">
            < MailboxAnimation />          
        </figure>
        </div>
        </div>
    </div>

  )
};

export default ContactUs;
