import React from "react";
import SocialMedia from "./SocialMedia";
import ContactForm from "./ContactForm";
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact_container">
      <h1 className="contact_title">Contacto</h1>
      <div className="contact_cards_container">
        <SocialMedia />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
