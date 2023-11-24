import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
const form = useRef();

  
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xs1ph2h",
        "template_unhwo0k",
        form.current,
        "TleDato1ymybBY-p-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div class="conteiner-contact">
    <div class="form-contact">
    <div class="contact-info">
        <h3 class="title"> Somos miAlqui </h3>
        <p class="text">
            Mediante esta forma te podes comunicar con nuestras desarrolladoras por algun inconveniente que presente la página.
        </p>

        <div class="info">
            <div class="information">
             {/* Los iconos tienen su formato react */}
              {/* FALTA ICONO ACA */}
              <FontAwesomeIcon icon={faLocationDot} class="icon"/>
              <p>Don Bosco 2455</p>
            </div>
            <div class="information">
            {/* Los iconos tienen su formato react */}
            <FontAwesomeIcon icon={faEnvelope} class="icon"/>
                <p>miAlqui@gmail.com</p>
            </div>
        </div>
        
    </div>
    
    <div class="contact-form">
        <span class="circle one"></span>
        <span class="circle two"></span>

        <form ref={form} onSubmit={sendEmail}>
            <h3 class="title">Contáctanos</h3>
            <div class="input-container">
                <input type="text" name="user_name" class="input" required/>
                <label for="">Nombre completo</label>
                <span>Nombre completo</span>
            </div>
            <div class="input-container">
                <input type="email" name="subject" class="input" required/>
                <label for="">Correo electrónico</label>
                <span>Correo electrónico</span>
            </div>
            <div class="input-container textarea">
                <textarea name="message" cols="30" rows="10" class="input"></textarea>
                <label for="">Asunto</label>
                <span>Asunto</span>
            </div>
            <input type="submit" value="Enviar" class="btn"/>
          </form>
       </div>
      </div>
    </div>
    
  );
};