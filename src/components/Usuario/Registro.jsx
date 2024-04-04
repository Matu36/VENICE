import React from "react";
import { useForm } from "../hooks/useForm";
import { Global } from "../../helpers/Global";

export default function Registro() {
  const [form, changed] = useForm({});
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

    const data = await request.json();

    if (data.status == "success") {
      setSaved("saved");
    } else {
      setSaved("error");
    }
  };

  return (
    <div>
      <strong>{saved == "saved" ? "Usuario Registrado" : null}</strong>
      <strong>{saved == "error" ? "Error papu" : null}</strong>
      <form className="registro" onSubmit={saveUser}>
        <div className="registroform">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" onChange={changed} />
        </div>

        <div className="registroform">
          <label htmlFor="contraseña">Contraseña</label>
          <input type="text" name="password" onChange={changed} />
        </div>

        <div className="registroform">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" onChange={changed} />
        </div>
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

        <input type="submit" value="Registrate" className="btn btn-success" />
      </form>
    </div>
  );
}
