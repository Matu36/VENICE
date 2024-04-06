import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Global } from "../../helpers/Global";

export default function Registro({ handleCerrarModalRegistro }) {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_sended");

  const saveUser = async (e) => {
    e.preventDefault();
    let newUser = form;

    const request = await fetch(Global.url + "usuarios/registro", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (request.status === 400) {
      setSaved("400");
      return;
    }
    const data = await request.json();

    if (data.status == "success") {
      setSaved("saved");
    } else {
      setSaved("error");
    }
  };

  return (
    <div className="registro-container">
      <div className="button-close-login">
        <button onClick={handleCerrarModalRegistro}>X</button>
      </div>
      <form className="registro" onSubmit={saveUser}>
        <div className="columna">
          <div className="registroform">
            <label htmlFor="email">
              Correo Electrónico<span className="required">*</span>
            </label>
            <input type="email" name="email" onChange={changed} required />
          </div>

          <div className="registroform">
            <label htmlFor="contraseña">
              Contraseña<span className="required">*</span>
            </label>
            <input type="text" name="password" onChange={changed} required />
          </div>

          <div className="registroform">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" onChange={changed} />
          </div>
        </div>
        <div className="columna">
          <div className="registroform">
            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" name="apellido" onChange={changed} />
          </div>
          <div className="registroform">
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" name="telefono" onChange={changed} />
          </div>
          <div className="registroform">
            <label htmlFor="direccion">Dirección</label>
            <input type="text" name="direccion" onChange={changed} />
          </div>
        </div>
        <input type="submit" value="Registrate" className="button-registro" />
      </form>
      <br />
      <span>
        {saved == "saved" ? "Usuario Registrado Correctamente" : null}
      </span>
      <span>{saved == "error" ? "Error papu" : null}</span>
      <span>
        {saved == "400" ? "El email ya se encuentra registrado" : null}
      </span>
    </div>
  );
}
