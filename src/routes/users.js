const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
var bcrypt = require('bcryptjs');

dotenv.config()

const userSchema = require('../models/users')


// USERS 

router.post('/:id', async (req, res) => {
    const user = await userSchema.findOne({cc: req.params.id})
    console.log(req.body.cc)
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.json({
                statusCode: 200,
                session: req.body.cc
            })
        } else {
            res.json({
                statusCode: 404,
                status: "Verifica tu información y vuelve a intentarlo"
            })
        }
    } else {
        res.json({
            statusCode: 404,
            status: 'El usuario no existe'
        })
    }    
})

router.post('/', async (req, res) => {
    const { name, cc, password } = req.body
    const userT = await userSchema.find({cc: cc}).exec()
    if (userT.length == 0){
        const newUser = new userSchema({name, cc, password})
        await newUser.save()
        res.json({
            statusCode: 200,
            status: 'usuario guardado ;)'
        })
    } else {
    res.json({
        status: 'usuario ya existe'
    })  
    }
})

module.exports = router
