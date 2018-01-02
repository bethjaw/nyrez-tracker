const express = require('express')
const router = express.Router()
const query = require('../db/queries')

router.post('/', (req, res) => {
  query.createUser(req.body)
    .then((user) => {
      res.json(user)
  })
})

router.get('/', (req, res) => {
  query.getUser()
  .then((user) => {
    res.json(user)
  })
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  query.getUserById(id)
    .then((user) => {
      res.json(user)
    })
})

router.put('/update/:id', (req, res) => {
  let id = req.params.id
  let info = req.body
  query.updateUser(info, id)
    .then((userInfo) => {
      res.json(userInfo)
    })
})

router.delete('/delete/:id', (req, res) => {
  let id = req.params.id
  query.deleteUser(id)
    .then((deleted) => {
      res.json()
    })
})


module.exports = router
