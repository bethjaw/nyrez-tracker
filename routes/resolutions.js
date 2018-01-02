const express = require('express')
const router = express.Router()
const query = require('../db/queries')

router.post('/', (req, res) => {
  query.createRez(req.body)
    .then((newRez) => {
      res.json(newRez)
    })
})

router.get('/get', (req, res) => {
  query.getRez()
    .then((rez) => {
      res.json(rez)
    })
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  query.getRezById(id)
    .then((rez) => {
      res.json(rez)
    })
})

router.put('/update/:id', (req, res) => {
  let id = req.params.id
  let info = req.body
  query.updateRez(info, id)
    .then((rezInfo) => {
      res.json(rezInfo)
    })
})

router.delete('/delete/:id', (req, res) => {
  let id = req.params.id
  query.deleteRez(id)
    .then((deleted) => {
      res.json()
    })
})


module.exports = router
