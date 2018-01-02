const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const user = require('./routes/user')
const resol = require('./routes/resolutions')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', user)
app.use('/api/rez', resol)


app.listen(port, (req, res) => {
  console.log('listeninggggg', port);
})
