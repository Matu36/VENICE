// import React, { useState } from "react";
// import { useForm } from "../../hooks/useForm";
// import { Global } from "../../helpers/Global";
// import Registro from "./Registro";
// import RecoverPass from "./RecoverPass";

// export default function Login({ handleCerrarModalLogin }) {
//   const { form, changed } = useForm({});
//   const [saved, setSaved] = useState("not_sended");
//   const [registro, setRegistro] = useState(false);
//   const [recover, setRecover] = useState(false);

//   const handleMostrarModalRegistro = () => {
//     setRegistro(true);
//   };

//   const handleCerrarModalRegistro = () => {
//     setRegistro(false);
//   };

//   const handleMostrarModalRecover = () => {
//     setRecover(true);
//   };

//   const handleCerrarModalRecover = () => {
//     setRecover(false);
//   };

//   const loginUser = async (e) => {
//     e.preventDefault();

//     //Datos del formulario
//     let userToLogin = form;

//     //Peticion al backend

//     const request = await fetch(Global.url + "usuarios/login", {
//       method: "POST",
//       body: JSON.stringify(userToLogin),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });

//     const data = await request.json();

//     //Persistir los datos en el LocalStorage

//     localStorage.setItem("token", data.token);
//     localStorage.setItem("user", JSON.stringify(data.returnedUsers));

//     if (data.status == "success") {
//       setSaved("login");
//     } else {
//       setSaved("error");
//     }
//   };

//   return (
//     <div>
//       {!registro && (
//         <div className="login-container">
//           <div className="button-close-login">
//             <button onClick={handleCerrarModalLogin}>X</button>
//           </div>

//           <form className="login-form" onSubmit={loginUser}>
//             <div className="form-group">
//               <label htmlFor="email">Correo Electrónico</label>
//               <input type="email" name="email" onChange={changed} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="contraseña">Contraseña</label>
//               <input type="text" name="password" onChange={changed} />
//             </div>
//             <button onClick={handleMostrarModalRecover}>
//               <span style={{ color: "blue" }}>¿Olvidaste tu contraeña?</span>
//             </button>

//             <input type="submit" value="Ingresar" className="btn btn-success" />
//           </form>
//           {recover && (
//             <div className="modal">
//               <div className="modal-content">
//                 <span className="close" onClick={handleCerrarModalRecover}>
//                   &times;
//                 </span>
//                 <RecoverPass />
//               </div>
//             </div>
//           )}
//           <strong>
//             {saved === "login" ? "Usuario Logueado correctamente" : null}
//           </strong>
//           <strong>{saved === "error" ? "Error papu" : null}</strong>
//           <span style={{ color: "blue" }}>
//             ¿Aún no pertenecés a Comunidad Venice?
//           </span>
//           <button onClick={handleMostrarModalRegistro}>Registráte</button>
//         </div>
//       )}

//       {registro && (
//         <div>
//           <Registro handleCerrarModalRegistro={handleCerrarModalRegistro} />
//         </div>
//       )}
//     </div>
//   );
// }
