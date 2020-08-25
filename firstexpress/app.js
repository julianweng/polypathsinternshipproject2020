const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000'
}
const port = 4000
var text = '{ "people" : [' +
'{ "firstName":"Shrek" , "lastName":"Shrek" },' +
'{ "firstName":"Fiona" , "lastName":"Shrek" } ]}'; 
var obj = JSON.parse(text); 
app.get('/', cors(corsOptions), function (req, res) {
    res.send('Hello World!')
  })
app.get('/ping', cors(corsOptions),function (req, res) {
    res.send('pong!')
  })

  app.get('/echo',cors(corsOptions), function (req, res) {
    res.send('response')
  })

  app.get('/json', cors(corsOptions),function (req, res) {
    res.send(text)
  })
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))