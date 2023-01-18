const { Schema, mongoose } = require('mongoose')

const parcelSchema = new Schema({
    cc: {type: String, required: true},
    state: {type: String, required: true},
    cityS: {type: String, required: true},
    addressS: {type: String, required: true},
    dayS: {type: String, required: true},
    timeS: {type: String, required: true},
    height: {type: String, required: true},
    width: {type: String, required: true},
    depth: {type: String, required: true},
    delicate: {type: Boolean, required: true},
    nameR: {type: String, required: true},
    ccR: {type: String, required: true},
    cityR: {type: String, required: true},
    addressR: {type: String, required: true},
    tracking: {type: String, required: true}
})

module.exports = mongoose.model('parcelSchema', parcelSchema)
