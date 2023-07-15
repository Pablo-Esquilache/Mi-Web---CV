import React, { useState } from "react";

const SecondaryEducationContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="txt_container_home">
      <div className="txt_home_card" onClick={handleModalOpen}>
        <h2 className="txt_card_title">¡Hola! Soy Pablo Esquilache y quiero presentarte mi sitio web...</h2>
      </div>

      {isModalOpen && (
        <>
        <div className="modal-overlay active"></div>
        <div className="txt_card_modal" onClick={handleModalClose}>
            <div>
              <p>
                ¡Hola! Soy Pablo Esquilache y quiero presentarte mi sitio web.
                Aquí podrás encontrar información sobre mi formación académica,
                mi experiencia laboral y una sección de contacto para
                comunicarte conmigo.
              </p>
              <br />
              <p>
                Permíteme compartir algunos detalles sobre mí. Tengo 33 años y
                vivo en Carlos Tejedor, provincia de Buenos Aires. Además, soy
                padre de una encantadora niña de 5 años. Me considero una
                persona organizada y metódica, capaz de adaptarme a los cambios
                con facilidad.
              </p>
              <br />
              <p>
                Soy Desarrollador Front-End y Técnico en Administración Pública.
                He trabajado tanto en el sector privado como en el sector
                público, adquiriendo conocimientos valiosos en ambos ámbitos. En
                la actualidad, estoy enfocado en desarrollar mi carrera en el
                campo de la tecnología de la información como desarrollador web.
                Mi objetivo es utilizar mis habilidades y conocimientos para
                contribuir al éxito de proyectos en este emocionante campo.
              </p>
              <br />
              <p>
                Te invito a explorar mi sitio web para obtener más detalles
                sobre mi formación y experiencia laboral. Si tienes alguna
                pregunta o deseas colaborar en proyectos interesantes, no dudes
                en contactarme. Estoy entusiasmado por establecer nuevas
                conexiones y formar parte de proyectos en el mundo de la
                tecnología.
              </p>
              <br />
              <p>
                ¡Gracias por visitar mi sitio web y mostrar interés en mi perfil
                profesional! Espero tener la oportunidad de colaborar contigo y
                participar en proyectos exitosos.
              </p>
            </div>
          </div>
          </>
      )}
    </div>
  );
};

export default SecondaryEducationContainer;

// import React from "react";

// const TextProfile = () => {
//   return (
//     <div className="txt_container_home">
//       <div>
//         <p>
//           ¡Hola! Soy Pablo Esquilache y quiero presentarte mi sitio web. Aquí
//           podrás encontrar información sobre mi formación académica, mi
//           experiencia laboral y una sección de contacto para comunicarte
//           conmigo.
//         </p>
//         <br />
//         <p>
//           Permíteme compartir algunos detalles sobre mí. Tengo 33 años y vivo en
//           Carlos Tejedor, provincia de Buenos Aires. Además, soy padre de una
//           encantadora niña de 5 años. Me considero una persona organizada y
//           metódica, capaz de adaptarme a los cambios con facilidad.
//         </p>
//         <br />
//         <p>
//           Soy Desarrollador Front-End y Técnico en Administración Pública. He
//           trabajado tanto en el sector privado como en el sector público,
//           adquiriendo conocimientos valiosos en ambos ámbitos. En la actualidad,
//           estoy enfocado en desarrollar mi carrera en el campo de la tecnología
//           de la información como desarrollador web. Mi objetivo es utilizar mis
//           habilidades y conocimientos para contribuir al éxito de proyectos en
//           este emocionante campo.
//         </p>
//         <br />
//         <p>
//           Te invito a explorar mi sitio web para obtener más detalles sobre mi
//           formación y experiencia laboral. Si tienes alguna pregunta o deseas
//           colaborar en proyectos interesantes, no dudes en contactarme. Estoy
//           entusiasmado por establecer nuevas conexiones y formar parte de
//           proyectos en el mundo de la tecnología.
//         </p>
//         <br />
//         <p>
//           ¡Gracias por visitar mi sitio web y mostrar interés en mi perfil
//           profesional! Espero tener la oportunidad de colaborar contigo y
//           participar en proyectos exitosos.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TextProfile;
