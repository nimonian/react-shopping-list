const express = require('express')
const cors = require('cors')
const names = require('./names.json')

const app = express()
app.use(cors())

app.get('/name', (req, res) => {
  const name = names[Math.floor(Math.random() * names.length)]
  res.send(name)
})

const PORT = 5000
app.listen(PORT, () => { console.log(`server listening on ${PORT}`) })
