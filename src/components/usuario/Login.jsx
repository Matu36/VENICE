import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Global } from "../../helpers/Global";

export default function Login() {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_sended");

  const loginUser = async (e) => {
    e.preventDefault();

    //Datos del formulario
    let userToLogin = form;

    //Peticion al backend

    const request = await fetch(Global.url + "usuarios/login", {
      method: "POST",
      body: JSON.stringify(userToLogin),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await request.json();

    //Persistir los datos en el LocalStorage

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.returnedUsers));

    if (data.status == "success") {
      setSaved("login");
    } else {
      setSaved("error");
    }
  };

  return (
    <div>
      <strong>
        {saved == "login" ? "Usuario Logueado correctamente" : null}
      </strong>
      <strong>{saved == "error" ? "Error papu" : null}</strong>
      <form className="login-form" onSubmit={loginUser}>
        <div className="form-gropu">
          <label htmlFor="contraseña">Contraseña</label>
          <input type="text" name="password" onChange={changed} />
        </div>

        <div className="form-gropu">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" onChange={changed} />
        </div>

        <input type="submit" value="identificate" className="btn btn-success" />
      </form>
    </div>
  );
}
