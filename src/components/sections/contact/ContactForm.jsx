import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yk7mrhe",
        "template_oajhqv1",
        form.current,
        "yd_cHIh57YR9Tqaa3"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact_card">
      <form ref={form} onSubmit={sendEmail} id="form_contact">
        <div>
          {/* <label htmlFor="name">Nombre y Apellido</label> */}
          <input type="text" name="name" id="name" placeholder='Nombre y Apellido' required />
        </div>
        <div>
          {/* <label htmlFor="mail">E Mail</label> */}
          <input type="email" name="mail" id="mail" placeholder='E Mail' required />
        </div>
        <div>
          {/* <label htmlFor="affair">Asunto</label> */}
          <input type="text" name="affair" id="affair" placeholder='Asunto' required />
        </div>
        <div>
          {/* <label htmlFor="message">Deje aqui su mensaje...</label> */}
          <textarea name="message" id="message" placeholder='Deje aqui su mensaje...' required></textarea>
        </div>
        <div>
          <input className='btn_enviar' type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
