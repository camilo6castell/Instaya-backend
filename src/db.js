const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.DB_KEY)
.then(() => console.log("***Database conectada con éxito***"))
.catch((error) => console.error(error))

module.exports = mongoose