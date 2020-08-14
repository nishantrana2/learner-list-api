const express = require('express')
const Detail = require('../models/detail')
const router = new express.Router()

router.post('/details', async (req, res) => {
    const detail = new Detail(req.body)

    try {
        await detail.save()
        res.status(201).send(detail)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/details', async (req, res) => {
    try {
        const details = await Detail.find({})
        res.send(details)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/details/:id', async (req, res) => {
    const _id = req.params.id

    try {
        
        const detail = await Detail.find({learnerId: _id})

        if (!detail) {
            return res.status(404).send()
        }

        res.send(detail)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router