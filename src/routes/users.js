const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
var bcrypt = require("bcryptjs");

dotenv.config();

const userSchema = require("../models/users");

// USERS LOGIN

router.post("/:id", async (req, res) => {
  const user = await userSchema.findOne({ cc: req.params.id });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.status(200).json({
        session: req.body.cc,
      });
    } else {
      res.status(404).json({
        message: "Verifica tu información y vuelve a intentarlo",
      });
    }
  } else {
    res.status(404).json({
      message: "El usuario no existe",
    });
  }
});

// USER SINGUP

router.post("/", async (req, res) => {
  const { name, cc, password } = req.body;
  const userT = await userSchema.find({ cc: cc }).exec();
  if (userT.length == 0) {
    const newUser = new userSchema({ name, cc, password });
    await newUser.save();
    res.json({
      statusCode: 200,
      status: "usuario guardado ;)",
    });
  } else {
    res.json({
      status: "usuario ya existe",
    });
  }
});

module.exports = router;
