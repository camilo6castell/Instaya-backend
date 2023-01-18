const express = require('express')
const router = express.Router()

const parcelSchema = require('../models/parcels')

router.get('/', async (req, res) => {
    const parcels = await parcelSchema.find()
    console.log(parcels)
    res.json(parcels)
})

router.get('/:session', async (req, res) => {
    const parcel = await parcelSchema.find({cc: req.params.session})
    res.json({
        parcel
    })
})

router.post('/:session', async (req, res) => {
    const cc = req.params.session
    const { state, cityS, addressS, dayS, timeS, height, width, depth, delicate,
        nameR, ccR, cityR, addressR, tracking } = req.body
    const parcel = new parcelSchema({ cc, state, cityS, addressS, dayS, timeS, height, width, depth, delicate,
        nameR, ccR, cityR, addressR, tracking })
    await parcel.save()
    console.log(parcel)
    res.json({
        status: 'Envío guardado'
    })
})

router.put('/', async (req, res) => {
    const { _id, cc, state, cityS, addressS, dayS, timeS, height, width, depth, delicate,
            nameR, ccR, cityR, addressR, tracking } = req.body
    const newParcel = { cc, state, cityS, addressS, dayS, timeS, height, width, depth, delicate,
        nameR, ccR, cityR, addressR, tracking }
    await parcelSchema.findByIdAndUpdate(_id, newParcel)
    res.json({
        status: 'Envío actualizado'
    })
})

router.delete('/:id', async (req, res) => {
    await parcelSchema.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Envío eliminado'
    })
})

module.exports = router