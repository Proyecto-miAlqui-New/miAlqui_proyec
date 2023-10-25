import { useRef } from "react";
import emailjs from '@emailjs/browser';
import './contact.css'

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xs1ph2h', 'template_unhwo0k', form.current, 'TleDato1ymybBY-p-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      };

    return (
        <section>
            <div className="conteiner">
                <h2 className="--text-center">Contáctanos</h2>
            </div>
                <form ref={form} onSubmit={sendEmail} className="--form-control --card --flex-center --dir-column">
                
                <input type="text" placeholder="Nombre y apellido" name="user_name" required />
                    
                <input type="text" placeholder="Asunto" name="subject" required />
                
                <textarea name="message" cols="30" rows="10"></textarea>
                <button type="submit" className="--btn --btn-primary">Enviar</button>
                </form>    
        </section>
    )
}