const express = require('express')
const Learner = require('../models/learner')
const router = new express.Router()

router.post('/learners', async (req, res) => {
    const learner = new Learner(req.body)

    try {
        await learner.save()
        res.status(201).send(learner)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/learners', async (req, res) => {
    try {
        const learners = await Learner.find({})
        res.send(learners)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/learners/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const learner = await Learner.findById(_id)

        if (!learner) {
            return res.status(404).send()
        }

        res.send(learner)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router