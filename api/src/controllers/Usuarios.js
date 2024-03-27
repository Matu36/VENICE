const { Usuarios } = require("../db.js");
const bcrypt = require("bcrypt");

// const sendEmailWithTemplate = require("../mailer/sendEmailWithTemplate");

const getUsers = async (req, res) => {
  try {
    if (!req.body?.email || !req.body?.password)
      throw "Missing email or password";

    // Buscar usuario por email
    const requestUser = await Usuarios.findOne({
      where: {
        email: req.body.email.toLowerCase(),
      },
    });

    // Verificar si se encontró un usuario y si la contraseña proporcionada coincide con la almacenada en el base de datos
    if (
      !requestUser ||
      !(await bcrypt.compare(req.body.password, requestUser.password))
    ) {
      return res.status(403).send("Wrong email or password");
    }

    // Si el usuario tiene un rol asignado, devolver todos los usuarios
    let returnedUsers;
    if (requestUser.dataValues.role !== null)
      returnedUsers = await Usuarios.findAll();
    // Si no tiene rol asignado, devolver solo el usuario que coincida con el email
    else returnedUsers = [requestUser]; // Devolver solo el usuario encontrado

    // Si no se encuentran usuarios, devolver error 404 (Not Found)
    if (!returnedUsers || returnedUsers.length === 0)
      return res.status(404).send("Users Not Found");

    // Devolver los usuarios encontrados
    res.send(returnedUsers);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const postUser = async (req, res) => {
  try {
    if (!req.body?.email || !req.body?.password)
      throw "Missing email or password";

    // Genera un hash para la contraseña
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const [instance, created] = await Usuarios.findOrCreate({
      where: { email: req.body.email.toLowerCase() },
      defaults: {
        password: hashedPassword, // Guarda el hash en lugar de la contraseña en texto plano
      },
    });

    if (created) {
      console.log("Usuario Creado");
      // sendEmailWithTemplate(instance.email, "newUser");
    }

    res.send(instance);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const putUser = async (req, res) => {
  try {
    //ACA BUSCA POR ID, es decir, le permite modificar al usuario una vez logueado o autenticado //
    const user = await Usuarios.findByPk(req.body.id);

    if (!user) {
      return res.status(404).send("No se encontró el usuario");
    }

    // Verificar si se proporciona un nuevo email o contraseña en la solicitud
    const { email, password } = req.body;
    if (email || password) {
      // Si se proporciona un nuevo email, actualizarlo y volver a cargar el usuario
      if (email) {
        user.email = email.toLowerCase(); // Convertir a minúsculas
      }

      // Si se proporciona una nueva contraseña, actualizarla
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
      }

      // Guardar los cambios en la base de datos
      await user.save();
    } else {
      return res
        .status(400)
        .send(
          "Se debe proporcionar al menos un campo para actualizar (email o password)"
        );
    }

    // Devolver el usuario actualizado
    return res.send(await user.reload());
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

module.exports = {
  getUsers,
  postUser,
  putUser,
};
