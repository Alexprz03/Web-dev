const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('../client/dist'))

app.get('/api/version', function getVersion (req, res) {
  res.send('0.0.2')
})

// Reste à faire ça :
// Si on arrive ici, on n'a plus de route, donc on doit afficher une 404

app.use(express.static('../client'), function (req, res, next) {
  res.status(404)
  res.sendFile(path.join(__dirname, '../client/404.html'))
})

app.listen(port, () => console.log(`Listening ! Go to http://localhost:${port}!`))
