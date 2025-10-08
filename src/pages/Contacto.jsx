import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r4nbki4",
        "template_0q6td97",
        form.current,
        "cy-3jjDdw9Sr3ZLyU"
      )
      .then(() => {
        setEnviado(true);
        form.current.reset();
      }, (error) => {
        console.error("Error al enviar el correo:", error.text);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Contacto</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" name="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea name="message" className="form-control" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>

      {enviado && (
        <div className="alert alert-success mt-3" role="alert">
          ✅ ¡Mensaje enviado correctamente!
        </div>
      )}
    </div>
  );
}

export default Contacto;

