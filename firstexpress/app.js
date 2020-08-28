const express = require('express')
const app = express()
const cors = require('cors')
const fs = require("fs")
const corsOptions = {
  origin: 'http://localhost:3000'

}
app.options('*', cors())
const port = 4000
var text = '{ "people" : [' +
  '{ "firstName":"Shrek" , "lastName":"Shrek" },' +
  '{ "firstName":"Fiona" , "lastName":"Shrek" } ]}';
var obj = JSON.parse(text);
app.get('/', cors(corsOptions), function (req, res) {
  res.send('Hello World!')
})
app.get('/ping', cors(corsOptions), function (req, res) {
  res.send('pong!')
})
app.get('/echo', cors(corsOptions), function (req, res) {
  res.send('response')
})
app.get('/biggest', cors(corsOptions), function (req, res) {
  var maxsize = 0;
  var mfile = "app.js"
  var files = fs.readdirSync('./');
  for (var i = 0; i < files.length; i++) {
    result = fs.statSync(files[i]);
    if (result["size"] > maxsize) {
      maxsize = result["size"];
      mfile = files[i];
    }
  }
  res.send("The biggest file is " + mfile + " with " + maxsize + " bytes");
})
app.get('/file/:name', cors(corsOptions), function (req, res) {
  res.send(fs.readFileSync("./" + req.params.name + ".txt").toString());
})
app.post('/file/:name', cors(corsOptions), function (req, res) {
  fs.writeFile(req.params.name + ".txt", "Sample Text", function (err, result) {
    if (err) console.log('messed up', err);
  })
  res.send("Done!")
})
app.put('/file/:name', cors(corsOptions), function (req, res) {
  fs.writeFile("./" +req.params.name + ".txt", "This is updated", function (err, result) {
    if (err) console.log('messed up', err);
  })
  res.send("Done!")
})
app.delete('/file/:name', cors(corsOptions), function (req, res) {
  fs.unlink("./" +req.params.name + ".txt", function (err, result) {
    if (err) console.log('messed up', err);
  })
  res.send("Done!")
})
app.get('/json', cors(corsOptions), function (req, res) {
  res.send(text)
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))