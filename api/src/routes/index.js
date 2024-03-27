const { Router } = require("express");
// const {getComidas, putComidas, createComida, deleteComida} = require ("../controllers/ComidasCont");
const { getUsers, postUser, putUser } = require("../controllers/Usuarios");
// const {postMensaje, obtenerMensajes} = require ("../controllers/UserMensajesCont")
// const {checkOut} = require ("../controllers/Stripe");
// const { Payment, postVentaMercadoPago, getMercadoPago } = require('../controllers/MercadoPago');
// const {getOfertas, postOfertas} = require ("../controllers/OfertasCont");

const router = Router();

// router.get ("/comidas", getComidas);
// router.put ("/comidas", putComidas);
// router.post ("/comidas", createComida)
// router.delete("/comidas", deleteComida);
router.get("/usuarios", getUsers);
router.post("/usuarios", postUser);
router.put("/usuarios", putUser);
// router.post ("/mensajes", postMensaje)
// router.get ("/mensajes", obtenerMensajes)
// router.post("/api/checkout", checkOut);
// router.post("/payment", Payment)
// router.post("/paymentDBLOCAL", postVentaMercadoPago)
// router.get("/paymentDBLOCAL", getMercadoPago);
// router.get("/ofertas", getOfertas)
// router.post("/ofertas", postOfertas)

module.exports = router;
