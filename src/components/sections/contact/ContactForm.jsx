import React from "react";

const ContactForm = () => {
  return (
    <div className="contact_card">
      <form action="" id="form_contact">
        <div>
          <label htmlFor="name">Nombre y Apellido</label>
          <input type="text" name="" id="name" />
        </div>
        <div>
          <label htmlFor="mail">E Mail</label>
          <input type="email" name="" id="mail" />
        </div>
        <div>
          <label htmlFor="asunt">Asunto</label>
          <input type="text" name="" id="asunt" />
        </div>
        <div>
          <label htmlFor="message">Deje aqui su mensaje...</label>
          <textarea name="" id="message" cols="30" rows="10"></textarea>
        </div>
        <div>
            <input type="submit" value="" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
