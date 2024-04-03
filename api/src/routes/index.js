const { Router } = require("express");
// const {getComidas, putComidas, createComida, deleteComida} = require ("../controllers/ComidasCont");
const {
  login,
  registro,
  putUser,
  resetPassword,
} = require("../controllers/Usuarios");

const check = require("../middlewares/auth");

//VAMOS A USAR ESTO CUANDO NECESITEMOS TENER LOS DATOS DE DE SESION DEL USUARIO O CUANDO NECESITEMOS SEGURIDAD.

//PARA APLICAR EL MIDDLEWARE EN ALGUNA RUTA QUEDARIA ALGO ASI:

// router.get("/usuarios", check.auth, getUsers);
//En el postman se prueba poniendo dentro de la accion GET, en los headers, y en Authorization el TOKEN GENERADO

const router = Router();

// router.get ("/comidas", getComidas);
// router.put ("/comidas", putComidas);
// router.post ("/comidas", createComida)
// router.delete("/comidas", deleteComida);
router.post("/usuarios/login", login);
router.post("/usuarios/registro", registro);
router.put("/usuarios", putUser);
router.put("/usuarios/recoverpass", resetPassword);
// router.post ("/mensajes", postMensaje)
// router.get ("/mensajes", obtenerMensajes)
// router.post("/api/checkout", checkOut);
// router.post("/payment", Payment)
// router.post("/paymentDBLOCAL", postVentaMercadoPago)
// router.get("/paymentDBLOCAL", getMercadoPago);
// router.get("/ofertas", getOfertas)
// router.post("/ofertas", postOfertas)

module.exports = router;
