const { Schema, mongoose } = require('mongoose')

const userSchema = new Schema({ 
    name: {type: String, required: true},
    cc: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('userSchema', userSchema)
